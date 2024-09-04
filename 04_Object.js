// const tinderUser = new Object(); //Singleton
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Hamza";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullName: {
      firstName: "Hamza",
      lastName: "Khan",
    },
  },
};
// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
