"use strict";
//Variable Declaration,
//  Arrays,
//  Tuple,
//  Union,
//  Object,
//  Function,
//  Annotations,
//  Type alias,
//  interface,abstract class, abstract method,
//  extend
//  generics
//  modules
//  Array of Objects etc
Object.defineProperty(exports, "__esModule", { value: true });
//----------Tuple:
// Tuple হলো TypeScript-এর এমন এক data type যেখানে array-এর মতো দেখায়, কিন্তু position অনুযায়ী আলাদা আলাদা type store করা যায়।
// 👉 সহজ ভাষায়:
// Tuple = fixed order + fixed types array
let user = ["Biswajit", 25];
// ==============================================================================================================================
//-----------Enums(Enumerations):
// Enum = “fixed value-এর গ্রুপ” কে একটি নাম দিয়ে রাখা।
// মানে যেসব value বারবার ব্যবহার হবে, এবং যেগুলো fixed — সেগুলোকে এক জায়গায় ধরে রাখা।
//JavaScript-এ enum নেই, কিন্তু object দিয়ে enum-এর মতো বানানো যায়
// const Roles = {
//   ADMIN: "admin",
//   USER: "user",
//   GUEST: "guest"
// };
// console.log(Roles.ADMIN); // admin
//TypeScript-এ enum থাকে (JS-এ compile হয়ে object হয়)
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
UserRoles.SUPER_ADMIN;
//কেন enum ব্যবহার করা হয়?
//✔️ ভুল লেখা বা spelling mistake প্রতিরোধ
// if (role === "adminnn")  // spelling mistake 😞
//✔️ Fixed options maintain করা সহজ
//✔️ কোড clean এবং readable হয়
//if (role === UserRoles.ADMIN)   // safe 😄
//================================================================================================================================
//---------Any:
//✔️ এতে যেকোনো ধরনের value রাখা যায়
//✔️ TypeScript error দেবে না
//✔️ Type system off হয়ে যায়
//Without any:
let a; //akhane type number set korlam
a = 12;
// a = "Biswajit;" //error asbe karon akhane string ache number na, number set kora hoe chilo.
//With any:
let data;
// let data;     kichu na likhleu aita any hoto
data = 10; // number
data = "hello"; // string
data = true; // boolean
data = [1, 2, 3];
//Why (any) is dangerous?
// কারণ TypeScript-এর মূল উদ্দেশ্য হলো ভুল ধরানো—
// আর any সেই protection হারিয়ে ফেলে।
//When to use any?
// ✔️ যখন আপনি data-এর টাইপ জানেন না
// ✔️ যখন API থেকে অজানা data আসে
// ✔️ খুব early stage prototype বানানোর সময়
// ✔️ পুরনো JS কোড migrate করার সময়
//===================================================================================================
// ----------Unknown:
// ✔️ যেকোনো টাইপের value রাখা যাবে
// ✔️ কিন্তু সেই value ব্যবহার করার আগে TypeScript আপনাকে check করতে বাধ্য করবে
// ✔️ এটা any থেকে safer
let type;
type = 10;
type = "hello";
type = true;
// সব ঠিক আছে।
// কিন্তু যদি ব্যবহার করতে যান:
// type.toUpperCase();  ❌ Error (TS check করবে)
// TypeScript বলবে:
// “তুমি জানো তো এটা string? First prove it.”
//You must check type:
if (typeof type === "string") {
    console.log(type.toUpperCase()); // ✔️ Safe
}
//==================================================================================
//------------Void:
// void মানে: function কিছু return করে না.
//  অর্থাৎ function কাজ করবে, কিন্তু কিছু value ফেরত দেবে না।
function sayHello() {
    console.log("Hello!");
}
// এই function শুধু console-এ print করবে —
// কিন্তু return করবে nothing.
// Wrong example:
function test() {
    //   return 10;  ❌ Error
}
//void function-এ value return করা allowed নয়।
// এটার default return → undefined.
// Right example:
function test2() {
    return 10; //number return 
}
// =========================================================================================
//---------------Null, Undefined, Never:
//1️⃣ null মানে: কোনো value নেই — ইচ্ছা করে খালি রাখা হয়েছে।
let x = null;
// x=12; ❌error
//2️⃣undefined:
let y;
// y = 10; ❌error
//3️⃣never:
// never হলো এমন একটি টাইপ যা কখনও কোনো value ধরে না।
// অর্থাৎ:
// 👉 এই function কখনও return করবে না
// 👉 বা এমন কোনো জিনিস যা logically অসম্ভব
// Without never → TypeScript জানে না যে function কখনো return করবে না
// এখানে TS বলে:
// “হয়তো return করবে, maybe undefined return হবে”
// "আমি জানি না function শেষ হবে কি না"
// With never → TypeScript 100% নিশ্চিত function কখনও return করবে না
function abcd() {
    while (true) {
        console.log("Running..."); //infinite loop 
    }
}
abcd();
console.log("Hello"); //with never TypeScript নিশ্চিত function কখনও return করবে না
// ☝️
//abcd() infinite loop এ আটকে গেছে
// তাই interpreter নিচের লাইনে নামতে পারছে না
// তাই "Hello" কখনো output হবে না
//=======================================================================================================
//# sourceMappingURL=BasicType.js.map