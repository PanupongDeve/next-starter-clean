import { UserEntityFromMock } from '../../entities/userEntity/UserEntity';


class UserCreator {
    userEntity = new UserEntityFromMock();

    constructor(userEntity) {
        this.userEntity = userEntity;
    }

    createUser(user) {
        const users = this.userEntity.createUser(user);
        return users;
    }
}


const getInstance = () => {
    let instance = null;
    if (instance === null) {
        instance = new UserCreator(new UserEntityFromMock());
    }

    return instance;
}

const userCreator = getInstance();

export {
    userCreator
}

