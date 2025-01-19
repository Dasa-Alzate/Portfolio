import React from 'react'

function LightBox() {
  return (
    <div id="lightbox" className="top-0 left-0 z-50 fixed flex items-center justify-center bg-black bg-opacity-75 w-full h-full hidden">
      <img id="lightbox-image" className="max-w-full max-h-full cursor-pointer" />
    </div>
  )
}

export default LightBox