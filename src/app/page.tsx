
//Likes Counter and Input Field

"use client";
import React, { useState } from "react";

export default function Home() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('');

  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">Likes: {likes}</h1>
      
      <button
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 mb-4"
        onClick={() => setLikes(likes + 1)}
      >
        Increase Likes
      </button>

      <input
        type="text"
        className="border-2 border-gray-300 p-2 rounded-lg outline-none focus:border-blue-500"
        placeholder="Type something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      
      <p className="mt-4 text-lg text-gray-700">You typed: {value}</p>
    </div>
  );
}

