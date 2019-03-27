// es5 also can be written as function square(x)
const square = function (x) {
    return x * x
}

// With arrow function, they are always anonymous which means you 
// cannot have name functions like 'functions square(x)'
const squareArrow = (x) => x * x

// console.log(squareArrow(9))

const fullName = "Terry Smith";

const firstName = (x) => x.split(' ')[0]

// console.log(firstName(fullName))

// Arguments object is no longer bound with arrow functions 
function add(x, y) {
    console.log(x, y)
    console.log(arguments)
    return x + y
}
const addArrow = (x,y) => {
    // babel should error and say arguments is not defined
    console.log(arguments)
    return  x + y
}
// function doesn't care if number of arguments match
// console.log(add(2,3,5))
// console.log(addArrow(2,3,5))

// this keyword is no longer bound
const user = {
    name: 'Trent',
    cities: ['WA', 'AZ', 'CA'],
    printPlacesLived: function () {
        // console.log(this.name)
        // console.log(this.cities)

        // Anonymous functions bound this to their own context.
        // With ES6 arrow functions, your functions will no longer bind
        // their own 'this' value, instead they use the 'this' value
        // of the context they were created in (aka the parent's value).

        // const that = this
        // this.cities.forEach(function(city) {
        //     console.log(that.name + ' has lived in ' + city)
        // })

        // if printPlacesLived is changed to an arrow function, this.cities
        // is no longer accessible, since now it's looking at the global scope,
        // which does not have a variable called cities, so we want to keep a normal
        // ES5 style of function.
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // })
        
        // instead of a forEach, we can use the map function to return a new modified array
        // to return the same thing as our console.log above.
        return this.cities.map((city) => this.name + ' has lived in ' + city)

    }
}
// console.log(user.printPlacesLived());


const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return new array where number have been multiplied
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy)
    } 
}

console.log(multiplier.multiply()) // given [1, 2, 3], 2, expect [2, 4, 6] to be returned
