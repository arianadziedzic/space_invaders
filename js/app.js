const liam = new LiamNeeson(400, 300);
liam.setArrowHandler();

// let bullets = [];

// document.body.addEventListener('keydown', (e) => {
//   if (e.keyCode == 32) {
//     bullets.push(new Bullet(liam.x, 350));
//   }
// });
//
// let minions = [new Minion(20, 20), new Minion(70, 20), new Minion(40, 20)];
//
// let collisionThreshold = 30;
//
// setInterval(() => {
//   collisionThreshold--;
//   console.log(collisionThreshold);
// }, 1000);

function draw() {
  const canvasContext = document.getElementById('canvas').getContext('2d');
  canvasContext.clearRect(0, 0, 900, 400);

  canvasContext.globalCompositeOperation = 'destination-over';
  canvasContext.drawImage(liam.el, liam.x, liam.y, 100, 100);


  // bullets = bullets.map((bullet) => {
  //   // Maybe... remove any bullets that are past 0 in the y axis?
  //   bullet.step();
  //   bullet.remo
  //   canvasContext.drawImage(bullet.el, bullet.x, bullet.y, 100, 100);
  //
  //   minions.forEach((mini) => {
  //     if (Math.abs(bullet.x - mini.x) < collisionThreshold &&
  //         Math.abs(bullet.y - mini.y) < collisionThreshold) {
  //           minions.splice(mini, 1);
  //           liam.enthusiam += 5;
  //       console.log("BOOOM!");
  //     }
  //   });
  //
  //   if (bullet.y < -100){
  //     return null;
  //   } else {
  //     return bullet;
  //   }
  // });
  //
  // bullets = bullets.filter((ele) => ele);
  //
  // // Make the min's move
  // minions.forEach((mini) => {
  //   mini.step();
  //   canvasContext.drawImage(mini.el, mini.x, mini.y, collisionThreshold*2, collisionThreshold*2);
  // });


  window.requestAnimationFrame(draw);
}

draw();





























// // canvas perimeters
// const canvas = document.querySelector('#app');
// const screen = canvas.getContext('2d');
// const size = { x: 15, y: 15};
// const gameXY = { x: canvas.width, y: canvas.height };
//
//   // App is the hub that ties in all object status updates
// class App {
//   constructor(canvas, gameXY) {
//     this.canvas = canvas;
//     this.gameXY = gameXY
//     this.liamNeeson = new LiamNeeson(this.canvas, this.gameXY);
//     this.liamNeeson.render();
//   }
//   tick() {
//     this.canvas.update();
//     this.canvas.draw(screen, gameXY)
//     update() {
//
//     }
//     draw(screen, gameXY) {
//       screen.fillscreen.fillRect(30,30,40,40);
//     }
//   }
// }
//
//
// //Space Invaders status is updated each time the page is refreshed
// const appUpdate = new App(canvas, gameXY);
// // appUpdate.tick();
//
// //Calls window to render updates, therefore the App Object
// function appLoop() {
//   window.requestAnimationFrame(() => {
//     console.log(`test`);
//     appUpdate.tick();
//     appLoop();
//   });
// }
// //
// appLoop();