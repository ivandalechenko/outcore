import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const comfortToI18N = (data) => {
	const output = {};

	for (const key in data) {
		for (const lang of ['ru', ...Object.keys(data[key])]) {
			if (!output[lang]) output[lang] = { translation: {} };
			output[lang].translation[key] = lang === 'ru' ? key : data[key][lang];
		}
	}

	return output;
};
i18n.use(initReactI18next).init({
	resources: comfortToI18N({
		"Настроки": {
			ua: "Налаштування",
			en: "Settings",
		},
		"Главная": {
			ua: "Головна",
			en: "Home",
		},

		// "": { 
		// 	ua: "",
		// 	en: "",
		// },


	}),
	lng: 'ru',
	fallbackLng: 'ru',
	interpolation: { escapeValue: false }
});

export default i18n;
