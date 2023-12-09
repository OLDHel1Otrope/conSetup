import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { drawPolygon } from "./DrawFunction";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
const ThreeScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {

    if (!canvasRef.current) return;

    const scene = new THREE.Scene();

    const sizes = {
      //changing the width of the
      width: window.innerWidth - 0.23 * 1920,
      height: window.innerHeight,
    };

    //create a perspective camera
    const camera = new THREE.PerspectiveCamera(
      40,
      sizes.width / sizes.height,
      0.1,
      100
    );

    scene.add(camera);

    camera.position.set(0, 0, 10);
    camera.rotation.y += 0.5;
    camera.rotation.x += 0.1;
    camera.rotation.z += 0;

    scene.add(camera);

    const controls = new PointerLockControls(camera, canvasRef.current);
    scene.add(controls.getObject());

    const loader = new GLTFLoader();

    loader.load("untitled.glb", (gltf) => {
      scene.add(gltf.scene);
    });

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    scene.add(directionalLight);
    scene.background = new THREE.Color(0x434443);
    //create a webgl renderer and linking it to canvas

    //event listener for window resize
    window.addEventListener("resize", () => {
      //updating sizes when the window is resized
      console.log(window.innerWidth);

      console.log(window.innerHeight);
    });
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    const render = () => {
      renderer.render(scene, camera);
    };

    const handleResise = () => {
      sizes.width = window.innerWidth;
      sizes.width -= 0.23 * sizes.width;
      sizes.height = window.innerHeight;
      sizes.height -= 0.003 * window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      renderer.setSize(sizes.width, sizes.height);
      camera.updateProjectionMatrix();
      render();
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "w") controls.moveForward(1);
      if (event.key === "s") controls.moveForward(-1);
      if (event.key === "a") controls.moveRight(-1);
      if (event.key === "d") controls.moveRight(1);
    };

    const handleKeyup = () => {
      controls.moveForward(0);
      controls.moveRight(0);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (controls.isLocked) {
        const movementX = event.movementX || 0;
        const movementY = event.movementY || 0;

        controls.rotateRight(-movementX * 0.002);
        controls.rotateUp(-movementY * 0.002);
      }
    };

    const handlePointerlockChange = () => {
      document.body.style.cursor = controls.isLocked ? "none" : "auto";
    };

    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("keyup", handleKeyup);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("pointerlockchange", handlePointerlockChange);

    window.addEventListener("resize", handleResise);
    handleResise();

    const animate = () => {
      requestAnimationFrame(animate);

      render();
    };

    animate();

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("keyup", handleKeyup);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener(
        "pointerlockchange",
        handlePointerlockChange
      );
      window.removeEventListener("resize", handleResise);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
  });

  return <canvas ref={canvasRef} className="webgl"></canvas>;
};
export default ThreeScene;
