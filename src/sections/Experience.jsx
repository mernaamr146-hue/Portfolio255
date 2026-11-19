import { BriefcaseBusiness, CalendarDays, CheckCircle2, MapPin } from 'lucide-react'
import React from 'react'
import pic5 from "../assets/Tealbg.png";
import GlitchText from '@/components/GlitchText';

const experiences = [
  {
    company: "IT Gate",
    location: "Egypt,cairo .On-site",
    training: "Web Design Trainee",
    duration: "July 2024 - August 2024",
    points: [
      "HTML5 structure",
      "JavaScript",
      "CSS styling and layouts",
      "Building responsive web pages",
      "Creating a static e-commerce showcase",
    ],
  },
  {
    company: "Lix",
    location: "Egypt,cairo .On-site",
    training: "React.js Trainee",
    duration: "August 2025",
    points: [
      "React components and JSX",
      "Props and State",
      "React Hooks",
      "Local Storage and Routing",
    ],
  },
  {
    company: "Route Academy",
    location: "Egypt,cairo .online",
    training: "Frontend React Course",
    duration: "2025",
   points: [
  "JavaScript (ES6+) & TypeScript",
  "React.js & Next.js",
  "API Integration & Data Fetching",
  "State Management & React Hooks",
  "Responsive Design & Tailwind CSS",
],
  },
];

export default function Experience() {
  return (
  <>
 

  <div id='experience'
    className="min-h-dvh flex flex-col justify-center items-center bg-cover bg-center py-10"
    style={{ backgroundImage: `url(${pic5})` }}
  >
     <h2 className="py-6 text-center">
    <GlitchText
      mode="slices"
      trigger="always"
      speed={2.3}
      intensity={0.25}
      burstDuration={0.6}
      offset={4}
      skew={0}
      flicker={false}
      fontWeight={900}
      enableShadows
      shadowColors={["#ff0000", "#00ffff"]}
      className="custom-class"
    >
      &lt;Experience/&gt;
    </GlitchText>
  </h2>
    <div className="w-[90%]  mx-auto rounded-2xl bg-[#171717]/30 px-15 py-8 backdrop-blur-md">
<p className='text-white border-l-2 px-2 py-5 my-3'>My learning journey and hands-on experience in frontend development .</p>
      <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 xl:grid-cols-3">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group w-full rounded-2xl border border-white/10 bg-[#171717] p-6 text-white transition-all duration-500 hover:-translate-y-2 hover:border-[#0b7b77]/60 hover:shadow-[0_0_25px_rgba(166,107,120,0.12)]"
          >
            {/* Company */}
            <h3 className="text-2xl font-bold">
              {exp.company}
            </h3>

            {/* Location */}
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
              <MapPin size={15} />
              {exp.location}
            </div>

            <div className="my-5 h-px bg-white/10" />

            {/* Training */}
            <h4 className="text-lg font-semibold text-[#0b7b77]">
              {exp.training}
            </h4>

            {/* Duration */}
            <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
              <CalendarDays size={16} />
              {exp.duration}
            </div>

            {/* Learned */}
            <ul className="mt-6 space-y-3">
              {exp.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                >
                  <CheckCircle2
                    size={16} className="mt-1 shrink-0 text-[#0b7b77]"/>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  </div>
</>
  )
}
