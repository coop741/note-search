class Person {
  // default value defined in parameter
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }

  getGreeting() {
    // return 'Hi. I am ' + this.name + '!'
    // Template string
    return `Hi. I am ${this.name}!`
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major      
  }

  hasMajor() {
    return !!this.major
  }

  getDescription() {
    let description = super.getDescription()
    if(this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }
    return description
  }
}

// Class Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. I'm T J. I am visiting from Philly.
// 2. I'm T J.

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }

  getGreeting() {
    let greeting = super.getGreeting()
    if(!!this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`
    }
    return greeting
  }
}

const me = new Student('John Smith', 22, 'Computer Science');
console.log(me.getGreeting())
console.log(me.getDescription())
console.log(me.hasMajor())

const anon = new Person()
console.log(anon.getGreeting())
console.log(anon.getDescription())

const traveler = new Traveler('Anthony Smith', 20, 'Philly')
console.log(traveler.getGreeting())
console.log(traveler.getDescription())
