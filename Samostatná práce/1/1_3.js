// Třída Person představuje osobu s jménem a věkem.
class Person {
  // Inicializuj osobu se jménem a věkem.
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  // Vypiš do konzole jméno osoby a její věk ve formátu: "{jméno} je {věk} let starý."
  displayInfo() {
      console.log(this.name + " je " + this.age + " let starý.");
  }
}

// Vytvoř novou instanci osoby s jménem Alice a věkem 30 let.
let person = new Person("Alice", 30);

// Zavolej metodu, která vypíše informace o osobě.
person.displayInfo();
