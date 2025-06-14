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
    <div className={`inline-flex items-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* JAKALA text with clean, modern typography */}
        <text
          x="0"
          y="22"
          fontSize="24"
          fontWeight="700"
          fontFamily="Inter, system-ui, sans-serif"
          fill={logoColor}
          letterSpacing="-0.02em"
        >
          JAKALA
        </text>
      </svg>

      {/* Hexagonal accent element - Jakala's signature geometric shape */}
      <div className="ml-2 relative">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <polygon
            points="8,1 13,4.5 13,11.5 8,15 3,11.5 3,4.5"
            fill="#F00A0A"
            stroke="none"
          />
          <polygon
            points="8,3 11,5 11,11 8,13 5,11 5,5"
            fill="#FFFFFF"
            opacity="0.15"
          />
        </svg>
      </div>
    </div>
  );
};
