import React from "react";
import axios from "axios";

function PriceCalculator() {
  const [file, setFile] = React.useState(null);
  const [result, setResult] = React.useState(null);

  const materialDensity = 0.00121;
  const moneyPerGram = 0.3;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Выберите файл");
    }

    const formData = new FormData();
    formData.append("uploaded_file", file);

    try {
        const response = await fetch("http://localhost:4000/slice", {
            method: "POST",
            body: formData,
          });
      
          if (!response.ok) {
            throw new Error("Ошибка при загрузке файла");
          }
      
          const data = await response.json(); // Получаем JSON-ответ
          console.log("Полученные данные:", data);
      setResult(data.materialUsed);
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Не удалось загрузить файл.");
    }
  };

  return (
    <div>
      <h1>Узнать стоимость печати 3д-модели</h1>
      <input type="file" accept=".stl" onChange={handleFileChange} />
      <button onClick={handleUpload}>Загрузить</button>

      {result !== null && (
        <div>
          <h2>Результат:</h2>
          <p>Израсходовано филамента: {result} мм<sup>3</sup> = {result * materialDensity} г</p>
          <h3>Цена: {(result * materialDensity * moneyPerGram).toFixed(2)} руб.</h3>
        </div>
      )}
    </div>
  );
}

export default PriceCalculator;
