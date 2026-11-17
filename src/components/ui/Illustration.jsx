import React from 'react';

// Import all SVG illustrations directly to ensure bundler (Vite) resolves them reliably
import worldHome from '../../assets/illustrations/world-home.svg';
import worldSchool from '../../assets/illustrations/world-school.svg';
import worldNature from '../../assets/illustrations/world-nature.svg';
import worldMarket from '../../assets/illustrations/world-market.svg';
import worldStreet from '../../assets/illustrations/world-street.svg';
import worldHealth from '../../assets/illustrations/world-health.svg';
import avatarBoy from '../../assets/illustrations/avatar-child-boy.svg';
import avatarGirl from '../../assets/illustrations/avatar-child-girl.svg';
import illustrationLeaf from '../../assets/illustrations/illustration-leaf.svg';
import soundRain from '../../assets/illustrations/sound-rain.svg';
import soundWave from '../../assets/illustrations/sound-wave.svg';
import itemBag from '../../assets/illustrations/item-bag.svg';
import itemBook from '../../assets/illustrations/item-book.svg';
import itemPencil from '../../assets/illustrations/item-pencil.svg';
import itemEraser from '../../assets/illustrations/item-eraser.svg';
import itemDesk from '../../assets/illustrations/item-desk.svg';
import itemChair from '../../assets/illustrations/item-chair.svg';

const ILLUSTRATION_MAP = {
  'world-home': worldHome,
  'world-school': worldSchool,
  'world-nature': worldNature,
  'world-market': worldMarket,
  'world-street': worldStreet,
  'world-health': worldHealth,
  'avatar-child-boy': avatarBoy,
  'avatar-child-girl': avatarGirl,
  'illustration-leaf': illustrationLeaf,
  'sound-rain': soundRain,
  'sound-wave': soundWave,
  'item-bag': itemBag,
  'item-book': itemBook,
  'item-pencil': itemPencil,
  'item-eraser': itemEraser,
  'item-desk': itemDesk,
  'item-chair': itemChair,
};

export default function Illustration({ name, alt = '', size = 48, className = '' }) {
  const src = ILLUSTRATION_MAP[name];

  if (!src) {
    return (
      <div 
        className={`inline-flex items-center justify-center bg-gray-100 rounded-lg text-xs text-gray-400 ${className}`}
        style={{ width: size, height: size }}
        aria-label={alt}
      >
        {alt || name}
      </div>
    );
  }

  const dimensionStyle = typeof size === 'number' ? { width: `${size}px`, height: `${size}px` } : {};

  return (
    <img
      src={src}
      alt={alt}
      className={`inline-block object-contain select-none ${className}`}
      style={dimensionStyle}
      loading="lazy"
      draggable={false}
    />
  );
}
