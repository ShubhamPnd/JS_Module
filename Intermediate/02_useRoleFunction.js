var getUserRole = function (name,role){

    // function getUserRole(name , role);
    // Or you can use Arrow function which is mainly used in React and other libraries
    // For E.g --->

    // var getUserRole = (name , role) => {}
    // ----------------
    
    switch (role) {
        case "admin":
            return `${name} is the admin and have all access.`
            break; // this is not necessary

        case "sub-admin":
            return `${name} is the sub-admin and have access to create and delete content.`
            break;
        
        case "testprep":
            return `${name} is the test prep and have access to only create and delete test series.`
            break;

        case "user":
            return `${name} is the user and have access to view conten and comment on it.`
            break;
    
        default:
            return `${name} is not a valid user`;
            break;
    }
}


console.log(getUserRole("Shubham", "admin"));

var getRole = getUserRole("Somya" , "user");

console.log(getRole);