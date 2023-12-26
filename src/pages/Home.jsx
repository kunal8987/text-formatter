import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  const handleClick = () => {
    const newStr = text.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
    setText(newStr);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <div>
      <div className="w-full md:w-2/3 container mx-auto mt-10 ">
        <label
          className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="name"
        >
          Enter The Text To Analyze Below
        </label>
        <textarea
          className="flex w-full mt-4 rounded-md border border-black/30 bg-transparent px-3 py-2 text-md placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 h-48 "
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text"
          id="name"
        ></textarea>
        <div className="flex mt-5 flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <button
            type="button"
            onClick={() => setText(text.toUpperCase())}
            className="rounded-md bg-black px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Uppercase
          </button>
          <button
            type="button"
            onClick={() => setText(text.toLowerCase())}
            className="rounded-md bg-black px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Lowercase
          </button>
          <button
            type="button"
            onClick={handleClick}
            className="rounded-md bg-black px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Title Case
          </button>
          <button
            type="button"
            onClick={handleExtraSpaces}
            className="rounded-md bg-black px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Remove Extra Space
          </button>
          <button
            type="button"
            onClick={() => setText("")}
            className="rounded-md bg-black px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Clear Text
          </button>
        </div>
      </div>
      <div className="w-full md:w-2/3 container mx-auto mt-8">
        <h1 className=" text-xl mb-3 font-bold">Your Text Summery</h1>
        <p className=" text-md mb-2">{text.split(" ").length} Words</p>
        <p className=" text-md mb-2">{text.length} Characters</p>
        <h2 className=" text-xl mb-3 font-bold">Preview</h2>
        <p className=" text-lg ">
          {text.length > 0
            ? text
            : "Enter Something In The Textbox Above To Preview It Here"}
        </p>
      </div>
    </div>
  );
};

export default Home;
