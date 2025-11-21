
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
