import { User } from './User';
import { usersMock } from '../../services/mocks/userMock';

class UserEntity {
    createUser(user){}
    // updateUserById(id, user){}
    // deleteUserById(id){}
    // restoreUserById(id){}
    getUsers(){}
    // getUserById(){}

    autoGenerateIdFromMock(){}
    mappingFromDataSourceToUsers(users){}
    mappingFromViewtoUser(user){}
    
}


class UserEntityUtility extends UserEntity {
    autoGenerateIdFromMock() {
        const id = (usersMock.length - 1) + 1;
        return id;
    }

    mappingFromDataSourceToUsers(users) {
        const mappedUsers = users.map((user) => {
            return new User(user);
        });

        return mappedUsers;
    }

    mappingFromViewtoUser(user) {
        const mappeduser = new User(user)
        return mappeduser;
    }

}

class UserEntityFromMock extends UserEntityUtility {
    getUsers(){
        const users = this.mappingFromDataSourceToUsers(usersMock);
        return users;
    }

    createUser(user){
        user.id = this.autoGenerateIdFromMock();
        const userMapped = this.mappingFromViewtoUser(user);
        usersMock.push(userMapped);

        const users = this.getUsers();

        return users;
    }
}


export {
    UserEntityFromMock
}