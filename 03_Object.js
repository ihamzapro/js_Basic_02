// singleton
//Object.create

//Object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "Hamza",
  "Full name": "Muhammad Hamza Khan",
  [mySym]: "mykey1", //By using squre brackets we use it like symbol without squre barakets its act like a string
  age: 18,
  location: "Gujranwala",
  email: "hamza.khan951@gmail.com",
  isLoggedIn: false,
  lastLoggedDays: ["Monday", "Wednesday", "Saturday"],
};

console.log(jsUser.name);
console.log(jsUser["Full name"]);
console.log(jsUser.email);
//console.log(typeof jsUser.mySym);   //We check this varaible without square bracket

jsUser.location = "Lahore";

Object.freeze(jsUser); //Use for if we want nobody can change the value
jsUser.location = "Islamabad";
console.log(jsUser);
jsUser.greeting = function () {
  console.log("Hello JS User");
};
