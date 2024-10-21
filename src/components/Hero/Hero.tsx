import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="p-8 md:p-16 lg:p-32 flex justify-center items-center gap-8 lg:flex-row flex-col">
      <Image
        src="images/profile_pic.jpg"
        alt="profile_picture"
        width={250}
        height={250}
        className="rounded-full border-foreground border-8"
      />
      <div className="flex flex-col gap-2 text-center lg:text-left">
        <h1>👋 Hi, I&apos;m Lucy Ivatt</h1>
        <h2>👩‍💻 A software developer based in Leeds</h2>
        <p>
          I'm a Software Engineer at Create Future. I recently completed my MEng
          in Computer Science from the University of York, graduating with First
          Class Honours with Distinction
        </p>
      </div>
    </div>
  );
};
