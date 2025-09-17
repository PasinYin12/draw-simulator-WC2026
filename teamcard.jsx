// teamcard.jsx
const TeamCard = ({ team }) => {
  const styles = {
    teamCard: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "250px",
      minHeight: "100px",
      maxHeight: "180px",
      border: "1px solid black",
      padding: "1rem",
      backgroundColor: "#eee7e7",
      borderRadius: "5px",
      boxSizing: "border-box",
    },
    teamHeader: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      marginBottom: "0.5rem",
      width: "100%",
    },
    teamFlag: {
      width: "40px",
      height: "30px",
      objectFit: "cover",
      border: "1px solid #ddd",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      flexShrink: 0,
    },
    teamName: {
      margin: 0,
      fontSize: "1.2rem",
      fontFamily: "sans-serif",
      flex: 1,
    },
    teamInfo: {
      margin: "0.2rem 0",
    },
  };

  return (
    <div style={styles.teamCard}>
      <div style={styles.teamHeader}>
        <img
          src={`https://api.fifa.com/api/v3/picture/flags-sq-4/${team.code}`}
          alt={`${team.team} flag`}
          style={styles.teamFlag}
          onError={(e) => {
            // fallback to another source if FIFA flag not found
            e.target.src = `https://flagsapi.com/${team.code}/flat/64.png`;
          }}
        />
        <h4 className="team-name" style={styles.teamName}>{team.team}</h4>
      </div>
      <p className="team-info" style={styles.teamInfo}>Initial: {team.code}</p>
      <p className="team-info" style={styles.teamInfo}>Confederation: {team.confederation}</p>
      <p className="team-info" style={styles.teamInfo}>Status: {team.status}</p>
    </div>
  );
};

export default TeamCard;
