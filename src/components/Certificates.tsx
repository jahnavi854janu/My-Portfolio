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
  { title: "AI Days 2025", image: AiDays2025 },
  { title: "AI Hack Day", image: AiHackDay },
  { title: "CSS", image: CSS },
  { title: "CodTech", image: CodTech },
  { title: "Data Analytics Job Simulation", image: DAJobSimulation },
  { title: "Data Analysis", image: DataAnalysis },
  { title: "ICAT", image: ICAT },
  { title: "Introduction to MS Excel", image: IntroToMSExcel },
  { title: "Kodacy", image: Kodacy },
  { title: "MS Office", image: MSOffice },
  { title: "Problem Solving", image: ProblemSolving },
  { title: "Programming for Everybody", image: ProgrammingForEverybody },
  { title: "Software Engineering Job Simulation", image: SEJobSimulation },
  { title: "Introduction to AI", image: IntroToAI },
  { title: "SQL", image: SQL },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Certifications
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-card">
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
