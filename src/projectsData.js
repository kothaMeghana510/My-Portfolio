import StoryStack from './assets/StoryStack.png';
import ReadyToPack from './assets/ReadyToPack.png';
import MedicalShop from './assets/BusinessWebsite.png';
import DiceChallenge from './assets/DiceChallenge.png';
import GuessNumber from './assets/GuessNumber.png';

import StoryStackVedio from './assets/vedios/StoryStackVedio.mp4';
import ReadyToPackVedio from './assets/vedios/ReadyToPackVedio.mp4';
import MedicalShopVedio from './assets/vedios/MedicalShopVedio.mp4';
import DiceChallengeVedio from './assets/vedios/DiceChallengeVedio.mp4';
import GuessNumberVedio from './assets/vedios/GuessNumberVedio.mp4';




const projects = [
    {
        id: 1,
        title: 'Story Stack [ Version - 2 ]',
        // description: 'A personalized book explorer powered by Google Books API. Users can search books, discover more from some same author, rate books, manage them to personal library and favarites- all stored locally using local storage.',
        description: 'A personalized book explorer (v2) powered by the Google Books API. This version brings a smoother SPA experience with React Router and Context API. Users can now search and explore books, view author-wise collections, rate books, and manage a personal library and favorites — all saved locally. New features include adding start/end dates, writing personal notes for each book, and even uploading their own custom books.',
        techStack : ["HTML", "CSS", "JavaScript", "React", "API"],
        image: StoryStack,
        vedio: StoryStackVedio,
        githubLink: 'https://kothameghana510.github.io/Story-Stack/'
    },

    {
        id: 2,
        title: 'Ready To Pack',
        description: 'A responsive travel checklist application using React with a modular, component-based architecture. Leveraged hooks for efficient state management and implemented dynamic features like adding, deleting, and tracking items. Includes a real-time summary display for total vs. packed items, enhancing user convenience and engagement.',
        techStack : ["HTML", "CSS", "JavaScript", "React"],
        image: ReadyToPack,
        vedio: ReadyToPackVedio,
        githubLink: ' https://kothameghana510.github.io/Ready-to-Pack/'
    },

    {
        id: 3,
        title: 'Medical Shop Website',
        description: 'Developed a responsive and user-friendly static website for a medical shop, optimized for seamless performance across devices. Key features include lazy image loading for faster load times, a dynamic testimonial slider to build trust, and an embedded Google Maps location to enhance accessibility and user convenience',
        techStack : ["HTML", "CSS", "JavaScript"],
        image: MedicalShop,
        vedio: MedicalShopVedio,
        githubLink: ' https://kothameghana510.github.io/Praveena-Medicals-Tenali/'
    },

    {
        id: 4,
        title: 'Dice Challenge Game',
        description: ' A JavaScript-based game using random number generation (RNG), conditional logic, and real-time UI updates, improving interactivity and user experience. Also Integrated sound effects to enrich the overall gameplay',
        techStack : ["HTML", "CSS", "JavaScript"],
        image: DiceChallenge,
        vedio: DiceChallengeVedio,
        githubLink: ' https://kothameghana510.github.io/Dice-Challenge-game/'
    },

    {
        id: 5,
        title: 'Guess My Number',
        description: 'An interactive JavaScript game using DOM manipulation, event listeners	and state management, ensuring smooth user interactions and real-time updates',
        techStack : ["HTML", "CSS", "JavaScript"],
        image: GuessNumber,
        vedio: GuessNumberVedio,
        githubLink: ' https://kothameghana510.github.io/Guess-Number-Game/'
    },
]

export default projects;