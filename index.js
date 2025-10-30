//RESUELVE LOS EJERCICIOS AQUÍ
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

// Ejercicio 1
const [, empleado] = empleados;
const ana = empleado;

// Ejercicio 2
const [{ email }] = empleados;
const emailLuis = email;

// Ejercicio 3
let a = 5;
let b = 3;
[a, b] = [b, a];

// Ejercicio 4
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const { yesterday, today, tomorrow } = HIGH_TEMPERATURES;

const maximaHoy = today;
const maximaManana = tomorrow;

// Ejercicio 5

/**
 * @description Suma todos los numeros que se le pasan como argumentos
 * @param  {...number} args n numeros a sumar
 * @returns {number} Suma de los numeros
 */
const sumEveryOther = (...args) => {
  return args.reduce((acum, n) => acum + n);
};

// Ejercicio 6

/**
 * @description Suma solo los numeros de los argumentos
 * @param  {...(number|string)} args Numeros y strings
 * @returns {Array} Suma de los numeros
 */
const addOnlyNums = (...args) => {
  return args
    .filter((v) => {
      if (typeof v === "number") {
        return v;
      }
    })
    .reduce((acum, n) => acum + n);
};

// Ejercicio 7

/**
 * @description Cuenta el numero de argumentos que se le pasan
 * @param  {...any} args Cualquier numero de argumentos
 * @returns {number} Numero de argumentos
 */
const countTheArgs = (...args) => {
  return args.length;
};

// Ejercicio 8

/**
 * @description Combina dos arrays en uno solo
 * @param {Array} arr1 Primer array
 * @param {Array} arr2 Segundo array
 * @returns {Array} Array combinado
 */
const combineTwoArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

// Ejercicio 9

/**
 * @description Filtra los elementos únicos de los argumentos
 * @param  {...any} args Cualquier numero de argumentos
 * @returns {Array} Array con elementos únicos
 */
const onlyUniques = (...args) => {
  let arr = [];
  return args.filter((f) => {
    if (!arr.includes(f)) {
      return arr.push(f);
    }
  });
};

// Ejercicio 10

/**
 * @description Combina todos los arrays en uno solo
 * @param  {...any} arr Cualquier numero de arrays
 * @returns {Array} Array combinado
 */
const combineAllArrays = (...arr) => {
  return arr.flat();
};

// Ejercicio 11

/**
 * @description Suma los cuadrados de los argumentos
 * @param  {...number} args Cualquier numero de argumentos
 * @returns {number} Suma de los cuadrados
 */
const sumAndSquare = (...args) => {
  return args.map((n) => n * n).reduce((acum, n) => acum + n);
};
