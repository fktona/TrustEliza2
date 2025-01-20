"use client";

import { motion, AnimatePresence } from "framer-motion";
import Tweet from "./tweet";
import Link from "next/link";

export default function TweetContainer({ tweet }: { tweet?: string }) {
  return (
    <div className="absolute lg:bottom-0 bottom-16 w-full  scrollbar-hide">
      {tweet && (
        <a href="https://truthsocial.com/@Truth_Eliza" target="_blank">
          <div className="flex lg:flex-col gap-5 p-5 active:scale-90 justify-center line-clamp-6  items-center h-[38vh] lg:max-h-[200px] overflow-x-auto overflow-y-auto">
            <motion.div
              key={tweet}
              className="w-[95vw] flex-shrink-0 lg:w-full lg:max-w-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Tweet
                content={tweet}
                timestamp={"Now"}
                //   isActive={currentIndex === index}
              />
            </motion.div>
          </div>
        </a>
      )}
    </div>
  );
}
