"use client";
import React, { useRef, useEffect } from "react";

const NoiseBackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // Set canvas size to match the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const generateNoiseTexture = () => {
      const imageData = context.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255; // Random grayscale value
        data[i] = value; // Red channel
        data[i + 1] = value; // Green channel
        data[i + 2] = value; // Blue channel
        data[i + 3] = 128; // Semi-transparent opacity (adjust as needed)
      }

      context.putImageData(imageData, 0, 0);
    };

    let animationFrameId: number;
    let lastUpdateTime = 0;
    const frameInterval = 100; // In milliseconds

    const animateNoise = (timestamp: number) => {
      if (timestamp - lastUpdateTime >= frameInterval) {
        generateNoiseTexture();
        lastUpdateTime = timestamp;
      }
      animationFrameId = requestAnimationFrame(animateNoise);
    };

    animateNoise(0);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 20,
        pointerEvents: "none",
        opacity: 0.4,
      }}
    />
  );
};

export default NoiseBackgroundCanvas;
