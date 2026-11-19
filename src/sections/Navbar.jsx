import GooeyNav from '@/components/GooeyNav';
import React from 'react'
const items = [
    { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }

];

export default function Navbar() {
  return (
   <>
    <div className='w-full flex  justify-center fixed top-0 z-50 '>
      
      
<GooeyNav
  items={items}
  initialActiveIndex={0}
  theme="dark"
  size="md"
  frame
  particleCount={15}
  spread={42}
  animationTime={600}
  timeVariance={150}
  gooeyness={0.65}
  wobble={0.1}
  hoverEffect
  onChange={(index, item) => console.log(index, item.label)}
/>

    </div>
    </>
  )
}
