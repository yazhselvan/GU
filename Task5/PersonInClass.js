class Person {
    constructor(name, age, address) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`);
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`${this.name}'s age has been updated to ${this.age} years.`);
    }
  
    updateAddress(newAddress) {
      this.address = newAddress;
      console.log(`${this.name}'s address has been updated to ${this.address}.`);
    }
  }
  
  const john = new Person("John Doe", 25, "123 Main St, Cityville");
  john.displayDetails(); 
  
  john.updateAge(26);
  john.displayDetails(); 
  
  john.updateAddress("456 Oak St, Townsville");
  john.displayDetails(); 
  