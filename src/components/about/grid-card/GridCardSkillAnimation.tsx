import React, { useEffect, useRef } from "react"
import CircleType from "circletype";
import { cn } from "@/utils/cn"
import Image from "next/image"

type OrbitingCirclesProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
  iconSize?: number
  speed?: number
}


function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed

  const svgSize = radius * 2 + 4;
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute"
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
        >
          <defs>
            <filter id="brush-texture" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.05"
                numOctaves="4"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="5"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>

          <circle
            className="stroke-black/20 stroke-[2px] dark:stroke-white/20"
            cx={svgSize / 2}
            cy={svgSize / 2}
            r={radius}
            fill="none"
            filter="url(#brush-texture)"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index
        return (
          <div
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
              } as React.CSSProperties
            }
            className={cn(
              `animate-orbit absolute flex size-(--icon-size) transform-gpu items-center justify-center rounded-full`,
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}
          >
            {child}
          </div>
        )
      })}
    </>
  )
}

export function GridCardSkillAnimation() {

 const circleTypeRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (!circleTypeRef.current) return;

  const circleInstance = new CircleType(circleTypeRef.current);
  return () => {
    // circleInstance.destroy(); 
  };
}, []);


  return (
    <div className="relative ">
      <div className="relative flex h-[500px] w-[500px] flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles >
          <Image src="/img/techLogo/react.svg" alt="" width={30} height={30} />
          <Image src="/img/techLogo/tailwindcss.svg" alt="" width={30} height={30} />
          <Image src="/img/techLogo/react-query.svg" alt="" width={30} height={30} />
          <Image src="/img/techLogo/redux.svg" alt="" width={30} height={30} />
          <Image src="/img/techLogo/zustand.svg" alt="" width={30} height={30} />
          <Image src="/img/techLogo/supabase.svg" alt="" width={30} height={30} />
          <Image src="/img/techLogo/motion.svg" alt="" width={30} height={30} />
          <Image src="/img/techLogo/prisma.svg" alt="" width={30} height={30} />

        </OrbitingCircles>
        <OrbitingCircles iconSize={20} radius={40} reverse speed={2}>
          <Image src="/img/techLogo/nextjs.png" alt="" width={50} height={50} />
          <Image src="/img/techLogo/typescript.svg" alt="" width={25} height={25} />
        </OrbitingCircles>
      </div>
      <div className="absolute p-2  top-[33%] left-[21%] !font-blackFlag"
      >
        <div ref={circleTypeRef} id="textCircular-2">
          <div className={"flex items-center justify-center  "}>
            <div ref={circleTypeRef} >
              <div
                className=" p-2 w-full  z-20 relative "
              >
                <p className="block ">
                  Behold -&gt;<span className="">Behold -&gt;</span>Behold -&gt;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}