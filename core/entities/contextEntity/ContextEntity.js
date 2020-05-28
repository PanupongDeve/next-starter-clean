import { Context } from './Context';
import { dataMock } from '../../services/mocks/dataMocks';


class ContextEntity {
    getContext(){};
}


class ConTextEntityUtility extends ContextEntity {
    getContext(){};
}


class ContextEntityFromMock extends ConTextEntityUtility {

    getContext() {
        const context = new Context(dataMock);
        return context;
    }
}



export {
    ContextEntityFromMock
}