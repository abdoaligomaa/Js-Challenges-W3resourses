// Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.
for (i=2014;i<=2050;i++){
    const day=new Date(i,0,1).getUTCDay()
    if(day===0){
        console.log("1st January is being a Sunday  "+i)
    }
}

//end of the challenge