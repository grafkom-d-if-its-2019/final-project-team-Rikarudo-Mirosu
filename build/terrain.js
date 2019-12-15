import {
  BufferAttribute,
  Color,
  Mesh,
  MeshPhongMaterial,
  PlaneBufferGeometry,
  Vector3
} from 'three';
import SimplexNoise from 'simplex-noise';

const SIZE = 25;
const SEGMENTS = SIZE / 2;
const SIMPLEX = new SimplexNoise(12345);

const HEIGHT = 2;
const SMOOTHING = 10 + Math.pow(HEIGHT, 1.5);

export default class Terrain {
  constructor() {
    this.size = SIZE;
    this.segments = SEGMENTS;
    this.simplex = SIMPLEX;

    this.offsetX = 0;
    this.offsetZ = 0;

    this.geometry = new PlaneBufferGeometry(
      this.size,
      this.size,
      this.segments,
      this.segments
    );
    this.setHeight();
    this.material = new MeshPhongMaterial({
      color: new Color(0.225, 0.593, 0.162),
      flatShading: true,
      shininess: 0
    });

    this.mesh = new Mesh(this.geometry, this.material);
  }

  setHeight() {
    const vertices = this.geometry.getAttribute('position').array;

    for (let i = 2; i < vertices.length; i += 3) {
      const x = vertices[i - 2];
      const y = vertices[i - 1];

      vertices[i] = -y;

      vertices[i - 1] =
        this.simplex.noise2D(x / SMOOTHING, y / SMOOTHING) * HEIGHT;
    }

    this.geometry.addAttribute('position', new BufferAttribute(vertices, 3));
    this.geometry.computeVertexNormals();
  }

  addTo(scene) {
    scene.add(this.mesh);
  }

  update() {
    this.offsetX += 0.5;
    const vertices = this.geometry.getAttribute('position').array;

    for (let i = 2; i < vertices.length; i += 3) {
      const x = vertices[i - 2] + this.offsetX;
      const y = vertices[i - 1];
      const z = vertices[i] + this.offsetZ;

      vertices[i - 1] =
        this.simplex.noise2D(x / SMOOTHING, z / SMOOTHING) * HEIGHT;
    }

    this.geometry.addAttribute('position', new BufferAttribute(vertices, 3));
    this.geometry.computeVertexNormals();
  }
}
import {
  BufferAttribute,
  Color,
  Mesh,
  MeshPhongMaterial,
  PlaneBufferGeometry,
  Vector3
} from 'three';
import SimplexNoise from 'simplex-noise';

const SIZE = 25;
const SEGMENTS = SIZE / 2;
const SIMPLEX = new SimplexNoise(12345);

const HEIGHT = 2;
const SMOOTHING = 10 + Math.pow(HEIGHT, 1.5);

export default class Terrain {
  constructor() {
    this.size = SIZE;
    this.segments = SEGMENTS;
    this.simplex = SIMPLEX;

    this.offsetX = 0;
    this.offsetZ = 0;

    this.geometry = new PlaneBufferGeometry(
      this.size,
      this.size,
      this.segments,
      this.segments
    );
    this.setHeight();
    this.material = new MeshPhongMaterial({
      color: new Color(0.225, 0.593, 0.162),
      flatShading: true,
      shininess: 0
    });

    this.mesh = new Mesh(this.geometry, this.material);
  }

  setHeight() {
    const vertices = this.geometry.getAttribute('position').array;

    for (let i = 2; i < vertices.length; i += 3) {
      const x = vertices[i - 2];
      const y = vertices[i - 1];

      vertices[i] = -y;

      vertices[i - 1] =
        this.simplex.noise2D(x / SMOOTHING, y / SMOOTHING) * HEIGHT;
    }

    this.geometry.addAttribute('position', new BufferAttribute(vertices, 3));
    this.geometry.computeVertexNormals();
  }

  addTo(scene) {
    scene.add(this.mesh);
  }

  update() {
    this.offsetX += 0.5;
    const vertices = this.geometry.getAttribute('position').array;

    for (let i = 2; i < vertices.length; i += 3) {
      const x = vertices[i - 2] + this.offsetX;
      const y = vertices[i - 1];
      const z = vertices[i] + this.offsetZ;

      vertices[i - 1] =
        this.simplex.noise2D(x / SMOOTHING, z / SMOOTHING) * HEIGHT;
    }

    this.geometry.addAttribute('position', new BufferAttribute(vertices, 3));
    this.geometry.computeVertexNormals();
  }
}
