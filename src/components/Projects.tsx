import { Briefcase, Calendar, MapPin, Github, ExternalLink } from 'lucide-react';
import HandPuzzle from "../assets/HandPuzzle.jpg.png";
import EasyCode from "../assets/EasyCode.jpg.png";
import speedtyping from "../assets/speedtyping.jpg.png";
import vathavaranam from "../assets/Vathavaranam.jpg.png";
import worddictionary from "../assets/worddictionary.jpg.png";
import quizapp from "../assets/quizapp.jpg.png";
import tictactoe from "../assets/tictactoe.jpg.png";

const Projects = () => {
  const projects = [
    {
      name: "Hand Puzzle",
      image: HandPuzzle,
      description:
        "AI-powered AR puzzle game using MediaPipe hand tracking, HTML5 Canvas, and Vanilla JavaScript. Solve puzzles with intuitive hand gestures directly in your browser.",
      skills: ["HTML5, CSS3, Vanilla JavaScript, HTML5 Canvas, MediaPipe AI, WebRTC (Webcam API)"],
      github: "https://github.com/jahnavi854janu/Hand-Puzzle", 
      live: "https://jahnavi854janu.github.io/Hand-Puzzle/", 
    },
    {
      name: "EasyCode",
      image: EasyCode,
      description:
        "An interactive programming learning platform with a built-in code editor, syntax highlighting, code execution simulation, and detailed explanations for C, Python, HTML, CSS, JavaScript, and Java.",
      skills: ["HTML"],
      github: "https://github.com/jahnavi854janu/EasyCode", 
      live: "https://jahnavi854janu.github.io/EasyCode/", 
    },
    {
      name: "Speed Typing Test",
      image: speedtyping,
      description:
        "A fun typing speed test app that measures typing accuracy and words per minute (WPM) with a timer-based challenge.",
      skills: ["HTML", "JavaScript", "CSS"],
      github: "https://github.com/jahnavi854janu/SPEED-TYPING-TEST", 
      live: "https://jahnavi854janu.github.io/SPEED-TYPING-TEST", 
    },
    {
      name: "Vathavaranam",
      image: vathavaranam,
      description:
        "A simple web app that provides a 5-day global weather forecast and visualization dashboard, showing real-time weather details for any location entered by the user.",
      skills: ["Python","Streamlit"],
      github: "https://github.com/jahnavi854janu/Vathavaranam", 
      live: "https://vathavaranam.streamlit.app/", 
    },
    {
      name: "Word Dictionary Web App",
      image: worddictionary,
      description:
        "A web app that fetches word definitions, synonyms, and pronunciation using an API. Designed with responsive UI and modern web practices.",
      skills: ["HTML", "Javascript", "CSS"],
      github: "https://github.com/jahnavi854janu/WORD-DICTIONARY-WEB-APP", 
      live: "https://jahnavi854janu.github.io/WORD-DICTIONARY-WEB-APP", 
    },
    {
      name: "Quiz App",
      image: quizapp,
      description:
        "An interactive quiz app with multiple categories and score tracking. Users can test their knowledge with instant feedback.",
      skills: ["HTML", "JavaScript", "CSS"],
      github: "https://github.com/jahnavi854janu/QUIZ-APP", 
      live: "https://jahnavi854janu.github.io/QUIZ-APP", 
    },
    {
      name: "Tic Tac Toe Game",
      image: tictactoe,
      description:
        "A classic Tic Tac Toe game built with React, allowing two players to play turn by turn with a clean UI and responsive design.",
      skills: ["HTML", "JavaScript", "CSS"],
      github: "https://github.com/jahnavi854janu/TIC-TAC-TOE", 
      live: "https://jahnavi854janu.github.io/TIC-TAC-TOE", 
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <div key={index} className="Project-card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {proj.name}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {proj.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 transition"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-success text-white text-sm font-medium hover:opacity-90 transition"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
