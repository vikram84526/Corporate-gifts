import React from "react";

const ImageGrid = ({ images }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative w-full"
          >
            {/* 🖼️ Image */}
            <img
              src={img}
              alt={`Image ${idx + 1}`}
              className="w-full h-[500px] object-cover rounded-lg shadow-md"
            />

            {/* 🔢 Number on right side */}
            <div className="absolute top-2 right-3 bg-black/60 text-white text-sm font-semibold px-3 py-1 rounded-full">
              {idx + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
