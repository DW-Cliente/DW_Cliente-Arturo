/**
 * Part 1
 * Create a function that receives 2 strings. The second string must contain only a letter
 * It should return the number of times that letter (second parameter) is included in the string (first parameter).
 * It should not differentiate between uppercase and lowercase letters
 * Check that both parameters are strings and the second string is only 1 character. If there's an error, print a message and return -1
 * Example: timesChar("Characteristic", "c") -> 3
 */
console.log("EXERCISE 1 - PART ");

function timesChar(str, char) {
    if (typeof str !== "string" || typeof char !== "string") {
        console.error("Both parameters must be string");
        return -1;
    } else if (char.length !== 1) {
        console.error("Second parameter should be a single character");
        return -1;
    } else {
        let times = 0;
        str = str.toLocaleLowerCase();
        char = char.toLocaleLowerCase();
        for (let i = 0; i < str.length; i++) {
            if (str[i] === char) times++;
        }
        return times;
        // return (str.match(new RegExp(char, "ig")) || []).length; // -> SAME result in one line
    }
}

console.log(`"a" is included ${timesChar("Abracadabra", "a")} times in "Abracadabra"`);
console.log(`"e" is included ${timesChar("Abracadabra", "e")} times in "Abracadabra"`);
console.log(timesChar("Hello", 2));
console.log(timesChar("Hello", "bye"));

/**
 * Part 2
 * Create a function that takes a string as input and checks if it's a palindrome (if it's the same when reversed).
 * Do this without using loops (hint: you can use Array.from to convert a string into an array).
 * Check that the type of the parameter is "string", and the lenght is at least 1 or show an error
 * Example: isPalindrome("abeceba") -> true
 */

console.log("EXERCISE 1 - PART 2");
function isPalindrome(str) {
    if (typeof str !== "string" || str.length < 1) {
        console.error("The parameter must be a string and the length at least 1");
        return;
    }

    // Convert the string to an array of characters
    const charArray = Array.from(str);

    // Reverse the array and join the characters back into a string
    const reversedStr = charArray.reverse().join('');

    // Compare the original string with the reversed string
    return str === reversedStr;
}

console.log(isPalindrome("abeceba")); // true

/**
 * Part 3
 * Create an array of strings.
 * Filter the array to include only the strings which their length is at least 5 characters
 * Transform all the strings in the filtered array to UPPERCASE
 * Print the resulting array, using ";" as the separator
 * Don't use traditional loops! (while, for, ...)
 */
console.log("EXERCISE 1 - PART 3");

let arr = ["apple", "car", "house", "telephone", "air", "horse", "leaf"];
console.log(arr.filter(s => s.length >= 5).map(s => s.toLocaleUpperCase()).join("; "));

/**
 * Part 4
 * Develop a function that compresses a string by replacing consecutive repeating characters with
 * the character and the count of repetitions. For example, "AAAABBBCC" would become "4A3B2C".
 * Example: stringCompression("GGGHHRRRRRRRUIIIOOOO") -> 3G2H7R1U3I4O
 */

console.log("EXERCISE 1 - PART 4");
function stringCompression(str) {
    let compressedStr = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressedStr += count + str[i];
            count = 1;
        }
    }

    return compressedStr;
}

console.log(stringCompression("GGGHHRRRRRRRUIIIOOOO")); // 3G2H7R1U3I4O

/**
 * Part 5
 * Create an array with 4 values and do the following (use the correct array methods).
 * Add 2 elements at the beginning
 * Add 2 more at the end.
 * Delete positions 3,4 and 5
 * Insert 2 elements before the last element.
 * On each change, show the resulting array with its elements separated by '=>' (don't use any loop).
 */
console.log("EXERCISE 1 - PART 5");

let nums = [10, 20, 30, 40];
console.log(nums.join(' => '));
nums.unshift(0, 5);
console.log(nums.join(' => '));
nums.push(50, 60);
console.log(nums.join(' => '));
nums.splice(3, 3);
console.log(nums.join(' => '));
nums.splice(-1, 0, 55, 56);
console.log(nums.join(' => '));

