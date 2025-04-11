// Your code here.
const container = document.getElementById("container");
const cubes = document.querySelectorAll(".cube");

let selectedCube = null;
let offsetX = 0;
let offsetY = 0;

// Initial positions in grid layout
const positions = [
  { left: 20, top: 20 },
  { left: 140, top: 20 },
  { left: 20, top: 140 },
  { left: 140, top: 140 },
];

// Set initial positions
cubes.forEach((cube, i) => {
  cube.style.left = `${positions[i].left}px`;
  cube.style.top = `${positions[i].top}px`;

  cube.addEventListener("mousedown", (e) => {
    selectedCube = cube;
    const rect = cube.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
  });
});

document.addEventListener("mousemove", (e) => {
  if (selectedCube) {
    const containerRect = container.getBoundingClientRect();
    let x = e.clientX - containerRect.left - offsetX;
    let y = e.clientY - containerRect.top - offsetY;

    // Boundary constraints
    const maxX = container.clientWidth - selectedCube.offsetWidth;
    const maxY = container.clientHeight - selectedCube.offsetHeight;

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    selectedCube.style.left = `${x}px`;
    selectedCube.style.top = `${y}px`;
  }
});

document.addEventListener("mouseup", () => {
  selectedCube = null;
});
