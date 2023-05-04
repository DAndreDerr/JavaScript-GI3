// inside a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly.
// The object should have atleast two properties: name & ssn
// only the name property should be accessible, and it should be called through a public function
// The ssn property should not be accessible at all 

class Pii {
    name;
    #ssn;
    constructor(name, ssn) {
        this.name = name;
        this.#ssn = ssn;
    }
    getInformation() {
        return this.name
    }
}

let person = new Pii(`Dre`, 123456789)
console.log(`My name is ${person.getInformation()} and my social is ${person.ssn}`)