"use strict";

/* Завдання 1

a) Створити клас Людина.
  Властивості:
    імʼя;
    стать.
  Методи:
    конструктор, який приймає два параметри: імʼя та стать.

b) Створити клас Квартира.
  Властивості:
    конструктор не потрібен;
    масив жителів, який при створенні пустий.
  Методи:
    додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

c) Створити клас Будинок.

  Властивості:
    масив квартир, який при створенні пустий;
    максимальна кількість квартир.
  Методи:
    конструктор, який приймає один параметр: максимальну кількість квартир;
    додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

d) В якості демонстраціїї створити:
  декілька екземплярів класу Людина;
  декілька екземплярів класу Квартира;
  додадити екземпляри класу Людина до екземплярів класу Квартира;
  екземпляр класу Будинок;
  додадити екземпляри класу Квартира до екземплярів класу Будинок.
*/
class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

class Apartment {
  residents = [];

  addResident(human) {
    if (human instanceof Human) {
      this.residents.push(human);
    } else {
      console.log("Додавати можна лише людей");
    }
  }
}

class House {
  constructor(apartmentMax) {
    this.apartments = [];
    this.apartmentMax = apartmentMax;
  }

  addApartment(apartment) {
    if (this.apartments.length < this.apartmentMax) {
      this.apartments.push(apartment);
    } else {
      console.log("Вже максимальна кількість квартир");
    }
  }
}

const house = new House(5);

const bigHouse = new House(10);

const lina = new Human("Lina", "female");
const alex = new Human("Alex", "male");
const jack = new Human("Jack", "male");
const clara = new Human("Clara", "female");
const kate = new Human("Kate", "female");

const apt1 = new Apartment();
const apt2 = new Apartment();
const apt3 = new Apartment();

apt1.addResident(lina);
apt1.addResident(alex);

apt2.addResident(jack);

apt3.addResident(clara);
apt3.addResident(kate);

house.addApartment(apt1);
house.addApartment(apt2);

bigHouse.addApartment(apt3);

console.log("жителі в house:", house);
console.log("жителі в bigHouse:", bigHouse);

// ==========================================================

/* Завдання 2. ЗА БАЖАННЯМ
Мережа фастфудів пропонує кілька видів гамбургерів:
  маленький (50 тугриків, 20 калорій);
  великий (100 тугриків, 40 калорій).

Гамбургер може бути з одним із декількох видів начинок:
  сиром (+ 10 тугриків, + 20 калорій);
  салатом (+ 20 тугриків, + 5 калорій);
  картоплею (+ 15 тугриків, + 10 калорій).

Можна додати добавки:
  посипати приправою (+15 тугриків, 0 калорій)
  полити майонезом (+ 20 тугриків, +5 калорій).


Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.

Підказка: потрібен клас Гамбургер, константи (великими літерами), методи для вибору опцій та розрахунку потрібних величин.
Все що береться від імені класу - це статичні методи або властивості.
*/

class Hamburger {
  constructor(size, stuff) {
    this.size = size;
    this.stuff = stuff;
    this.topping = [];
  }
  static SIZE_SMALL = {
    prise: 50,
    calories: 20,
  };

  static SIZE_BIG = {
    prise: 100,
    calories: 40,
  };

  static STUFFING_CHEESE = {
    prise: 10,
    calories: 20,
  };

  static STUFFING_SALAD = {
    prise: 20,
    calories: 5,
  };

  static STUFFING_POTATO = {
    prise: 15,
    calories: 10,
  };

  static TOPPING_SAUCE = {
    prise: 15,
    calories: 0,
  };

  static TOPPING_MAYO = {
    prise: 20,
    calories: 5,
  };

  addTopping(topping) {
    this.topping.push(topping);
  }

  calculateCalories() {
    let total = this.size.calories + this.stuff.calories;
    for (const topping of this.topping) {
      total = total + topping.calories;
    }
    return total;
  }

  calculatePrice() {
    let total = this.size.prise + this.stuff.prise;
    for (const topping of this.topping) {
      total = total + topping.prise;
    }
    return total;
  }
}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE,
);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: ", hamburger.calculateCalories());

// скільки коштує
console.log("Price: ", hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: ", hamburger.calculatePrice());
