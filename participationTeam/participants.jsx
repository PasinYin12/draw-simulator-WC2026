// participants.jsx
import './participants.css';
import TeamCard from './teamcard.jsx';
import { useEffect, useState } from 'react';

// All 48 participants in FIFA World Cup 2026
const allTeams = [
    {
        team: "United States",
        code: "USA",
        confederation: "CONCACAF",
        status: "host",
        idTeam: "001",
        best: "Semifinals"
    },
    {
        team: "Mexico",
        code: "MEX",
        idTeam: "002",
        confederation: "CONCACAF",
        status: "host",
        best: "2 x Quarterfinals"
    },
    {
        team: "Canada",
        code: "CAN",
        confederation: "CONCACAF",
        status: "host",
        idTeam: "003",
        best: "2 x Group Stage"
    },
    {
        team: "Australia",
        code: "AUS",
        confederation: "AFC",
        status: "qualified",
        idTeam: "004",
        best: "2 x Round of 16"
    },
    {
        team: "Iran",
        code: "IRN",
        confederation: "AFC",
        status: "qualified",
        idTeam: "005",
        best: "6 x Group Stage"
    },
    {
        team: "Japan",
        code: "JPN",
        confederation: "AFC",
        status: "qualified",
        idTeam: "006",
        best: "4 x Round of 16"
    },
    {
        team: "Jordan",
        code: "JOR",
        confederation: "AFC",
        status: "qualified",
        idTeam: "007",
        best: "Debutant"
    },
    {
        team: "Korea Republic",
        code: "KOR",
        confederation: "AFC",
        status: "qualified",
        idTeam: "008",
        best: "Semifinals"
    },
    {
        team: "Uzbekistan",
        code: "UZB",
        confederation: "AFC",
        status: "qualified",
        idTeam: "009",
        best: "Debutant"
    },
    {
        team: "Tunisia",
        code: "TUN",
        confederation: "CAF",
        status: "qualified",
        idTeam: "010",
        best: "6 x Group Stage"
    },
    {
        team: "Morocco",
        code: "MAR",
        confederation: "CAF",
        status: "qualified",
        idTeam: "011",
        best: "Semifinals"
    },
    {
        team: "New Zealand",
        code: "NZL",
        confederation: "OFC",
        status: "qualified",
        idTeam: "012",
        best: "2 x Group Stage"
    },
    {
        team: "Argentina",
        code: "ARG",
        confederation: "CONMEBOL",
        status: "qualified",
        idTeam: "013",
        best: "3 x Winners"
    },
    {
        team: "Brazil",
        code: "BRA",
        confederation: "CONMEBOL",
        status: "qualified",
        idTeam: "014",
        best: "5 x Winners"
    },
    {
        team: "Ecuador",
        code: "ECU",
        confederation: "CONMEBOL",
        status: "qualified",
        idTeam: "015",
        best: "Round of 16"
    },
    {
        team: "Uruguay",
        code: "URU",
        confederation: "CONMEBOL",
        status: "qualified",
        idTeam: "016",
        best: "2 x Winners"
    },
    {
        team: "Colombia",
        code: "COL",
        confederation: "CONMEBOL",
        status: "qualified",
        idTeam: "017",
        best: "Quarterfinals"
    },
    {
        team: "Paraguay",
        code: "PAR",
        confederation: "CONMEBOL",
        status: "qualified",
        idTeam: "018",
        best: "Quarterfinals"
    },
    {
        team: "Saudi Arabia",
        code: "KSA",
        confederation: "AFC",
        status: "qualified",
        idTeam: "019",
        best: "Round of 16"
    },
    {
        team: "Qatar",
        code: "QAT",
        confederation: "AFC",
        status: "qualified",
        idTeam: "020",
        best: "Group Stage"
    },
    {
        team: "Egypt",
        code: "EGY",
        confederation: "CAF",
        status: "qualified",
        idTeam: "021",
        best: "3 x Group Stage"
    },
    {
        team: "Senegal",
        code: "SEN",
        confederation: "CAF",
        status: "qualified",
        idTeam: "022",
        best: "Quarterfinals"
    },
    {
        team: "South Africa",
        code: "RSA",
        confederation: "CAF",
        status: "qualified",
        idTeam: "023",
        best: "3 x Group Stage"
    },
    {
        team: "Cape Verde",
        code: "CV",
        confederation: "CAF",
        status: "qualified",
        idTeam: "024",
        best: "Debutant"
    },
    {
        team: "Ivory Coast",
        code: "CIV",
        confederation: "CAF",
        status: "qualified",
        idTeam: "025",
        best: "3 x Group Stage"
    },
    {
        team: "Algeria",
        code: "ALG",
        confederation: "CAF",
        status: "qualified",
        idTeam: "026",
        best: "Round of 16"
    },
    {
        team: "Ghana",
        code: "GHA",
        confederation: "CAF",
        status: "qualified",
        idTeam: "027",
        best: "Quarterfinals"
    },
    {
        team: "Concacaf round 3 winner 1",
        code: "CONCACAF1",
        confederation: "CONCACAF",
        status: "remaining",
        idTeam: "028",
        best: "TBC"
    },
    {
        team: "Concacaf round 3 winner 2",
        code: "CONCACAF2",
        confederation: "CONCACAF",
        status: "remaining",
        idTeam: "029",
        best: "TBC"
    },
    {
        team: "Concacaf round 3 winner 3",
        code: "CONCACAF3",
        confederation: "CONCACAF",
        status: "remaining",
        idTeam: "030",
        best: "TBC"
    },
    {
        team: "European group A winner",
        code: "UEFA1",
        confederation: "UEFA",
        status: "remaining",
        idTeam: "031",
        special: "uefa_winner",
        best: "TBC"
    },
    {
        team: "European group B winner",
        code: "UEFA2",
        confederation: "UEFA",
        status: "remaining",
        idTeam: "032",
        special: "uefa_winner",
        best: "TBC"
    },
    {
        team: "European group C winner",
        code: "UEFA3",
        confederation: "UEFA",
        status: "remaining",
        idTeam: "033",
        special: "uefa_winner",
        best: "TBC"
    },
    {
        team: "European group D winner",
        code: "UEFA4",
        confederation: "UEFA",
        status: "remaining",
        idTeam: "034",
        special: "uefa_winner",
        best: "TBC"
    },
    {
        team: "European group E winner",
        code: "UEFA5",
        confederation: "UEFA",
        status: "remaining",
        idTeam: "035",
        special: "uefa_winner",
        best: "TBC"
    },
    {
        team: "European group F winner",
        code: "UEFA6",
        confederation: "UEFA",
        status: "remaining",
        idTeam: "036",
        special: "uefa_winner",
        best: "TBC"
    },
    {
        team: "European group G winner",
        code: "UEFA7",
        confederation: "UEFA",
        status: "remaining",
        idTeam: "037",
        special: "uefa_winner",
        best: "TBC"
    },
    {
        team: "European group H winner",
        code: "UEFA8",
        confederation: "UEFA",
        status: "remaining",
        idTeam: "038",
        special: "uefa_winner",
        best: "TBC"
    },
    {
        team: "European group I winner",
        code: "UEFA9",
        confederation: "UEFA",
        status: "remaining",
        idTeam: "039",
        special: "uefa_winner",
        best: "TBC"
    },
    {
        team: "European group J winner",
        code: "UEFA10",
        confederation: "UEFA",
        status: "remaining",
        idTeam: "040",
        special: "uefa_winner",
        best: "TBC"
    },
    {
        team: "England",
        code: "ENG",
        confederation: "UEFA",
        status: "qualified",
        idTeam: "041",
        special: "uefa_winner",
        best: "1 x Winner"
    },
    {
        team: "European group L winner",
        code: "UEFA12",
        confederation: "UEFA",
        status: "remaining",
        idTeam: "042",
        special: "uefa_winner",
        best: "TBC"
    },
    {
        team: "European play-off path A winner",
        code: "UEFA13",
        confederation: "UEFA",
        status: "remaining",
        idTeam: "043",
        best: "TBC"
    },
    {
        team: "European play-off path B winner",
        code: "UEFA14",
        confederation: "UEFA",
        status: "remaining",
        idTeam: "044",
        best: "TBC"
    },
    {
        team: "European play-off path C winner",
        code: "UEFA15",
        confederation: "UEFA",
        status: "remaining",
        idTeam: "045",
        best: "TBC"
    },
    {
        team: "European play-off path D winner",
        code: "UEFA16",
        confederation: "UEFA",
        status: "remaining",
        idTeam: "046",
        best: "TBC"
    },
    {
        team: "Intercontinental play-off 1 winner",
        code: "IC1",
        confederation: "TBD",
        status: "remaining",
        idTeam: "047",
        best: "TBC"
    },
    {
        team: "Intercontinental play-off 2 winner",
        code: "IC2",
        confederation: "TBD",
        status: "remaining",
        idTeam: "048",
        best: "TBC"
    }
];

