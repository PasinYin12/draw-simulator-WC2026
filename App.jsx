// App.jsx
import { useState } from "react";
import "./App.css";
import CountdownTimer from "./countdowntimer.jsx";
import Participants from "./participants.jsx";
import menustyles from "./webmenu.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [activeSection, setActiveSection] = useState(null);

  const styles = menustyles();

  return (
    <>
      
      <h1>Draw Simulation: FIFA World Cup 2026</h1>
      <CountdownTimer />

      {/* ✅ Web Menu */}
      <div className="web-menu" style={styles.webMenu}>
        <button
          style={{ ...styles.teamsButton, ...styles.teamsButton1 }}
          onClick={() =>
            setActiveSection(activeSection === "participants" ? null : "participants")
          }
        >
          Participants
        </button>

        <button
          style={{ ...styles.teamsButton, ...styles.teamsButton2 }}
          onClick={() =>
            setActiveSection(activeSection === "rules" ? null : "rules")
          }
        >
          Rules
        </button>

        <button
          style={{ ...styles.teamsButton, ...styles.teamsButton3 }}
          onClick={() =>
            setActiveSection(activeSection === "draw" ? null : "draw")
          }
        >
          Draw Simulation
        </button>

        <button
          style={{ ...styles.teamsButton, ...styles.teamsButton4 }}
          onClick={() =>
            setActiveSection(activeSection === "groups" ? null : "groups")
          }
        >
          Groups
        </button>
      </div>

      {/* ✅ Section content appears below buttons */}
      <div style={{ padding: "1rem" }}>
        {activeSection === "participants" && <Participants />}
        {activeSection === "rules" && <h2>Rules Section Coming Soon</h2>}
        {activeSection === "draw" && <h2>Draw Simulation Coming Soon</h2>}
        {activeSection === "groups" && <h2>Groups Section Coming Soon</h2>}
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
