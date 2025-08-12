import React, { useState, useEffect } from 'react';
import { WordsPullUp } from './WordsPullUp';

export default function Strip() {
  const messages = [
    "Check out my Github for more projects!",
    "Check out my new website rejap.vercel.app",
    "Fueled by code and Spotify playlists",
    "Discover more on my social media",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        (prevIndex + 1) % messages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="pt-18">
      <div className="animated-gradient w-full h-6 flex items-center justify-center overflow-hidden">
        <WordsPullUp
          text={messages[currentMessageIndex]}
          className="font-outfit text-black text-[0.8rem] sm:text-md md:text-md xl:text-[1rem] m-0 p-0 cursor-default"
        />
      </div>
    </div>
  );
} 