// this challenge for learning date and time in js 
// // the question is 
// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const today = new Date()
const day = today.getDay()
// console.log(day)
const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"]
console.log(`today is : ${dayList[day]}`)
console.log(today.getHours())
console.log(today.getMinutes())
 hour = today.getHours()
const minute = today.getMinutes()
const second = today.getSeconds()
const prepand = (hour >= 12) ? " PM " : " AM "
hour = (hour >= 12) ? hour - 12 : hour
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12
        prepand = ' Noon'
    }
    else {
        hour = 12
        prepand = ' PM'
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12
        prepand = ' Midnight'
    }
    else {
        hour = 12
        prepand = ' AM'
    }
}
console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second)

// Ending of challenge.