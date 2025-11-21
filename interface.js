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
