import React from 'react'

const Imagezoom = () => {
    const [zoomStyle, setZoomStyle] = useState({});
  const [activeImage, setActiveImage] = useState(
    "https://m.media-amazon.com/images/I/41XsfN7KKcL._SX342_SY445_QL70_FMwebp_.jpg"
  );
  const imageRef = useRef(null);

  const handleZoomImage = (e) => {
    if (!imageRef.current) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      backgroundImage: `url(${activeImage})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "250%", // Adjust zoom level
      display: "block",
    });
  };

  const handleLeaveImageZoom = () => {
    setZoomStyle({});
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse gap-4 mt-6 border border-[#E1E3E4] rounded-[6px] p-6">
    <div className="md:h-[400px] md:w-[450px] relative object-contain overflow-hidden">
      {/* Zoom Effect */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center pointer-events-none"
        style={zoomStyle}
      />
      
      {/* Product Image */}
      <img
        ref={imageRef}
        src={activeImage}
        className="h-full w-full object-contain"
        loading="lazy"
        onMouseMove={handleZoomImage}
        onMouseLeave={handleLeaveImageZoom}
      />
    </div>
  </div>
  )
}

export default Imagezoom