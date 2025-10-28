// teamcard.jsx
import { useState } from 'react';

// Import confederation logos
import afc from "../assets/confed/afc.png";
import caf from "../assets/confed/caf.png";
import concacaf from "../assets/confed/concacaf.png";
import conmebol from "../assets/confed/conmebol.png";
import uefa from "../assets/confed/uefa.png";
import fifa from "../assets/confed/fifa.png";

// Confederation logos mapping
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

const TeamCard = ({ team }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusColor = (status) => {
    switch(status) {
      case 'host':
        return { 
          bg: 'linear-gradient(135deg, #00CBA6 0%, #0099D6 100%)',
          border: '#00CBA6',
          badge: '#00CBA6',
          light: '#E8F9F6'
        };
      case 'qualified':
        return { 
          bg: 'linear-gradient(135deg, #0099D6 0%, #FF6B00 100%)',
          border: '#0099D6',
          badge: '#0099D6',
          light: '#E8F4FF'
        };
      case 'remaining':
        return { 
          bg: 'linear-gradient(135deg, #9E9E9E 0%, #757575 100%)',
          border: '#9E9E9E',
          badge: '#757575',
          light: '#F5F5F5'
        };
      default:
        return { 
          bg: 'linear-gradient(135deg, #E0E0E0 0%, #BDBDBD 100%)',
          border: '#BDBDBD',
          badge: '#757575',
          light: '#FAFAFA'
        };
    }
  };

  // Get performance color and emoji based on achievement
  const getPerformanceColor = (best) => {
    if (!best) return { color: '#999', emoji: '📊', bg: '#f0f0f0' };
    
    const lower = best.toLowerCase();
    
    if (lower.includes('winner') && lower.includes('5')) return { color: '#FFD700', emoji: '👑', bg: '#FFF8E7' };
    if (lower.includes('winner') && lower.includes('3')) return { color: '#FFD700', emoji: '👑', bg: '#FFF8E7' };
    if (lower.includes('winner') && lower.includes('2')) return { color: '#FFD700', emoji: '👑', bg: '#FFF8E7' };
    if (lower.includes('winner')) return { color: '#FFD700', emoji: '👑', bg: '#FFF8E7' };
    if (lower.includes('semifinal')) return { color: '#FF6B00', emoji: '🥉', bg: '#FFF4E8' };
    if (lower.includes('quarterfinal')) return { color: '#0099D6', emoji: '⭐', bg: '#E8F4FF' };
    if (lower.includes('round of 16')) return { color: '#00CBA6', emoji: '✨', bg: '#E8F9F6' };
    if (lower.includes('group stage')) return { color: '#9E9E9E', emoji: '📍', bg: '#F5F5F5' };
    if (lower.includes('debutant')) return { color: '#764ba2', emoji: '🆕', bg: '#F3E5F5' };
    if (lower.includes('tbc')) return { color: '#757575', emoji: '❓', bg: '#FAFAFA' };
    
    return { color: '#999', emoji: '📊', bg: '#f0f0f0' };
  };

  // Format performance display
  const formatPerformance = (best) => {
    if (!best) return { display: 'TBD', emoji: '❓' };
    return { display: best, emoji: getPerformanceColor(best).emoji };
  };

  // Render flag or confederation logo
  const renderFlagOrConfed = (team) => {
    // For remaining/qualifying teams, show confederation logo
    if (team.status === "remaining" || team.status === "qualifying") {
      const logo = confedLogos[team.confederation] || confedLogos.TBD;
      const tip = confedTooltip[team.confederation] || confedTooltip.TBD;
      return (
        <img 
          src={logo} 
          alt={`${team.confederation} logo`} 
          style={styles.teamFlag}
          title={tip}
        />
      );
    }

    // For host/qualified teams, show country flag
    return (
      <img
        src={`https://api.fifa.com/api/v3/picture/flags-sq-4/${team.code}`}
        alt={`${team.team} flag`}
        style={styles.teamFlag}
        title={team.team}
        onError={(e) => {
          e.target.src = `https://flagsapi.com/${team.code}/flat/64.png`;
        }}
      />
    );
  };

  const statusColors = getStatusColor(team.status);
  const performanceData = formatPerformance(team.best);
  const performanceColor = getPerformanceColor(team.best);

  const styles = {
    teamCard: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: "100%",
      minHeight: "240px",
      background: isHovered ? statusColors.light : 'white',
      border: `3px solid ${isHovered ? statusColors.border : '#e0e0e0'}`,
      borderRadius: "12px",
      padding: "1rem",
      boxSizing: "border-box",
      boxShadow: isHovered 
        ? `0 12px 32px ${statusColors.border}40` 
        : '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },
    statusBar: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '5px',
      background: statusColors.bg,
      borderRadius: '12px 12px 0 0'
    },
    teamHeader: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.6rem",
      marginBottom: "0.8rem",
      width: "100%",
      paddingTop: '0.5rem',
      textAlign: 'center'
    },
    teamFlag: {
      width: "65px",
      height: "43px",
      objectFit: "cover",
      border: "2px solid #e0e0e0",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      borderRadius: '6px',
      transition: 'all 0.3s ease',
      transform: isHovered ? 'scale(1.15)' : 'scale(1)'
    },
    teamName: {
      margin: 0,
      fontSize: "0.95rem",
      fontFamily: "'Segoe UI', sans-serif",
      fontWeight: '700',
      color: '#333',
      lineHeight: '1.2',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      transition: 'color 0.3s ease'
    },
    infoSection: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      paddingBottom: '0.5rem',
      borderBottom: '1px solid #e0e0e0'
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      fontSize: '0.8rem',
      justifyContent: 'center'
    },
    confederationBadge: {
      display: 'inline-block',
      padding: '0.3rem 0.6rem',
      borderRadius: '10px',
      fontSize: '0.75rem',
      fontWeight: '600',
      background: '#f0f0f0',
      color: '#666',
      textTransform: 'uppercase',
      letterSpacing: '0.3px',
      transition: 'all 0.3s ease'
    },
    statusBadge: {
      display: 'inline-block',
      padding: '0.3rem 0.6rem',
      borderRadius: '10px',
      fontSize: '0.75rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      background: statusColors.badge,
      color: 'white',
      letterSpacing: '0.3px',
      transition: 'all 0.3s ease'
    },
    performanceContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      paddingTop: '0.6rem',
      marginTop: 'auto'
    },
    performanceLabel: {
      fontWeight: '600',
      color: '#666',
      fontSize: '0.7rem',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    performanceBadge: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.4rem',
      padding: '0.5rem 0.8rem',
      borderRadius: '10px',
      background: performanceColor.bg,
      border: `2px solid ${performanceColor.color}`,
      fontWeight: '700',
      fontSize: '0.8rem',
      color: performanceColor.color,
      transition: 'all 0.3s ease',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      boxShadow: `0 2px 8px ${performanceColor.color}30`,
      minHeight: '32px',
      textAlign: 'center',
      whiteSpace: 'normal',
      wordBreak: 'break-word',
      maxWidth: '100%'
    },
    emoji: {
      fontSize: '1rem',
      display: 'inline-block',
      minWidth: '20px'
    }
  };

  return (
    <div 
      style={styles.teamCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.statusBar}></div>
      
      <div style={styles.teamHeader}>
        {renderFlagOrConfed(team)}
        <h4 style={styles.teamName}>{team.team}</h4>
      </div>
      
      <div style={styles.infoSection}>
        <div style={styles.infoItem}>
          <span style={styles.confederationBadge}>{team.confederation}</span>
        </div>
        <div style={styles.infoItem}>
          <span style={styles.statusBadge}>{team.status}</span>
        </div>
      </div>

      {/* Best Performance Section - ONLY PERFORMANCE, NO RANKING */}
      <div style={styles.performanceContainer}>
        <span style={styles.performanceLabel}>Best Performance</span>
        <div style={styles.performanceBadge}>
          <span style={styles.emoji}>{performanceColor.emoji}</span>
          <span>{performanceData.display}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;