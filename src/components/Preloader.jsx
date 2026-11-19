import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [phase, setPhase] = useState("text");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("line"), 2200),
      setTimeout(() => setPhase("rotate"), 2900),
      setTimeout(() => setPhase("vertical"), 3600),
      setTimeout(() => setPhase("open"), 4800),
      setTimeout(() => setVisible(false), 5100),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const words = [".npm", "run", "dev"];

  return (
    <AnimatePresence>
      {visible && (
       <motion.div
  className="fixed inset-0 z-[99999] overflow-hidden pointer-events-none"
  initial={{ backgroundColor: "#050505" }}
  animate={{
    backgroundColor:
      phase === "vertical" || phase === "open"
        ? "rgba(5,5,5,0)"
        : "#050505",
  }}
  exit={{ opacity: 0 }}
  transition={{
    backgroundColor: { duration: 0 },
    opacity: { duration: 0.3 },
  }}
>
          {/* 1. TEXT */}
          {phase === "text" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="flex gap-3 text-white text-2xl md:text-4xl font-mono font-bold"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.4 },
                  },
                }}
              >
                {words.map((word, index) => (
                  <motion.span
                    key={word}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 20,
                        filter: "blur(10px)",
                      },
                      show: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      },
                    }}
                    transition={{ duration: 0.5 }}
                    className={index === 0 ? "text-[#00F5D4]" : ""}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          )}

          {/* 2. HORIZONTAL LINE */}
          {(phase === "line" || phase === "rotate") && (
            <motion.div
              className="absolute top-1/2 left-1/2 bg-[#00F5D4]"
              style={{ x: "-50%", y: "-50%" }}
              initial={{ width: 0, height: "3px" }}
              animate={{
                width: phase === "rotate" ? "100vw" : "150px",
                height: "3px",
              }}
              transition={{
                width: { duration: 0.7, ease: "linear" },
              }}
            />
          )}

          {/* 3. WINDOW OPENING FROM CENTER */}
          {(phase === "vertical" || phase === "open") && (
            <>
              {/* TOP PANEL */}
              <motion.div
                className="absolute top-0 left-0 w-full bg-[#050505] border-b-2 border-b-[#00F5D4]"
                style={{ height: "50%" }}
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{
                  duration: 1.1,
                  ease: "linear",
                }}
              />

              {/* BOTTOM PANEL */}
              <motion.div
                className="absolute bottom-0 left-0 w-full bg-[#050505] border-t-2 border-t-[#00F5D4]"
                style={{ height: "50%" }}
                initial={{ y: 0 }}
                animate={{ y: "100%" }}
                transition={{
                  duration: 1.1,
                  ease: "linear",
                }}
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}