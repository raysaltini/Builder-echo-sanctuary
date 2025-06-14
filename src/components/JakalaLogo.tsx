interface JakalaLogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: "default" | "white";
}

export const JakalaLogo = ({
  className = "",
  width = 140,
  height = 36,
  variant = "default",
}: JakalaLogoProps) => {
  const logoColor = variant === "white" ? "#FFFFFF" : "#040066";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* J */}
      <path
        d="M8 8v12c0 2.5-1.5 4-4 4s-4-1.5-4-4h3c0 1 0.5 1.5 1 1.5s1-0.5 1-1.5V8h3z"
        fill={logoColor}
      />

      {/* A */}
      <path
        d="M18 8h-3l-4 16h3l0.8-3.2h4.4l0.8 3.2h3L18 8zm-2.6 9.6L16.8 12l1.4 5.6h-2.8z"
        fill={logoColor}
      />

      {/* K */}
      <path
        d="M28 8v16h3v-6l3 6h3.5l-3.5-6.5L37.5 8H34l-3 5.5V8h-3z"
        fill={logoColor}
      />

      {/* A */}
      <path
        d="M48 8h-3l-4 16h3l0.8-3.2h4.4l0.8 3.2h3L48 8zm-2.6 9.6L46.8 12l1.4 5.6h-2.8z"
        fill={logoColor}
      />

      {/* L */}
      <path d="M56 8v16h8v-3h-5V8h-3z" fill={logoColor} />

      {/* A */}
      <path
        d="M74 8h-3l-4 16h3l0.8-3.2h4.4l0.8 3.2h3L74 8zm-2.6 9.6L72.8 12l1.4 5.6h-2.8z"
        fill={logoColor}
      />

      {/* Geometric red accent element */}
      <g transform="translate(124, 12)">
        <circle cx="6" cy="6" r="6" fill="#F00A0A" />
        <polygon points="3,3 9,3 6,9" fill="#FFFFFF" opacity="0.3" />
      </g>
    </svg>
  );
};
