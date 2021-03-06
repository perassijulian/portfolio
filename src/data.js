export const backendData = [
  {
    id: 1,
    title: "EXPRESS",
    img: "assets/express.jpeg",
  },
  {
    id: 2,
    title: "MONGODB",
    img: "assets/mongodb.jpg",
  },
  {
    id: 3,
    title: "NODE JS",
    img: "assets/node.png",
  },
  {
    id: 4,
    title: "PYTHON",
    img: "assets/python.png",
  },
  {
    id: 5,
    title: "SQL SERVER",
    img: "assets/sql.jpg",
  },
];

export const web3Data = [
  {
    id: 1,
    title: "SOLIDITY",
    img: "assets/solidity.png",
  },
  {
    id: 2,
    title: "WEB3 JS",
    img: "assets/web3.JPG",
  },
  {
    id: 3,
    title: "ETHERS JS",
    img: "assets/ethers.jpg",
  },
];

export const frontendData = [
  {
    id: 1,
    title: "REACT JS",
    img: "assets/react.png",
  },
  {
    id: 2,
    title: "HTML 5",
    img: "assets/html.png",
  },
  {
    id: 3,
    title: "NEXT JS",
    img: "assets/next.jpg",
  },
  {
    id: 4,
    title: "CSS 3",
    img: "assets/css.png",
  },
  {
    id: 5,
    title: "SASS",
    img: "assets/sass.png",
  },
  {
    id: 6,
    title: "TAILWIND",
    img: "assets/tailwind.jpg",
  },
];

export const worksData = [
  {
    id: 1,
    title: "RAFFLE",
    web3: true,
    desc: "Raffle carried out through blockchain. It is configured at the time of deploy where the entrance fee and time interval are defined. The randomness is provided by chainlink and its keepers are used to automate its operation. The smart contracts are developed in Solidity and deployed to the Rinkeby test network. For the frontend I used Next.js together with tailwind.",
    img: "assets/raffle.JPG",
    demo: "https://raffle-perassijulian.vercel.app/",
    github: "https://github.com/perassijulian/raffle",
  },
  {
    id: 2,
    title: "NFT MARKETPLACE",
    web3: true,
    desc: "NFT marketplace that allows to create, sell, buy and resell NFTs. Its metadata is in IPFS as well as its multimedia content. For the development of the contracts I used Solidity and for the front end Next.js in conjunction with Tailwind. The connection was made with ethers and my working and testing environment with Hardhat.",
    img: "assets/marketplace.JPG",
    demo: "https://nft-marketplace-perassijulian.vercel.app/",
    github: "https://github.com/perassijulian/nft-marketplace",
  },
  {
    id: 3,
    title: "ECOMMERCE SHOP",
    web3: false,
    desc: "Website for the sale of skateboarding articles. You can register as a customer and log in using JWT technology. It allows to catalog the products within different categories. It allows to add the desired products to the cart and once the purchase is completed add the payment through Stripe solutions. Made fullstack with MERN stack and control state through Redux toolkit.",
    img: "assets/skatown.JPG",
    demo: "https://skatown-ecommerce.herokuapp.com/",
    github: "https://github.com/perassijulian/ecommerce",
  },
  {
    id: 4,
    title: "BLOG",
    web3: false,
    desc: "Blog page made with stack MERN. Allows to create user and encrypt its password using bcrypt. Once logged in, it allows to add new posts with their respective image. Clicking on the article redirects to its page. Uses queries to group posts made by the same user or to group them by categories.",
    img: "assets/blog.JPG",
    demo: "https://blog-perassi.herokuapp.com/",
    github: "https://github.com/perassijulian/blog-upwork",
  },
  {
    id: 5,
    title: "BOOKING",
    web3: false,
    desc: "Clone of the booking website. Built with MERN stack. Allows user registration and login using JWT technology. State handling using useContext. Allows to register lodgings and their respective rooms. These rooms can be reserved for certain dates, disabling them so that another user cannot take them on the same days.",
    img: "assets/booking.JPG",
    demo: "https://booking-perassi.herokuapp.com/",
    github: "https://github.com/perassijulian/booking",
  },
];
