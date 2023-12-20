const time = () => {
    const currentTime = new Date();
    const Hour = currentTime.getHours()
    let greeting;
    if(Hour >= 0 && Hour <= 12){
        greeting = 'Good Morning'
    }
    else if(Hour >= 12 && Hour <= 15){
        greeting = "Good Afternoon"
    }
    else{
        greeting = 'Good Evening'
    }
    return greeting
}
export default time