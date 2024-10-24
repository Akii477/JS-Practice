function setUsername(username)
{
    // complex DB calls.
    this.username = username
    console.log("Called");
    
}

function createUser(username,email,password)
{
    // setUsername(username) // this is not called.
    setUsername.call(this,username) // method to call function setUsername
    this.email = email;
    this.password = password;
}

const Akash = new createUser("AKash", "Akash@google.com", 123);
console.log(Akash); // username is set and not be display.
