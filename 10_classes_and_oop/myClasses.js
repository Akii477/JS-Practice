// class User{
//     constructor(username, email, password)
//     {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassWord()
//     {
//         return `${this.password}abc`
//     }

//     changeUserName()
//     {
//         return `${this.username.toUpperCase()}`;
//     }
// }



// User = new User("Akash", "abc@gmail.com", "123");
// console.log(User);

// console.log(User.encryptPassWord());
// console.log(User.changeUserName());



// BEHIND THE SCENE: IF WE DO NOT HAVE CLASS.

function anotherUser(username, email, password)
{
    this.username = username;
    this.email = email;
    this.password = password;
};

anotherUser.prototype.changeUserName = function()
{
    return `${this.username.toUpperCase()}`;
};

anotherUser.prototype.encryptPassWord = function()
{
    return `${this.password}abc`
};

anotherUser = new anotherUser('Akash', "billy@google.com", 345);
console.log(anotherUser);
console.log(anotherUser.encryptPassWord());
console.log(anotherUser.changeUserName());


