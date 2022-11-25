import React, { useRef, useState } from "react";
import WheelComponent from "react-wheel-of-prizes";

export default function Wheel() {
  const [result, setResult] = useState("");
  const [showresult, setShowResult] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);
  const segments = [
    "Buy 1 Get 1 Free",
    "30% Sitewide Off",
    "Hot chocolate free with Tea",
    "Free coffee mug on purchase of Rs.1000+",
    "Buy 2 effervescent tablets & get 1 free",
    "Free 50G Tea on purchase of Rs.500",
  ];
  const segColors = [
    "#E50101",
    "#EFEFD1",
    "#E50101",
    "#EFEFD1",
    "#E50101",
    "#EFEFD1",
  ];

  function copyToClipboard(e) {
    window.alert("Copied");
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
    window.alert("Copied");
  }

  const onFinished = (winner) => {
    setResult(winner);
    setShowResult(!showresult);
    console.log(winner);
  };
  return (
    <div className="bg-[#c6efc8] h-full sm:h-screen flex flex-col sm:flex-row items-center justify-center w-screen sm:w-full ">
      <WheelComponent
        segments={segments}
        segColors={segColors}
        // winningSegment={winner}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="white"
        contrastColor="black"
        buttonText="Spin"
        isOnlyOnce={true}
        size={250}
        upDuration={100}
        downDuration={500}
        fontFamily="Arial"
      />
      {showresult && (
        <div className="flex flex-col gap-5 absolute sm:relative bg-slate-200 sm:bg-inherit p-4 sm:p=0 ">
          <h2 className="text-2xl sm:text-4xl ">Congrats. You have won:</h2>
          <h1 className=" text-2xl sm:text-6xl bold max-w-xl my-5">
            {" "}
            {result}{" "}
          </h1>
          <button
            onClick={copyToClipboard}
            className=" text-2xl sm:text-6xl max-w-fit bg-emerald-100 p-4 rounded flex"
          >
            <p ref={textAreaRef} value="XAXPDF">
              XAXPDF
            </p>{" "}
            <div className=" text-2xl sm:text-6xl max-w-fit px-8 py-1 ml-2 rounded bg-amber-100">
              COPY
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
