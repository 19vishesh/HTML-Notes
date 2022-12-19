class Car {
    constructor(name, color, topSpeed) {
        // properties
        this.name = name
        this.color = color
        this.topSpeed = topSpeed
        this.currentSpeed = 0
    }

    drive(){
        // console.log('just drove 2 miles!')
        this.currentSpeed += 10
        console.log(`driving at ${this.currentSpeed} mph`)
    }
 
    getCurrentSpeed() {
        return currentSpeed
    }

    zeroToSixty(){
        setTimeout( () => {
            console.log('pHEW! THAT was fast!')
            this.currentSpeed = 60
            console.log(this.currentSpeed)
        })
    }
    brake(){
        console.log('b raking!')
        this.currentSpeed -= 10
    }

    stop() {
        this.currentSpeed = 0
    }
}

// creating a new objects
const ferrari = new Car('ferrari', 'red', 250)
console.log(ferrari)
console.log(ferrari.topSpeed) // will give ferrari object speed
console.log(ferrari.drive())
console.log(ferrari.drive())
console.log(ferrari.drive())
console.log(ferrari.currentSpeed)

console.log(ferrari.zeroToSixty())

