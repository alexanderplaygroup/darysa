import { useEffect, useState } from 'react';

type Breakpoints = {
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  base?: number;
};

export function useResponsiveGroupSize(breakpoints: Breakpoints) {
  const [groupSize, setGroupSize] = useState(breakpoints.xl || 1);

  useEffect(() => {
    function updateGroupSize() {
      const width = window.innerWidth;

      if (width >= 1280) setGroupSize(breakpoints.xl ?? 1);
      else if (width >= 1024) setGroupSize(breakpoints.lg ?? breakpoints.xl ?? 1);
      else if (width >= 768) setGroupSize(breakpoints.md ?? breakpoints.lg ?? breakpoints.xl ?? 1);
      else if (width >= 640) setGroupSize(breakpoints.sm ?? breakpoints.md ?? breakpoints.lg ?? 1);
      else setGroupSize(breakpoints.base ?? breakpoints.sm ?? breakpoints.md ?? 1);
    }

    updateGroupSize();
    window.addEventListener('resize', updateGroupSize);
    return () => window.removeEventListener('resize', updateGroupSize);
  }, [breakpoints]);

  return groupSize;
}
