const allInputFields = document.querySelectorAll(`[data-validate*="email"]`)

allInputFields.forEach((element) => {
    const charLimited = new EmailValidator(element, element.dataset)
})

// class AnimalClass {
//     constructor(animalType) {
//         console.log(`AnimalClass(${animalType})`)
//         this.animalType = animalType
//     }

//     speak(){
//         console.log(`The ${this.animalType} speaks...`)
//     }
// }

// class DogClass extends AnimalClass {
//     constructor(type){
//         super(`dog-${type}`)
//         console.log(`DogClass( ${type} )`)
//         this.type = type
//     }

//     bark() {
//         console.log(`the ${this.animalType} barks...`)
//     }

//     speak() {
//         this.bark()
//     }
// }

// // (function(){
//     var a = new AnimalClass()
//     var terrier = new DogClass(`terrier`)
//     var hound = new DogClass(`hound`)
    
// // })

