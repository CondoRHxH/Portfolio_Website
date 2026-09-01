// MovingBorderButton.tsx
import React, { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import '../assets/styles/MovingBorderButton.scss';

function MovingBorder({ duration = 2500 }: { duration?: number }) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMs = length / duration;
      progress.set((time * pxPerMs) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val)?.x ?? 0);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val)?.y ?? 0);
  const transform = useTransform(() => `translate(${x.get()}px, ${y.get()}px) translate(-50%, -50%)`);

  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="moving-border-svg">
      <rect fill="none" width="100%" height="100%" rx="30%" ry="30%" ref={pathRef} />
      <foreignObject x="0" y="0" width="1" height="1" style={{ overflow: "visible" }}>
        <motion.div style={{ position: "absolute", transform }} className="moving-border-dot" />
      </foreignObject>
    </svg>
  );
}

interface Props {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  onClick?: () => void;
}

function MovingBorderButton({ children, duration = 2500, className = "", onClick }: Props) {
  return (
    <button onClick={onClick} className={`moving-border-container ${className}`}>
      <div className="moving-border-inner"><MovingBorder duration={duration} /></div>
      <span className="moving-border-content">{children}</span>
    </button>
  );
}

export default MovingBorderButton;