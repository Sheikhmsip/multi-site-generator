import React from "react";

const Hero = ({ title }) => {
  // Replace [[word1|word2|word3]] with a random choice
  const processTitle = (str) => {
    return str.replace(/\[\[(.*?)\]\]/g, (_, options) => {
      const choices = options.split("|").map((o) => o.trim());
      return choices[Math.floor(Math.random() * choices.length)];
    });
  };

  return (
    <div className="p-6 bg-blue-100 text-center">
      <h1 className="text-2xl font-bold">{processTitle(title)}</h1>
    </div>
  );
};

export default Hero;
