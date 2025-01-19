import React, { useState, useRef } from "react";

const Lightbox = ({ image, onClose }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [wasDragged, setWasDragged] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleZoom = () => {
    if (wasDragged) return;
    setScale((prevScale) => (prevScale === 1 ? 2 : 1));
    if (scale === 1) setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    setWasDragged(false);
    if (scale > 1) {
      setIsDragging(true);
      dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setWasDragged(true);
      setPosition({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y,
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        style={{ touchAction: "pinch-zoom" }}
        onMouseDown={handleMouseDown}
      >
        <img
          src={image}
          alt="Lightbox"
          className="cursor-pointer transition-transform duration-300"
          style={{
            transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
            maxHeight: "90%",
            maxWidth: "90%",
            objectFit: "contain",
          }}
          onClick={handleZoom}
          draggable="false"
        />
      </div>

      <button className="absolute top-4 right-4 bg-transparent text-white hover:text-stone-800/75 px-4 py-2 text-3xl" onClick={onClose} >
        <i className="bi bi-x-lg"></i>
      </button>
    </div>
  );
};

export default Lightbox;
