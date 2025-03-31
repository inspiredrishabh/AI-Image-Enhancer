import React, { useRef, useState } from "react";

const ImageUpload = ({ UploadImageHandler }) => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const ShowImageHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      UploadImageHandler(event.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      UploadImageHandler(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl p-5 shadow-lg">
      <div
        className={`bg-gray-700 border-2 border-dashed ${
          isDragging ? "border-blue-400 bg-gray-800" : "border-gray-500"
        } rounded-lg p-8 text-center cursor-pointer transition-all duration-300 hover:border-blue-400 hover:bg-gray-800`}
        onClick={triggerFileInput}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="text-5xl mb-3">📷</div>
        <h2 className="text-xl font-semibold text-gray-200 mb-2">
          Upload Your Image
        </h2>
        <p className="text-gray-400">Drag & drop or click to browse</p>
        <p className="text-xs text-gray-500 mt-3">
          Supports: JPG, PNG, WEBP (Max: 15MB)
        </p>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={ShowImageHandler}
        />
      </div>
    </div>
  );
};

export default ImageUpload;
