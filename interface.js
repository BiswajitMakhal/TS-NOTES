"use strict";
//Inference
//Annotation
//Interface,Extend
//Type Aliases
//Intersection Type
Object.defineProperty(exports, "__esModule", { value: true });
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
let anno;
anno = 12;
anno = true;
anno = "Annotation";
//2.Function Parameter Annotation:
function sum(a, b) {
    return a + b;
}
//এখানে তুমি স্পষ্ট করে দিচ্ছো a এবং b হলো number।
//3.Function Return Type Annotation:
function doSomething() {
    console.log("Hello");
}
//এখানে তুমি বলে দিচ্ছো ফাংশন void return করবে।
//4. Array Annotation:
let numbers = [1, 2, 3];
let names = ["A", "B"];
//5. Object Annotation:
let user = {
    name: "Biswajit",
    age: 20
};
const person = {
    name: "Biswajit",
    age: 22
};
function abcd(obj) {
}
abcd({ name: "Biswajit", email: "biswajit@gmail.com", password: 1234 }); //gender na dileu no error karon gender optional
function abc(obj) {
    // obj.
}
function alias(val) {
    console.log(val);
}
alias("Biswajit");
const x = {
    name: "Biswajit",
    email: "biswajit@gmail.com",
};
//getDetails হলো একটা function, যেটা তুমি Admin2 টাইপের ভিতরে define করেছ।
// মানে Admin2 object এর ভেতরে একটা method থাকবে, যার নাম getDetails — এবং সেটা একটা string input নেবে এবং void return করবে।
function xyz(a) {
    a.getDetails("Biswajit");
}
// ==================================================================================================================================
