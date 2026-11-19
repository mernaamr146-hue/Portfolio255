import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Mail, MapPin } from 'lucide-react';
import { TiSocialGithub } from "react-icons/ti";
import { SlSocialLinkedin } from "react-icons/sl";
import GlitchText from '@/components/GlitchText';



export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setStatus('');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xdegeelv', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('Your message has been sent successfully!');
        form.reset();
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  }
return (
  <section
    className="min-h-screen bg-black flex items-center justify-center px-4 py-16"
    id="contact"
  >
    <motion.div
     initial={{
    opacity: 0,
    y: 120,
    rotateY: 180,
    rotateX: 0,
    rotateZ: 0,
    scale: 0.85,
  }}

  whileInView={{
    opacity: 1,
    y: [120, -15, 0],
    rotateY: [180, 360],
    rotateX: 0,
    rotateZ: 0,
    scale: [0.85, 1.04, 1],
  }}

  viewport={{
    once: true,
    amount: 0.3,
  }}

  transition={{
    duration: 1.5,
    ease: [0.22, 1, 0.36, 1],
  }}
      className="w-full max-w-6xl rounded-2xl border border-[#0b7b77]/70
        bg-[#080808] p-6 md:p-10
        shadow-[0_0_12px_rgba(11,123,119,0.5),0_0_35px_rgba(11,123,119,0.2)]"
    >
      <div className="title-wrapper">
          <div className="title-inner">
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
              &lt;/Contact&gt;
            </GlitchText>
          </div>
        </div>

      <p className="text-gray-400 text-center mb-10">
        Let's work together and build something amazing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT - CONTACT FORM */}
        <div className="space-y-5">
          <h3 className="text-xl font-semibold text-white mb-6">
            Send Me a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-white/10 bg-[#111]
                p-4 text-white outline-none transition
                focus:border-[#0b7b77] focus:shadow-[0_0_10px_rgba(11,123,119,0.4)]"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full rounded-lg border border-white/10 bg-[#111]
                p-4 text-white outline-none transition
                focus:border-[#0b7b77] focus:shadow-[0_0_10px_rgba(11,123,119,0.4)]"
            />

            <input
              name="subject"
              type="text"
              placeholder="Subject"
              required
              className="w-full rounded-lg border border-white/10 bg-[#111]
                p-4 text-white outline-none transition
                focus:border-[#0b7b77] focus:shadow-[0_0_10px_rgba(11,123,119,0.4)]"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full rounded-lg border border-white/10 bg-[#111]
                p-4 text-white outline-none resize-none transition
                focus:border-[#0b7b77] focus:shadow-[0_0_10px_rgba(11,123,119,0.4)]"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3
                rounded-lg bg-[#0b7b77] p-4 font-semibold text-white
                transition duration-300 hover:bg-[#09635f]
                hover:shadow-[0_0_20px_rgba(11,123,119,0.6)]
                disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status && (
              <p className="text-center text-sm text-[#0b7b77]">
                {status}
              </p>
            )}
          </form>
        </div>

        {/* RIGHT - CONTACT INFORMATION */}
        <div className="flex flex-col justify-center space-y-8 md:pl-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Let's Connect
            </h3>

            <p className="text-gray-400 leading-7">
              Feel free to reach out for collaborations OR
              opportunities
            </p>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-4">
            <div className="rounded-xl border border-[#0b7b77]/50
              bg-[#0b7b77]/10 p-4 text-[#0b7b77]">
              {/* <Mail size={24} /> */}
              <Mail />
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-white">mernaamr146@gmail.com</p>
            </div>
          </div>

          {/* PHONE */}
          {/* <div className="flex items-center gap-4 ">
            <div className="rounded-xl border border-[#0b7b77]/50
              bg-[#0b7b77]/10 p-4 text-[#0b7b77]">
      
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-white">+20 XXX XXX XXXX</p>
            </div>
          </div> */}

          {/* LOCATION */}
          <div className="flex items-center gap-4">
            <div className="rounded-xl border border-[#0b7b77]/50
              bg-[#0b7b77]/10 p-4 text-[#0b7b77]">
              {/* <MapPin size={24} /> */}
              <MapPin />
            </div>

            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="text-white">Cairo, Egypt</p>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="pt-5 border-t border-white/10">
            <p className="text-white font-semibold mb-4">
              Follow Me
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/mernaamr146-hue"
                className="rounded-lg border border-white/10
                  p-3 text-gray-400 transition hover:border-[#0b7b77]
                  hover:text-[#0b7b77]"
              >
<TiSocialGithub   size={30}/>
              </a>

              <a
                href="https://www.linkedin.com/in/mernaamr/"
                className="rounded-lg border border-white/10
                  p-3 text-gray-400 transition hover:border-[#0b7b77]
                  hover:text-[#f3f6f6] hover:bg-blue-500"
              >
                {/* <Linkedin size={22} /> */}
                <SlSocialLinkedin size={22} />

              </a>

              {/* <a
                href="#"
                className="rounded-lg border border-white/10
                  p-3 text-gray-400 transition hover:border-[#0b7b77]
                  hover:text-[#0b7b77]"
              >
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
  
}