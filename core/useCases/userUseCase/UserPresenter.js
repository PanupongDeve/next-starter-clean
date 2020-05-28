import { UserEntityFromMock } from '../../entities/userEntity/UserEntity';


class UserPresenter {
    userEntity = new UserEntityFromMock();

    constructor(userEntity) {
        this.userEntity = userEntity;
    }

    getUsers() {
        const users = this.userEntity.getUsers();
        return users;
    }
}


const getInstance = () => {
    let instance = null;
    if (instance === null) {
        instance = new UserPresenter(new UserEntityFromMock());
    }

    return instance;
}

const userPresenter = getInstance();

export {
    userPresenter
}

