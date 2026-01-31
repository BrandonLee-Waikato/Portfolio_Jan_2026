import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";

export function HeroSection() {
    return (
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-background antialiased bg-grid-black/[0.05] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            {/* Logo in top left for mobile, or centered above text? Let's go with centered above text or top-left absolute.
          User asked to "join in main page", let's put it prominently above user name. 
      */}
            <div className="absolute top-4 left-4 z-50">
                <Image
                    src="/images/Brandon_logo.png"
                    alt="Brandon Logo"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
            </div>

            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 bg-opacity-50">
                    Brandon Lee <br /> is a Full Stack Developer.
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-700 max-w-lg text-center mx-auto">
                    Building beautiful and functional web applications with modern technologies.
                    Focusing on performance, accessibility, and user experience.
                </p>
            </div>
        </div>
    );
}
