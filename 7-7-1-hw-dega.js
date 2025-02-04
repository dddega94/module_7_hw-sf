const person = {
    full_name: 'Lebron James',
    age: 40,
}

function printInfo(){
    console.log(`Name: ${this.full_name}, Age: ${this.age}`)
}

printInfo.call(person)