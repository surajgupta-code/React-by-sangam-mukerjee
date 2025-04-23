import { useEffect, useState } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("#f0f0f0"); // default background color

  const generateHexColor = () => {
    const hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(hex);
  };

  const generateRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    setColor(rgb);
  };

  useEffect(() => {
    console.log("Background color changed to:", color);
  }, [color]);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: color,
        transition: "background-color 0.5s ease",
      }}
    >
      <div>
        <button onClick={generateHexColor}>Generate Random Hex Color</button>
        <button onClick={generateRgbColor}>Generate Random RGB Color</button>
      </div>
      <p style={{ marginTop: "20px", fontSize: "1.2rem" }}>
        Current Color: {color}
      </p>
    </div>
  );
}
