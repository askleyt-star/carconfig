import { useState, useCallback } from 'react';

export function useSmoothedValue(initialValue: number, duration: number = 300) {
  const [displayValue, setDisplayValue] = useState(initialValue);

  const updateValue = useCallback((newValue: number) => {
    const startValue = displayValue;
    const startTime = Date.now();
    const difference = newValue - startValue;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function: ease-out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + difference * easeProgress;

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [displayValue, duration]);

  return { displayValue, updateValue };
}

export function useHoverAnimation() {
  const [isHovered, setIsHovered] = useState(false);

  return {
    isHovered,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };
}
