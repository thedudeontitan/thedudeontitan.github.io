import React from "react";
import { useNavigate } from "react-router-dom";
import forkscanner from "../assests/forkscanner.png";
import safegaurd from "../assests/safeGaurd.png";
import healthhive from "../assests/healthhive.png";
import medico from "../assests/medico.png";

const projectData = [
  {
    name: "Safe Gaurd",
    description:
      "Safe Gaurd is a web app, where companies can create vaults to store their crypto assets, these assets can be only accessed or transferred when all the members of the vault sign it. Users can manage transaction history, vault members, etc.",
    link: "https://github.com/thedudeontitan/safe-gaurd",
    tech: [
      "ReactJS",
      "NodeJS",
      "TailwindCSS",
      "Postgres",
      "Solidity",
      "Ethereum",
      "Polygon",
    ],
    img: safegaurd,
  },
  {
    name: "ForkScanner",
    description:
      "Forkscanner is a sophisticated tool designed to actively monitor the Bitcoin blockchain in real-time, providing users with valuable insights into the state of the network.",
    link: "https://github.com/HackArchive/Forkscanner-Frontend",
    tech: ["ReactJS", "TypeScript", "TailwindCSS", "ForkScanner Backend"],
    img: forkscanner,
  },
  {
    name: "Medico",
    description:
      "Medico is a SaaS web app, where the user can find various doctors in their area, the user can also store their medical history and share with the doctor securely with just a click.",
    link: "https://github.com/thedudeontitan/medico",
    tech: ["NextJS", "ReactJS", "TypeScript", "TailiwndCSS", "Postgres"],
    img: medico,
  },
  {
    name: "Health Hive",
    description:
      "HealthHive is a mobile app that allows users to scan the Barcode on the back of a packaged food to view its nutritional information and also provides a calorie counter to manage the user's diet.",
    link: "https://github.com/HackArchive/Health-Hive",
    tech: ["React Native", "Appwrite Backend"],
    img: healthhive,
  },
];

function Projects() {
  const navigate = useNavigate();
  return (
    <section id="projects">
      <div className="min-h-screen pt-28 flex flex-col lg:mx-40 mx-5 gap-y-10">
        {projectData.map((data) => (
            <div className="shadow-xl hover:scale-[1.02] transition-all rounded-md">
              <div className="flex flex-row">
                <div className="flex flex-col w-full p-5">
                  <span className="lg:text-xl lg:font-medium mx-auto">
                    {data.name}
                  </span>
                  <span className="text-lg py-2">{data.description}</span>
                  <div className="flex flex-wrap gap-4 lg:mt-5">
                    {data.tech.map((info) => (
                      <div className="bg-primary rounded-md py-1 px-2 text-white font-medium">{info}</div>
                    ))}
                  </div>

                  <a
                    href={data.link}
                    className="bg-primary hover:bg-fuchsia-300 rounded-md w-fit p-2 shadow-md mt-auto mx-auto text-white font-semibold"
                  >
                    View Github Repo
                  </a>
                </div>
                <img src={data.img} className="lg:w-2/3 lg:ml-auto rounded-r-md" />
              </div>
            </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
