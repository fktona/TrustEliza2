"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tweet from "./tweet";

interface Tweet {
  id: number;
  content: string;
  timestamp: string;
}

export default function TweetContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const tweets: Tweet[] = [
    {
      id: 1,
      content:
        "Excited to announce something big coming soon! Stay tuned for updates about our latest AI developments. #AI #Innovation",
      timestamp: "2m",
    },
    {
      id: 2,
      content:
        "We're hiring! Looking for talented individuals to join our team. Apply now at trusteliza.com/careers #Careers #Jobs",
      timestamp: "1h",
    },
    {
      id: 3,
      content:
        "The future is now! Our latest product release is now available. Check it out at trusteliza.com/products #Tech #Innovation",
      timestamp: "3h",
    },
    {
      id: 4,
      content:
        "Join us for our upcoming event on AI and machine learning. Register now at trusteliza.com/events #AI #ML",
      timestamp: "6h",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tweets.length);

      if (containerRef.current) {
        const nextScroll =
          ((currentIndex + 1) % tweets.length) *
          containerRef.current.offsetWidth;
        containerRef.current.scrollTo({
          left: nextScroll,
          behavior: "smooth",
        });
      }
    }, 120000); // 2 minutes

    return () => clearInterval(interval);
  }, [currentIndex, tweets.length]);

  return (
    <div
      ref={containerRef}
      className="absolute lg:bottom-0 bottom-10 w-full  scrollbar-hide"
    >
      <div className="flex lg:flex-col gap-5 p-5 lg:justify-start lg:items-center h-[38vh] lg:max-h-[200px] overflow-x-auto overflow-y-auto">
        {tweets.map((tweet, index) => (
          <motion.div
            key={tweet.id}
            className="w-[95vw] flex-shrink-0 lg:w-full lg:max-w-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Tweet
              content={tweet.content}
              timestamp={tweet.timestamp}
              isActive={currentIndex === index}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
