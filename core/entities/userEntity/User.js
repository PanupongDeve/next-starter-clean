
class User {
    id;
    firstName;
    lastName;
    address;
    tel;
    softDelete;

    constructor(user) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.address = user.address;
        this.tel = user.tel;
        this.softDelete = user.softDelete;
    }
}


export {
    User
}