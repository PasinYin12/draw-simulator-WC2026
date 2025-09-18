import { teams } from "./participants";
import zigzag from './assets/zigzag.png';
import florida from './assets/florida.png';
import starsss from './assets/starsss.png';
import maples from './assets/maples.png';
const menustyles = () => ({
    webMenu: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '1rem',
        borderBottom: '1px solid #ccc'
    },
    button: {
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        fontSize: '1rem'
    },
    buttonHover: {
        backgroundColor: '#770aaaff'
    },
    buttonActive: {
        backgroundColor: '#ee0f77ff'
    },
    teamsButton: {
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.1s',
        margin: '0 10px',
        width: '180px',
        height: '80px',
        fontSize: '1.4rem',
        borderRadius: '5px',
        border: 'none',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        color: '#fff',
        textShadow: `
                    -1px -1px 0 #000,
                    1px -1px 0 #000,
                    -1px  1px 0 #000,
                    1px  1px 0 #000
   `,
    },
    teamsButton1: {    /* Show participant button decoration */
        backgroundImage: `url(${zigzag})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

    },
    teamsButton2: {    /* Rules button decoration */
        backgroundImage: `url(${florida})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

    },
    teamsButton3: {    /* Draw Simulation button decoration */
        backgroundImage: `url(${starsss})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

    },
    teamsButton4: {    /* Groups button decoration */
        backgroundImage: `url(${maples})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

    },
    teamsButtonHover: {
        backgroundColor: '#f51432cc',
        border: '2px solid #fff',
    },
    teamsButtonActive: {
        backgroundColor: '#770aaaff'
    },
});

export default menustyles;

