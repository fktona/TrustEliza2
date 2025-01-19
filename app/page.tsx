"use client";
import Image from "next/image";
import NoiseBackgroundCanvas from "./noise";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className=" text-white relative isolate w-full h-dvh">
      <Image
        src="/bg.png"
        width={1920}
        height={1080}
        objectFit="cover"
        alt="bg"
        className="w-full  h-full absolute object-cover -z-10"
      />
      {/* <Image
        src="/noise.png"
        width={1920}
        height={1080}
        objectFit="cover"
        alt="bg"
        className="w-full h-full absolute object-cover -z-10"
      /> */}
      <NoiseBackgroundCanvas />
      <Navbar />
      <div className="text-[15px] w-full lg:w-auto flex flex-col items-center gap-3 absolute bottom-6 px-5 ">
        <div className=" px-3  lg:hidden flex gap-1 items-center py-2 ">
          <a
            href="#"
            className="  w-16 h-16 flex items-center rounded-tl-2xl rounded-bl-2xl justify-center lg:rounded-tl-lg lg:rounded-bl-lg bg-white/10"
          >
            <Image src="/x.png" width={30} height={30} alt="x" />
          </a>
          <a
            href="#"
            className="  w-16 h-16 flex items-center justify-center  bg-white/10"
          >
            <Image src="/truth.png" width={30} height={30} alt="truth" />
          </a>
          <a
            href="#"
            className=" w-16 h-16 flex  rounded-tr-2xl rounded-br-2xl items-center justify-center lg:rounded-tr-lg lg:rounded-br-lg bg-white/10"
          >
            <Image src="/pump.png" width={30} height={30} alt="pump" />
          </a>
        </div>
        <span className="">Built with TruthIntel & Eliza 💙</span>
      </div>
    </div>
  );
}
const Navbar = () => {
  return (
    <nav className="w-full h-[80px] flex justify-between items-center px-5">
      <h2
        className="text-[40px] uppercase cursor-pointer font-digital"
        onMouseEnter={handleMouseEnter}
        data-value="TrustEliza"
      >
        TrustEliza
      </h2>
      <div className="px-3 lg:flex gap-1 hidden items-center py-2">
        <motion.a
          href="#"
          className="w-12 h-12 flex items-center justify-center lg:rounded-tl-lg lg:rounded-bl-lg bg-white/20"
          whileHover={{ scale: 1.1, opacity: 0.8 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image src="/x.png" width={24} height={24} alt="x" />
        </motion.a>
        <motion.a
          href="#"
          className="w-12 h-12 flex items-center justify-center bg-white/20"
          whileHover={{ scale: 1.1, opacity: 0.8 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image src="/truth.png" width={24} height={20} alt="truth" />
        </motion.a>
        <motion.a
          href="#"
          className="w-12 h-12 flex items-center justify-center lg:rounded-tr-lg lg:rounded-br-lg bg-white/20"
          whileHover={{ scale: 1.1, opacity: 0.8 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image src="/pump.png" width={24} height={24} alt="pump" />
        </motion.a>
      </div>
    </nav>
  );
};

const letters = "!ABCDEFGHIJKLMNOPQRSTUVWXYZ#";

export const handleMouseEnter = (el: any) => {
  if (!el) return;
  el = el.target;
  let iteration: number = 0;
  const speed: number = el.dataset.value!.length > 7 ? 30 : 60;

  let lastTimestamp: number;
  let animationFrameId: number | null = null;

  const animate = (timestamp: number) => {
    if (!lastTimestamp) {
      lastTimestamp = timestamp;
    }

    // deltaTime is the time elapsed since the last animation frame
    // I use am to reduce or increase speed
    const deltaTime = timestamp - lastTimestamp;

    if (deltaTime >= speed) {
      el.innerText = el.innerText
        .split("")
        .map((_: string, index: number) => {
          if (index < iteration) {
            return el.dataset.value![index];
          }

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= el.dataset.value!.length) {
        // Stop the animation if completed
        return;
      }

      iteration += 1 / 3;
      lastTimestamp = timestamp;
    }

    animationFrameId = requestAnimationFrame(animate);
  };

  cancelAnimationFrame(animationFrameId!);
  animationFrameId = requestAnimationFrame(animate);
};
