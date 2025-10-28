// draw.jsx
import React, { useState, useEffect } from "react";
import { teams } from "../participationTeam/participants";
import "./draw.css";

// Import confederation logos
import afc from "../assets/confed/afc.png";
import caf from "../assets/confed/caf.png";
import concacaf from "../assets/confed/concacaf.png";
import conmebol from "../assets/confed/conmebol.png";
import uefa from "../assets/confed/uefa.png";
import fifa from "../assets/confed/fifa.png";

const groupKeys = "ABCDEFGHIJKL".split("");

// Initialize groups with hosts
const makeInitialGroups = () => {
  const groups = groupKeys.reduce((acc, g) => {
    acc[g] = [];
    return acc;
  }, {});
  groups["A"].push({ team: "Mexico", code: "MEX", confederation: "CONCACAF", status: "host" });
  groups["B"].push({ team: "Canada", code: "CAN", confederation: "CONCACAF", status: "host" });
  groups["C"].push({ team: "United States", code: "USA", confederation: "CONCACAF", status: "host" });
  return groups;
};

// Confederation logos
const confedLogos = {
  UEFA: uefa,
  CONMEBOL: conmebol,
  CONCACAF: concacaf,
  AFC: afc,
  CAF: caf,
  OFC: fifa,
  TBD: fifa
};

const confedTooltip = {
  UEFA: "UEFA Qualifying Team",
  CONMEBOL: "CONMEBOL Qualifying Team",
  CONCACAF: "CONCACAF Qualifying Team",
  AFC: "AFC Qualifying Team",
  CAF: "CAF Qualifying Team",
  OFC: "OFC Qualifying Team",
  TBD: "Intercontinental/Unknown Qualifying Team"
};

// Enhanced restriction logic for UEFA teams
function canPlaceTeam(group, team, groups) {
  const confed = team.confederation;
  const groupTeams = groups[group];

  // Get UEFA teams in the group
  const uefarTeams = groupTeams.filter((t) => t.confederation === "UEFA");
  const hasUEFAWinner = groupTeams.some((t) => t.special === "uefa_winner");
  const hasPlayoffWinner = groupTeams.some((t) => t.code.includes("UEFA") && t.code.match(/UEFA1[3-6]/));

  // If this is a UEFA winner
  if (team.special === "uefa_winner") {
    // Cannot place another UEFA winner if one already exists
    if (hasUEFAWinner) return false;
    // Cannot place if UEFA playoff winner already exists (to avoid 2 UEFA teams that are both qualifiers)
    if (hasPlayoffWinner) return false;
    // Cannot place if already 2 UEFA teams
    if (uefarTeams.length >= 2) return false;
    return true;
  }

  // If this is a UEFA playoff winner (UEFA13-16)
  if (confed === "UEFA" && team.code.match(/UEFA1[3-6]/)) {
    // Cannot place if UEFA winner already exists (to avoid 2 UEFA winners)
    if (hasUEFAWinner) return false;
    // Cannot place if already 2 UEFA teams
    if (uefarTeams.length >= 2) return false;
    return true;
  }

  // If UEFA team (regular UEFA qualifier)
  if (confed === "UEFA") {
    // Cannot place if UEFA winner exists (only 1 UEFA allowed if one is winner)
    if (hasUEFAWinner) return false;
    // Cannot place if already 2 UEFA teams
    if (uefarTeams.length >= 2) return false;
    return true;
  }

  // Other confederations: max 1 per group
  const confedCount = groupTeams.filter((t) => t.confederation === confed && t.status !== "host").length;
  return confedCount < 1;
}

// Determine which group should receive the next team
function getNextGroupForSingleDraw(groups) {
  // Count non-host teams in each group
  const teamsPerGroup = groupKeys.map((g) => {
    const nonHostTeams = groups[g].filter((t) => t.status !== "host").length;
    return nonHostTeams;
  });

  const minTeams = Math.min(...teamsPerGroup);

  // Determine group order based on number of teams already drawn
  let orderedGroups;

  if (minTeams === 0) {
    // First round: D-L first, then A-C
    orderedGroups = [...groupKeys.slice(3), ...groupKeys.slice(0, 3)];
  } else if (minTeams === 1) {
    // Second round: A-C first (to get to 2 teams each)
    orderedGroups = [...groupKeys.slice(0, 3), ...groupKeys.slice(3)];
  } else if (minTeams === 2) {
    // Third round: A-C first (to get to 3 teams each)
    orderedGroups = [...groupKeys.slice(0, 3), ...groupKeys.slice(3)];
  } else {
    // Fourth round: A-C first (to get to 4 teams each)
    orderedGroups = [...groupKeys.slice(0, 3), ...groupKeys.slice(3)];
  }

  // Find first group that needs teams
  for (let g of orderedGroups) {
    const nonHostTeams = groups[g].filter((t) => t.status !== "host").length;
    if (nonHostTeams === minTeams && groups[g].length < 4) {
      return g;
    }
  }

  // Fallback: find first group not full
  return groupKeys.find((g) => groups[g].length < 4);
}

