// Your code here.
const container = document.getElementById("container");
const cubes = document.querySelectorAll(".cube");

let selectedCube = null;
let offsetX, offsetY;

document.querySelectorAll('.cube').forEach(cube => {
    cube.addEventListener('mousedown', (e) => {
        selectedCube = cube;
        offsetX = e.clientX - cube.getBoundingClientRect().left;
        offsetY = e.clientY - cube.getBoundingClientRect().top;
    });
});

document.addEventListener('mousemove', (e) => {
    if (selectedCube) {
        // Update the position of the selected cube
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;
        
        // Add boundary checks here to prevent moving outside the container
        
        selectedCube.style.left = newX + 'px';
        selectedCube.style.top = newY + 'px';
    }
});

document.addEventListener('mouseup', () => {
    selectedCube = null; // Deselect the cube
});