import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="text-center p-32">
      <h1>Hi, I&apos;m Lucy Ivatt!</h1>
      <h2>A software developer based in Leeds</h2>
      <Image
        src="images/profile_pic.jpg"
        alt="profile_picture"
        width={250}
        height={250}
      />
    </div>
  );
};
