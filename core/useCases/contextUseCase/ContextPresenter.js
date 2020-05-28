import { ContextEntityFromMock } from '../../entities/contextEntity/ContextEntity';


class ContextPresenter {
    contextEntity = new ContextEntityFromMock();

    constructor(contextEntity) {
        this.contextEntity = contextEntity;
    }

    getContext() {
        const context = this.contextEntity.getContext();
        return context;
    }
}


const getInstance = () => {
    let instance = null;
    if (instance === null) {
        instance = new ContextPresenter(new ContextEntityFromMock());
    }

    return instance;
}

const contextPresenter = getInstance();

export {
    contextPresenter
}

