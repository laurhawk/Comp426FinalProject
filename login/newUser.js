
const user_data = require('data-store')({ path: process.cwd() + '/login/users/users.json' });

class User {
    constructor(user, password, first, last, email){
        this.user = user;
        this.password = password;
        this.first = first;
        this.last = last;
        this.email = email;
        this.reviews = [];
    }
}
User.getAllUsers = () => {
    return Object.keys(user_data.data).map(user);
    
}
User.findByUser = (user) => {
    let udata = user_data.get(user);
    if(udata !=null){
        return new User(udata.user);
    }
    return null;
}
User.create = (user, password, first, last, email) => {
    if(User.findByUser(user) != null){
        return "username already exists"
    }

    let u = new User (user, password, first, last, email);
    user_data.set(u.user, u);
    return u;
}

module.exports = User;