//Inference
//Annotation
//Interface,Extend
//Type Aliases
//Intersection Type


//-----------Inference:
// TypeScript নিজে থেকেই কোনো ভ্যালু দেখে তার টাইপ আন্দাজ করে নেয় — এটাকেই বলে Type Inference।
// মানে তুমি টাইপ লিখে না দিলেও, TypeScript নিজে বুঝে ফেলে ভ্যারিয়েবলের টাইপ কী হবে।

let a = 10;
// এখানে তুমি টাইপ লেখোনি, কিন্তু TypeScript বুঝে নেবে:
// a একটি number
// তাই পরে তুমি a = "Biswajit" দিলে error দেবে

//---------Annotation:
// Type Annotation হলো তুমি নিজে হাতে কোনো ভ্যারিয়েবল, ফাংশন, প্যারামিটার, রিটার্ন ভ্যালু ইত্যাদির টাইপ লিখে দেওয়া।
// TypeScript যেটা আন্দাজ করে (type inference), সেখানে তুমি স্পষ্টভাবে টাইপ বলে দাও — এটাকেই বলে annotation।

//1.Variable Annotation:
let anno: number | boolean | string;

anno = 12;
anno = true;
anno = "Annotation"

//2.Function Parameter Annotation:
function sum(a: number, b: number) {
    return a + b;
}
//এখানে তুমি স্পষ্ট করে দিচ্ছো a এবং b হলো number।

//3.Function Return Type Annotation:
function doSomething(): void {
    console.log("Hello");
}
//এখানে তুমি বলে দিচ্ছো ফাংশন void return করবে।

//4. Array Annotation:
let numbers: number[] = [1, 2, 3];
let names: string[] = ["A", "B"];

//5. Object Annotation:
let user: { name: string; age: number } = {
    name: "Biswajit",
    age: 20
};

//------------Interface:
// TypeScript-এর interface হলো Object, Class, Function — যেগুলোর shape/structure define করার জন্য ব্যবহার করা হয়।
// এটা basically একটা blueprint (নকশা), যেখানে তুমি বলে দাও:
// কোন property থাকবে
// property-এর type কী হবে
// কোনটা optional
// কোনটা readonly
// কীভাবে method থাকবে

//Basic Interface Example:
interface User {
    name: string;
    age: number;
}

const person: User = {
    name: "Biswajit",
    age: 22
};

//  User হলো structure
//  person object must follow the interface

//Interface for Function Type Example:
interface User2 {
    name: string;
    email: string;
    password: number;
    gender?: string;// ?--> optional, gender ta dileu thik na dileu thik
}
function abcd(obj: User2) {

}
abcd({ name: "Biswajit", email: "biswajit@gmail.com", password: 1234 });//gender na dileu no error karon gender optional

// ------------Extend:
// TypeScript-এ interface কে extend করা মানে হলো—একটা interface আরেকটা interface-এর property/structure inherit করবে।
// এটা ঠিক class inheritance-এর মত, কিন্তু শুধু structure share করে।

interface Admin extends User2 {
    admin: boolean;
}

function abc(obj: Admin) {
    // obj.
}
// =============================================================================================================

//----------Type Aliases:
// Type alias দিয়ে তুমি যেকোনো type —
// primitive, object, function, union, tuple — সবকিছুকে নতুন নামে define করতে পারো।

//Function Type Alias Example:
type arg = string | null;

function alias(val: arg) {
    console.log(val)
}
alias("Biswajit");

// =========================================================================================================

// ----------Intersection Type:
// TypeScript-এর Intersection ( & ) একটু এমন জিনিস, যে দুই বা তার বেশি টাইপকে একসাথে মিশিয়ে একটা নতুন type তৈরি করে।

// Basic Example:
type User3 = {
    name: string;
};

type Account = {
    email: string;
};

type UserAccount = User3 & Account;

const x: UserAccount = {
    name: "Biswajit",
    email: "biswajit@gmail.com",
};

// Example2:
type User4 = {
    name: string;
    email: string;
};

type Admin2 = User4 & {
    getDetails(user: string): void;
};
//getDetails হলো একটা function, যেটা তুমি Admin2 টাইপের ভিতরে define করেছ।
// মানে Admin2 object এর ভেতরে একটা method থাকবে, যার নাম getDetails — এবং সেটা একটা string input নেবে এবং void return করবে।

function xyz(a: Admin2) {
    a.getDetails("Biswajit");
}

// ==================================================================================================================================

