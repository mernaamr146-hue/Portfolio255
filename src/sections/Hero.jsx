import pic from "../assets/pic.jpeg";
import StrokeText from "@/components/StrokeText";
import pic5 from "../assets/Tealbg.png";
import Particles from "@/components/Particles";
import { Eye } from "lucide-react";




const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mernaamr/" },
  { name: "GitHub", href: "https://github.com/mernaamr146-hue" },
];

export default function Hero() {
  return (
    
  <main
    className="min-h-dvh bg-black p-2 sm:p-3" id="home"
    // style={{ backgroundImage: `url(${pic2})` }}
  >
    <div  className="mx-auto grid min-h-[calc(100dvh-1rem)] max-w-[1200px] mb-5 grid-rows-[auto_auto_1fr] sm:grid-rows-[auto_auto_1fr] rounded-2xl bg-black/40  backdrop-blur-sm sm:min-h-[calc(100dvh-1.5rem)]   border-2 border-[#0b7b77]
  shadow-[0_0_5px_#0b7b77,0_0_12px_#0b7b77,0_0_25px_rgba(255,255,255,0.7)]
  transition-all duration-500
  hover:shadow-[0_0_8px_#fff,0_0_20px_#fff,0_0_40px_rgba(255,255,255,0.9)]">
    <div className="absolute inset-0 z-0">
      <Particles
    particleColors={["#ffffff","#ffffff","#ffffff"]}
    particleCount={290}
    particleSpread={12}
    speed={0.1}
    particleBaseSize={100}
    glow={0.4}
    twinkle={0.2}
    moveParticlesOnHover
    hoverEffect="repel"
    sizeRandomness={1}
    shape="circle"
    depthOfField={0}
    connections
    connectionDistance={110}
    particleHoverFactor={1}
    hoverRadius={140}
    drift="none"
    driftSpeed={1}
    alphaParticles={false}
    disableRotation={false}
    cameraDistance={20}
    variation={0}
    opacity={1}
    clickBurst
    intro
    lightMode={false}
/>
    </div>

      {/* Navbar */}
     
  <div className='flex  justify-center w-full pt-4'>
<StrokeText></StrokeText>

  </div>
      {/* Hero */}
      <section
        className="grid  grid-cols-2 items-center gap-x-3 gap-y-6 p-4 sm:gap-6 sm:p-8 lg:grid-cols-3 z-30"
      >
        {/* Text - Left */}
        <div className="min-w-0">
          <p className="mb-2 text-xs text-white/50">
            HELLO, I'M
          </p>

          <h1 className="mb-3 text-xl font-bold leading-tight sm:text-4xl text-white">
            <span className="text-[#206368]">Frontend</span> Developer
          </h1>

          <p className="mb-3 text-xs text-white/70 sm:text-sm">
            React.js · Next.js · TypeScript
          </p>

          <p className="mb-5 text-xs leading-relaxed text-white/60 sm:text-sm">
            Building modern and responsive web experiences.
          </p>

         <div className="flex flex-wrap gap-3">
  {/* Download CV */}
  <a
    href="/Merna Amr CV-1.pdf"
    download
    style={{ backgroundImage: `url(${pic5})` }}
    className="inline-flex items-center justify-center rounded-full bg-cover bg-repeat-x px-4 py-2 text-xs text-white border border-white/30 transition hover:-translate-y-1 hover:bg-black/75 sm:text-sm"
  >
    Download CV ↓
  </a>

  {/* Preview CV */}
  <a
    href="/Merna Amr CV-1.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-full bg-cover bg-repeat-x px-4 py-2 text-xs text-white border bg-[#511717] border-white/30 transition hover:-translate-y-1 hover:bg-black/75 sm:text-sm"
  >
    Preview CV <Eye className="ml-1" />
  </a>
</div>
        </div>

        {/* Image - Center */}
        <div className="flex min-w-0 items-center justify-center">
          <div className="w-fit overflow-hidden rounded-full border border-white shadow-xl">
            <img
              src={pic}
              alt="Merna Amr"
              className="block h-auto w-full max-w-[140px] object-cover sm:max-w-[240px] lg:max-w-[320px]"
            />
          </div>
        </div>

        {/* Social Icons */}
        <div className="col-span-2 flex justify-center lg:col-span-1">
          <div className="flex flex-wrap lg:flex-col items-center justify-center gap-3 sm:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                title={social.name}
                className="flex  px-5 py-3  items-center justify-center rounded-full border border-black/10 bg-white/40 text-xs font-semibold text-black transition duration-300 hover:scale-110 hover:bg-black hover:text-white hover:shadow-lg "
              >
                {social.name === "LinkedIn" && "LinkedIn"}
                {social.name === "GitHub" && "GitHub"}
              
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  </main>

  );
}