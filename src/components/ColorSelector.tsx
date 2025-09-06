import React, { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeContext';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faTimes } from '@fortawesome/free-solid-svg-icons';
import { HexAlphaColorPicker } from "react-colorful";

interface ThemePreset {
  name: string;
  primary: string;
  secondary: string;
//   goto: string;
}

const ColorSelector: React.FC = () => {
  const { colors, setColors, preset, setPreset } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [primaryPicker, setPrimaryPicker] = useState(false);
  const calculateSecondaryColor = (primary: string) => {
    const r = parseInt(primary.slice(1, 3), 16) / 255;
  const g = parseInt(primary.slice(3, 5), 16) / 255;
  const b = parseInt(primary.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  // Adjust saturation & lightness
  s = Math.max(0, Math.min(1, s - 0.05));
  l = Math.max(0, Math.min(1, l - 0.07));

  // Convert HSL → RGB → primary
  function hslToRgb(h: number, s: number, l: number) {
    let r, g, b;
    if (s === 0) {
      r = g = b = l; // gray
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    return `#${[r,g,b].map(x => Math.round(x * 255).toString(16).padStart(2, "0")).join("")}`;
  }

  return hslToRgb(h, s, l);
  }
  const presets: ThemePreset[] = [
    { name: 'Default', primary: '#C517F1', secondary: '#9417DE' },
    { name: 'Blue', primary: '#3B82F6', secondary: '#1D4ED8' },
    { name: 'Green', primary: '#10B981', secondary: '#059669' },
    { name: 'Orange', primary: '#F97316', secondary: '#EA580C' },
    { name: 'Red', primary: '#EF4444', secondary: '#DC2626' },
    { name: 'Purple', primary: '#8B5CF6', secondary: '#7C3AED' },
  ];

  const handlePresetChange = (presetItem: ThemePreset) => {
    setColors({
      primary: presetItem.primary,
      secondary: presetItem.secondary,
    //   goto: presetItem.goto,
    });
    setPreset(presetItem.name.toLowerCase());
    setIsOpen(false);
  };

  return (
    <div className="z-50">
      <motion.button
        className="relative w-12 h-12 rounded-md flex items-center justify-center shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: colors.primary }}
      >
        <FontAwesomeIcon 
          icon={faPalette} 
          className="text-xl" 
          style={{ color: '#FFFFFF' }}
        />
      </motion.button>

      {isOpen && (
        <>
          {/* Backdrop/overlay for the modal */}
          <div 
            className="fixed inset-0 z-40" 
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            onClick={() => {
              setIsOpen(false);
              setPrimaryPicker(false);
            }}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="relative top-24 right-0 bg-background-primary border-2 p-4 rounded-lg shadow-2xl w-64 z-50"
            style={{ borderColor: colors.primary }}
          >
            <div className='w-full flex justify-between items-center h-8 mb-4 border-b-2 border-devPink'>
              <h3 className="text-white text-lg font-semibold text-center" style={{ borderColor: colors.primary }}>
                Theme Colors
              </h3>
              <FontAwesomeIcon 
                icon={faTimes} 
                className="text-xl cursor-pointer text-white" 
                onClick={() => setIsOpen(false)} 
              />
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              {presets.map((presetItem) => (
                <motion.button
                  key={presetItem.name}
                  onClick={() => handlePresetChange(presetItem)}
                  className={`px-3 py-2 rounded text-white text-sm font-medium ${
                    preset === presetItem.name.toLowerCase() ? 'ring-2' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    backgroundColor: presetItem.primary,
                    boxShadow: `0 2px 4px ${presetItem.secondary}80`,
                  }}
                >
                  {presetItem.name}
                </motion.button>
              ))}
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="text-white text-xs font-medium block mb-1">Primary Color</label>
                <div className="relative flex items-center">
                  <motion.div 
                    className='w-10 h-10 rounded-md cursor-pointer shadow-md' 
                    style={{ backgroundColor: colors.primary }}
                    onClick={() => setPrimaryPicker(!primaryPicker)}
                    whileHover={{ scale: 1.05 }}
                  />
                  <input
                    type="text"
                    value={colors.primary}
                    onChange={(e) => setColors({ ...colors, primary: e.target.value })}
                    className="ml-2 flex-1 bg-[#0d141c] border rounded px-2 py-1 text-white text-xs focus:outline-none"
                    style={{ borderColor: colors.primary }}
                  />
                  
                  {/* Color picker modal */}
                  {primaryPicker && (
                    <div className="absolute left-0 top-12 z-50 bg-[#181c22] p-3 rounded-lg shadow-xl border-2" style={{ borderColor: colors.primary }}>
                      <HexAlphaColorPicker 
                        color={colors.primary} 
                        onChange={(color) => {
                          
                          const secondary = calculateSecondaryColor(color);
                          setColors({ ...colors, primary: color, secondary: secondary });
                        }}
                      />
                      <div className="mt-2 flex justify-end">
                        <button 
                          onClick={() => {
                            setPrimaryPicker(false);
                            setIsOpen(false);
                          }}
                          className="px-3 py-1 bg-[#0d141c] text-white text-xs rounded hover:bg-opacity-80"
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}

     
    </div>
  );
};

export default ColorSelector;