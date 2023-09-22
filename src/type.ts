import * as THREE from "three";

export interface SceneSize {
  width: number;
  height: number;
}

export interface GetCube {
  geometry: THREE.BoxGeometry;
  material: THREE.MeshBasicMaterial;
  position: {
    x: number;
    y: number;
    z: number;
  };
}
