import React, { useState } from "react";

const projects = [
  {
    title: "Fresh Cart",
    description: "Modern E-commerce built with Next.js",
    link: "#",
  },
  {
    title: "China Taste",
    description: "Interactive restaurant website using React",
    link: "#",
  },
  {
    title: "To Do App",
    description: "Task management with React",
    link: "#",
  },
];

export default function ProjectsReveal() {
  const [isOn, setIsOn] = useState(false);

  return (
    <section
      className={`lamp-section relative min-h-screen overflow-hidden flex flex-col items-center text-white ${
        isOn ? "lamp-on" : "lamp-off"
      }`}
    >
      {/* Stars */}
      <div className="stars" />

      {/* Lamp */}
      <div className="lamp-wrapper relative z-20">

        <svg
          viewBox="0 0 200 180"
          className="lamp-svg"
          fill="none"
        >
          <defs>
            <linearGradient id="shade" x1="100" y1="0" x2="100" y2="100">
              <stop stopColor="#4b071b" />
              <stop offset="1" stopColor="#16030b" />
            </linearGradient>

            <linearGradient id="light" x1="100" y1="0" x2="100" y2="1">
              <stop stopColor="#fff4b0" />
              <stop offset="1" stopColor="#d99a32" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>

          {/* Lamp shade */}
          <path
            d="M40 75 Q42 8 100 8 Q158 8 160 75 Z"
            fill="url(#shade)"
            stroke="#783044"
            strokeWidth="1.5"
          />

          {/* Lamp bottom */}
          <ellipse
            cx="100"
            cy="75"
            rx="60"
            ry="7"
            fill={isOn ? "#ffe7a0" : "#38202a"}
          />

          {/* Light inside */}
          <ellipse
            cx="100"
            cy="75"
            rx="54"
            ry="4"
            fill="#ffdc83"
            opacity={isOn ? 1 : 0.15}
          />

          {/* Chain */}
          <path
            d="M135 75 Q138 90 135 110 L135 145"
            stroke="#d5a74d"
            strokeWidth="2"
            strokeDasharray="2 3"
          />

          {/* Chain end */}
          <circle
            cx="135"
            cy="150"
            r="5"
            fill="#e6b95f"
            stroke="#fff0b0"
            strokeWidth="1"
          />
        </svg>

        {/* Clickable pull chain */}
        <button
          onClick={() => setIsOn(!isOn)}
          aria-label="Pull lamp chain"
          className="chain-button"
        >
          <span />
        </button>

      </div>

      {/* Spotlight */}
      <div className="spotlight" />

      {/* Projects */}
      <div className={`projects-container ${isOn ? "show-projects" : ""}`}>
        <div className="text-center mb-8">
          <p className="text-amber-300 tracking-[5px] text-sm mb-2">
            MY CREATIVE WORLD
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            My Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              className="project-card"
            >
              <span className="text-amber-300 text-sm">
                0{index + 1}
              </span>

              <h3 className="text-xl font-bold mt-4 mb-2">
                {project.title}
              </h3>

              <p className="text-white/60 text-sm">
                {project.description}
              </p>

              <span className="text-amber-300 text-sm mt-6 block">
                Explore Project ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .lamp-section {
          background:
            radial-gradient(ellipse at center, #350817 0%, #19030c 55%, #090107 100%);
          transition: background 0.8s ease;
          padding-top: 35px;
        }

        .stars {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            radial-gradient(2px 2px at 20% 20%, #f6d58a 99%, transparent),
            radial-gradient(2px 2px at 80% 30%, #f6d58a 99%, transparent),
            radial-gradient(1px 1px at 50% 60%, #fff 99%, transparent),
            radial-gradient(2px 2px at 10% 75%, #f6d58a 99%, transparent),
            radial-gradient(1px 1px at 90% 85%, #fff 99%, transparent);
          background-size: 250px 250px;
          opacity: .6;
        }

        .lamp-wrapper {
          width: 200px;
          height: 180px;
          flex-shrink: 0;
        }

        .lamp-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
          filter: drop-shadow(0 0 15px rgba(255,190,90,.15));
        }

        .chain-button {
          position: absolute;
          width: 30px;
          height: 95px;
          top: 68px;
          left: 122px;
          cursor: grab;
          background: transparent;
          border: none;
          z-index: 30;
          touch-action: manipulation;
        }

        .chain-button:active {
          cursor: grabbing;
          transform: translateY(10px);
        }

        .chain-button span {
          position: absolute;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          bottom: 0;
          left: 7px;
          background: radial-gradient(circle at 30% 30%, #fff5c5, #d69a37 60%, #71410d);
          box-shadow: 0 0 12px #e8b957;
        }

        .spotlight {
          position: absolute;
          top: 130px;
          left: 50%;
          transform: translateX(-50%);
          width: min(850px, 120vw);
          height: 750px;
          background: linear-gradient(
            to bottom,
            rgba(255,203,112,.35),
            rgba(255,183,76,.12) 45%,
            transparent 85%
          );
          clip-path: polygon(42% 0, 58% 0, 100% 100%, 0 100%);
          filter: blur(20px);
          opacity: 0;
          transition: opacity 1s ease;
          pointer-events: none;
          z-index: 1;
        }

        .lamp-on .spotlight {
          opacity: 1;
        }

        .lamp-on {
          background:
            radial-gradient(ellipse at 50% 35%, #57230f 0%, #280610 55%, #090107 100%);
        }

        .projects-container {
          position: relative;
          z-index: 5;
          width: 100%;
          padding: 45px 0 80px;
          opacity: 0;
          transform: translateY(35px);
          visibility: hidden;
          transition:
            opacity .8s ease,
            transform .8s ease,
            visibility .8s;
        }

        .show-projects {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
        }

        .project-card {
          display: block;
          padding: 28px;
          border: 1px solid rgba(255,202,120,.3);
          border-radius: 18px;
          background: rgba(35,8,17,.65);
          backdrop-filter: blur(12px);
          transition: .35s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: #e9b85f;
          box-shadow: 0 0 30px rgba(255,190,90,.2);
        }

        @media (max-width: 640px) {
          .lamp-wrapper {
            transform: scale(.85);
            transform-origin: top center;
            margin-bottom: -25px;
          }

          .projects-container {
            padding-top: 30px;
          }
        }
      `}</style>
    </section>
  );
}