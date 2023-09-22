import { cameraFov, sceneSize } from "./const";
import { material } from "./materials";
import "./style.css";
import * as THREE from "three";
import { getCube } from "./utils/getCube";

const scene = new THREE.Scene();
const canvas = document.querySelector(".canvas");

const camera = new THREE.PerspectiveCamera(
  cameraFov,
  sceneSize.width / sceneSize.height
);
camera.position.z = 5;

scene.add(camera);

const group = new THREE.Group();

const geometry = new THREE.BoxGeometry(1, 1, 1);

const cube1 = getCube({
  geometry,
  material: material.yellow,
  position: { x: -2, y: 2, z: 0 },
});

const cube2 = getCube({
  geometry,
  material: material.red,
  position: { x: 0, y: 2, z: 0 },
});

const cube3 = getCube({
  geometry,
  material: material.white,
  position: { x: 2, y: 2, z: 0 },
});

const cube4 = getCube({
  geometry,
  material: material.yellow,
  position: { x: -2, y: 0, z: 0 },
});

const cube5 = getCube({
  geometry,
  material: material.white,
  position: { x: 0, y: 0, z: 0 },
});

const cube6 = getCube({
  geometry,
  material: material.yellow,
  position: { x: 2, y: 0, z: 0 },
});

const cube7 = getCube({
  geometry,
  material: material.yellow,
  position: { x: -2, y: -2, z: 0 },
});

const cube8 = getCube({
  geometry,
  material: material.yellow,
  position: { x: 0, y: -2, z: 0 },
});

const cube9 = getCube({
  geometry,
  material: material.red,
  position: { x: 2, y: -2, z: 0 },
});

const cubes = [cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9];

group.add(...cubes);

scene.add(group);

const renderer = canvas && new THREE.WebGLRenderer({ canvas });
renderer?.setSize(sceneSize.width, sceneSize.height);
renderer?.render(scene, camera);

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  cubes.forEach((cube, index) => {
    const multiplier = index % 2 ? 1 : -1;
    cube.rotation.x = multiplier * elapsedTime;
    cube.rotation.y = multiplier * elapsedTime;
  });

  camera.position.x = Math.sin(elapsedTime);
  camera.position.y = Math.cos(elapsedTime);
  camera.lookAt(group.position);

  renderer?.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