// Render flag or confederation logo
function renderFlag(team) {
  if (team.status === "remaining" || team.status === "qualifying") {
    const logo = confedLogos[team.confederation] || confedLogos.TBD;
    const tip = confedTooltip[team.confederation] || confedTooltip.TBD;
    return <img src={logo} alt={`${team.confederation} logo`} className="flag-icon" title={tip} />;
  }

  return (
    <img
      src={`https://api.fifa.com/api/v3/picture/flags-sq-4/${team.code}`}
      alt={`${team.team} flag`}
      className="flag-icon"
      title={team.team}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = `https://flagsapi.com/${team.code}/flat/64.png`;
      }}
    />
  );
}

export default function Draw() {
  const [groups, setGroups] = useState(makeInitialGroups());
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [drawnTeams, setDrawnTeams] = useState(new Set());
  const [lastDrawnTeam, setLastDrawnTeam] = useState(null);
  const [autoDrawing, setAutoDrawing] = useState(false);

  const pots = {
    1: teams.filter((t) => t.status !== "host"),
    2: teams.filter((t) => t.status !== "host"),
    3: teams.filter((t) => t.status !== "host"),
    4: teams.filter((t) => t.status !== "host")
  };

  // Get remaining teams to draw
  const getRemainingTeams = () => {
    const allTeams = teams.filter((t) => t.status !== "host");
    return allTeams.filter((t) => !drawnTeams.has(t.idTeam));
  };

  // Auto-draw functionality
  useEffect(() => {
    if (!autoDrawing || loading) return;

    const remaining = getRemainingTeams();
    if (remaining.length === 0) {
      setAutoDrawing(false);
      return;
    }

    const timer = setTimeout(() => {
      executeDrawSingle();
    }, 1000); // Draw every 1 second

    return () => clearTimeout(timer);
  }, [autoDrawing, loading, drawnTeams]);

  // Execute single draw
  const executeDrawSingle = () => {
    const remaining = getRemainingTeams();

    if (remaining.length === 0) {
      setAutoDrawing(false);
      return;
    }

    // Get the next group in sequence
    const targetGroup = getNextGroupForSingleDraw(groups);

    if (!targetGroup) {
      setAutoDrawing(false);
      return;
    }

    setLoading(true);
    setProgress(0);

    let count = 0;
    const interval = setInterval(() => {
      count += 5;
      if (count >= 100) {
        clearInterval(interval);
        setProgress(100);

        // Shuffle remaining teams and try to place one in the target group
        const shuffled = [...remaining].sort(() => Math.random() - 0.5);
        let placed = false;

        for (let team of shuffled) {
          if (canPlaceTeam(targetGroup, team, groups)) {
            const newGroups = { ...groups };
            newGroups[targetGroup] = [...groups[targetGroup], team];
            setGroups(newGroups);

            const newDrawnTeams = new Set(drawnTeams);
            newDrawnTeams.add(team.idTeam);
            setDrawnTeams(newDrawnTeams);
            setLastDrawnTeam({ team: team.team, group: targetGroup });

            placed = true;
            break;
          }
        }

        if (!placed) {
          console.warn(`Could not find valid team for Group ${targetGroup}`);
          // Try to place in any available group
          const availableGroups = groupKeys.filter((g) => groups[g].length < 4);
          let foundAlternative = false;

          for (let team of shuffled) {
            for (let altGroup of availableGroups) {
              if (canPlaceTeam(altGroup, team, groups)) {
                const newGroups = { ...groups };
                newGroups[altGroup] = [...groups[altGroup], team];
                setGroups(newGroups);

                const newDrawnTeams = new Set(drawnTeams);
                newDrawnTeams.add(team.idTeam);
                setDrawnTeams(newDrawnTeams);
                setLastDrawnTeam({ team: team.team, group: altGroup });

                foundAlternative = true;
                break;
              }
            }
            if (foundAlternative) break;
          }

          if (!foundAlternative) {
            console.error("Could not find valid placement for any remaining team!");
            setAutoDrawing(false);
          }
        }

        setLoading(false);
      } else {
        setProgress(count);
      }
    }, 20);
  };

  // Manual single draw (without auto mode)
  const handleDrawSingle = () => {
    executeDrawSingle();
  };

  // Start auto-draw
  const handleStartAutoDraw = () => {
    setAutoDrawing(true);
  };

  // Stop auto-draw
  const handleStopAutoDraw = () => {
    setAutoDrawing(false);
  };

  // Draw all teams at once
  const handleDrawAll = () => {
    setLoading(true);
    setProgress(0);

    let count = 0;
    const interval = setInterval(() => {
      count += 2;
      if (count >= 100) {
        clearInterval(interval);
        setProgress(100);

        const newGroups = makeInitialGroups();
        const allTeams = teams.filter((t) => t.status !== "host");
        const shuffled = allTeams.sort(() => Math.random() - 0.5);

        for (let team of shuffled) {
          let placed = false;
          for (let g of groupKeys) {
            if (newGroups[g].length < 4 && canPlaceTeam(g, team, newGroups)) {
              newGroups[g].push(team);
              placed = true;
              break;
            }
          }
          // If no valid group found, try to force place
          if (!placed) {
            for (let g of groupKeys) {
              if (newGroups[g].length < 4) {
                newGroups[g].push({ ...team, forced: true });
                break;
              }
            }
          }
        }

        setGroups(newGroups);
        const teamIds = new Set(allTeams.map((t) => t.idTeam));
        setDrawnTeams(teamIds);
        setLastDrawnTeam(null);
        setAutoDrawing(false);
        setLoading(false);
      } else {
        setProgress(count);
      }
    }, 50);
  };

  const handleReset = () => {
    setGroups(makeInitialGroups());
    setLoading(false);
    setProgress(0);
    setDrawnTeams(new Set());
    setLastDrawnTeam(null);
    setAutoDrawing(false);
  };

  const remainingTeams = getRemainingTeams();
  const isAllDrawn = remainingTeams.length === 0;
  const hasStartedDrawing = drawnTeams.size > 0;

  return (
    <div className="draw-container">
      <h1>🎲 World Cup 2026 Draw Simulation</h1>

      {!hasStartedDrawing && !loading && (
        <>
          <div className="button-group">
            <button className="draw-btn" onClick={handleDrawAll}>
              Draw All Teams
            </button>
            <button className="draw-btn draw-single-btn" onClick={handleDrawSingle}>
              Draw Single Team
            </button>
            <button className="draw-btn draw-auto-btn" onClick={handleStartAutoDraw}>
              Auto Draw All
            </button>
          </div>
          <div className="participants-preview">
            {teams.map((t) => (
              <div key={t.idTeam} className="participant-item">
                {renderFlag(t)}
                <span>{t.team}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {loading && (
        <div className="loading-bar">
          <div className="loading-fill" style={{ width: `${progress}%` }} />
          <span className="loading-text">{progress}%</span>
        </div>
      )}

      {hasStartedDrawing && (
        <>
          <div className="remaining-count">
            Remaining Teams: <strong>{remainingTeams.length}</strong>
            {lastDrawnTeam && (
              <div className="last-drawn-info">
                Last drawn: <strong>{lastDrawnTeam.team}</strong> → Group <strong>{lastDrawnTeam.group}</strong>
              </div>
            )}
          </div>

          {!isAllDrawn && (
            <div className="button-group">
              <button 
                className="draw-btn draw-single-btn" 
                onClick={handleDrawSingle} 
                disabled={loading || autoDrawing}
              >
                Draw Single Team
              </button>
              <button 
                className={`draw-btn ${autoDrawing ? 'stop-btn' : 'draw-auto-btn'}`}
                onClick={autoDrawing ? handleStopAutoDraw : handleStartAutoDraw}
                disabled={loading}
              >
                {autoDrawing ? '⏸ Stop Auto Draw' : '▶ Auto Draw'}
              </button>
              <button 
                className="draw-btn" 
                onClick={handleDrawAll} 
                disabled={loading || autoDrawing}
              >
                Draw All Remaining
              </button>
            </div>
          )}

          <div className="groups-grid">
            {groupKeys.map((g) => (
              <div key={g} className="group-card">
                <h3>Group {g}</h3>
                <table>
                  <tbody>
                    {[0, 1, 2, 3].map((i) => (
                      <tr key={i}>
                        <td>
                          {groups[g][i] ? (
                            <div className={groups[g][i].forced ? "team-cell forced-placement" : "team-cell"}>
                              {renderFlag(groups[g][i])} {groups[g][i].team}
                            </div>
                          ) : (
                            "—"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          {isAllDrawn && (
            <button className="reset-btn" onClick={handleReset}>
              Reset Draw
            </button>
          )}
        </>
      )}
    </div>
  );
}