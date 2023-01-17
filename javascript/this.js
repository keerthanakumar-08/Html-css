let user = {
    name:'keerthana',
    age:25,
    email:'keerthi@gmail.com',
    location:'trichy',
    login : function(){
        console.log('the user logged in')
    },
    thiskey: function(){
        console.log(this.location)
    }

};

user.thiskey()
console.log(this)

