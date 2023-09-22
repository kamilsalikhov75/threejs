import * as THREE from "three";

const yellowMaterial = new THREE.MeshBasicMaterial({
  color: "yellow",
  wireframe: true,
});

const whiteMaterial = new THREE.MeshBasicMaterial({
  color: "white",
  wireframe: true,
});

const redMaterial = new THREE.MeshBasicMaterial({
  color: "red",
  wireframe: true,
});

export const material = {
  yellow: yellowMaterial,
  white: whiteMaterial,
  red: redMaterial,
};
