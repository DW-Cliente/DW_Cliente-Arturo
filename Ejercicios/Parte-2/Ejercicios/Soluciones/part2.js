import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { FlyingRobot } from "./flying-robot.class.js";
import { MobileRobot } from "./mobile-robot.class.js";

const r1 = readline.createInterface({ input, output });

const robots = [];

function showMenu() {
  console.log(`
--------------------------------
  MENU
--------------------------------
1) Show Mobile robots
2) Show flying robots
3) Create a robot
4) Move robots
5) Fly robots
6) Show robot info
0) Exit
`);
  return r1.question("Choose an option: ");
}

let option = -1;
while (option !== 0) {
  option = Number(await showMenu());
  switch (option) {
    case 1:
      robots
        .filter((r) => r instanceof MobileRobot)
        .forEach((r) => console.log(r.toString()));
      break;
    case 2:
      robots
        .filter((r) => r instanceof FlyingRobot)
        .forEach((r) => console.log(r.toString()));
      break;
    case 3:
      const model = await r1.question("Model: ");
      const type = Number(await r1.question("1) Mobile, 2) Flying: "));
      if (type === 1) {
        const speed = Number(await r1.question("Speed (km/h): "));
        robots.push(new MobileRobot(model, speed));
      } else {
        const altitude = Number(await r1.question("Altitude (meters): "));
        robots.push(new FlyingRobot(model, altitude));
      }
      break;
    case 4:
      robots.forEach((r) => r.move?.());
      break;
    case 5:
      robots.forEach((r) => r.fly?.());
      break;
    case 6:
      const position = Number(await r1.question("Robot position: "));
      console.log(
        robots[position]?.toString() ??
          `Robot not found at position ${position}`
      );
      break;
    case 0:
      break;
    default:
      console.log("Invalid option!");
  }
}

r1.close();
