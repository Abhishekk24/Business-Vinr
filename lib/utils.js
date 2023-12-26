// @/lib/utils.js

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const cva = (baseClass, variants) => {
  const baseClasses = baseClass.split(' ').map((cls) => cls.trim());
  
  const variantClasses = Object.entries(variants).reduce((acc, [key, values]) => {
    acc[key] = Object.entries(values).reduce((variantAcc, [variant, variantClass]) => {
      variantAcc[variant] = baseClasses.map((base) => base + ' ' + variantClass).join(' ');
      return variantAcc;
    }, {});
    return acc;
  }, {});

  return (options) => {
    const selectedVariant = options?.variant || 'default';
    return variantClasses[selectedVariant] || variantClasses.default;
  };
};
