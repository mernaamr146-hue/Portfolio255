import CountUp from '@/components/CountUp'
import GlitchText from '@/components/GlitchText'
import pic5 from "../assets/Tealbg.png";




import React from 'react'
import { Check, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <>
    <div className='min-h-dvh pb-8 bg-cover bg-center  flex  justify-center items-center  flex-col font-semibold scroll-mt-0' id="about" style={{ backgroundImage: `url(${pic5})` }}>
      <h2 className='py-3'>
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
  shadowColors={["#ff0000","#00ffff"]}
  className='custom-class'
><h2>&lt;/About&gt;</h2>
</GlitchText></h2>
      <div className='w-[90%] bg-white/70 grid grid-cols-1  sm:grid-cols-2 rounded-2xl gap-8 sm:p-15 p-2 shadow-2xl'>
       {/* left */}
      <div>
<div className='text-black'>
  <h2 className=' text-4xl font-bold w-[70%] pb-3'>Passionate Frontend Developer
Building Digital Experiences.
</h2>
<p className='py-3 text-[#0b7b77]'>I am a dedicated frontend developer Using React with a strong focus on creating clean, responsive, and high-performance web interfaces. I turn complex ideas into seamless, user-friendly digital products using modern web technologies.</p>

<h2 className='border-l-4 border-white my-2 px-2 text-3xl'>What I Do</h2>

<div className="grid grid-cols-1 sm:grid-cols-2  w-[80%] gap-4">
  <div className="flex items-center gap-3 ">
    <CheckCircle2 size={18} className="text-[#0b7b77]" />
    <p >Responsive Web Design</p>
  </div>

  <div className="flex items-center gap-3">
    <CheckCircle2 size={18} className="text-[#0b7b77]" />
    <p>Clean & Modern Code</p>
  </div>

  <div className="flex items-center gap-3">
    <CheckCircle2 size={18} className="text-[#0b7b77]" />
    <p>UI/UX Best Practices</p>
  </div>

  <div className="flex items-center gap-3">
    <CheckCircle2 size={18} className="text-[#0b7b77]" />
    <p>Performance Optimized</p>
  </div>
</div>
</div>
<div></div>
      </div>
        {/* right */}
      <div className='grid grid-cols-2 gap-4'>
<div className='rounded-2xl text-white hover:border px-4 bg-black hover:shadow-2xl hover:scale-104 duration-300 ease-in-out flex flex-col justify-center items-center'>
 <div><h2 className='text-5xl'>

<CountUp
  from={0}
  to={3}
  mode="count"
  easing="easeOut"
  format="standard"
  separator=","
  prefix=""
  suffix=""
  direction="up"
  duration={1}
  delay={0}
  trigger="view"
  replayOnHover={false}
  className="count-up-text"
  style={{"fontSize":"3rem","fontWeight":800}}
/>+</h2>
 <p className='pt-1.5'>  Years of Experience in Web Development
</p></div>
</div>


<div className='rounded-2xl text-white hover:border px-4 bg-black hover:shadow-2xl hover:scale-104 duration-300 ease-in-out flex flex-col justify-center items-center'>
 <div><h2 className='text-5xl'>

<CountUp
  from={0}
  to={15}
  mode="count"
  easing="easeOut"
  format="standard"
  separator=","
  prefix=""
  suffix=""
  direction="up"
  duration={1}
  delay={0}
  trigger="view"
  replayOnHover={false}
  className="count-up-text"
  style={{"fontSize":"3rem","fontWeight":800}}
/>+</h2>
 <p className='pt-1.5'> Successful Projects Completed
</p></div>
</div>


<div className='rounded-2xl text-white hover:border px-4 bg-black hover:shadow-2xl hover:scale-104 duration-300 ease-in-out flex flex-col justify-center items-center'>
 <div><h2 className='text-5xl'>

<CountUp
  from={0}
  to={100}
  mode="count"
  easing="easeOut"
  format="standard"
  separator=","
  prefix=""
  suffix=""
  direction="up"
  duration={1}
  delay={0}
  trigger="view"
  replayOnHover={false}
  className="count-up-text"
  style={{"fontSize":"3rem","fontWeight":800}}
/>%</h2>
 <p className='pt-1.5'>  Responsive & Clean Interfaces
</p></div>
</div>


<div className='rounded-2xl text-white hover:border px-4  bg-black hover:shadow-2xl hover:scale-104 duration-300 ease-in-out flex flex-col justify-center items-center'>
 <div><h2 className='text-5xl'>Fast</h2>
 <p className='pt-1.5'> Performance & Load Times
</p></div>
</div>



      </div>
      
      </div>
    </div>
    </>
  )
}
