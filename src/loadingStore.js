import { makeAutoObservable } from 'mobx';
import i18n from './i18n';

class LanguageStore {

    isLoading = true

    constructor() {
        makeAutoObservable(this)
    }

    start = () => {
        this.isLoading = true;
    }

    end = () => {
        this.isLoading = false;
    }

}

const languageStore = new LanguageStore();
export default languageStore;
