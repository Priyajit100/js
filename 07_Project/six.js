//generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  // const randomColor = () => `rgb(${[0,0,0].map(() => Math.floor(Math.random() * 256)).join(',')})`;

  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  const generatedColors = new Set(); // To track previously generated colors

// const randomColor = function () {
//   const hex = '0123456789ABCDEF';
//   let color;
  
//   do {
//     color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += hex[Math.floor(Math.random() * 16)];
//     }
//   } while (generatedColors.has(color)); // Keep generating until unique

//   generatedColors.add(color); // Add the newly generated color to the set
//   return color;
// };

// console.log(randomColor()); // Will return a unique color
  
  