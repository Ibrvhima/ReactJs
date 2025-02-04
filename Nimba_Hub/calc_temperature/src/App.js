import { useState } from "react";
import "./App.css";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convertToFahrenheit = (c) => (c !== "" ? (c * 9) / 5 + 32 : "");
  const convertToCelsius = (f) => (f !== "" ? ((f - 32) * 5) / 9 : "");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    setCelsius(value);
    setFahrenheit(value !== "" ? convertToFahrenheit(value) : "");
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    setFahrenheit(value);
    setCelsius(value !== "" ? convertToCelsius(value) : "");
  };

  const getWarningMessage = () => {
    if (celsius === "") return "";
    const temp = parseFloat(celsius);
    if (temp <= 0) return "❄️ Attention ! Il fait très froid !";
    if (temp >= 35) return "🔥 Attention ! Il fait très chaud !";
    return "";
  };

  const getTemperatureColor = () => {
    if (celsius === "") return "gray";
    const temp = parseFloat(celsius);
    if (temp <= -10) return "blue";
    if (temp <= 10) return "skyblue";
    if (temp <= 25) return "yellow";
    if (temp <= 35) return "orange";
    return "red";
  };

  const getTemperaturePosition = () => {
    if (celsius === "") return "0%";
    const temp = parseFloat(celsius);
    const minTemp = -20;
    const maxTemp = 50;
    const clampedTemp = Math.min(Math.max(temp, minTemp), maxTemp);
    return `${((clampedTemp - minTemp) / (maxTemp - minTemp)) * 100}%`;
  };

  return (
    <div className="converter-container">
      <h2 className="converter-title">Convertisseur de Température 🌡️</h2>

      <div className="input-group">
        <div>
          <label>🌍 Celsius : </label>
          <input
            type="text"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="Entrez Celsius"
          />
        </div>

        <div>
          <label>🔥 Fahrenheit : </label>
          <input
            type="text"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="Entrez Fahrenheit"
          />
        </div>
      </div>

      {getWarningMessage() && (
        <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
          {getWarningMessage()}
        </p>
      )}

      <div className="temperature-scale">
        <span className="scale-mark">-20°C</span>
        <span className="scale-mark">0°C</span>
        <span className="scale-mark">20°C</span>
        <span className="scale-mark">40°C</span>
        <span className="scale-mark">50°C</span>
        <div
          className="temperature-indicator"
          style={{
            backgroundColor: getTemperatureColor(),
            left: getTemperaturePosition(),
          }}
        ></div>
      </div>
    </div>
  );
}

export default TemperatureConverter;
