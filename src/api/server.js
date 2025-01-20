import axios from "axios";

export const uploadFileToServer = async (file) => {
    console.log("uploader beginning the job...")
    const formData = new FormData();
    formData.append("uploaded_file", file);
    
    try {
        const response = await axios.post("http://localhost:4000/slice",
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log("recieved");
        return response.data;  
    } catch (error) {
        console.error("Ошибка при загрузке файла:", error);
        throw error;
    }
};