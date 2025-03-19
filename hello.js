function Person(name) {
    this.name = name;
    return {};
}

const person1 = new Person('Charlie');
console.log(person1.name);