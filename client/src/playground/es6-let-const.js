// function scoping
var fullName = "T $"

if(fullName) {
    var firstName = fullName.split(' ')[0]
    console.log(firstName)
}
// function scope doesn't include if statements, for loops
console.log(firstName)

// block scope would include limit scope to things outside of functions
// change firstName from var to const will fix this