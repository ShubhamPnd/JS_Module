var user = {
    firstName: "Shubham",
    lastName: "Pandey",
    role: "Admin",
    logINCount: 32,
    facebookSignedIn: true,
    courseList: [] ,
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total ${this.courseList.length} courses`;
    }
};

console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React Native Course");
user.buyCourse("React JS Course");
console.log(user.getCourseCount());