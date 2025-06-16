import HTML from './assets/certificatesImages/HTML.jpg';
import FreeCodeCamp from './assets/certificatesImages/FreeCodeCamp.png';
import JavaScript from './assets/certificatesImages/JavaScript.jpg';
import Python from './assets/certificatesImages/Python.jpg';

const CertificatesData = [
    {
        id: 1,
        platform: 'FreeCodeCamp',
        skills: ['HTML, CSS'],
        image: FreeCodeCamp
    },

    {
        id: 2,
        platform: 'Udemy',
        skills: ['HTML, CSS'],
        image: HTML
    },

    {
        id: 3,
        platform: 'Udemy',
        skills: ['JavaScript'],
        image: JavaScript
    },

    {
        id: 4,
        platform: 'Udemy',
        skills: ['Python'],
        image: Python
    }
]

export default CertificatesData;