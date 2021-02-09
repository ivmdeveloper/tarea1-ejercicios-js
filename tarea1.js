// Ejercicio 1 - Par o Impar
const evenOrOdd = number => {
    number % 2 == 0 
        ? console.log('El número es par') 
        : console.log('El número es impar')
}

// Ejercicio 2 - Buscar posición coincidente
const getCharacter = param => {
    const character = Array.from('abcdefghijklmnñopqrstuvwxyz')
    console.log(character.toString());
    console.log(`Posición Nº: ${character.indexOf(param)}`)
}

// Ejercicio 3 -  Calcula IVA

const calculaIva = monto => {
    let iva = 19
    monto += monto * iva / 100 
    console.log(`El precio con impuesto es de $${monto}`)
}

// Ejercicio 4 - Clousure - Dados
const nuevoDado = name => {
    const dados = () => {
        const number = Math.floor((Math.random() * 6) + 1)
        console.log(`${name} tiró un dado y salió ${number}`)
    };
    return dados;
}

// Ejercicio 5 - Prototipo
const Persona = function({ fullName, age }) {
    this.fullName = fullName
    this.age = age
}

Persona.prototype.saveLocalStorage = function (fullName, age) {
    localStorage.setItem('name', fullName)
    localStorage.setItem('age', age)
}

Persona.prototype.saveSessionStorage = function (fullName, age) {
    sessionStorage.setItem('name', fullName)
    sessionStorage.setItem('age', age)
}