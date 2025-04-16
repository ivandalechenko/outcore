import { makeAutoObservable } from 'mobx';
import i18n from './i18n';

class LanguageStore {
  activeLanguage = localStorage.getItem('lang') || "en";

  constructor() {
    makeAutoObservable(this)
  }

  setLanguage = (lang) => {
    this.activeLanguage = lang;
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };
}

const languageStore = new LanguageStore();
export default languageStore;
