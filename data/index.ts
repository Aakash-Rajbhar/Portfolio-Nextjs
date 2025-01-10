export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Services', link: '#services' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently pursuing a degree in Informatin Technology.',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Price Lytic: Price Tracker App',
    des: 'A price tracker app that allows users to track the price of products on e-commerce websites. Built using Next JS, Tailwind CSS, and BrightData.',
    img: '/price-tracker.png',
    iconLists: ['/next.svg', '/tail.svg', '/bright-data.svg'],
    link: 'https://price-lytic.vercel.app/',
  },

  {
    id: 2,
    title: 'Storely - Cloud Storage App',
    des: 'A cloud storage app that allows users to upload, download, and manage files. Built using Next JS, Tailwind CSS, and Appwrite.',
    img: '/project5.png',
    iconLists: ['/next.svg', '/tail.svg', '/app.svg'],
    link: 'https://storely-web.vercel.app/',
  },
  {
    id: 3,
    title: 'Online Code Editor (IDE) ',
    des: 'A fully functional code editor with a live preview, built using React, Tailwind CSS, and Monaco Editor.',
    img: '/project2.png',
    iconLists: ['/re.svg', '/tail.svg', '/fm.svg'],
    link: 'https://my-online-code-editor.vercel.app/',
  },
  {
    id: 4,
    title: 'Recipe Website - YumBites',
    des: 'A recipe website with search, and filtering features, built using React.js and Tailwind CSS.',
    img: '/project1.png',
    iconLists: ['/re.svg', '/tail.svg'],
    link: 'https://aakash-rajbhar.github.io/Recipe-Website/',
  },
  {
    id: 5,
    title: 'Nike Website Landing Page',
    des: 'A landing page for Nike, built using React.js, Tailwind CSS. It showcases the modern and minimalist UI/UX design.',
    img: '/project3.png',
    iconLists: ['/re.svg', '/tail.svg'],
    link: 'https://aakash-rajbhar.github.io/Nike-Landing-Page/',
  },
  {
    id: 6,
    title: 'Blog Website - Cooding Nook',
    des: 'A blog website with a clean and minimalist design, built using MERN stack. It features authentication, and CRUD operations.',
    img: '/project4.png',
    iconLists: ['/js.svg', '/node.svg', '/mongo.svg'],
    link: 'https://github.com/Aakash-Rajbhar/Blog-Website',
  },
];

export const services = [
  {
    quote:
      'Creating websites that are visually appealing, user-friendly, and functional is my passion. I specialize in creating responsive websites that are optimized for all devices and screen sizes. I use modern technologies like React, Next.js, and Tailwind CSS to create websites that are fast, efficient, and visually stunning.',
    name: 'Web Development',
    serviceIcon: '/webDev.svg',
    title: '',
  },
  {
    quote:
      "I have experience in creating custom graphics for websites, social media, and print media. I use tools like Adobe Photoshop, Illustrator, and Figma to create eye-catching graphics that help businesses stand out from the competition. Whether you need a logo, banner, or social media post, I can help you create a design that captures your brand's essence.",
    name: 'Web Design',
    serviceIcon: '/web-design.png',
    title: '',
  },
  {
    quote:
      'I have experience in creating and editing videos for websites, social media, and marketing campaigns. I use tools like Adobe Premiere Pro, After Effects, and Final Cut Pro to create professional-quality videos that engage and captivate audiences. Whether you need a promotional video, tutorial, or social media ad, I can help you create a video that tells your story and connects with your audience.',
    name: 'Video Editing',
    serviceIcon: '/film-editor.png',
    title: '',
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Bechlor in Technology - GGSIPU 2026',
    desc: 'Persuing a degree in Information Technology from Guru Gobind Singh Indraprastha University, Delhi.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Web Developer',
    desc: 'Developed and maintained user-facing features using modern frontend technologies.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'High School in PCM - CBSE 2021',
    desc: 'Completed my high school education with Physics, Chemistry, and Mathematics as my main subjects.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Graphic Designer',
    desc: 'Designed and developed graphics for websites, social media, and print media.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/aakash-rajbhar',
  },
  {
    id: 2,
    img: '/twit.svg',
    link: 'https://twitter.com/aakashrajbhar25',
  },
  {
    id: 3,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/aakash-rajbhar/',
  },
];