// Get unique confederations
const getConfederations = () => {
  const confeds = new Set(allTeams.map(t => t.confederation));
  return Array.from(confeds).sort();
};

const Participants = () => {
  const [filteredTeams, setFilteredTeams] = useState(allTeams);
  const [activeFilter, setActiveFilter] = useState('default');

  // Filter logic
  const handleFilter = (filterType) => {
    setActiveFilter(filterType);
    
    if (filterType === 'default') {
      setFilteredTeams(allTeams);
    } else if (filterType === 'host') {
      setFilteredTeams(allTeams.filter(t => t.status === 'host'));
    } else {
      // Confederation filter
      setFilteredTeams(allTeams.filter(t => t.confederation === filterType));
    }
  };

  // Get counts for summary
  const hostCount = allTeams.filter(t => t.status === 'host').length;
  const qualifiedCount = allTeams.filter(t => t.status === 'qualified').length;
  const remainingCount = allTeams.filter(t => t.status === 'remaining').length;

  // Get teams by status from filtered teams
  const hosts = filteredTeams.filter(t => t.status === 'host');
  const qualified = filteredTeams.filter(t => t.status === 'qualified');
  const remaining = filteredTeams.filter(t => t.status === 'remaining');

  const confederations = getConfederations();

  return (
    <div className="participants-container">
      <h1 className="participants-main-title">🏆 World Cup 2026 Participants 🏆</h1>
      
      {/* Summary */}
      <div className="participants-summary">
        <div className="summary-item">
          <span className="summary-label">Total Teams:</span>
          <span className="summary-value">{allTeams.length}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Host Nations:</span>
          <span className="summary-value">{hostCount}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Qualified:</span>
          <span className="summary-value">{qualifiedCount}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">To Be Determined:</span>
          <span className="summary-value">{remainingCount}</span>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="filter-container">
        <div className="filter-group">
          <button 
            className={`filter-btn ${activeFilter === 'default' ? 'active' : ''}`}
            onClick={() => handleFilter('default')}
          >
            🌍 All Teams
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'host' ? 'active' : ''}`}
            onClick={() => handleFilter('host')}
          >
            🏠 Host Nations
          </button>
        </div>

        <div className="filter-group">
          <span className="filter-label">Confederation:</span>
          {confederations.map(confed => (
            <button
              key={confed}
              className={`filter-btn confederation-btn ${activeFilter === confed ? 'active' : ''}`}
              onClick={() => handleFilter(confed)}
            >
              {confed}
            </button>
          ))}
        </div>
      </div>

      {/* Host Nations Section */}
      {hosts.length > 0 && (
        <div className="participants-section">
          <div className="section-header hosts-header">
            <span className="section-icon">🏠</span>
            <h3 className="section-title">Host Nations</h3>
            <span className="section-badge">{hosts.length} TEAMS</span>
          </div>
          <div className="teams-grid">
            {hosts.map((team) => (
              <TeamCard key={team.code} team={team} />
            ))}
          </div>
        </div>
      )}

      {/* Qualified Teams Section */}
      {qualified.length > 0 && (
        <div className="participants-section">
          <div className="section-header qualified-header">
            <span className="section-icon">✅</span>
            <h3 className="section-title">Qualified Teams</h3>
            <span className="section-badge">{qualified.length} TEAMS</span>
          </div>
          <div className="teams-grid">
            {qualified.map((team) => (
              <TeamCard key={team.code} team={team} />
            ))}
          </div>
        </div>
      )}

      {/* Remaining Slots Section */}
      {remaining.length > 0 && (
        <div className="participants-section">
          <div className="section-header remaining-header">
            <span className="section-icon">❓</span>
            <h3 className="section-title">To Be Determined</h3>
            <span className="section-badge">{remaining.length} SLOTS</span>
          </div>
          <div className="teams-grid">
            {remaining.map((team) => (
              <TeamCard key={team.code} team={team} />
            ))}
          </div>
        </div>
      )}

      {/* No results message */}
      {filteredTeams.length === 0 && (
        <div className="no-results">
          <p>No teams found for the selected filter.</p>
        </div>
      )}
    </div>
  );
};

export default Participants;
export { allTeams as teams };