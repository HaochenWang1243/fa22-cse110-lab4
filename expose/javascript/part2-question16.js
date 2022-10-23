let statistics={
    redCars:21,
    blueCars:45,
    greenCars:12,
    raceCars:5,
    blackCars:40,
    rareCars:2
}
for (property in statistics){
    if(typeof property=="string" && property.charAt(0)=='r')
        console.log(`${property}`)
    else if(typeof statistics[property]=="number" && statistics[property]%2==1)
        console.log(`${property}`)
    }