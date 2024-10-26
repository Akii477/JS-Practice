class user
{
    constructor(email, password)
    {
        this.email = email;
        this.password = password;
    }

    get password()
    {
        return this._password.toUpperCase();
    }

    set password(value)
    {
        this._password = value; // creating new varibale //beacuse we created same of two we gives error.
    }
    
}

// const Akash = new user("abc@gmail.com" , "123");
const Akash = new user("abc@gmail.com" ,"aBc")
console.log(Akash.password);

