// Speed limit = 70  then OK
// Speed limit above 70 and more 5km point 1 for the driver
// After 12 points Licence suspended

checkSpeed(850);

function checkSpeed(speed) {
    const speedLimit = 70;
    
    if (speed < speedLimit + 5){
        console.log('OK')
        return
    } 


    const points = Math.floor((speed - speedLimit) / 5);

    if (points >= 12)
        console.log('license suspended you MtF')
    else
        console.log('points' ,points);
    
}