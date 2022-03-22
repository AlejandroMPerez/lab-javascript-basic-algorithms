//Iteration #1
let hacker1 = "Bob";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Jason";
console.log(`The navigator's name is ${hacker2}`)

console.log("-----------------------------------")

//Iteration #2
if (hacker1.length > hacker2.length) {
  console.log ("The driver has the longest name, it has", hacker1.length, "characters")
} else if (hacker1.length < hacker2.length) {
  console.log ("It seems that the neavigator has the longest name, it has", hacker2.length, "characters")
} else {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

console.log("-----------------------------------")

//Iteration #3.1
console.log(hacker2.toUpperCase().split("").join(" "));

//Iteration #3.2
let reverseStringHacker2 = hacker2.split("")
console.log(reverseStringHacker2.reverse().join(""));

//Iteration #3.3
let hacker1LexComparison = hacker1.localeCompare(hacker2)
let hacker2LexComparison = hacker2.localeCompare(hacker1)

if (hacker1LexComparison < hacker2LexComparison) {
  console.log("The driver's name goes first")
} else if (hacker2LexComparison < hacker1LexComparison) {
  console.log ("Yo, the navigator goes first definitely.")
} else {
  console.log ("What?! You both have the same name?")
}

console.log("-----------------------------------")

// Bonus #1  
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non augue et augue egestas molestie at in leo. Nulla fringilla, erat quis porttitor interdum, tellus dui congue augue, eget finibus metus risus vel dolor. Nunc vel augue semper elit consequat porta. Donec mattis ipsum quis felis efficitur condimentum. In porttitor malesuada orci, pharetra suscipit turpis volutpat at. Nam ornare sit amet velit in congue. Proin libero libero, facilisis vel dictum et, hendrerit sit amet augue. Phasellus cursus, ligula ut laoreet gravida, augue orci condimentum sapien, eu feugiat risus justo a nulla. Mauris a libero tincidunt, hendrerit mauris vitae, dapibus sem. Vivamus imperdiet risus vel purus pellentesque, quis vestibulum augue sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Donec faucibus erat non tempor condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam viverra orci vel purus facilisis, vel semper felis facilisis. Proin non ligula elit. Pellentesque at nulla eu risus condimentum venenatis sed non diam. Nam vel enim ut erat tristique molestie ut vitae risus. Fusce pretium erat sed mi finibus molestie. Sed lobortis justo velit, nec iaculis velit pellentesque at. Vestibulum id elit neque. Integer rutrum erat eget posuere facilisis. Aenean pretium, justo in efficitur fringilla, erat nibh egestas diam, et aliquet magna nisl et leo. Aenean ultrices, massa sit amet laoreet sodales, justo neque pretium lorem, a auctor ipsum dui rhoncus purus. Integer nibh lacus, viverra in egestas vitae, lacinia sed dolor. Suspendisse maximus ipsum id convallis efficitur. Quisque in interdum dolor. Phasellus sapien est, vehicula at mauris a, feugiat accumsan neque. Vestibulum ac sodales diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum luctus nulla id elit scelerisque, in consequat lacus eleifend. Vivamus lacinia bibendum ligula, id tincidunt magna pretium vel."

let loremIpsumWordCount = loremIpsum.split(" ")
console.log(loremIpsumWordCount.length)

let loremIpsumEtCount = loremIpsum.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase().split(" ")

let counter = 0;

for (let i = 0; i < loremIpsumEtCount.length; i++) {
  if (loremIpsumEtCount[i] === "et") {
    counter++;
  }
}
console.log (counter)
