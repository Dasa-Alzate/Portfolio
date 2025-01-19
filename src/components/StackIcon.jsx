import React from 'react'

function StackIcon({ icon, setBgIcon }) {

  return (
    <img className="duration-800 z-30 flex-initial hover:!opacity-40 hover:!scale-110 lg:w-24 m-6 md:m-4 md:w-1/6 mix-blend-overlay transition w-1/5 xl:w-28" src={icon.src} alt={icon.alt} title={icon.title} width="512" height="384" onMouseEnter={() => setBgIcon(icon.src)} onMouseLeave={() => setBgIcon("")}/>
  )
}

export default StackIcon