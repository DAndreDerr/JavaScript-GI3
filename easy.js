// Write a function that would allow you to do this:

// var run = exercise('running');
// console.log(run); // prints "Today's exercise: running"

// var swim = exercise('swimming');
// console.log(swim); // prints "Today's exercise: swimming"

let run = exercise(`running`)
let swim = exercise(`swimming`)

function exercise(x) {
    console.log(`Today's exercise: ${x}`)
}
