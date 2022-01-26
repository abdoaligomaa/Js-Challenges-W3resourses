//  Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
const isLeap=(year)=>{
    return (year%4===0)&&(year%100===0)&&(year%400===0)
}
const leap=isLeap(2002)

if(leap){
    console.log(`is leap year`)
}else{
    console.log(`is not leap year`)

}
//end of the challenge