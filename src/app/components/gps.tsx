"use client";
import React, { useState, useEffect } from 'react';

interface GPSLocation {
  latitude: number;
  longitude: number;
}

interface Props {
  initialNorth: number;
  initialWest: number;
  refinementTime: number; // in milliseconds
}

const RefineGPSLocationComponent: React.FC<Props> = ({ initialNorth, initialWest, refinementTime }) => {
  const [currentLocation, setCurrentLocation] = useState<GPSLocation>({
    latitude: initialNorth,
    longitude: initialWest
  });
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    const startTime = Date.now();

    const updateLocation = () => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= refinementTime) {
        clearInterval(intervalId);
        return;
      }

      const progress = Math.min(1, elapsedTime / refinementTime);
      setProgress(progress);

      const accuracyFactor = 1 - progress;
      setCurrentLocation({
        latitude: initialNorth + (Math.random() - 0.5) * (0.001 * accuracyFactor),
        longitude: initialWest + (Math.random() - 0.5) * (0.001 * accuracyFactor),
      });
    };

    intervalId = setInterval(updateLocation, 500); // Update every half second

    return () => {
      clearInterval(intervalId);
    };
  }, [initialNorth, initialWest, refinementTime]);

  return (
    <span> {currentLocation.latitude.toFixed(6)}, Lon: {currentLocation.longitude.toFixed(6)}</span>
  );
};

export default RefineGPSLocationComponent;
