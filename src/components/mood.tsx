import { useState } from "react";

export default function Mood() {
  const Emojis = [
    { image: "/public/happy-face.png", description: "Muito feliz", id: 1 },
    { image: "/public/medium-happy.png", description: "Feliz", id: 2 },
    { image: "/public/confused.png", description: "Mais ou menos", id: 2 },
    { image: "/public/sad.png", description: "Triste", id: 2 },
    { image: "/public/angry.png", description: "Zangado", id: 2 },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="flex !bg-blue-600 items-center justify-center w-[48%]">
      {Emojis.map((emoji, id) => (
        <div
          key={id}
          className={`p-5 cursor-pointer rounded-md transition w-[120px] h-[120px] 
           ${
             selectedIndex === id
               ? "border-4 border-white"
               : "border-transparent"
           }
             transition-all duration-200

          `}
          onClick={() => setSelectedIndex(id)}
        >
          <img src={emoji.image} alt="" className="w-12 mx-auto" />
          <span className="block text-white text-center font-bold text-xs my-0.5">
            {emoji.description}
          </span>
        </div>
      ))}
    </div>
  );
}
