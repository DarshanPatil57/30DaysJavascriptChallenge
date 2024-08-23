import { useState } from "react";

export default function App() {
  const [currentPalette, setCurrentPalette] = useState();
  const [savePalette, setSavePalette] = useState([]);

  function handleGenerate() {
    const colors = [];
    for (let i = 0; i < 4; i++) {  
      colors.push(GenerateRandomColor());
    }
    setCurrentPalette(colors);
  }

  function handleSave() {
    const palette = [...savePalette];
    palette.push(currentPalette);
    setSavePalette(palette);
  }

  function handleDelete(index) {
    const palette = savePalette.filter((_, i) => i !== index);
    setSavePalette(palette);
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
      <div className="mb-6">
        <button
          className="px-4 py-2 font-bold rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-white hover:shadow-lg transition-all"
          onClick={handleGenerate}
        >
          Generate Palette
        </button>
      </div>

      <div className="flex justify-center mb-8 space-x-4">
        {currentPalette &&
          currentPalette.map((color, index) => {
            return (
              <div
                key={index}
                className="w-24 h-44 flex justify-center items-center rounded-xl shadow-lg"
                style={{ backgroundColor: `${color}` }}
              >
                <h1 className="text-sm font-semibold text-black mt-2">
                  {color}
                </h1>
              </div>
            );
          })}
      </div>

      {currentPalette && (
        <div className="mb-6">
          <button
            className="px-4 py-2 font-bold rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg transition-all"
            onClick={handleSave}
          >
            Save Palette
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6">
        {savePalette.length !== 0 &&
          savePalette.map((palette, index) => {
            return (
              <div key={index} className="flex justify-center space-x-4">
                {palette.map((color, colorIndex) => {
                  return (
                    <div
                      key={colorIndex}
                      className="w-24 h-44 flex justify-center items-center rounded-xl shadow-lg"
                      style={{ backgroundColor: `${color}` }}
                    >
                      <h1 className="text-sm font-semibold text-black mt-2">
                        {color}
                      </h1>
                    </div>
                  );
                })}
                <button
                  className="px-3 w-24 py-1 font-bold rounded-lg bg-black text-white hover:shadow-lg transition-all"
                  onClick={() => handleDelete(index)}
                >
                  Delete Palette
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

function GenerateRandomColor() {
  let colorCode = "#";
  for (let i = 0; i < 3; i++) {
    let color = Math.floor(Math.random() * 256);
    let colorHex = color.toString(16).padStart(2, "0");
    colorCode += colorHex;
  }
  return colorCode;
}
