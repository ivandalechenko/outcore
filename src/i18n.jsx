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
		"Услуги":{
			ua: "Послуги",
			en: "Services"
		},
		"Блог": {
			ua: "Блог",
			en: "Blog",
		},
		"Контакты": {
			ua: "Контакти",
			en: "Contacts"
		},
		// manager
		"Напиши нашему менеджеру": {
			ua: "Напиши нашому менеджеру",
			en: "Write to our manager",
		},
		// Hero.jsx
		" - стабильность": {
			ua: " - стабільність",
			en: " - stability",
		},
		"блекхет рекламы в": {
			ua: "чорної реклами у",
			en: "blackhat advertising in",
		},
		"хаосе Google Ads": {
			ua: "хаосі Google Ads",
			en: "chaos of Google Ads"
		},
		// Note.jsx
		"Мы специализируемся на предоставлении уникальных и эффективных решений, ": {
			ua: "Ми спеціалізуємося на наданні унікальних та ефективних рішень, ",
			en: "We specialize in providing unique and effective solutions, ",
		},
		"разработанных с учетом специфических потребностей арбитражных команд и соло-медиабаеров, работающих с Google Ads.": {
			ua: "розроблених з урахуванням специфічних потреб арбітражних команд та соло-медіабаєрів, які працюють з Google Ads.",
			en: "developed with the specific needs of arbitrage teams and solo media buyers working with Google Ads in mind."
		},
		// Btn
		"Купить аккаунт": {
			ua: "Придбати",
			en: "Buy an account",
		},
		// Advantages
		"5 лет": {
			ua: "5 років",
			en: "5 years",
		},
		"Команда профессионалов Outcore помогает арбитражникам экономить время и деньги.": {
			ua: "Команда професіоналів Outcore допомагає арбітражникам економити час і гроші.",
			en: "The Outcore team helps arbitrageurs save time and money.",
		},
		"Сотрудников ежедневно работают над тем, чтобы вы могли сосредоточиться на заливах, а не на подготовке.": {
			ua: "Працівники щодня працюють над тим, щоб ви могли зосередитися на заливах, а не на підготовці.",
			en: "Employees work daily to ensure you can focus on the traffic, not the preparation.",
		},
		"Аккаунтов с высоким трастом купили наши клиенты для запуска таких вертикалей, как крипто, казино, беттинг, нутра.": {
			ua: "Облікових записів з високим трастом купили наші клієнти для запуску таких вертикалей, як крипто, казино, беттинг, нутра.",
			en: "High-trust accounts were purchased by our clients to launch verticals such as crypto, casino, betting, and nutra."
		},
		"5 млн.": {
			ua: "5 млн.",
			en: "5 mln.",
		},
		"Средний месячный спенд наших клиентов на черные и серые вертикали.": {
			ua: "Середній місячний спенд наших клієнтів на чорні та сірі вертикалі.",
			en: "The average monthly spend of our clients on black and gray verticals.",
		},
		"Партнеров по всему миру использовали наши аккаунты и решения для успешного запуска блекхет рекламы.":{
			ua: "Партнерів по всьому світу використовували наші облікові записи та рішення для успішного запуску чорної реклами.",
			en: "Partners worldwide have used our accounts and solutions for the successful launch of blackhat advertising."
		},
		"В цифрах": {
			ua: "У цифрах",
			en: "In numbers",
		},
		// AboutUs
		"Про": {
			ua: "Про",
			en: "About",
		},
		"Наши": {
			ua: "Наші",
			en: "Our",
		},
		"Аккаунты": {
			ua: 'Облікові записи',
			en: "Accounts",
		},
		"Топовые Tier 1 аккаунты": {
			ua: "Топові Tier 1 облікові записи",
			en: "Top Tier 1 accounts",
		},
		"Все аккаунты получены напрямую от ведущих маркетинговых агентств Европы и США.": {
			ua: 'Всі облікові записи отримані безпосередньо від провідних маркетингових агентств Європи та США.',
			en: "All accounts are obtained directly from leading marketing agencies in Europe and the USA.",
		},
		"Максимальный траст и надежность": {
			ua: "Максимальний траст та надійність",
			en: "Maximum trust and reliability",
		},
		"Мы работаем только с премиальными агентствами — Premier Partners Google, что гарантирует высокий уровень доверия к аккаунтам.": {
			ua: "Ми працюємо тільки з преміальними агентствами — Premier Partners Google, що гарантує високий рівень довіри до облікових записів.",
			en: "We work exclusively with premium agencies — Google Premier Partners, which guarantees a high level of trust in the accounts."
		},
		"Минимальная вероятность банов": {
			ua: "Мінімальна ймовірність блокувань",
			en: "Minimal risk of bans",
		},
		"Высокие дневные лимиты": {
			ua: "Високі денні ліміти",
			en: "High daily limits",
		},
		"Чистая рекламная история": {
			ua: "Чиста рекламна історія",
			en: "Clean advertising history",
		},
		"Идеально подходят для тестов и масштабирования": {
			ua: "Ідеально підходять для тестів і масштабування.",
			en: "Perfectly suited for testing and scaling.",
		},
		"Дополнительные инструменты": {
			ua: "Додаткові інструменти",
			en: "Additional tools",
		},
		"Помимо аккаунтов мы предоставляем необходимые сервисы и рекомендации для стабильной работы.": {
			ua: "Окрім облікових записів, ми надаємо необхідні сервіси та рекомендації для стабільної роботи.",
			en: "In addition to accounts, we provide essential services and recommendations for stable operations.",
		},
		// Our services
		"Мы предлагаем не только проверенные аккаунты, но и полный спектр услуг для арбитражников: от настройки прокси до помощи с залива трафика.": {
			ua: "Ми пропонуємо не лише перевірені облікові записи, а й повний спектр послуг для арбітражників: від налаштування проксі до допомоги із заливом трафіку.",
			en: "We offer not only verified accounts but also a full range of services for arbitrage specialists — from proxy setup to assistance with traffic launching.",
		},
		"Наши услуги": {
			ua: "Наші послуги",
			en: "Our services",
		},
		"ФАРМ-СЕРВИС": {
			ua: "Фарм-сервіс",
			en: "Farm Service",
		},
		"ТЕХНИЧЕСКОЕ СОПРОВОЖДЕНИЕ": {
			ua: "Технічний супровід",
			en: "Technical support",
		},
		"СПЕНДОВЫЕ АККАУНТЫ GOOGLE ADS": {
			ua: "Спендові акаунти Google Ads",
			en: "Spend accounts Google Ads",
		},
		"АККАУНТЫ С ПРЕДВАРИТЕЛЬНЫМ ПРОГРЕВОМ": {
			ua: "Акаунти з попереднім прогрівом",
			en: "Pre-warmed accounts",
		},
		"КОНСАЛТИНГ ПО GOOGLE ADS": {
			ua: "Консалтинг по Google Ads",
			en: "Google Ads consulting",
		},
		"ВСЕ ВИДЫ ВЕРИФИКАЦИИ": {
			ua: "Усі види верифікації",
			en: "All types of verification",
		},
		"ПЛАТЕЖНЫЕ РЕШЕНИЯ": {
			ua: "Платіжні рішення",
			en: "Payment solutions",
		},
		// MiniBlog
		"Будьте в центре событий арбитражного мира": {
			ua: "Будьте в центрі подій арбітражного світу",
			en: "Be at the heart of the arbitrage world events",
		},
		"Время чтения:": {
			ua: "Час читання:",
			en: "Reading time:",
		},
		"мин": {
			ua: "хв",
			en: "min",
		},
		"Мы регулярно организуем мероприятия для арбитражников и маркетологов, где делимся опытом, последними трендами и лайфхаками с Google Ads.": {
			ua: "Ми регулярно організовуємо заходи для арбітражників і маркетологів, де ділимося досвідом, останніми трендами та лайфхаками з Google Ads.",
			en: "We regularly organize events for arbitrageurs and marketers, where we share experience, the latest trends, and Google Ads life hacks.",
		},
		// Footer
		"Свяжись с нами для покупки аккаунта": {
			ua: "Зв'яжіться з нами для покупки акаунта.",
			en: "Contact us to purchase an account.",
		},
		"Политика конфиденциальности": {
			ua: "Політика конфіденційності",
			en: "Privacy Policy",
		},
		"Все права защищены 2025": {
			ua: "Всі права захищені 2025",
			en: "All rights reserved 2025",
		},
		// Accounts
		"Как выбрать аккаунт": {
			ua: "Як вибрати акаунт",
			en: "How to choose an account",
		},
		"Как запустить аккаунт": {
			ua: "Як запустити акаунт",
			en: "How to launch an account",
		},
		"Как выбрать сетап": {
			ua: "Як вибрати сетап",
			en: "How to choose a setup",
		},
		"Номер": {
			ua: "Номер",
			en: "Number",
		},
		"Валюта": {
			ua: "Валюта",
			en: "Currency",
		},
		"Спенд": {
			ua: "Спенд",
			en: "Spend",
		},
		"Возраст": {
			ua: "Вік",
			en: "Age",
		},
		"Платежный профиль": {
			ua: "Платіжний профіль",
			en: "Payment profile",
		},
		"Гео": {
			ua: "Гео",
			en: "Geo",
		},
		"Цена $": {
			ua: "Ціна $",
			en: "Price $",
		},
		"Фильтры": {
			ua: "Фільтри",
			en: "Filters",
		},
		"Очистить": {
			ua: "Очистити",
			en: "Clear",
		},
		"Применить": {
			ua: "Застосувати",
			en: "Apply",
		},
		"Выберите": {
			ua: "Виберіть",
			en: "Choose",
		},
		"идеальный": {
			ua: "ідеальний",
			en: "ideal",
		},
		"Google аккаунт для залива": {
			ua: "Google акаунт для заливу",
			en: "Google account for traffic launch",
		},
		"Цена": {
			ua: "Ціна",
			en: "Price",
		},
		// Services
		"Прокси-сервисы": {
        ua: "Проксі-сервіси",
        en: "Proxy services",
    },
    "Готовые к работе аккаунты с высоким дневным лимитом, низкими рисками блокировок и историей трат на белые ниши.": {
        ua: "Готові до роботи акаунти з високим денним лімітом, низьким ризиком блокувань та історією витрат на білі ніші.",
        en: "Ready-to-use accounts with high daily limits, low risk of bans, and spending history on white niches.",
    },
    "Фарм-сервис": {
        ua: "Фарм-сервіс",
        en: "Farm service",
    },
    "Мы предоставляем профессиональный ручной фарм Gmail-аккаунтов, полностью адаптированных для работы в рекламных системах. Все аккаунты создаются инхаус фарм-отделом, без использования автоматических скриптов и ботов.": {
        ua: "Ми надаємо професійну ручну ферму Gmail-аккаунтів, повністю адаптованих для роботи в рекламних системах. Всі акаунти створюються інхаус фарм-відділом без використання автоматичних скриптів та ботів.",
        en: "We provide professional manual farming of Gmail accounts, fully adapted for work in advertising systems. All accounts are created by the in-house farm department without the use of automated scripts or bots.",
    },
    "Аккаунты с прогревом": {
        ua: "Акаунти з прогрівом",
        en: "Accounts with warm-up",
    },
    "Фарм-аккаунты, полностью верифицированные, прогретые на белые вертикали и передаваемые вместе с доменом.": {
        ua: "Фарм-аккаунти, повністю верифіковані, прогріті на білі вертикалі та передані разом з доменом.",
        en: "Farm accounts, fully verified, warmed up on white verticals, and transferred with the domain.",
    },
    "Все виды верификации": {
        ua: "Усі види верифікацій",
        en: "All types of verification",
    },
    "Мы проводим профессиональную верификацию Google Ads-аккаунтов вручную, гарантируя высокий траст и стабильность работы.": {
        ua: "Ми проводимо професійну верифікацію Google Ads акаунтів вручну, гарантуємо високий траст і стабільність роботи.",
        en: "We perform professional verification of Google Ads accounts manually, guaranteeing high trust and operational stability.",
    },
    "Платежные решения": {
        ua: "Платіжні рішення",
        en: "Payment solutions",
    },
    "Инсайдерские услуги Google Ads": {
        ua: "Інсайдерські послуги Google Ads",
        en: "Google Ads Insider services",
    },
    "Техническое сопровождение": {
        ua: "Технічне супроводження",
        en: "Technical support",
    },
    "Консалтинг по Google Ads": {
        ua: "Консалтинг по Google Ads",
        en: "Google Ads Consulting",
    },
	"История затрат на рекламу – аккаунты использовались для продвижения реального бизнеса в Tier 1 странах (США, Канада, Великобритания, ЕС).": {
    ua: "Історія витрат на рекламу – акаунти використовувались для просування реального бізнесу в країнах Tier 1 (США, Канада, Великобританія, ЄС).",
    en: "Advertising cost history – accounts were used to promote a real business in Tier 1 countries (USA, Canada, UK, EU)."
	},
	"Высокий уровень траста – проходят модерацию легче, чем новые или автофарм-аккаунты.": {
		ua: "Високий рівень довіри – проходять модерацію легше, ніж нові або автофарм-акаунти.",
		en: "High trust level – they pass moderation more easily than new or auto-farm accounts."
	},
	"Оптимизированы для сложных ниш – используются для рекламы в категориях казино, крипто, финансы и других трудномодерируемых вертикалях.": {
		ua: "Оптимізовані для складних ніш – використовуються для реклами в категоріях казино, крипто, фінанси та інших важкоконтрольованих вертикалях.",
		en: "Optimized for complex niches – used for advertising in categories like gambling, crypto, finance, and other hard-to-moderate verticals."
	},
	"Обход блокировок и ручной модерации – благодаря белой истории и правильно настроенным платежным профилям.": {
		ua: "Обхід блокувань і ручної модерації – завдяки білої історії та правильно налаштованим платіжним профілям.",
		en: "Bypassing blocks and manual moderation – thanks to a clean history and properly configured payment profiles."
	},
	"Передача аккаунта:": {
		ua: "Передача акаунта:",
		en: "Account transfer:"
	},
	"Через Gmail": {
		ua: "Через Gmail",
		en: "Via Gmail"
	},
	"На MCC": {
		ua: "На MCC",
		en: "On MCC"
	},
	"Полезные ссылки:": {
		ua: "Корисні посилання:",
		en: "Useful links:"
	},
	"Цены и наличие": {
		ua: "Ціни та наявність",
		en: "Prices and availability"
	},
	"Как выбрать аккаунт?": {
		ua: "Як вибрати акаунт?",
		en: "How to choose an account?"
	},
	"Как запустить рекламу?": {
		ua: "Як запустити рекламу?",
		en: "How to run ads?"
	},
	"Какой сетап лучше выбрать?": {
		ua: "Який сетап краще вибрати?",
		en: "Which setup is better to choose?"
	},
	"Какие инструменты использовать?": {
		ua: "Які інструменти використовувати?",
		en: "What tools to use?"
	},
	"Передача – удаленный рабочий стол с приватным прокси-решением": {
		ua: "Передача – віддалений робочий стіл з приватним проксі-рішенням",
		en: "Transfer – remote desktop with private proxy solution"
	},
	"Стоимость:": {
		ua: "Вартість:",
		en: "Cost:"
	},
	"Core Farm – премиальное решение": {
		ua: "Core Farm – преміальне рішення",
		en: "Core Farm – premium solution"
	},
	"Фарм на выделенном VDS с приватным методом проксирования": {
		ua: "Фарм на виділеному VDS з приватним методом проксування",
		en: "Farming on a dedicated VDS with a private proxy method"
	},
	"Ручной фарм в течение 5+ дней": {
		ua: "Ручний фарм протягом 5+ днів",
		en: "Manual farming for 5+ days"
	},
	"Надежное OVPN-проксирование": {
		ua: "Надійне OVPN-проксування",
		en: "Reliable OVPN proxying"
	},
	"Круглосуточный доступ к VDS": {
		ua: "Цілодобовий доступ до VDS",
		en: "24/7 access to VDS"
	},
	"Реальные SIM-карты с возможностью SMS-подтверждения": {
		ua: "Реальні SIM-картки з можливістю SMS-підтвердження",
		en: "Real SIM cards with SMS verification"
	},
	"Использование приватных резидентных прокси": {
		ua: "Використання приватних резидентних проксі",
		en: "Using private residential proxies"
	},
	"Стоимость: $75 + $15 за продление каждый месяц": {
		ua: "Вартість: $75 + $15 за продовження кожен місяць",
		en: "Cost: $75 + $15 for monthly renewal"
	},
	"Basic Farm – доступное решение": {
		ua: "Basic Farm – доступне рішення",
		en: "Basic Farm – affordable solution"
	},
	"Ручной фарм в течение 3+ дней": {
		ua: "Ручний фарм протягом 3+ днів",
		en: "Manual farming for 3+ days"
	},
	"Использование мобильных прокси": {
		ua: "Використання мобільних проксі",
		en: "Using mobile proxies"
	},
	"Передача: Cookies / Codes / Login / Password": {
		ua: "Передача: Cookies / Codes / Login / Password",
		en: "Transfer: Cookies / Codes / Login / Password"
	},
	"Стоимость: $15": {
		ua: "Вартість: $15",
		en: "Cost: $15"
	},
	"В комплекте:": {
		ua: "В комплекті:",
		en: "Included:"
	},
	"Gmail": {
		ua: "Gmail",
		en: "Gmail"
	},
	"Рекламный аккаунт с прогревом на вайтпейдж": {
		ua: "Рекламний акаунт з прогрівом на вайтпейдж",
		en: "Advertising account with warming up on a white page"
	},
	"VPS + proxy": {
		ua: "VPS + проксі",
		en: "VPS + proxy"
	},
	"Пройденная верификация": {
		ua: "Пройдена верифікація",
		en: "Completed verification"
	},
	"Домен": {
		ua: "Домен",
		en: "Domain"
	},
	"50 спенд – $250": {
		ua: "50 спенд – $250",
		en: "50 spend – $250"
	},
	"100 спенд – $350": {
		ua: "100 спенд – $350",
		en: "100 spend – $350"
	},
	"200 спенд – $500": {
		ua: "200 спенд – $500",
		en: "200 spend – $500"
	},
	"Процедура:": {
		ua: "Процедура:",
		en: "Procedure:"
	},
	"1. Создание платежного профиля": {
		ua: "1. Створення платіжного профілю",
		en: "1. Creating a payment profile"
	},
	"2. Приглашение в MCC": {
		ua: "2. Запрошення в MCC",
		en: "2. Invitation to MCC"
	},
	"3. Завершение процесса": {
		ua: "3. Завершення процесу",
		en: "3. Completing the process"
	},
	"Виды верификаций:": {
		ua: "Види верифікацій:",
		en: "Types of verifications:"
	},
	"Адвертайзер – $100 (1-3 дня)": {
		ua: "Адвертайзер – $100 (1-3 дні)",
		en: "Advertiser – $100 (1-3 days)"
	},
	"Коммерческая деятельность – $300 (1-9 дней)": {
		ua: "Комерційна діяльність – $300 (1-9 днів)",
		en: "Commercial activity – $300 (1-9 days)"
	},
	"Виртуальные карты (VCC) – проверенные BIN'ы (EU, USA)": {
		ua: "Віртуальні картки (VCC) – перевірені BIN'и (EU, USA)",
		en: "Virtual cards (VCC) – verified BINs (EU, USA)"
	},
	"Агентские кредитные линии – комиссия от 5%": {
		ua: "Агентські кредитні лінії – комісія від 5%",
		en: "Agent credit lines – commission from 5%"
	},
	"Выгрузка настроек аккаунта конкурента – $500": {
		ua: "Вигрузка налаштувань акаунта конкурента – $500",
		en: "Exporting competitor's account settings – $500"
	},
	"Определение причины бана аккаунта – $150": {
		ua: "Визначення причини бана акаунта – $150",
		en: "Identifying the reason for account ban – $150"
	},
	"Определение причины отклона объявлений – $150": {
		ua: "Визначення причини відхилення оголошень – $150",
		en: "Identifying the reason for ad rejection – $150"
	},
	"Общие заметки по аккаунту – $150": {
		ua: "Загальні нотатки по акаунту – $150",
		en: "General notes on the account – $150"
	},
	"Сроки реализации:": {
		ua: "Терміни реалізації:",
		en: "Implementation time:"
	},
	"от 1 до 48 часов": {
		ua: "від 1 до 48 годин",
		en: "from 1 to 48 hours"
	},
	"Разработка вайпейджей – от $100": {
		ua: "Розробка вайпейджів – від $100",
		en: "Development of white pages – from $100"
	},
	"Разработка лендингов – от $200": {
		ua: "Розробка лендингів – від $200",
		en: "Landing page development – from $200"
	},
	"Клоакинг – $50": {
		ua: "Клоакинг – $50",
		en: "Cloaking – $50"
	},
	"Сопровождение Google Ads – $1500": {
		ua: "Супровід Google Ads – $1500",
		en: "Google Ads support – $1500"
	},
	"Консультация Google Ads – от $300": {
		ua: "Консультація Google Ads – від $300",
		en: "Google Ads consultation – from $300"
	},
	"Техническая консультация – от $100": {
		ua: "Технічна консультація – від $100",
		en: "Technical consultation – from $100"
	},
	"для успешного": {
		"ua": "для успішного",
		"en": "for successful"
	},
	"залива трафика": {
		"ua": "заливу трафіку",
		"en": "traffic injection"
	},
	"Подробнее": {
		"ua": "Детальніше",
		"en": "Learn more"
	},
	"Хочу": {
		ua: "Хочу",
		en: "Want",
	},
	// Request
	"На главную": {
		ua: "На головну",
		en: "To the homepage",
	},
	"Наш менеджер свяжется с вами в ближайшее время": {
		ua: "Наш менеджер зв'яжеться з вами найближчим часом",
		en: "Our manager will contact you shortly",
	},
	"ОСТАВИТЬ ЗАЯВКУ": {
		ua: "ЗАЛИШИТИ ЗАЯВКУ",
		en: "SUBMIT APPLICATION",
	},
	"ДЛЯ": {
		ua: "ДЛЯ",
		en: "FOR",
	},
	"ПОКУПКИ": {
		ua: "ПОКУПКИ",
		en: "PURCHASES",
	},
	"АККАУНТА": {
		ua: "АКАУНТА",
		en: "ACCOUNT",
	},
	}),
	lng: 'ru',
	fallbackLng: 'ru',
	interpolation: { escapeValue: false }
});

export default i18n;
