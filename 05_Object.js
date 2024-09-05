const course = {
  courseName: "Best JavaScript course available on youtube",
  price: "999",
  courseInstructor: "Hamza",
};

const { courseInstructor: instructor } = course;
console.log(instructor);

//This is way how jason send data jason also use object to proceed data
// {
//     "name": "Hamza",
//     "courseName": "JavaScript",
//     "price": "free"
// }
