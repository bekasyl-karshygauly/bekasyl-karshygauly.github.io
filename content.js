/*
  Resume content: everything you read on the page lives in this file.

  How to edit:
  - Change the text inside the quotes. Each language (kk, ru, en) has its own copy.
  - To add a bullet, item or skill, copy an existing line and edit it.
  - "link" fields are optional; delete the line if there is no link.
  - After editing, regenerate the PDFs (see README.md) so the download button matches the page.
*/
window.RESUME = {
  shared: {
    photo: "assets/photo.jpg",
    phone: { value: "+7 778 856 20 88", href: "tel:+77788562088" },
    email: { value: "bekasyl.karshygauly@gmail.com", href: "mailto:bekasyl.karshygauly@gmail.com" },
    telegram: { value: "@Bekasyl", href: "https://t.me/Bekasyl" },
    github: { value: "github.com/bekasyl-karshygauly", href: "https://github.com/bekasyl-karshygauly" },
    site: { value: "bekasyl-karshygauly.github.io", href: "https://bekasyl-karshygauly.github.io/" },
    pdf: { kk: "resume-kk.pdf", ru: "resume-ru.pdf", en: "resume-en.pdf" },
    pdfName: { kk: "Bekasyl_Karshygauly_CV_KZ.pdf", ru: "Bekasyl_Karshygauly_CV_RU.pdf", en: "Bekasyl_Karshygauly_CV_EN.pdf" },
    featured: [
      {
        title: "Math Universe",
        image: "assets/preview-math-universe.jpg",
        live: "https://bekasyl-karshygauly.github.io/math-universe/",
        repo: "https://github.com/bekasyl-karshygauly/math-universe",
        tags: ["Next.js", "TypeScript", "Supabase", "KaTeX"],
        status: { kk: "Жұмыс істеп тұр · жаңа нұсқа 11.2026", ru: "Работает · новая версия 11.2026", en: "Live · new version Nov 2026" },
        desc: {
          kk: "Үш тілдегі интерактивті математика платформасы: 5 бөлім, үш деңгейлі 19 сабақ, 3D графиктер, калькуляторлар мен тесттер.",
          ru: "Интерактивная платформа по математике на трёх языках: 5 разделов, 19 уроков в трёх уровнях глубины, 3D-графики, калькуляторы и тесты.",
          en: "An interactive maths platform in three languages: 5 sections, 19 lessons in three levels of depth, 3D graphs, calculators and quizzes."
        }
      },
      {
        title: "Qarzhy",
        image: "assets/preview-qarzhy.jpg",
        live: "https://qarzhy-nu.vercel.app",
        repo: "https://github.com/bekasyl-karshygauly/qarzhy",
        tags: ["Next.js", "PostgreSQL", "Prisma", "Gemini API"],
        status: { kk: "MVP · ерте қолжетімділік", ru: "MVP · ранний доступ", en: "MVP · early access" },
        desc: {
          kk: "Теңгедегі жеке қаржы есебі: кірістер мен шығыстар, графиктер, қаржылық мақсаттар және ЖИ көмекшісі. Тіркелу, қорғалған сессиялар, PostgreSQL дерекқоры.",
          ru: "Учёт личных финансов в тенге: доходы и расходы, графики, финансовые цели и ИИ-помощник. Регистрация, защищённые сессии, база PostgreSQL.",
          en: "Personal finance tracking in tenge: income and expenses, charts, savings goals and an AI assistant. Sign-up, secure sessions, PostgreSQL database."
        }
      },
      {
        title: "Support Copilot",
        wide: true,
        image: "assets/preview-support-copilot.jpg",
        bar: "Grand Mobile · Support Copilot",
        tags: ["Python", "FastAPI", "scikit-learn", "RAG · BM25", "SQLite"],
        status: { kk: "Decentrathon 6.0 · 30–31.10.2026", ru: "Decentrathon 6.0 · 30–31.10.2026", en: "Decentrathon 6.0 · 30–31 Oct 2026" },
        desc: {
          kk: "Grand Mobile ойыншыларының өтініштерін талдайтын көмекші: тілді (6 тіл), санат пен басымдықты анықтайды, спам мен қайталануларды табады, ойын ережелеріне дәл сілтеме жасап жауап жобасын дайындайды. Төлем мен аккаунт мәселелерін әрқашан адамға жібереді. Валидацияда санат дәлдігі 87,6%, 1000 жауап жобасының бірде-бірінде тыйым салынған уәде жоқ.",
          ru: "Ассистент поддержки для игроков Grand Mobile: определяет язык (6 языков), категорию и приоритет, находит спам и дубли, готовит черновик ответа со ссылками на точные пункты правил. Платежи и взломы аккаунтов всегда передаёт человеку. На валидации точность категорий 87,6%, ни одного запрещённого обещания в 1000 черновиков.",
          en: "A support assistant for Grand Mobile players: detects language (6 languages), category and priority, flags spam and duplicates, and drafts a reply citing the exact game rules. Payments and hacked accounts always go to a human. On validation: 87.6% category accuracy and zero forbidden promises across 1,000 drafts."
        },
        note: { kk: "Код хакатонның жабық репозиторийінде", ru: "Код в закрытом репозитории хакатона", en: "Code is in the hackathon's private repository" }
      }
    ]
  },

  kk: {
    meta: { title: "Түйіндеме · Бекасыл Қаршығаұлы", lang: "kk" },
    ui: {
      resume: "Түйіндеме", download: "PDF жүктеу", print: "Басып шығару",
      contacts: "Байланыс", skills: "Дағдылар", languages: "Тілдер", extra: "Қосымша ақпарат",
      profile: "Профиль", experience: "Тәжірибе", education: "Білім", projects: "Жобалар мен жетістіктер",
      certificates: "Сертификаттар", phone: "Телефон", email: "Email", city: "Қала", telegram: "Telegram", github: "GitHub",
      open: "Ашу", featured: "Таңдаулы жобалар", live: "Сайтты ашу", code: "GitHub", view: "Түпнұсқаны көру", close: "Жабу"
    },
    name: "Бекасыл Қаршығаұлы",
    title: "Junior Software Engineer · автоматтандыру және веб-әзірлеу",
    city: "Атырау, Қазақстан",
    summary: "Өндірісті автоматтандыру мамандығының 2-курс студентімін (GPA 3.92 / 4.00), техник-электрик біліктілігім және колледждің үздік дипломы бар. Университетпен қатар IT AQL ACADEMY-де C, C++ және JavaScript үйренемін, ICPC 2026 аймақтық кезеңіне өттім. Next.js пен TypeScript-те білім беру веб-өнімдерін жасаймын: басты жобам Math Universe деп аталады, ол үш тілдегі интерактивті математика платформасы. Мақсатым: бағдарламалауды өнеркәсіптік автоматтандырумен (ОВЕН бағдарламаланатын релелері, SCADA) ұштастыру.",
    skills: [
      { group: "Бағдарламалау", items: ["C", "C++", "JavaScript", "TypeScript", "Python", "HTML / CSS", "Алгоритмдер"] },
      { group: "Веб-әзірлеу", items: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL", "Prisma"] },
      { group: "Құралдар", items: ["Git", "GitHub Actions", "Vercel", "LLM API"] },
      { group: "Инженерия", items: ["Электр монтажы", "Электр сызбаларын оқу", "Электр жабдықтарына қызмет көрсету"] }
    ],
    languages: [
      { name: "Қазақ тілі", level: "Ана тілі", value: 100 },
      { name: "Орыс тілі", level: "Еркін", value: 90 },
      { name: "Ағылшын тілі", level: "A2 · Pre-Intermediate", value: 40 }
    ],
    extra: [
      "Университет пен IT AQL ACADEMY-де қатар оқимын",
      "Қызығушылықтары: спорттық бағдарламалау, өнеркәсіптік автоматтандыру, білім беру технологиялары",
      "Мемлекеттік грант иегері"
    ],
    experience: [
      {
        role: "Негізін қалаушы және әзірлеуші", org: "Math Universe · жеке жоба", period: "09.2026 – қазір",
        bullets: [
          "Қазақ, орыс және ағылшын тілдеріндегі интерактивті математика платформасы: 5 бөлім, әр сабақ үш тереңдік деңгейінде.",
          "Графиктер мен 3D визуализациялар, калькуляторлар, тесттер, конспектілер, ЖИ көмекшісі; Supabase арқылы авторизация.",
          "Жобаны бір беттік HTML-ден Next.js + TypeScript-ке көшірдім, GitHub Actions арқылы GitHub Pages-ке жариялау.",
          "Жоспар: 2026 жылдың соңында университетке, 2027 көктемінде бүкіл елге таныстыру."
        ],
        tags: ["Next.js", "TypeScript", "Supabase", "KaTeX"],
        link: { label: "bekasyl-karshygauly.github.io/math-universe", href: "https://bekasyl-karshygauly.github.io/math-universe/" }
      },
      {
        role: "Әзірлеуші · Lunnary командасы", org: "Decentrathon 6.0 · Grand Mobile кейсі", period: "30–31.10.2026",
        bullets: [
          "Досыммен бірге екі күнде Support Copilot жасадық: ойыншылардың өтініштерін талдайтын ЖИ көмекшісі.",
          "Тілді, санатты және басымдықты анықтау, спам мен қайталануларды табу, ойын ережелеріне сілтеме жасай отырып ойыншының тілінде жауап жобасын жазу (RAG).",
          "Кейс деректері: 6 тілдегі 118 мыңнан астам өтініш."
        ],
        tags: ["Python", "FastAPI", "scikit-learn", "RAG"]
      },
      {
        role: "Волонтер", org: "AI HUB клубы · Атырау мұнай және газ университеті", period: "",
        bullets: [
          "Клуб жарыстарын ұйымдастыруға көмектестім.",
          "Екі апта сайын өтетін SAFI QUIZ зияткерлік ойынының тұрақты қатысушысымын."
        ],
        tags: []
      }
    ],
    education: [
      {
        degree: "Бакалавриат · Өндірісті автоматтандыру және басқару (6B07101)",
        org: "Сафи Өтебаев атындағы Атырау мұнай және газ университеті", period: "2025–2029",
        details: ["GPA 3.92 / 4.00 · 2026 көктемі: 4.00", "Мемлекеттік грант, үш семестр қатарынан мемлекеттік стипендия"]
      },
      {
        degree: "Бағдарламалау: C, C++, JavaScript · 4 жылдық бағдарлама",
        org: "IT AQL ACADEMY", period: "2025–2029",
        details: ["Конкурстық іріктеу: логика мен код бойынша тест және сұхбат", "Ай сайынғы емтихандар, нәтижеге байланысты стипендия"]
      },
      {
        degree: "Электр жабдықтары · техник-электрик",
        org: "Каспий өңірінің көпсалалы жоғары колледжі", period: "2021–2025",
        details: ["Үздік диплом", "Диплом қорғаудың орнына демонстрациялық емтихан (тек үздік студенттерге)"]
      }
    ],
    projects: [
      { title: "ICPC Kazakhstan Qualification 2026", meta: "Аймақтық кезеңге өтті · 18.10.2026", text: "Халықаралық студенттік бағдарламалау олимпиадасының іріктеу кезеңі." },
      { title: "Qarzhy", featured: true, meta: "Next.js · PostgreSQL · Prisma", text: "Теңгедегі жеке қаржы есебіне арналған веб-қосымша: кірістер мен шығыстар, графиктер, қаржылық мақсаттар және ЖИ көмекшісі.", link: { label: "qarzhy-nu.vercel.app", href: "https://qarzhy-nu.vercel.app" } },
      { title: "GPA 4.00 · 2026 көктемі", meta: "Атырау мұнай және газ университеті", text: "Барлық пән «A» бағасымен, оның төртеуі 100 балл: Математика 2, Физика 1, қазақ тілі, шетел тілі." }
    ],
    certificates: [
      { title: "ICPC Certificate of Achievement", image: "assets/cert-icpc.jpg", thumb: "assets/cert-icpc-thumb.jpg", issuer: "The 2026 ICPC Kazakhstan Qualification · Qualified to Regional Contest", date: "18.10.2026" },
      { title: "Демонстрациялық емтихан сертификаты", issuer: "Электр жабдықтары · Каспий өңірінің көпсалалы жоғары колледжі", date: "2025" },
      { title: "Үздік диплом", image: "assets/cert-diploma.jpg", thumb: "assets/cert-diploma-thumb.jpg", note: "Диплом нөмірлері жасырылған", issuer: "Каспий өңірінің көпсалалы жоғары колледжі · техник-электрик", date: "2025" }
    ]
  },

  ru: {
    meta: { title: "Резюме · Бекасыл Қаршығаұлы", lang: "ru" },
    ui: {
      resume: "Резюме", download: "Скачать PDF", print: "Печать",
      contacts: "Контакты", skills: "Навыки", languages: "Языки", extra: "Дополнительно",
      profile: "Профиль", experience: "Опыт", education: "Образование", projects: "Проекты и достижения",
      certificates: "Сертификаты", phone: "Телефон", email: "Email", city: "Город", telegram: "Telegram", github: "GitHub",
      open: "Открыть", featured: "Избранные проекты", live: "Открыть сайт", code: "GitHub", view: "Посмотреть оригинал", close: "Закрыть"
    },
    name: "Бекасыл Қаршығаұлы",
    title: "Junior Software Engineer · автоматизация и веб-разработка",
    city: "Атырау, Казахстан",
    summary: "Студент 2-го курса по автоматизации и управлению производством (GPA 3.92 / 4.00) с квалификацией техника-электрика и красным дипломом колледжа. Параллельно учусь в IT AQL ACADEMY (C, C++, JavaScript), прошёл на региональный этап ICPC 2026. Создаю образовательные веб-продукты на Next.js и TypeScript: главный проект Math Universe, интерактивная платформа по математике на трёх языках. Цель: соединить программирование с промышленной автоматизацией (программируемые реле ОВЕН, SCADA).",
    skills: [
      { group: "Программирование", items: ["C", "C++", "JavaScript", "TypeScript", "Python", "HTML / CSS", "Алгоритмы"] },
      { group: "Веб-разработка", items: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL", "Prisma"] },
      { group: "Инструменты", items: ["Git", "GitHub Actions", "Vercel", "LLM API"] },
      { group: "Инженерия", items: ["Электромонтаж", "Чтение электросхем", "Обслуживание электрооборудования"] }
    ],
    languages: [
      { name: "Казахский", level: "Родной", value: 100 },
      { name: "Русский", level: "Свободно", value: 90 },
      { name: "Английский", level: "A2 · Pre-Intermediate", value: 40 }
    ],
    extra: [
      "Учусь одновременно в университете и в IT AQL ACADEMY",
      "Интересы: олимпиадное программирование, промышленная автоматизация, образовательные технологии",
      "Обладатель государственного гранта"
    ],
    experience: [
      {
        role: "Основатель и разработчик", org: "Math Universe · личный проект", period: "09.2026 – н. в.",
        bullets: [
          "Интерактивная платформа по математике на казахском, русском и английском: 5 разделов, каждый урок в трёх уровнях глубины.",
          "Графики и 3D-визуализации, калькуляторы, тесты, конспекты, ИИ-помощник; авторизация через Supabase.",
          "Перевёл проект с одностраничного HTML на Next.js + TypeScript, деплой на GitHub Pages через GitHub Actions.",
          "План: презентация университету в конце 2026 года, запуск для всей страны весной 2027-го."
        ],
        tags: ["Next.js", "TypeScript", "Supabase", "KaTeX"],
        link: { label: "bekasyl-karshygauly.github.io/math-universe", href: "https://bekasyl-karshygauly.github.io/math-universe/" }
      },
      {
        role: "Разработчик · команда Lunnary", org: "Decentrathon 6.0 · кейс Grand Mobile", period: "30–31.10.2026",
        bullets: [
          "Вдвоём с другом за два дня создали Support Copilot, ИИ-ассистента для разбора обращений игроков.",
          "Определение языка, категории и приоритета, поиск спама и дублей, черновик ответа на языке игрока со ссылками на пункты правил (RAG).",
          "Данные кейса: более 118 тысяч обращений на 6 языках."
        ],
        tags: ["Python", "FastAPI", "scikit-learn", "RAG"]
      },
      {
        role: "Волонтёр", org: "Клуб AI HUB · Атырауский университет нефти и газа", period: "",
        bullets: [
          "Помогал в организации соревнований клуба.",
          "Постоянный участник интеллектуальной игры SAFI QUIZ, которая проходит раз в две недели."
        ],
        tags: []
      }
    ],
    education: [
      {
        degree: "Бакалавриат · Автоматизация и управление производством (6B07101)",
        org: "Атырауский университет нефти и газа им. С. Утебаева", period: "2025–2029",
        details: ["GPA 3.92 / 4.00 · весна 2026: 4.00", "Государственный грант, государственная стипендия три семестра подряд"]
      },
      {
        degree: "Программирование: C, C++, JavaScript · 4-летняя программа",
        org: "IT AQL ACADEMY", period: "2025–2029",
        details: ["Конкурсный отбор: тест по логике и коду, затем собеседование", "Ежемесячные экзамены, стипендия по результатам"]
      },
      {
        degree: "Электрооборудование · техник-электрик",
        org: "Прикаспийский многопрофильный высший колледж", period: "2021–2025",
        details: ["Диплом с отличием", "Демонстрационный экзамен вместо защиты диплома (допуск только для отличников)"]
      }
    ],
    projects: [
      { title: "ICPC Kazakhstan Qualification 2026", meta: "Прошёл на региональный этап · 18.10.2026", text: "Отборочный этап международной студенческой олимпиады по программированию." },
      { title: "Qarzhy", featured: true, meta: "Next.js · PostgreSQL · Prisma", text: "Веб-приложение для учёта личных финансов в тенге: доходы и расходы, графики, финансовые цели и ИИ-помощник.", link: { label: "qarzhy-nu.vercel.app", href: "https://qarzhy-nu.vercel.app" } },
      { title: "GPA 4.00 · весна 2026", meta: "Атырауский университет нефти и газа", text: "Все дисциплины на «A», четыре из них на 100 баллов: Математика 2, Физика 1, казахский язык, иностранный язык." }
    ],
    certificates: [
      { title: "ICPC Certificate of Achievement", image: "assets/cert-icpc.jpg", thumb: "assets/cert-icpc-thumb.jpg", issuer: "The 2026 ICPC Kazakhstan Qualification · Qualified to Regional Contest", date: "18.10.2026" },
      { title: "Сертификат демонстрационного экзамена", issuer: "Электрооборудование · Прикаспийский многопрофильный высший колледж", date: "2025" },
      { title: "Диплом с отличием", image: "assets/cert-diploma.jpg", thumb: "assets/cert-diploma-thumb.jpg", note: "Номера диплома скрыты", issuer: "Прикаспийский многопрофильный высший колледж · техник-электрик", date: "2025" }
    ]
  },

  en: {
    meta: { title: "Resume · Bekasyl Karshygauly", lang: "en" },
    ui: {
      resume: "Resume", download: "Download PDF", print: "Print",
      contacts: "Contact", skills: "Skills", languages: "Languages", extra: "Additional",
      profile: "Profile", experience: "Experience", education: "Education", projects: "Projects & Achievements",
      certificates: "Certificates", phone: "Phone", email: "Email", city: "City", telegram: "Telegram", github: "GitHub",
      open: "Open", featured: "Featured Projects", live: "Live site", code: "GitHub", view: "View original", close: "Close"
    },
    name: "Bekasyl Karshygauly",
    title: "Junior Software Engineer · Automation & Web",
    city: "Atyrau, Kazakhstan",
    summary: "Second-year Automation and Production Control student (GPA 3.92 / 4.00) with an electrical technician qualification and a college diploma with honors. Alongside university I study C, C++ and JavaScript at IT AQL ACADEMY and qualified for the ICPC 2026 Regional Contest. I build educational web products with Next.js and TypeScript; my flagship is Math Universe, an interactive trilingual mathematics platform. My goal is to bring programming into industrial automation (OWEN programmable relays, SCADA).",
    skills: [
      { group: "Programming", items: ["C", "C++", "JavaScript", "TypeScript", "Python", "HTML / CSS", "Algorithms"] },
      { group: "Web development", items: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL", "Prisma"] },
      { group: "Tools", items: ["Git", "GitHub Actions", "Vercel", "LLM APIs"] },
      { group: "Engineering", items: ["Electrical installation", "Reading electrical schematics", "Electrical equipment maintenance"] }
    ],
    languages: [
      { name: "Kazakh", level: "Native", value: 100 },
      { name: "Russian", level: "Fluent", value: 90 },
      { name: "English", level: "A2 · Pre-Intermediate", value: 40 }
    ],
    extra: [
      "Studying at university and IT AQL ACADEMY at the same time",
      "Interests: competitive programming, industrial automation, education technology",
      "State grant holder"
    ],
    experience: [
      {
        role: "Founder & Developer", org: "Math Universe · personal project", period: "09.2026 – present",
        bullets: [
          "Interactive mathematics platform in Kazakh, Russian and English: 5 sections, every lesson in three levels of depth.",
          "Graphs and 3D visualizations, calculators, quizzes, notes and an AI helper; authentication with Supabase.",
          "Migrated the project from a single HTML page to Next.js + TypeScript, deployed to GitHub Pages with GitHub Actions.",
          "Roadmap: present to the university by the end of 2026, launch nationwide in spring 2027."
        ],
        tags: ["Next.js", "TypeScript", "Supabase", "KaTeX"],
        link: { label: "bekasyl-karshygauly.github.io/math-universe", href: "https://bekasyl-karshygauly.github.io/math-universe/" }
      },
      {
        role: "Developer · team Lunnary", org: "Decentrathon 6.0 · Grand Mobile case", period: "30–31 Oct 2026",
        bullets: [
          "Built Support Copilot with a friend in two days: an AI assistant that triages player tickets.",
          "Detects language, category and priority, flags spam and duplicates, and drafts a reply in the player's language citing the exact game rules (RAG).",
          "Case data: over 118,000 tickets in 6 languages."
        ],
        tags: ["Python", "FastAPI", "scikit-learn", "RAG"]
      },
      {
        role: "Volunteer", org: "AI HUB club · Atyrau Oil and Gas University", period: "",
        bullets: [
          "Helped run the club's competitions.",
          "Regular player at SAFI QUIZ, a university quiz held every two weeks."
        ],
        tags: []
      }
    ],
    education: [
      {
        degree: "BSc · Automation and Production Control (6B07101)",
        org: "Safi Utebayev Atyrau Oil and Gas University", period: "2025–2029",
        details: ["GPA 3.92 / 4.00 · Spring 2026: 4.00", "State grant; state scholarship three semesters in a row"]
      },
      {
        degree: "Programming: C, C++, JavaScript · 4-year program",
        org: "IT AQL ACADEMY", period: "2025–2029",
        details: ["Competitive admission: logic and coding test, then an interview", "Monthly exams; stipend based on results"]
      },
      {
        degree: "Electrical Equipment · Electrical Technician",
        org: "Caspian Multidisciplinary Higher College", period: "2021–2025",
        details: ["Diploma with honors", "Demonstration exam instead of a thesis defense (honors students only)"]
      }
    ],
    projects: [
      { title: "ICPC Kazakhstan Qualification 2026", meta: "Qualified to the Regional Contest · 18 Oct 2026", text: "Qualification round of the International Collegiate Programming Contest." },
      { title: "Qarzhy", featured: true, meta: "Next.js · PostgreSQL · Prisma", text: "Personal finance web app in tenge: income and expenses, charts, savings goals and an AI assistant.", link: { label: "qarzhy-nu.vercel.app", href: "https://qarzhy-nu.vercel.app" } },
      { title: "GPA 4.00 · Spring 2026", meta: "Atyrau Oil and Gas University", text: "Every course graded A, four of them at 100/100: Mathematics 2, Physics 1, Kazakh language, Foreign language." }
    ],
    certificates: [
      { title: "ICPC Certificate of Achievement", image: "assets/cert-icpc.jpg", thumb: "assets/cert-icpc-thumb.jpg", issuer: "The 2026 ICPC Kazakhstan Qualification · Qualified to Regional Contest", date: "18 Oct 2026" },
      { title: "Demonstration Exam Certificate", issuer: "Electrical Equipment · Caspian Multidisciplinary Higher College", date: "2025" },
      { title: "Diploma with Honors", image: "assets/cert-diploma.jpg", thumb: "assets/cert-diploma-thumb.jpg", note: "Diploma numbers are hidden", issuer: "Caspian Multidisciplinary Higher College · Electrical Technician", date: "2025" }
    ]
  }
};
