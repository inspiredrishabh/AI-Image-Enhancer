import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import enhancedImageAPI from "../utils/enhancedImageAPI";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhanceImage, setEnhanceImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const UploadImageHandler = async (file) => {
    setError(null);
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);

    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhanceImage(enhancedURL);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Failed to enhance image. Please try again with another image.");
      console.error("Image enhancement failed:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <ImageUpload UploadImageHandler={UploadImageHandler} />
          {error && (
            <div className="mt-4 p-3 bg-red-900/40 border border-red-700 rounded-lg text-red-300 text-center">
              {error}
            </div>
          )}
        </div>

        <div className="md:w-2/3">
          <ImagePreview
            loading={loading}
            uploaded={uploadImage}
            enhanced={enhanceImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
