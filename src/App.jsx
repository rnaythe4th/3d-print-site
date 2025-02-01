import { useState } from "react";
import "./App.scss";
//import FileUploader from "./components/FileUploader/FileUploader";
//import ResultCalculation from "./components/ResultCalculation/ResultCalculation";
//import { uploadFileToServer } from "./api/server";
import PriceCalculator from "./components/PriceCalculator/PriceCalculator";

function App() {
  /* const [result, setResult] = useState(null);

  const handleFileUpload = async (file) => {
    try {
      const data = await uploadFileToServer(file);
      setResult(data);
    } catch (error) {
      alert("Ошибка при обработке файла.");
    }
  }; */

  return (
    <PriceCalculator/>
  );
}

export default App;
