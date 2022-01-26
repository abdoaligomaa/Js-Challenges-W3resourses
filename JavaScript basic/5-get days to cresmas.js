// Write a JavaScript program to calculate days left until next Christmas
const today=new Date()
let days=today.getDate()
let month=(today.getMonth())+1 // to make monthes start from 1 not 0
if(month===1||month===3||month===5||month===7||month===8||month===10||month===12){
    days=31-days
}else if(month===2){
    days=28-days
}else{
    days=30-days
}
// calc all days in monthes from the next month to 31 december
for(i=month+1;i<=12;i++){
    if(month===1||month===3||month===5||month===7||month===8||month===10||month===12){
        days+=31
    }else if(month===2){
        days+=28
    }else{
        days+=30
    }
}
console.log(days)