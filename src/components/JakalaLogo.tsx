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
  // Use the official Jakala logo image
  const logoUrl =
    "https://cdn.builder.io/api/v1/image/assets%2F03d3afd836264452b30a5214871ca037%2F510548f743fe421fab4ef46193adcba9?format=webp&width=800";

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={logoUrl}
        alt="JAKALA - Together to get there"
        width={width}
        height={height}
        className={`object-contain ${variant === "white" ? "brightness-0 invert" : ""}`}
        style={{
          maxWidth: width,
          maxHeight: height,
          width: "auto",
          height: "auto",
        }}
      />
    </div>
  );
};