/**
 * Part 6
 * Create a function that takes an array of numbers containing duplicate values. It should return the
 * first number that is repeated in the array, or -1 if there are no duplicates.
 * Do not use loops, and  if you don't know how to do it without loops, you can only use one loop
 * (.forEach counts as a loop).
 * Example: findFirstRepeated([1,4,7,3,8,4,5,5,1]) -> 4
 */

console.log("EXERCISE 1 - PART 6");
function findFirstRepeated(nums) {
    nums.push(-1, -1);
    return nums.find((elemento, index) => nums.indexOf(elemento) != index);
}

console.log(findFirstRepeated([1, 4, 7, 3, 8, 4, 5, 5, 1])); // 4
console.log(findFirstRepeated([4, 5, 7, 1, 2, 9, 12])); // -1

/**
 * Part 7
 * Create an array with several strings. Using the reduce method, return a string
 * that is a concatenation of the first letter of every string in the array.
 */

console.log("EXERCISE 1 - PART 7");

let names = ["Max", "Oliver", "Rachel", "Thomas", "Yennefer"];
console.log(names.reduce((final, name) => final + name[0], ""));

/**
 * Part 8
 * Create a function that takes an array of strings as the first parameter and a string as the second.
 * It should return a new array containing the words from the first array whose letters are all present
 * in the second string. Try not to use loops.
 * Example: filterWords(["house", "car", "watch", "table"], "catboulerham") -> ['car', 'table']
 */

console.log("EXERCISE 1 - PART 8");
function filterWords(palabras, letras) {
    return palabras.filter(p => Array.from(p).every(l => letras.includes(l)))
}

console.log(filterWords(["house", "car", "watch", "table"], "catboulerham")); // ['car', 'table']

/**
 * Part 9
 * Create a function that takes an array of lights represented by the characters 'ðŸ”´' and 'ðŸŸ¢'.
 * The function should check if the lights are alternating (e.g., ['ðŸ”´', 'ðŸŸ¢', 'ðŸ”´', 'ðŸŸ¢', 'ðŸ”´']).
 * Return the minimum number of lights that need to be changed to make the lights alternate.
 * Example: adjustLights(['ðŸ”´', 'ðŸ”´', 'ðŸŸ¢', 'ðŸ”´', 'ðŸŸ¢'])  -> 1 (change the first light to green)
 */
console.log("EXERCISE 1 - PART 9");

function adjustLights(lights) {
    const order1 = ['ðŸ”´', 'ðŸŸ¢'];
    const order2 = order1.reverse();

    const dif1 = lights.reduce((total, light, i) => total + +(light !== order1[i % 2]), 0);
    const dif2 = lights.reduce((total, light, i) => total + +(light !== order2[i % 2]), 0);
    return Math.min(dif1, dif2);
}

console.log(adjustLights(['ðŸ”´', 'ðŸ”´', 'ðŸŸ¢', 'ðŸ”´', 'ðŸŸ¢']));
console.log(adjustLights(['ðŸ”´', 'ðŸ”´', 'ðŸŸ¢', 'ðŸ”´', 'ðŸŸ¢', 'ðŸ”´', 'ðŸŸ¢', 'ðŸ”´', 'ðŸ”´', 'ðŸŸ¢']));


/**
 * Part 10
 * Create a Map object. The key will be a student name, and the value an array with all his/her exam marks.
 * Iterate through the Map and show each student's name, the marks separated by '-' and the average mark (with 2 decimals).
 * Example: Peter (7.60 - 2.50 - 6.25 - 9.00). Average: 6.34
 */
console.log("EXERCISE 1 - PART 10");

let persons = new Map();
persons.set("Jerry", [5.5, 1.25, 6, 6.75]);
persons.set("Jessica", [6, 8.6, 9, 9.25, 7.8]);
persons.set("Tom", [6, 10, 9.6, 7, 8]);

persons.forEach((marks, person) => console.log(`${person} (${marks.join(' - ')}). Average: ${(marks.reduce((t, m) => t + m, 0) / marks.length).toFixed(2)}`));

/**
 * Part 11
 * Create a Map collection where the key is the name of a dish and the value is an array of ingredients.
 * From this Map, generate another Map where the key is the ingredient name and the value is an array of
 * dishes where that ingredient appears.
 */
