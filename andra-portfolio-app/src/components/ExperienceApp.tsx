import React from "react";
import Image from "next/image";

export default function ExperienceApp() {
  return (
    <div className="w-screen h-screen relative top-32 sm:mt-[20%] mb-40 bottom-0">
      <div className="flex justify-center flex-col">
        <div className="mb-20 flex flex-col justify-center text-center mx-10">
          <h1 className="font-bold text-5xl text-gray-600">Work Project</h1>
          <p className="font-semibold text-[1rem] sm:text-xl text-gray-600 top-20 mt-10">
            this section provides a comprehensive
            <span className="text-gray-500 "> overview of my work project.</span>
          </p>
        </div>
        <div className="flex justify-center ">
          <div className="mx-10 w-[20rem] sm:w-[50rem] flex flex-col  items-center justify-center h-auto bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-md p-1 ">
            <div className="h-full w-full bg-white p-6 sm:grid sm:grid-cols-2">
              <div className="sm:mt-6">
                <div className="flex justify-center ">
                  <Image
                    src="/img/projectImg/noir1.webp"
                    alt=""
                    width={350}
                    height={350}
                    className="w-[40rem]"
                  />
                </div>
                <div className="text-gray-600 ">
                  <h1 className="text-center mt-10 font-bold text-3xl ">
                    Noirythm
                  </h1>

                  <h1 className="font-semibold text-1xl text-center">
                    e-commerce
                  </h1>
                </div>
              </div>
              <div className="relative sm:bottom-8">
                <div className="mt-10 text-1xl font-medium text-gray-700 sm:mx-10 ">
                  <ul className=" space-y-1 text-gray-500 list-disc list-inside">
                    <li>Add items to cart using contextAPI </li>
                    <li>Find products</li>
                    <li>Product details for each product</li>
                    <li>About page next-route</li>
                    <li>Contact page using next-route</li>
                    <li>Mobile responsive with tailwindcss</li>
                    
                  </ul>
                </div>
                <div className="mt-7 flex flex-col justify-center sm:mx-10 ">
                  <h3 className="font-bold text-gray-500">tech used:</h3>
                  <div className="flex justify-start gap-4 mt-3 w-14">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg"
                      alt=""
                      width={64}
                      height={63}
                    />
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                      alt=""
                      width={64}
                      height={63}
                    />
                    <Image
                      src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
                      alt=""
                      width={64}
                      height={63}
                    />
                     <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
                      alt=""
                      width={64}
                      height={63}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
