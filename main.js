// Inputs- prompt for month and year of birth //
let YearofBirth = prompt( "Please enter your year of birth.")
let MonthofBirth = prompt ("Please enter your month of birth in numeric form: 1 for Jan, 2 for Feb etc.")
let CurrentMonth = prompt( "Please enter the current month in numeric form.")
let CurrentYear = prompt ( "Please enter current year.")
// ask Javascripy for the current date //

// create a variable to calculate the seconds in a month// 

let secsInMonth=(60*60*24*30)

// calculate seconds in birth year and current year. (Edge Data)//
let secsinBirthYear=((12-MonthofBirth) *secsInMonth)
let secondsinCurrentYear =( (12-CurrentMonth)*secsInMonth)


//Calculate the number of months from the users birth month untill the current date and output answer to user.//

let SecondsAlive =( (CurrentYear-YearofBirth-2)*12*secsInMonth) + secsinBirthYear + secondsinCurrentYear
document.write ( " Congratulations! You've been alive " + SecondsAlive + " seconds.  Keep it up! ")







