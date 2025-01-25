"use client"
import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface WhiteFlowerProps {
  cameraPosition: { x: number, y: number, z: number };
}

const WhiteFlower: React.FC<WhiteFlowerProps> = ({ cameraPosition }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  // Adjusted camera position to view flower face
  const camera = useMemo(() => {
    const cam = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    cam.position.set(cameraPosition.x, cameraPosition.y + 1, Math.abs(cameraPosition.z)); // Ensure positive Z
    cam.lookAt(0, 0, 0);
    return cam;
  }, [cameraPosition.x, cameraPosition.y, cameraPosition.z]);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
    });
    
    const size = 400;
    renderer.setSize(size, size);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const loader = new GLTFLoader();
    loader.load('/assets/scene.gltf', (gltf) => {
      // Rotate model to show face
      gltf.scene.rotation.x = Math.PI; // 180 degrees
      gltf.scene.rotation.y = Math.PI; // 180 degrees
      scene.add(gltf.scene);
      renderer.render(scene, camera);
    });

    // Cleanup function
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, [camera]); // Only depend on memoized camera

  return (
    <div
      ref={mountRef}
      style={{
        width: '400px',
        height: '400px',
      }}
    />
  );
};

export default WhiteFlower;