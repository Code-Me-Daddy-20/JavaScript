function User (email, password) {
    
        this._email = email;
        this._password = password;

        Object.defineProperty(this, 'email',{
            get: function(){
                return this._email.toUpperCase()
            },
            set:function (v){
                this._email = v
            }
        })

        Object.defineProperty(this, 'password',{
            get: function(){
                return this._password.toUpperCase()
            },
            set:function (p){
                this._password = p
            }
        })
}

const u1 = new User("u1@nxtgmail.com", "p2a3s4s5")
console.log(u1.email)
console.log(u1.password)