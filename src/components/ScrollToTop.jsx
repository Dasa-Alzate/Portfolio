import React from 'react'

function ScrollToTop() {
  return (
    <button
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className="inline-block right-5 bottom-5 bg-gray-600 hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-800 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg p-3 rounded-full text-white text-xs uppercase leading-tight focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      id="btn-scroll-to-top"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        className="w-4 h-4"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
        ></path>
      </svg>
    </button>
  )
}

export default ScrollToTop