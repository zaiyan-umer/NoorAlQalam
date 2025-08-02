"use client";

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const UploadImageForm = () => {
  const [formData, setFormData] = useState<{
    title: string;
    description: string;
    category: string;
    imgUrl: string;
    price: string;
    images: string[];
    isFeatured: boolean;
  }>({
    title: "",
    description: "",
    category: "",
    imgUrl: "",
    price: "",
    images: [],
    isFeatured: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, images: value.split(",").map((url) => url.trim()) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("/api/upload", JSON.stringify(formData));

      if (response) {
        console.log("Image uploaded successfully:", response);
        toast.success("Image uploaded successfully!");
        setFormData({
          title: "",
          description: "",
          category: "",
          imgUrl: "",
          price: "",
          images: [],
          isFeatured: false,
        });
      } else {
        console.error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-[600px] bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Upload Image</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 px-4 py-3 block shadow-sm w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter the title"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter a detailed description"
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          >
            <option value="">Select a category</option>
            <option value="classical">Classical</option>
            <option value="signature">Signature</option>
          </select>
        </div>

        {/* Image URL */}
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            id="url"
            name="imgUrl"
            value={formData.imgUrl}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter the image URL"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter the price"
          />
        </div>

        {/* Images URL (Array) */}
        <div>
          <label htmlFor="images" className="block text-sm font-medium text-gray-700">
            Images URL (Comma-separated)
          </label>
          <input
            type="text"
            id="images"
            name="images"
            value={formData.images.join(", ")}
            onChange={handleImagesChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter comma-separated image URLs"
          />
        </div>

        {/* Is Featured */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isFeatured"
            name="isFeatured"
            checked={formData.isFeatured}
            onChange={handleCheckboxChange}
            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="isFeatured" className="ml-2 text-sm font-medium text-gray-700">
            Mark as Featured
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadImageForm;