import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Animesh Basak | FrontEnd Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, My name is',
  name: 'Animesh Basak',
  subtitle: 'I am a FrontEnd Developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a System Engineer at Infosys Ltd. living in Hyderabad, India',
  paragraphTwo: 'I have knowledge in UI/UX Designing, UI Development and Testing',
  paragraphThree: 'In my leisure time I write and capture Poetry over Canvas ',
  resume: 'https://drive.google.com/file/d/134GdAlofCILf48_DPPKssWHZNrvGIzlD/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Netflix Clone',
    info:
      'Delved into React Web Development by making this responsive and pixel perfect clone with Firebase Deployment.',
    info2: 'Data was fetched from TMDB Movie Database API.',
    url: 'https://netflix-clone-d4851.web.app/',
    repo: 'https://github.com/animeshbasak/Netflix-Clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Slack Clone',
    info: 'Still in construction phase',
    info2: 'This section will be updated shortly',
    url: '',
    repo: 'https://github.com/animeshbasak', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'animeshsbasak@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://instagram.com/animeshbasak',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/animeshbasak/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/animeshbasak',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://instagram.com/faceoncanvas',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
