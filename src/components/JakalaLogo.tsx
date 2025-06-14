interface JakalaLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const JakalaLogo = ({
  className = "",
  width = 120,
  height = 32,
}: JakalaLogoProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* JAKALA text in official brand styling */}
      <text
        x="0"
        y="24"
        fontSize="28"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
        fill="currentColor"
        letterSpacing="-0.02em"
      >
        JAKALA
      </text>

      {/* Distinctive red accent dot */}
      <circle cx="110" cy="20" r="4" fill="#F00A0A" />
    </svg>
  );
};
