// class of Dogs
class Dogs {
    numberOfEyes = 2
    numberOfEars = 2
    partOfBody = "whiskers"
    hairColor = "brown"
    
    static numberOfLegs = 4 
    static partOfBody = "tail"
}
// object
const germanShepherd = new Dogs()
germanShepherd.hairColor = "brown and black"
Dogs.numberOfEars = 2
console.log(germanShepherd, Dogs)

