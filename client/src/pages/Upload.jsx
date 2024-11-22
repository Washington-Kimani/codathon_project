import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Upload= () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        placeFound: "",
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a new FormData instance
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('placeFound', formData.placeFound);

        if (formData.image) {
            formDataToSend.append('image', formData.image); // Append the image file
        }

        // Send the form data including image to the backend
        try {
            await axios.post("http://localhost:5000/api/items/upload", formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Ensure the correct content type for file upload
                },
            });
            setMessage(`Item uploaded successfully!`);
            setError("");
            setTimeout(() => {
                navigate("/items");
            },2000)
        } catch (error) {
            console.error("Error uploading item:", error);
            setError("Error uploading item. Please try again later.");
            setMessage("");
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center py-10">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-teal-950 text-center mb-6">
                    Upload Lost & Found Item
                </h2>
                <p>
                    {error ? <span className="text-red-500">{error}</span> : <span className={"text-green-500"}>{message}</span>}
                </p>
                <form onSubmit={handleSubmit} className="space-y-4" >
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Item Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring focus:ring-teal-300"
                            placeholder="Enter item name"
                        />
                    </div>
                    {/* Description */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring focus:ring-teal-300"
                            placeholder="Provide a brief description"
                            rows="4"
                        ></textarea>
                    </div>
                    {/* Place Found */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Place Found
                        </label>
                        <input
                            type="text"
                            name="placeFound"
                            value={formData.placeFound}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring focus:ring-teal-300"
                            placeholder="Enter place where the item was found"
                        />
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring focus:ring-teal-300"
                        />
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-teal-950 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Upload;