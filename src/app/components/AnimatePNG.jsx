"use client"
import React, { useEffect } from 'react';

const imageUrls = [
  '/images/javascript.png',
  '/images/reactjs.png',
  '/images/html.png',
  '/images/css.png',
  '/images/git.png',
  '/images/mongodb.png',
  '/images/tailwind.png',
  '/images/mui.png',
  '/images/nodejs.png',
  '/images/redux.png',
  '/images/web.png',
  '/images/php1.png',
  '/images/ts.png',
];

function createCube(imageUrl) {
  const cube = document.createElement('div');
  cube.classList.add('cube');

  const sides = ['front', 'back', 'right', 'left', 'top', 'bottom'];
  sides.forEach(side => {
    const div = document.createElement('div');
    div.classList.add('side', side);
    cube.appendChild(div);
  });

  const cubeSides = cube.querySelectorAll('.side');
  cubeSides.forEach(side => {
    side.style.backgroundImage = `url(${imageUrl})`;
  });

  return cube;
}

function createCubes() {
  const cubeContainer = document.getElementById('cube-container');
  const createdCubes = new Set(); // Set to keep track of created cubes
  
  imageUrls.forEach(imageUrl => {
    // Check if the cube for this image URL has already been created
    if (!createdCubes.has(imageUrl)) {
      const cube = createCube(imageUrl);
      cubeContainer.appendChild(cube);
      createdCubes.add(imageUrl); // Add the image URL to the set of created cubes
    }
  });
}


const AnimatedPNG = () => {
  useEffect(() => {
    createCubes();
  }, []);

  return (
    <section className="grid md:grid-cols-1 my-12 md:my-12 py-24 gap-4 relative" id="tech">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2" id="cube-container">
          {/* Remove the statically rendered cubes */}
        </div>
      </div>
    </div>
  </section>
  );
};

export default AnimatedPNG;
