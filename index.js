
let hacker1 = 'Dustin'
let hacker2 = 'Danielson'

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name. it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seem that the navigator has the longest name, it has ${hacker2.length}.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

let newString = ''

for (let i = 0; i < hacker1.length; i++) {

  newString += `${hacker1[i].toUpperCase()} `
  
}

let reversed = ''

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i]
}

console.log(newString)
console.log(reversed)

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?")
} else if ((hacker1.localeCompare(hacker2)) < 0) {
  console.log("The driver's name goes first.")
} else {
  console.log("Yo, the navigator goes first, definitely.")
}
