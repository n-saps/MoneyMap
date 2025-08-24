import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => {
    const formData = new FormData();

    // append image file to the form data
    formData.append("image", imageFile);

    try {
        const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
            headers: {
                "Content-Type": "multipart/form-data", // Set header for file upload
            }
        })

        return response.data;
    } catch (error) {
        console.error("Error uploading the image", error.message)
        throw error // rethrow the error for handling 
    }
}

export default uploadImage;