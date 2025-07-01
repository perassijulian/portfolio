import Pill from "@/components/UI/Pill";
import { ExternalLink, MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Archive() {
  const oldWorkData = [
    {
      id: 0,
      title: "BOOKING",
      desc: "Landing page and booking system for a hostel and snowpark project. Built with Next.js and TailwindCSS, it allows users to explore available cabins, dorms, and snowpark passes. Booking requests are handled through a custom API using Prisma and SQLite. Designed with future scalability in mind, with a focus on clean UX/UI and easy backend migration to PostgreSQL if needed.",
      img: "assets/hostelsnowpark.png",
      tags: ["tag1", "tag2", "tag3"],
      demo: "https://hostel-perassi.vercel.app/",
      github: "https://github.com/perassijulian/hostel-snowpark",
    },
    {
      id: 1,
      title: "PROOF OF PRODUCT",
      desc: "Winner of Polygon 2nd prize, Ceramic 1st prize and Tableland Pool Prize in ETHOnline hackaton. Commerce is a massive part of our online identity, but currently, there is no standard for representing real-world products on blockchain applications. Proof of Product (POP) is a new, open standard for Web3 commerce — authentic, composable, and verifiable product identity.",
      img: "assets/proofofproduct.png",
      tags: ["tag1", "tag2", "tag3"],
      demo: "https://ethglobal.com/showcase/proof-of-product-pop-web3-commerce-0uhew",
      github: "https://github.com/brandinate/Brandinate-Monorepo",
    },
    {
      id: 2,
      title: "BLOCQBOOK",
      desc: "Winner of 3 prizes in ETHGlobal hackaton. Web3 app for retrieving transactions, contact management, instant messaging and peer2peer file transfer. Your contact-data is 100% owned by you and upwards compatible. Retrieving transactions using Covalent, storing data in Ceramic database and sending files and messages through XMTP (all descentralized protocols).",
      img: "assets/blocqbook.JPG",
      tags: ["tag1", "tag2", "tag3"],
      demo: "https://ethglobal.com/showcase/blocq-book-kw8i2",
      github: "https://github.com/3lLobo/hacqFS",
    },
    {
      id: 3,
      title: "RAFFLE",
      desc: "Raffle carried out through blockchain. It is configured at the time of deploy where the entrance fee and time interval are defined. The randomness is provided by chainlink and its keepers are used to automate its operation. The smart contracts are developed in Solidity and deployed to the Rinkeby test network. For the frontend I used Next.js together with tailwind.",
      img: "assets/raffle.JPG",
      tags: ["tag1", "tag2", "tag3"],
      demo: "https://raffle-perassijulian.vercel.app/",
      github: "https://github.com/perassijulian/raffle",
    },
    {
      id: 4,
      title: "NFT MARKETPLACE",
      desc: "NFT marketplace that allows to create, sell, buy and resell NFTs. Its metadata is in IPFS as well as its multimedia content. For the development of the contracts I used Solidity and for the front end Next.js in conjunction with Tailwind. The connection was made with ethers and my working and testing environment with Hardhat.",
      img: "assets/marketplace.JPG",
      tags: ["tag1", "tag2", "tag3"],
      demo: "https://nft-marketplace-perassijulian.vercel.app/",
      github: "https://github.com/perassijulian/nft-marketplace",
    },
    {
      id: 5,
      title: "ECOMMERCE SHOP",
      desc: "Website for the sale of skateboarding articles. You can register as a customer and log in using JWT technology. It allows to catalog the products within different categories. It allows to add the desired products to the cart and once the purchase is completed add the payment through Stripe solutions. Made fullstack with MERN stack and control state through Redux toolkit.",
      img: "assets/skatown.JPG",
      tags: ["tag1", "tag2", "tag3"],
      demo: "https://skatown-ecommerce.herokuapp.com/",
      github: "https://github.com/perassijulian/ecommerce",
    },
    {
      id: 6,
      title: "BLOG",
      desc: "Blog page made with stack MERN. Allows to create user and encrypt its password using bcrypt. Once logged in, it allows to add new posts with their respective image. Clicking on the article redirects to its page. Uses queries to group posts made by the same user or to group them by categories.",
      img: "assets/blog.JPG",
      tags: ["tag1", "tag2", "tag3"],
      demo: "https://blog-perassi.herokuapp.com/",
      github: "https://github.com/perassijulian/blog-upwork",
    },
    {
      id: 7,
      title: "BOOKING",
      desc: "Clone of the booking website. Built with MERN stack. Allows user registration and login using JWT technology. State handling using useContext. Allows to register lodgings and their respective rooms. These rooms can be reserved for certain dates, disabling them so that another user cannot take them on the same days.",
      img: "assets/booking.JPG",
      tags: ["tag1", "tag2", "tag3"],
      demo: "https://booking-perassi.herokuapp.com/",
      github: "https://github.com/perassijulian/booking",
    },
  ];

  return (
    <div className="h-screen w-full p-4 md:p-20">
      <Link
        href="/"
        className="group text-accent font-bold flex items-center gap-1 text-2xl "
      >
        <MoveLeft className="transition-transform duration-300 ease-in-out group-hover:-translate-x-1" />{" "}
        Julian Perassi
      </Link>
      <h1 className="text-4xl text-foreground-secondary font-bold">
        Old Projects
      </h1>
      <table className="w-full table-auto text-left mt-8">
        <thead>
          <tr className="text-foreground-secondary text-sm border-b border-gray-50">
            <th className="py-3">Project</th>
            <th className="hidden md:table-cell">Description</th>
            <th>Build with</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody className="text-sm text-foreground">
          {oldWorkData.map((work) => (
            <tr
              key={work.id}
              className="border-b border-gray-100 hover:bg-gray-800/30 transition"
            >
              <td className="py-3 align-top">{work.title}</td>
              <td className="py-3 align-top hidden md:table-cell">
                {work.desc}
              </td>
              <td className="py-3 align-top">
                <div className="flex flex-wrap gap-1">
                  {work.tags.map((t, i) => (
                    <Pill tagKey={`${work.id}-${i}`} key={`${work.id}-${i}`}>
                      {t}
                    </Pill>
                  ))}
                </div>
              </td>
              <td className="align-middle text-foreground-secondary hover:text-accent">
                <a href={work.github} target="_blank" rel="noopener noreferrer">
                  <ExternalLink />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
