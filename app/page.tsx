"use client";

import React, { useEffect, useState } from "react";
import HomePage from "./home";

function Home() {
  const [tweet, setTweet] = useState<string | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/webhook`);
        if (!res.ok) {
          return null;
        }
        const data = await res.json();
        setTweet(data?.data?.tweet);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    // Fetch data initially and set up an interval for subsequent requests
    fetchData();
    const intervalId = setInterval(fetchData, 10000); // 10 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return <HomePage tweet={tweet} />;
}

export default Home;
