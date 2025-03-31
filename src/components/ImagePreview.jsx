import React from "react";

const ImagePreview = ({ loading, uploaded, enhanced }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = enhanced;
    link.download = "enhanced-image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!uploaded && !enhanced && !loading) return null;

  return (
    <div className="bg-gray-800 rounded-xl p-5 shadow-lg">
      {(uploaded || enhanced) && (
        <h2 className="text-xl font-semibold text-blue-400 mb-6 text-center">
          Image Comparison
        </h2>
      )}

      <div className="flex flex-col md:flex-row gap-6">
        {uploaded && (
          <div className="flex-1 bg-gray-700 rounded-lg overflow-hidden shadow-md">
            <h3 className="p-3 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 text-base font-medium text-center border-b border-gray-600">
              Original
            </h3>
            <div className="p-3 flex justify-center items-center">
              <img
                src={uploaded}
                alt="Original"
                className="max-w-full max-h-80 object-contain"
              />
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex-1 bg-gray-700 rounded-lg overflow-hidden shadow-md">
            <h3 className="p-3 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 text-base font-medium text-center border-b border-gray-600">
              Enhanced (Processing)
            </h3>
            <div className="p-10 flex flex-col justify-center items-center min-h-[200px]">
              <div className="w-12 h-12 border-3 border-blue-200/20 border-t-blue-400 rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-400">Enhancing with AI...</p>
            </div>
          </div>
        ) : (
          enhanced && (
            <div className="flex-1 bg-gray-700 rounded-lg overflow-hidden shadow-md">
              <h3 className="p-3 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 text-base font-medium text-center border-b border-gray-600">
                Enhanced
              </h3>
              <div className="p-3 flex justify-center items-center">
                <img
                  src={enhanced}
                  alt="Enhanced"
                  className="max-w-full max-h-80 object-contain"
                />
              </div>
              <button
                className="w-full p-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-medium hover:from-blue-700 hover:to-purple-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={handleDownload}
              >
                Download Enhanced Image
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
