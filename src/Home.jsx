import React, { useState } from "react";
import BG from "./ibacosmetics1-min.png";
import Form from "./Form";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="relative">
      <div>
        <img className="" src={BG} alt="background" />
      </div>
      <div className="form-div absolute bg-[#c6efc8] top-1 w-full sm:w-1/2 h-screen sm:h-full  flex flex-col sm:flex-row items-center gap-10 sm:gap-40">
        <img
          className="w-1/2 mt-10 sm:mt-0"
          src="https://svgshare.com/i/6mJ.svg"
        />
        <Form email={email} setEmail={setEmail} />
      </div>
    </div>
  );
}
