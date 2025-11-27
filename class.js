"use strict";
//Class
Object.defineProperty(exports, "__esModule", { value: true });
//Access modifiers(public, private, protected)
//Readonly properties
//Optional properties
//Parameter properties
//Getters or Setters
//Static members
//Abstract class or Abstract method
// Basic Class Example(TypeScript):
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
}
const p1 = new Person("Biswajit", 22);
p1.greet();
//-----------Public , Private and Protected:
//1️⃣Public:
// public মানে property বা method class-এর ভিতর, বাইরে, object থেকে — সব জায়গায় access করা যাবে।
// TypeScript-এ public হলো default, না লিখলেও public ধরা হয়।
class User {
    name; // public (optional)
    age; // এটাও public, কারণ কিছু লেখা হয়নি
    //direct amra constructor-teu public declare korte partam(public name: string, age: number) upore alada vabe likhte hoto na
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const u = new User("Biswajit", 22);
console.log(u.name); // ✔ public → access allowed
console.log(u.age); // ✔ public → access allowed
//2️⃣Private:
// private মানে property/method class-এর বাইরে থেকে access করা যাবে না।
// এটা শুধু ভিতরে কাজ করবে।
// Private দেয়:
// Data নিরাপত্তা (encapsulation)
// ডিরেক্টলি sensitive data পরিবর্তন করতে না পারে ব্যবহারকারী
// Class-এর behavior control করা যায়
class BottleMaker {
    name;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    changing() {
        this.name = "Biswajit";
    }
}
let b1 = new BottleMaker("Milton");
//b1.name = "Sourav"; //class-er baire access kora jabe na
b1.changing();
//Private With Extend:
class Biscuit {
    price;
    company;
    constructor(comp) {
        this.company = comp;
        this.price = 200;
    }
    nameOfCompany() {
        this.company = "ParleG";
    }
}
class SubBrand extends Biscuit {
    constructor(comp) {
        super(comp);
    }
    getValue() {
        // console.log(this.company);//ai company ta private tai or class-er baire access kora jabe na jotoi extend korina keno //
        console.log(this.price);
    }
}
let sub1 = new SubBrand("SunFeast");
sub1.getValue();
//3️⃣Protected:
//Private te jemon extend class(child class)-a parent child-er property use kora jai na,
//kintu akhane kora jai
// protected মানে property/method টি,
// class-এর ভিতরে ব্যবহার করা যাবে
// child class (extends) এর ভিতরে ব্যবহার করা যাবে
// কিন্তু class-এর বাইরে object থেকে ব্যবহার করা যাবে না
// এটা মূলত inheritance-এর জন্য ব্যবহার হয়।
class Animal {
    sound;
    constructor(sound) {
        this.sound = sound;
    }
    makeSound() {
        console.log(this.sound);
    }
}
class Dog extends Animal {
    bark() {
        console.log("Dog says: " + this.sound); // ✔ allowed (protected)
    }
}
const d = new Dog("Woof");
// d.sound ❌ Error (outside access not allowed)
d.bark(); // ✔ allowed
d.makeSound(); // ✔ allowed (through public method)
// 🔍 Explanation:
// ✔ Inside the class
// sound access করা যায় (কারণ protected).
// ✔ Inside the child class
// Dog ক্লাস Animal কে extend করেছে।
// তাই child class এই property access করতে পারে।
// ❌ Outside the class
// d.sound লিখলে error হবে।
// কারণ protected outside access allow করে না।
// ------------Readonly Property:
// readonly মানে variable/object property শুধুমাত্র পড়া যাবে, কিন্তু change করা যাবে না।
// এটা শুধু TypeScript layer-এ কাজ করে (compile-time error), runtime-এ JavaScript normal থাকে।
class Read {
    book;
    constructor(book) {
        this.book = book;
    }
    BookName() {
        // this.book = "Atomic Habits"; //cannot assign book because it is a readonly property
    }
}
let book1 = new Read("The Power of Your Subconscious Mind");
// ------------------Optional properties:
class Course {
    title;
    duration; // optional
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
    }
}
const c1 = new Course("JavaScript");
const c2 = new Course("TypeScript", 40);
// --------------Parameter Properties:
//mane constructor-er moddhe direct variable amra diye di aar tar sathe value tao pass kore di with (public, private, protected, readonly)
class Para {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//------------Getters or Setters:
// get :Getter হলো এমন method যেটা class property read করানোর জন্য ব্যবহার হয়।
// Getter call করার সময় আমরা method-এর নামকে property-এর মতো ব্যবহার করতে পারি।
// set:Setter হলো এমন method যেটা class property change/update করানোর জন্য ব্যবহার হয়,
// এবং সেখানে তুমি validation করতে পারো।
class Drugs {
    _health;
    constructor(_health) {
        this._health = _health;
    }
    get health() {
        return this._health; //underscore ta ai karone deoa hoi pore giye jate same name er method likhte pari , otherwise different name likhte hobe
    }
    set health(value) {
        this._health = value;
    }
}
let d1 = new Drugs("Bad");
d1.health; //Bad
d1.health = "So much bad for health"; //update
console.log(d1.health);
//--------------Static members:
// static keyword ব্যবহার করলে property/method class-এর সাথে attach হয়।
// object বানালে static member object-এর property হয় না।
// এগুলো সাধারণত utility/value store করার জন্য ব্যবহার করা হয়।
class Student {
    static schoolName = "ABC School"; // static property
    static showSchool() {
        console.log(Student.schoolName);
    }
}
Student.showSchool(); // ✔ OK
console.log(Student.schoolName); // ✔ OK
// const s = new Student();
// console.log(s.schoolName);  // ❌ ERROR (not allowed)
// s.showSchool();             // ❌ ERROR
// --------------Abstract class and Abstract method:
//Abstract class: Abstract class হলো এমন class যেটাকে সরাসরি object বানানো যায় না।
//  এটা শুধু child class-এর জন্য structure/blueprint তৈরি করে।
//Abstract method:যে method-এর কোনো body (implementation) নেই।
//  শুধুমাত্র ঘোষণা করা হয়, কিন্তু কাজ করে না।
//  Child class বাধ্যতামূলকভাবে এটাকে implement করবে।
class Payment {
}
class Paytm extends Payment {
    pay(amount) {
        console.log(`Paid ₹${amount} using Paytm`);
    }
}
//const pay1 = new Payment(); ❌ You cannot do this (error)
const p = new Paytm();
p.pay(500); // Paid ₹500 using Paytm
