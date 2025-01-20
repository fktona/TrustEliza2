"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TweetProps {
  content?: string;
  timestamp?: string;
  isActive?: boolean;
}

export default function Tweet({
  content,
  timestamp = "2m",
  isActive = false,
}: TweetProps) {
  return (
    <motion.div
      className={`w-full p-4 font-inter rounded-xl min-h-[20vh] mr-5 lg:mr-2 backdrop-blur-lg ${
        isActive ? "bg-white/40" : "bg-white/60"
      } transition-colors duration-300`}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex   flex-col justify-around gap-5">
        <div className="flex  backdrop-blur-md   items-center px-2 bg-white/60 p-1 w-fit rounded-full gap-1">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white/80">
            <Image
              src="/eliza.png"
              alt="Profile"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="text-black/80 text-sm">@Truth_Eliza</span>
          {/* <span className="text-black/40 text-sm">·</span> */}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-black/90 text-sm leading-relaxed break-words">
            {content}
          </p>

          {/* <div className="flex gap-4 mt-3">
            <motion.button
              className="flex items-center gap-1.5 text-black hover:text-black/90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="text-xs">24</span>
            </motion.button>

            <motion.button
              className="flex items-center gap-1.5 text-black hover:text-black/90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span className="text-xs">12</span>
            </motion.button>

            <motion.button
              className="flex items-center gap-1.5 text-black hover:text-black/90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="text-xs">118</span>
            </motion.button>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}
