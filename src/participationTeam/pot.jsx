// pot.jsx
// FIFA Pot Assignment Logic and Rankings

// Fetch FIFA rankings from API
export const fetchFIFARankings = async () => {
  try {
    const response = await fetch('https://api.fifa.com/api/v3/rankings');
    const data = await response.json();
    
    console.log('FIFA Rankings API Response:', data);
    
    const rankingsMap = {};
    if (data.rankings && Array.isArray(data.rankings)) {
      data.rankings.forEach((team) => {
        rankingsMap[team.country] = {
          rank: team.rank,
          points: team.points
        };
      });
    }
    
    console.log('Rankings Map:', rankingsMap);
    return rankingsMap;
  } catch (error) {
    console.error('Error fetching FIFA rankings:', error);
    return getDefaultRankings();
  }
};

// Top 130 FIFA Ranked Teams - Fallback
export const getDefaultRankings = () => {
  return {
    // Top 10
    'ARG': { rank: 1, points: 1770 },
    'BRA': { rank: 2, points: 1714 },
    'ENG': { rank: 3, points: 1720 },
    'FRA': { rank: 4, points: 1763 },
    'BEL': { rank: 5, points: 1687 },
    'NED': { rank: 6, points: 1682 },
    'ESP': { rank: 7, points: 1648 },
    'POR': { rank: 8, points: 1638 },
    'DEU': { rank: 9, points: 1631 },
    'ITA': { rank: 10, points: 1626 },
    
    // 11-20
    'URU': { rank: 11, points: 1621 },
    'DNK': { rank: 12, points: 1607 },
    'SWE': { rank: 13, points: 1599 },
    'MEX': { rank: 14, points: 1581 },
    'USA': { rank: 15, points: 1569 },
    'POL': { rank: 16, points: 1567 },
    'CAN': { rank: 17, points: 1555 },
    'CRO': { rank: 18, points: 1515 },
    'AUS': { rank: 19, points: 1535 },
    'FRA': { rank: 20, points: 1540 },
    
    // 21-30
    'SEN': { rank: 21, points: 1520 },
    'MAR': { rank: 22, points: 1505 },
    'JPN': { rank: 23, points: 1495 },
    'KOR': { rank: 24, points: 1480 },
    'COL': { rank: 25, points: 1475 },
    'UKR': { rank: 26, points: 1470 },
    'ECU': { rank: 27, points: 1460 },
    'CHI': { rank: 28, points: 1455 },
    'CZE': { rank: 29, points: 1445 },
    'GRE': { rank: 30, points: 1440 },
    
    // 31-40
    'NOR': { rank: 31, points: 1430 },
    'SVK': { rank: 32, points: 1425 },
    'ROM': { rank: 33, points: 1420 },
    'SRB': { rank: 34, points: 1415 },
    'PER': { rank: 35, points: 1405 },
    'COS': { rank: 36, points: 1400 },
    'EGY': { rank: 37, points: 1395 },
    'HUN': { rank: 38, points: 1385 },
    'AUT': { rank: 39, points: 1380 },
    'VEN': { rank: 40, points: 1375 },
    
    // 41-50
    'TUN': { rank: 41, points: 1365 },
    'RSA': { rank: 42, points: 1360 },
    'IRN': { rank: 43, points: 1355 },
    'PAR': { rank: 44, points: 1345 },
    'JOR': { rank: 45, points: 1340 },
    'UZB': { rank: 46, points: 1330 },
    'NZL': { rank: 47, points: 1325 },
    'ALG': { rank: 48, points: 1320 },
    'QAT': { rank: 49, points: 1315 },
    'KSA': { rank: 50, points: 1305 },
    
    // 51-60
    'GHA': { rank: 51, points: 1300 },
    'CIV': { rank: 52, points: 1295 },
    'BGR': { rank: 53, points: 1290 },
    'SVN': { rank: 54, points: 1285 },
    'TUR': { rank: 55, points: 1280 },
    'GEO': { rank: 56, points: 1275 },
    'BIH': { rank: 57, points: 1270 },
    'ALB': { rank: 58, points: 1265 },
    'ISL': { rank: 59, points: 1260 },
    'MNE': { rank: 60, points: 1255 },
    
    // 61-70
    'HRV': { rank: 61, points: 1250 },
    'SVK': { rank: 62, points: 1245 },
    'BLR': { rank: 63, points: 1240 },
    'SCO': { rank: 64, points: 1235 },
    'WAL': { rank: 65, points: 1230 },
    'KOS': { rank: 66, points: 1225 },
    'UZB': { rank: 67, points: 1220 },
    'FIN': { rank: 68, points: 1215 },
    'MKD': { rank: 69, points: 1210 },
    'NOR': { rank: 70, points: 1205 },
    
    // 71-80
    'CYP': { rank: 71, points: 1200 },
    'KAZ': { rank: 72, points: 1195 },
    'ARM': { rank: 73, points: 1190 },
    'AZE': { rank: 74, points: 1185 },
    'LTU': { rank: 75, points: 1180 },
    'LVA': { rank: 76, points: 1175 },
    'EST': { rank: 77, points: 1170 },
    'RUS': { rank: 78, points: 1165 },
    'IRL': { rank: 79, points: 1160 },
    'NIR': { rank: 80, points: 1155 },
    
    // 81-90
    'CMR': { rank: 81, points: 1150 },
    'BFA': { rank: 82, points: 1145 },
    'TZA': { rank: 83, points: 1140 },
    'GAB': { rank: 84, points: 1135 },
    'COG': { rank: 85, points: 1130 },
    'GMB': { rank: 86, points: 1125 },
    'KEN': { rank: 87, points: 1120 },
    'AGO': { rank: 88, points: 1115 },
    'ZIM': { rank: 89, points: 1110 },
    'MOZ': { rank: 90, points: 1105 },
    
    // 91-100
    'UGA': { rank: 91, points: 1100 },
    'BWA': { rank: 92, points: 1095 },
    'NAM': { rank: 93, points: 1090 },
    'LSO': { rank: 94, points: 1085 },
    'RWA': { rank: 95, points: 1080 },
    'DZA': { rank: 96, points: 1075 },
    'LBY': { rank: 97, points: 1070 },
    'SUD': { rank: 98, points: 1065 },
    'SOM': { rank: 99, points: 1060 },
    'COM': { rank: 100, points: 1055 },
    
    // 101-110
    'SYC': { rank: 101, points: 1050 },
    'MUS': { rank: 102, points: 1045 },
    'MAG': { rank: 103, points: 1040 },
    'MWI': { rank: 104, points: 1035 },
    'ZMB': { rank: 105, points: 1030 },
    'BWA': { rank: 106, points: 1025 },
    'LBR': { rank: 107, points: 1020 },
    'SLE': { rank: 108, points: 1015 },
    'GIN': { rank: 109, points: 1010 },
    'BEN': { rank: 110, points: 1005 },
    
    // 111-120
    'TGO': { rank: 111, points: 1000 },
    'NER': { rank: 112, points: 995 },
    'MLI': { rank: 113, points: 990 },
    'MRT': { rank: 114, points: 985 },
    'CPV': { rank: 115, points: 980 },
    'ERI': { rank: 116, points: 975 },
    'DJI': { rank: 117, points: 970 },
    'ETH': { rank: 118, points: 965 },
    'STP': { rank: 119, points: 960 },
    'CAF': { rank: 120, points: 955 },
    
    // 121-130
    'BDI': { rank: 121, points: 950 },
    'CVD': { rank: 122, points: 945 },
    'CV': { rank: 123, points: 940 },
    'UEFA1': { rank: 124, points: 935 },
    'UEFA2': { rank: 125, points: 930 },
    'UEFA3': { rank: 126, points: 925 },
    'UEFA4': { rank: 127, points: 920 },
    'UEFA5': { rank: 128, points: 915 },
    'UEFA6': { rank: 129, points: 910 },
    'UEFA7': { rank: 130, points: 905 },
    
    // Additional UEFA qualifiers
    'UEFA8': { rank: 131, points: 900 },
    'UEFA9': { rank: 132, points: 895 },
    'UEFA10': { rank: 133, points: 890 },
    'UEFA12': { rank: 134, points: 885 },
    'UEFA13': { rank: 135, points: 880 },
    'UEFA14': { rank: 136, points: 875 },
    'UEFA15': { rank: 137, points: 870 },
    'UEFA16': { rank: 138, points: 865 },
    
    // Additional CONCACAF qualifiers
    'CONCACAF1': { rank: 139, points: 860 },
    'CONCACAF2': { rank: 140, points: 855 },
    'CONCACAF3': { rank: 141, points: 850 },
    
    // Intercontinental playoff
    'IC1': { rank: 142, points: 845 },
    'IC2': { rank: 143, points: 840 }
  };
};

