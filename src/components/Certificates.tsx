import AiDays2025 from "@/assets/certificates/AiDays2025.png";
import AiHackDay from "@/assets/certificates/AiHackDay.png";
import CSS from "@/assets/certificates/CSS.png";
import CodTech from "@/assets/certificates/CodTech.png";
import DAJobSimulation from "@/assets/certificates/DA-job-simulation.png";
import DataAnalysis from "@/assets/certificates/Data-analysis.png";
import ICAT from "@/assets/certificates/ICAT.png";
import IntroToMSExcel from "@/assets/certificates/Intro-to-msexcel.png";
import Kodacy from "@/assets/certificates/Kodacy.png";
import MSOffice from "@/assets/certificates/MS-office.png";
import ProblemSolving from "@/assets/certificates/Problem-solving.png";
import ProgrammingForEverybody from "@/assets/certificates/Programming-for-everybody.png";
import SEJobSimulation from "@/assets/certificates/SE-job-simulation.png";
import IntroToAI from "@/assets/certificates/intro-to-ai.png";
import SQL from "@/assets/certificates/sql.png";

const certificates = [
  { title: "AI Days 2025 - Swecha.AI", image: AiDays2025 },
  { title: "AI Hack Day - KGRCET", image: AiHackDay },
  { title: "CSS - HackerRank", image: CSS },
  { title: "CodTech - Internship", image: CodTech },
  { title: "Data Analytics Job Simulation - Forage", image: DAJobSimulation },
  { title: "Data Analysis using Microsoft Excel", image: DataAnalysis },
  { title: "ICAT", image: ICAT },
  { title: "Introduction to MS Excel", image: IntroToMSExcel },
  { title: "Kodacy - Internship", image: Kodacy },
  { title: "MS Office - Udemy", image: MSOffice },
  { title: "Problem Solving - HackerRank", image: ProblemSolving },
  { title: "Programming for Everybody", image: ProgrammingForEverybody },
  { title: "Software Engineering Job Simulation", image: SEJobSimulation },
  { title: "Introduction to AI", image: IntroToAI },
  { title: "SQL - HackerRank", image: SQL },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Certifications
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-64 object-cover cursor-pointer"
                />
              </a>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-center">
                  {certificate.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
