import React, { useState } from "react";

export const FisrtLetterThatIsUnique = () => {
  const [word, setWord] = useState("");

  const firstUniqueLetter = getFirstUniqueLetter(word);

  return (
    <div>
      <input
        type="palavra"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <p>A primeira letra que não se repete é {firstUniqueLetter}</p>
    </div>
  );
};

export const getFirstUniqueLetter = (word: string) => {
  const wordMap = word.split("").reduce((map, currentLetter) => {
    if (!!map[currentLetter]) {
      return { ...map, [currentLetter]: map[currentLetter] + 1 };
    }
    return { ...map, [currentLetter]: 1 };
  }, {} as { [key: string]: number });

  return Object.entries(wordMap).find(([key, val]) => val === 1)?.[0];
};