// Function to assign pots - 4 pots with 12 teams each
export const assignPots = (teamsWithRankings) => {
  // Separate teams by status
  const hosts = teamsWithRankings.filter(t => t.status === "host");
  const qualified = teamsWithRankings.filter(t => t.status === "qualified");
  const qualifying = teamsWithRankings.filter(t => t.status === "qualifying");

  // Sort qualified teams by FIFA ranking (ascending)
  const sortedQualified = [...qualified].sort((a, b) => {
    const rankA = a.ranking?.rank || 9999;
    const rankB = b.ranking?.rank || 9999;
    return rankA - rankB;
  });

  // Sort qualifying teams by FIFA ranking
  const sortedQualifying = [...qualifying].sort((a, b) => {
    const rankA = a.ranking?.rank || 9999;
    const rankB = b.ranking?.rank || 9999;
    return rankA - rankB;
  });

  console.log('Sorted Qualified Teams:', sortedQualified.map(t => ({ team: t.team, rank: t.ranking?.rank })));
  console.log('Sorted Qualifying Teams:', sortedQualifying.map(t => ({ team: t.team, rank: t.ranking?.rank })));

  const teamsWithPots = [];

  // ===== POT 1: 12 TEAMS =====
  // All 3 hosts + Top 9 ranked qualified teams
  hosts.forEach(team => {
    teamsWithPots.push({ ...team, pot: 1 });
  });

  for (let i = 0; i < 9 && i < sortedQualified.length; i++) {
    teamsWithPots.push({ ...sortedQualified[i], pot: 1 });
  }

  // ===== POT 2: 12 TEAMS =====
  // Qualified teams ranked 10-21
  for (let i = 9; i < 21 && i < sortedQualified.length; i++) {
    teamsWithPots.push({ ...sortedQualified[i], pot: 2 });
  }

  // ===== POT 3: 12 TEAMS =====
  // Remaining qualified teams + qualifying teams
  const pot3 = [];
  
  // Add remaining qualified teams
  for (let i = 21; i < sortedQualified.length; i++) {
    pot3.push({ ...sortedQualified[i], pot: 3 });
  }
  
  // Add first qualifying teams to fill pot 3
  let qualifyingIndex = 0;
  while (pot3.length < 12 && qualifyingIndex < sortedQualifying.length) {
    pot3.push({ ...sortedQualifying[qualifyingIndex], pot: 3 });
    qualifyingIndex++;
  }
  
  teamsWithPots.push(...pot3);

  // ===== POT 4: 12 TEAMS =====
  // Remaining qualifying teams
  for (let i = qualifyingIndex; i < sortedQualifying.length; i++) {
    teamsWithPots.push({ ...sortedQualifying[i], pot: 4 });
  }

  console.log('Pot Distribution:');
  console.log('Pot 1:', teamsWithPots.filter(t => t.pot === 1).length, 'teams');
  console.log('Pot 2:', teamsWithPots.filter(t => t.pot === 2).length, 'teams');
  console.log('Pot 3:', teamsWithPots.filter(t => t.pot === 3).length, 'teams');
  console.log('Pot 4:', teamsWithPots.filter(t => t.pot === 4).length, 'teams');

  return teamsWithPots;
};