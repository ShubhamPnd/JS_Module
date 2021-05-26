var user = "admin";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("You get access to create/delete courses");
        break;
    case "testprep":
        console.log("You get access to create/delete tests");
        break;
    case "user":
        console.log("You get access to consume content only");
        break;
    default:
        console.log("Error Login---Trial User");
        break;
}