const obj1 = {
  a: 23,
  b: 54,
};

const obj2 = {
  b: 22,
  c: 90,
};

const obj3 = { ...obj1, ...obj2, d: 999 };

console.log(obj3); // {a: 23, b: 22, c: 90}

function configGame(options) {
    let defaults = {
        name: "Player 1",
        level: 1,
        difficulty: "normal",
        gender: "female"
    };

    let config = {...defaults, ...options}; // Combinamos el objeto defaults con options
    console.log(config);
}

let options = {
    name: "Super Master",
    gender: "male"
};
configGame(options); // {name: "Super Master", level: 1, difficulty: "normal", gender: "male"}
