import { GetCube } from "../type";
import * as THREE from "three";

export const getCube = ({
  geometry,
  material,
  position: { x = 0, y = 0, z = 0 },
}: GetCube) => {
  const cube = new THREE.Mesh(geometry, material);
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;
  return cube;
};
