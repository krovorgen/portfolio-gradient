type SkillsMockDataType = {
  icon: string;
  percent: string;
  title: string;
  text: JSX.Element;
};

export const skillsMockData: SkillsMockDataType[] = [
  {
    icon: '/images/skills/html.svg',
    percent: '95%',
    title: 'HTML5',
    text: (
      <>
        Именно он&nbsp;создает каркас вашего сайта или приложения, а&nbsp;пятая версия позволит мне
        создавать более SEO-оптимизированную структуру вашего продукта
      </>
    ),
  },
  {
    icon: '/images/skills/css.svg',
    percent: '85%',
    title: 'CSS3',
    text: (
      <>
        Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или
        приложения. Все ограничивается только вашей фантазией!
      </>
    ),
  },
  {
    icon: '/images/skills/js.svg',
    percent: '85%',
    title: 'Java Script',
    text: (
      <>
        Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки,
        вкладки, получение данных от&nbsp;сервера и&nbsp;многое другое.
      </>
    ),
  },
  {
    icon: '/images/skills/nextjs.jpg',
    percent: '90%',
    title: 'Next.js',
    text: (
      <>
        Next.js дает вам лучший опыт разработчика со&nbsp;всеми функциями, необходимыми для
        производства: гибридный статический и&nbsp;серверный рендеринг, поддержка TypeScript,
        интеллектуальное связывание, предварительная выборка маршрута и&nbsp;многое другое.
      </>
    ),
  },
  {
    icon: '/images/skills/react.svg',
    percent: '95%',
    title: 'React',
    text: (
      <>
        Эта библиотека позволяет создавать web-приложения. Мы&nbsp;можем создать максимально
        интерактивный продукт именно под ваши цели.
      </>
    ),
  },
  {
    icon: '/images/skills/nodejs.svg',
    percent: '90%',
    title: 'Node.js',
    text: (
      <>
        Эта платформа позволяет создавать бэкенд для вашего продукта&nbsp;&mdash;
        &laquo;мозги&raquo;, которые будут выполнять действия, которые пользователь не&nbsp;видит.
      </>
    ),
  },
  {
    icon: '/images/skills/python.svg',
    percent: '80%',
    title: 'Python',
    text: (
      <>
        Этот язык программирования позволяет создавать Telegram-ботов и&nbsp;не&nbsp;только. Внутри
        программы на&nbsp;Python работает библиотека, которая отвечает за&nbsp;общение
        с&nbsp;сервером Telegram.
      </>
    ),
  },
  {
    icon: '/images/skills/django.svg',
    percent: '80%',
    title: 'Django',
    text: (
      <>
        Django считается лучшим веб-фреймворком, написанным на&nbsp;Python. Этот инструмент удобно
        использовать для разработки сайтов, работающих с&nbsp;базами данных.
      </>
    ),
  },
];
