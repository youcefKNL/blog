import React from "react";

const HeaderChallenge = () => {
  return (
    <div className="headerChallenge">
      <h2>road to it expertise</h2>
      {/* <canvas id="c"></canvas> */}
    </div>
  );
};

export default HeaderChallenge;

// import React, { useEffect } from "react";

// const HeaderChallenge = () => {
//   useEffect(() => {
//     const c = document.getElementById("c");
//     const ctx = c.getContext("2d");
//     const txts = "01";
//     const font_size = 12;
//     const columns = c.width / font_size;
//     const drops = [];
//     for (let x = 0; x < columns; x++) drops[x] = 1;

//     function draw() {
//       ctx.clearRect(0, 0, c.width, c.height); // Clear canvas
//       ctx.fillStyle = "#490"; // Set text color
//       ctx.font = font_size + "px arial";
//       for (let i = 0; i < drops.length; i++) {
//         const text = txts[Math.floor(Math.random() * txts.length)];
//         ctx.fillText(text, i * font_size, drops[i] * font_size);
//         if (drops[i] * font_size > c.height || Math.random() > 0.98)
//           drops[i] = 0;
//         drops[i]++;
//       }
//     }

//     const intervalId = setInterval(draw, 60);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <div className="headerChallenge">
//       <h2>road to it expertise</h2>
//       <canvas id="c" style={{ backgroundColor: "transparent" }}></canvas>
//     </div>
//   );
// };

// export default HeaderChallenge;
