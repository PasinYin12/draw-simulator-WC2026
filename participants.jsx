// All 48 participants in FIFA World Cup 2026
import TeamCard from './teamcard.jsx'
const allTeams = 48;
const teams = [
    // The participants in FIFA World Cup 2026
    {
        team: "United States",
        code: "USA",
        pot: 1,
        confederation: "CONCACAF",
        status: "host",
        idTeam: "001"
    },
    {
        team: "Mexico",
        code: "MEX",
        pot: 1,
        idTeam: "002",
        confederation: "CONCACAF",
        status: "host"
    },
    {
        team: "Canada",
        code: "CAN",
        pot: 1,
        confederation: "CONCACAF",
        status: "host",
        idTeam: "003"
    },
    {
        team: "Australia",
        code: "AUS",
        pot: null,
        confederation: "AFC",
        status: "qualified",
        idTeam: "004"
    },
    {
        team: "Iran",
        code: "IRN",
        pot: null,
        confederation: "AFC",
        status: "qualified",
        idTeam: "005"
    },
    {
        team: "Japan",
        code: "JPN",
        pot: null,
        confederation: "AFC",
        status: "qualified",
        idTeam: "006"
    },
    {
        team: "Jordan",
        code: "JOR",
        pot: null,
        confederation: "AFC",
        status: "qualified",
        idTeam: "007"
    },
    {
        team: "Korea Republic",
        code: "KOR",
        pot: null,
        confederation: "AFC",
        status: "qualified",
        idTeam: "008"
    },
    {
        team: "Uzbekistan",
        code: "UZB",
        pot: null,
        confederation: "AFC",
        status: "qualified",
        idTeam: "009"
    },

    {
        team: "Tunisia",
        code: "TUN",
        pot: null,
        confederation: "CAF",
        status: "qualified",
        idTeam: "010"
    },
    {
        team: "Morocco",
        code: "MAR",
        pot: null,
        confederation: "CAF",
        status: "qualified",
        idTeam: "011"
    },
    {
        team: "New Zealand",
        code: "NZL",
        pot: null,
        confederation: "OFC",
        status: "qualified",
        idTeam: "012"
    },
    {
        team: "Argentina",
        code: "ARG",
        pot: null,
        confederation: "CONMEBOL",
        status: "qualified",
        idTeam: "013"
    },
    {
        team: "Brazil",
        code: "BRA",
        pot: null,
        confederation: "CONMEBOL",
        status: "qualified",
        idTeam: "014"
    },
    {
        team: "Ecuador",
        code: "ECU",
        pot: null,
        confederation: "CONMEBOL",
        status: "qualified",
        idTeam: "015"
    },
    {
        team: "Uruguay",
        code: "URU",
        pot: null,
        confederation: "CONMEBOL",
        status: "qualified",
        idTeam: "016"
    },
    {
        team: "Colombia",
        code: "COL",
        pot: null,
        confederation: "CONMEBOL",
        status: "qualified",
        idTeam: "017"
    },
    {
        team: "Paraguay",
        code: "PAR",
        pot: null,
        confederation: "CONMEBOL",
        status: "qualified",
        idTeam: "018"
    },
    {
        team: "Asian round 4 winner 1",
        code: "AFC7",
        pot: null,
        confederation: "AFC",
        status: "qualifying",
        idTeam: "019"
    },
    {
        team: "Asian round 4 winner 2",
        code: "AFC8",
        pot: null,
        confederation: "AFC",
        status: "qualifying",
        idTeam: "020"
    },
    {
        team: "African group A winner",
        code: "CAF3",
        pot: null,
        confederation: "CAF",
        status: "qualifying",
        idTeam: "021"
    },
    {
        team: "African group B winner",
        code: "CAF4",
        pot: null,
        confederation: "CAF",
        status: "qualifying",
        idTeam: "022"
    },
    {
        team: "African group C winner",
        code: "CAF5",
        pot: null,
        confederation: "CAF",
        status: "qualifying",
        idTeam: "023"
    },
    {
        team: "African group D winner",
        code: "CAF6",
        pot: null,
        confederation: "CAF",
        status: "qualifying",
        idTeam: "024"
    },
    {
        team: "African group F winner",
        code: "CAF7",
        pot: null,
        confederation: "CAF",
        status: "qualifying",
        idTeam: "025"
    },
    {
        team: "African group G winner",
        code: "CAF8",
        pot: null,
        confederation: "CAF",
        status: "qualifying",
        idTeam: "026"
    },
    {
        team: "African group I winner",
        code: "CAF9",
        pot: null,
        confederation: "CAF",
        status: "qualifying",
        idTeam: "027"
    },
    {
        team: "Concacaf round 3 winner 1",
        code: "CONCACAF1",
        pot: null,
        confederation: "CONCACAF",
        status: "qualifying",
        idTeam: "028"
    },
    {
        team: "Concacaf round 3 winner 2",
        code: "CONCACAF2",
        pot: null,
        confederation: "CONCACAF",
        status: "qualifying",
        idTeam: "029"
    },
    {
        team: "Concacaf round 3 winner 3",
        code: "CONCACAF3",
        pot: null,
        confederation: "CONCACAF",
        status: "qualifying",
        idTeam: "030"
    },
    {
        team: "European group A winner",
        code: "UEFA1",
        pot: null,
        confederation: "UEFA",
        status: "qualifying",
        idTeam: "031"
    },
    {
        team: "European group B winner",
        code: "UEFA2",
        pot: null,
        confederation: "UEFA",
        status: "qualifying",
        idTeam: "032"
    },
    {
        team: "European group C winner",
        code: "UEFA3",
        pot: null,
        confederation: "UEFA",
        status: "qualifying",
        idTeam: "033"
    },
    {
        team: "European group D winner",
        code: "UEFA4",
        pot: null,
        confederation: "UEFA",
        status: "qualifying",
        idTeam: "034"
    },
    {
        team: "European group E winner",
        code: "UEFA5",
        pot: null,
        confederation: "UEFA",
        status: "qualifying",
        idTeam: "035"
    },
    {
        team: "European group F winner",
        code: "UEFA6",
        pot: null,
        confederation: "UEFA",
        status: "qualifying",
        idTeam: "036"
    },
    {
        team: "European group G winner",
        code: "UEFA7",
        pot: null,
        confederation: "UEFA",
        status: "qualifying",
        idTeam: "037"
    },
    {
        team: "European group H winner",
        code: "UEFA8",
        pot: null,
        confederation: "UEFA",
        status: "qualifying",
        idTeam: "038"
    },
    {
        team: "European group I winner",
        code: "UEFA9",
        pot: null,
        confederation: "UEFA",
        status: "qualifying",
        idTeam: "039"
    },
    {
        team: "European group J winner",
        code: "UEFA10",
        pot: null,
        confederation: "UEFA",
        status: "qualifying",
        idTeam: "040"
    },
    {
        team: "European group K winner",
        code: "UEFA11",
        pot: null,
        confederation: "UEFA",
        status: "qualifying",
        idTeam: "041"
    },
    {
        team: "European group L winner",
        code: "UEFA12",
        pot: null,
        confederation: "UEFA",
        status: "qualifying",
        idTeam: "042"
    },
    {
        team: "European play-off path A winner",
        code: "UEFA13",
        pot: null,
        confederation: "UEFA",
        status: "qualifying",
        idTeam: "043"
    },
    {
        team: "European play-off path B winner",
        code: "UEFA14",
        pot: null,
        confederation: "UEFA",
        status: "qualifying",
        idTeam: "044"
    },
    {
        team: "European play-off path C winner",
        code: "UEFA15",
        pot: null,
        confederation: "UEFA",
        status: "qualifying",
        idTeam: "045"
    },
    {
        team: "European play-off path D winner",
        code: "UEFA16",
        pot: null,
        confederation: "UEFA",
        status: "qualifying",
        idTeam: "046"
    },
    {
        team: "Intercontinental play-off 1 winner",
        code: "IC1",
        pot: null,
        confederation: "TBD",
        status: "qualifying",
        idTeam: "047"
    },
    {
        team: "Intercontinental play-off 2 winner",
        code: "IC2",
        pot: null,
        confederation: "TBD",
        status: "qualifying",
        idTeam: "048"
    }
]
// display participants apply TeamCard component

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  justifyContent: 'center',
  marginBottom: '2rem'
};

const Participants = () => {
  return (
    <>
      <h2>Participants</h2>
      {/* display hosts and qualified teams */}
      <h3>Hosts</h3>
      <div style={containerStyle}>
        {teams
          .filter((p) => p.status === "host")
          .map((host) => (
            <TeamCard key={host.code} team={host} />
          ))}
      </div>

      <h3>Qualified Teams</h3>
      <div style={containerStyle}>
        {teams
          .filter((p) => p.status === "qualified")
          .map((qualified) => (
            <TeamCard key={qualified.code} team={qualified} />
          ))}
      </div>
    </>
  );
};

export default Participants;
export { teams };
