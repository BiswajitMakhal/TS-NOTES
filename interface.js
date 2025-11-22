"use strict";
//------------Interface:
// TypeScript-এর interface হলো Object, Class, Function — যেগুলোর shape/structure define করার জন্য ব্যবহার করা হয়।
// এটা basically একটা blueprint (নকশা), যেখানে তুমি বলে দাও:
// কোন property থাকবে
// property-এর type কী হবে
// কোনটা optional
// কোনটা readonly
// কীভাবে method থাকবে
Object.defineProperty(exports, "__esModule", { value: true });
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
