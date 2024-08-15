// src/App.js
import React, { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
// import "react-resizable/css/styles.css";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const addCard = () => {
    setCards([
      ...cards,
      { id: cards.length + 1, text: "This is a sample card text", x: 0, y: 0 }
    ]);
  };

  const openPopup = (text) => {
    setPopupContent(text);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupContent("");
  };

  return (
    <div className="App">
      <button onClick={addCard}>Add Card</button>
      <div className="canvas">
        {cards.map((card, index) => (
          <Draggable key={index} defaultPosition={{ x: card.x, y: card.y }}>
            <ResizableBox width={200} height={100} minConstraints={[100, 50]}>
              <div className="card">
                <p>
                  {card.text.slice(0, 10)}...
                  <button onClick={() => openPopup(card.text)}>Show More</button>
                </p>
              </div>
            </ResizableBox>
          </Draggable>
        ))}
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupContent}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
