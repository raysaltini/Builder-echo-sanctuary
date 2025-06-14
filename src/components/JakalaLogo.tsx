interface JakalaLogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: "default" | "white";
}

export const JakalaLogo = ({
  className = "",
  width = 120,
  height = 32,
  variant = "default",
}: JakalaLogoProps) => {
  const logoColor = variant === "white" ? "#FFFFFF" : "#040066";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Optimized JAKALA text with modern geometric styling */}
      <g>
        {/* J */}
        <path
          d="M4 4v11.5c0 2.5-1.5 4.5-4 4.5v-2c1 0 2-1 2-2.5V4h2z"
          fill={logoColor}
        />

        {/* A */}
        <path
          d="M16 4h-2l-3 16h2l0.6-3h3.8l0.6 3h2L16 4zm-2.2 11L15 9.5l1.2 5.5h-2.4z"
          fill={logoColor}
        />

        {/* K */}
        <path
          d="M26 4v16h2v-7l3.5 7h2.5l-3.5-7.5L33.5 4H31l-3 6V4h-2z"
          fill={logoColor}
        />

        {/* A */}
        <path
          d="M44 4h-2l-3 16h2l0.6-3h3.8l0.6 3h2L44 4zm-2.2 11L43 9.5l1.2 5.5h-2.4z"
          fill={logoColor}
        />

        {/* L */}
        <path d="M52 4v16h6v-2h-4V4h-2z" fill={logoColor} />

        {/* A */}
        <path
          d="M68 4h-2l-3 16h2l0.6-3h3.8l0.6 3h2L68 4zm-2.2 11L67 9.5l1.2 5.5h-2.4z"
          fill={logoColor}
        />
      </g>

      {/* Modern hexagonal accent - signature Jakala element */}
      <g transform="translate(100, 10)">
        <polygon
          points="6,2 11,5 11,11 6,14 1,11 1,5"
          fill="#F00A0A"
          stroke="none"
        />
        <polygon
          points="6,4 9,6 9,10 6,12 3,10 3,6"
          fill="#FFFFFF"
          opacity="0.2"
        />
      </g>
    </svg>
  );
};
