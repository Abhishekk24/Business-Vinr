import React from 'react';
import { RiYoutubeFill, RiLinkedinFill, RiFacebookFill, RiWhatsappFill, RiInstagramFill } from 'react-icons/ri';

const icons = [
  {
    path: 'https://www.youtube.com',
    name: <RiYoutubeFill />,
  },
  {
    path: 'https://www.facebook.com',
    name: <RiFacebookFill />,
  },
  {
    path: 'https://www.whatsapp.com',
    name: <RiWhatsappFill />,
  },
  {
    path: 'https://www.instagram.com',
    name: <RiInstagramFill />,
  },
  {
    path: 'https://www.linkedin.com',
    name: <RiLinkedinFill />,
  },
];

function Socials({ containerStyles, iconsStyles }) {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <a href={icon.path} key={index} className={`${iconsStyles}`} target="_blank" rel="noopener noreferrer">
          {icon.name}
        </a>
      ))}
    </div>
  );
}

export default Socials;
