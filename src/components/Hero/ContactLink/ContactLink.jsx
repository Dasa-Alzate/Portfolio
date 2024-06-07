import React from 'react';

const ContactLink = ({ href, title, iconName }) => {
  
  return (
    <div className="mx-auto mt-3 sm:mt-0">
      <a href={href} target="_blank" title={title}>
        <i className={"bg-clip-text bg-gradient-to-r from-sky-600 to-teal-300 mx-auto mt-auto mb-4 text-2xl text-white hover:text-4xl hover:text-transparent duration-300 bi " + iconName} />
      </a>
    </div>
  );
}

export { ContactLink };
