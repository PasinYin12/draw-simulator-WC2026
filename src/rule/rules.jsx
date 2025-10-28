import React from "react";
import "./rules.css";

const Rules = () => {
  return (
    <div className="rules-container">
      <header className="rules-header">
        <h1>🎲 Drawing Method</h1>
        <p>Rules and Restrictions for the Group Draw</p>
      </header>

      <section className="rules-section">
        <h2>🏗️ Group Setup</h2>
        <ul>
          <li>12 groups (<strong>A–L</strong>), each with <strong>4 teams</strong>.</li>
          <li>Hosts are pre-assigned:</li>
          <ul className="nested-list">
            <li>🇲🇽 <strong>Mexico → Group A</strong></li>
            <li>🇨🇦 <strong>Canada → Group B</strong></li>
            <li>🇺🇸 <strong>USA → Group C</strong></li>
          </ul>
        </ul>
      </section>

      <section className="rules-section">
        <h2>🧮 Pots & Drawing Process</h2>
        <ul>
          <li>Teams are divided into <strong>4 pots</strong> based on seeding.</li>
          <li><strong>Pot 4</strong> also includes teams with <code>pot: null</code>.</li>
          <li>All teams are <strong>shuffled</strong> within their pots before the draw.</li>
          <li>
            Each team is placed into the <strong>first group</strong> that satisfies all
            restrictions.
          </li>
          <li>
            If no valid group is found, the team is <strong className="force">force-placed</strong> into
            the first available slot (<span className="highlight-red">visually marked</span>).
          </li>
        </ul>
      </section>

      <section className="rules-section">
        <h2>⚖️ Rules & Restrictions</h2>
        <ul>
          <li><strong>UEFA:</strong> maximum of <strong>2 teams per group</strong>.</li>
          <li>All other confederations: <strong>max 1 team per group</strong>.</li>
          <li>
            <strong>Special UEFA Winners Rule:</strong> only one <em>UEFA qualifying
            round winner</em> per group.
          </li>
        </ul>
      </section>

      <section className="rules-section">
        <h2>✅ Group Completion</h2>
        <ul>
          <li>Each group must have exactly <strong>4 teams</strong> at the end.</li>
          <li>
            If restrictions block valid placement, the team is still added
            (force-placement) and <span className="highlight-red">highlighted with a red border</span>.
          </li>
        </ul>
      </section>

      <section className="rules-section">
        <h2>🎮 Controls</h2>
        <ul>
          <li>
            <strong>Draw All Teams</strong> — Runs the full draw automatically with a
            loading bar animation.
          </li>
          <li>
            <strong>Reset Draw</strong> — Clears all groups and restarts the process.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Rules;
