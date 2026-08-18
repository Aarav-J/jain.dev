import { useEffect, useState, useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  layer: number; // 1 = far (slow), 2 = mid, 3 = near (fast)
}

const AnimatedBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  // Generate stars once on mount
  const stars = useMemo(() => {
    const generated: Star[] = [];
    
    // Layer 1 - Far stars (small, dim, slow parallax)
    for (let i = 0; i < 40; i++) {
      generated.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        layer: 1,
      });
    }
    
    // Layer 2 - Mid stars (medium, moderate parallax)
    for (let i = 40; i < 70; i++) {
      generated.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.15,
        layer: 2,
      });
    }
    
    // Layer 3 - Near stars (larger, brighter, fast parallax)
    for (let i = 70; i < 85; i++) {
      generated.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 1.5,
        opacity: Math.random() * 0.5 + 0.2,
        layer: 3,
      });
    }
    
    return generated;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getParallaxOffset = (layer: number) => {
    const speeds = { 1: 0.02, 2: 0.05, 3: 0.1 };
    return scrollY * (speeds[layer as keyof typeof speeds] || 0.05);
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            backgroundColor: star.layer === 3 ? "var(--primary-color)" : "var(--secondary-color)",
            transform: `translateY(${getParallaxOffset(star.layer)}px)`,
            transition: "transform 0.1s linear",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
