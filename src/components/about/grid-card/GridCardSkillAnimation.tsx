'use client'

import React from "react"

import { cn } from "@/utils/cn"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"

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
            className="stroke-black stroke-[4px] dark:stroke-white"
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

  const isMobile = useMediaQuery({ query: "(max-width: 575px)" });
  return (
    <div className="mt-20 flex justify-center items-center">
      <h3></h3>
      <div className="relative ">
        <div className="absolute -top-36 -left-16 flex h-[500px] w-[500px] flex-col items-center justify-center overflow-hidden">
          <OrbitingCircles radius={isMobile ? 140 : 160}>
            <Image src="/img/techLogo/react.svg" alt="" width={35} height={35} className="p-1.5 bg-black rounded-full w-9 h-9" />
            <Image src="/img/techLogo/tailwindcss.svg" alt="" width={35} height={35} className="p-1.5 bg-black rounded-full w-9 h-9" />
            <Image src="/img/techLogo/react-query.svg" alt="" width={35} height={35} className="p-1.5 bg-black rounded-full w-9 h-9" />
            <Image src="/img/techLogo/redux.svg" alt="" width={35} height={35} className="p-1.5 bg-black rounded-full w-9 h-9" />
            <Image src="/img/techLogo/zustand.svg" alt="" width={35} height={35} className="p-1.5 bg-black rounded-full w-9 h-9" />
            <Image src="/img/techLogo/supabase.svg" alt="" width={35} height={35} className="p-2 bg-black rounded-full w-9 h-9" />
            <Image src="/img/techLogo/motion.svg" alt="" width={35} height={35} className="p-1 bg-black rounded-full w-9 h-9" />
            <div className=" bg-black rounded-full w-9 h-9">
              <Image src="/img/techLogo/prisma.svg" alt="" width={35} height={35} className="invert p-1.5" />
            </div>
          </OrbitingCircles>
          <OrbitingCircles iconSize={20} radius={40} reverse speed={2}>
            <Image src="/img/techLogo/nextjs.png" alt="" width={35} height={35} className=" bg-black rounded-full w-9 h-9" />
            <Image src="/img/techLogo/typescript.svg" alt="" width={25} height={25} className="p-1.5 bg-black rounded-full w-9 h-9" />
          </OrbitingCircles>
        </div>
        <Image src="/img/about/circular-text.png" alt="" width={300} height={300} className="relative -top-12 left-9" />
      </div>
    </div>
  )
}