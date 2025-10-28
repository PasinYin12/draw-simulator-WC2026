// App.jsx
import { useState } from "react";
import "./App.css";
import CountdownTimer from "./countdowntimer.jsx";
import Participants from "./participationTeam/participants.jsx";
import Rules from "./rule/rules.jsx";
import Draw from "./simulation/draw.jsx";

function App() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleButtonClick = (section) => {
    setModalType(section);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType(null);
  };

  const getModalTitle = () => {
    switch (modalType) {
      case 'participants':
        return '👥 Participants';
      case 'rules':
        return '📋 Draw Rules';
      case 'draw':
        return '🎲 Draw Simulation';
      default:
        return '';
    }
  };

  const renderModalContent = () => {
    switch (modalType) {
      case 'participants':
        return <Participants />;
      case 'rules':
        return <Rules />;
      case 'draw':
        return <Draw />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1 className="main-title">World Cup 2026</h1>
          <p className="subtitle">The Draw Simulation</p>
          <div className="header-line"></div>
        </div>
      </header>

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Navigation Menu */}
      <nav className="web-menu">
        <button
          className={`menu-button participants-button ${hoveredButton === 'participants' ? 'hovered' : ''} ${showModal && modalType === 'participants' ? 'active' : ''}`}
          onClick={() => handleButtonClick('participants')}
          onMouseEnter={() => setHoveredButton('participants')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <span className="button-icon">👥</span>
          <span className="button-text">Participants</span>
        </button>

        <button
          className={`menu-button rules-button ${hoveredButton === 'rules' ? 'hovered' : ''} ${showModal && modalType === 'rules' ? 'active' : ''}`}
          onClick={() => handleButtonClick('rules')}
          onMouseEnter={() => setHoveredButton('rules')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <span className="button-icon">📋</span>
          <span className="button-text">Rules</span>
        </button>

        <button
          className={`menu-button draw-button ${hoveredButton === 'draw' ? 'hovered' : ''} ${showModal && modalType === 'draw' ? 'active' : ''}`}
          onClick={() => handleButtonClick('draw')}
          onMouseEnter={() => setHoveredButton('draw')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          DRAW!
        </button>
      </nav>

      {/* Full Modal */}
      {showModal && (
        <>
          <div className="modal-overlay" onClick={closeModal} />
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className={`modal-header ${modalType}-header`}>
              <h2 className="modal-title">{getModalTitle()}</h2>
              <button className="close-button" onClick={closeModal}>
                ✕
              </button>
            </div>
            <div className="modal-content">
              {renderModalContent()}
            </div>
            <div className="modal-footer">
              <button className="go-back-button" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </>
      )}
      <div className="closing">
        <p className="line">Developed by LongDevDo | 2026 World Cup Draw Simulation</p>
        <p className="line">Full version will coming after International Break in November 2025</p>
      </div>



    </div>


  );
}

export default App;