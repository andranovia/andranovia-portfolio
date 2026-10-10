export default function NoiseGrain() {
    return (
        <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[90]"
            aria-hidden="true"
        >
            <filter id="paper-noise">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.8"
                    numOctaves="3"
                    stitchTiles="stitch"
                />
                <feColorMatrix type="saturate" values="0" />
            </filter>

            <rect
                width="100%"
                height="100%"
                filter="url(#paper-noise)"
            />
        </svg>
    )
}