console.log("EXERCISE 1 - PART 11");

const recipes = new Map();
recipes.set('Fabada asturiana', ['Alubias', 'Chorizo', 'Morcilla', 'Cebolla', 'Ajo']);
recipes.set('Lentejas estofadas', ['Lentejas', 'Chorizo', 'JamÃ³n', 'Cebolla', 'Ajo']);
recipes.set('Huevos rotos', ['Huevos', 'JamÃ³n', 'Pimiento']);
recipes.set('Guisantes con jamÃ³n', ['Guisantes', 'JamÃ³n', 'Cebolla']);

const ingredients = new Map();
for (let [dish, ingredientList] of recipes) {
    for (let ingredient of ingredientList) {
        if (ingredients.has(ingredient)) {
            ingredients.get(ingredient).push(dish);
        } else {
            ingredients.set(ingredient, [dish]);
        }
    }
}

console.log(ingredients);

/**
 * Part 12
 * Create a funcion that can receive as many numbers as you want by parameter. Use rest to group them in
 * an array and print the ones that are even and the ones that arre odd separately.
 * DON'T use loops (for, while, etc.)
 */
console.log("EXERCISE 1 - PART 12");

function showEvenOdd(...nums) {
    console.log(`Even: ${nums.filter(n => n % 2 === 0)}`);
    console.log(`Odd: ${nums.filter(n => n % 2 === 1)}`);
}

showEvenOdd(23, 43, 54, 26, 9, 91, 34, 8, 7, 11);
showEvenOdd(1, 2, 3, 4, 5, 6);
showEvenOdd(1, 3, 15, 75, 89, 43, 25);

/**
 * Part 13
 * Create a function that receives an array and adds the first three numbers of the array.
 * Use array destructuring in the parameters to get those three numbers.
 * If any of those numbers is not present in the array, a default value of 0 will be assigned
 * Return the result of adding those three numbers
 */

console.log("EXERCISE 1 - PART 13");

function destructSum([a = 0, b = 0, c = 0]) {
    return a + b + c;
}

console.log(destructSum([4, 6, 2, 7, 8, 2]));
console.log(destructSum([]));
console.log(destructSum([5, , 6]));

/**
 * Part 14
 * Create a function that takes an indeterminate number of strings as arguments,
 * groups them into an array, and returns a new array containing the length of each string.
 * Do not use loops.
 * Example: getStringLengths("potato", "milk", "car", "table") -> [6, 4, 3, 5]
 */

console.log("EXERCISE 1 - PART 14");

function getStringLengths(...strings) {
    // Utilizando el operador spread para convertir los argumentos en un array
    return strings.map(str => str.length);
}

console.log(getStringLengths("potato", "milk", "car", "table")); // [6, 4, 3, 5]

/**
 * Part 15
 * Create an array, and without modifying it, generate the following derived arrays (each new array derives from the previous one):
 * - Add 2 elements to the beginning of the array
 * - Delete positions 4 and 5
 * - Concatenate the elements of another array to the end Show the resulting array after each operation.
 *
 * No operation performed should modify the array on which it operates. Show the original array at the end.
 */

console.log("EXERCISE 1 - PART 15");

const originalArray = [1, 2, 3, 4, 5, 6];

// Add 2 elements to the beginning
const arrayWithAddedElements = ['a', 'b', ...originalArray];
console.log(arrayWithAddedElements); // Output: ['a', 'b', 1, 2, 3, 4, 5, 6]

// Delete positions 4 and 5
const arrayWithoutDeletedElements = [
    ...arrayWithAddedElements.slice(0, 4),
    ...arrayWithAddedElements.slice(6)
];
console.log(arrayWithoutDeletedElements); // Output: ['a', 'b', 1, 2, 5, 6]

// Concatenate elements of another array
const anotherArray = [7, 8, 9];
const concatenatedArray = [...arrayWithoutDeletedElements, ...anotherArray];
console.log(concatenatedArray); // Output: ['a', 'b', 1, 2, 5, 6, 7, 8, 9]

// Original array remains unchanged
console.log(originalArray); // Output: [1, 2, 3, 4, 5, 6]
