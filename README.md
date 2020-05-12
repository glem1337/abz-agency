## Тестовое задание на позицию front-end developer для компании  [abz.agency](https://abz.agency/).

 [Ссылка на развернутый проект](https://glem1337.github.io/abz-agency/).
 
 

## Использовал инструменты
- React;
- react-create-app;
- node-sass;
- react-bootstrap;
- react-redux;
- redux;
- redux-form;
- redux-thunk;
- react-tooltip;
- react-scrollspy;
- axios;
- aos;


## Технические требования
- React / Vue / Angular (​version ​6+);
- HTML5 / CSS3;
- CSS препроцессор (Sass/Less) или PostCSS;
- Разметка должна быть pixel-perfect (desktop: последняя версия Chrome / FF / Safari / Edge,
mobile/tablet: последняя версия Safari на iOS 12+ и Chrome на Android 7+);
- Минимальная ширина экрана 360px;
- Максимальная ширина экрана 2560px;
- Максимальная ширина основного контейнера 1170px;
- Разметка должна быть готова к переполнению содержимого, включая длину заголовка блока.
Если текст длиннее чем может отображать блок - Вы должны его обрезать и показать знак «...» с
помощью CSS или Javascript.

> Важно! Мы будем обращать внимание, насколько чистый у Вас подход к написанию CSS и Javascript-кода. Вы
можете использовать любые сторонние библиотеки CSS и Javascript без каких-либо ограничений.
Сторонние библиотеки CSS / Javascript должны быть подключены через менеджеры зависимостей npm /
yarn (а не методом копи-паста). Сборка проекта должна быть реализована с помощью одного из
популярных на данный момент task runner’ов npm / gulp / webpack (а не с помощью bash скриптов или
Makefile).
>

## Задание

1. Вам необходимо реализовать responsive верстку HTML5/CSS3 в соответствии с макетами
(mockups) http://view.maquetter.com/rkymlp/0201 - 0205 и стайл гайд (style guide)
http://view.maquetter.com/rkymlp/0101​. Все необходимые исходники Вы сможете ​найти тут​.

2. Все CTA (call to action) ссылки/кнопки должны вести на регистрацию. Обращаю Ваше внимание
на тот факт, что хэдер должен быть закреплен вверху страницы при скролле. Также обратите
внимание что:
    - Все изображения на сайте должны поддерживать Retina экраны (для моб версии).
   
    - Используйте CSS препроцессор (Sass/Less) или PostCSS.
    
    - Организуйте Ваши CSS стили в читаемом виде (группируйте CSS по функциональности, пишите разъясняющие комментарии, разделяйте стили на несколько файлов по функциональности и т.д.).

3. Работа с REST API (GET). Тут Вы найдете ​[API документацию](https://apidocs.abz.dev/test_assignment_for_frontend_developer_api_documentation).
    - Используя полученные данные юзеров реализуйте вывод блока “Our cheerful users” в
    соответствии с макетом. Кнопка “Show more” должна подгружать пользователей из API
    согласно макетам. Кнопка “Show more” должна быть скрыта, когда больше нет
    пользователей в БД (достигнута последняя страница результатов в API). Пользователи
    отсортированы по дате регистрации (новые первые).
    
    - Обратите внимание на mockups и style guide при работе с блоком юзеров. Задание
    предполагает ваше внимание к деталями вывода контента. Такие детали как количество
    блоков, “...”, tooltips, перенос строк и т.п.
    
    - Для отображения радиобаттонов на форме регистрации используйте GET /positions
    метод из API документации.
    
4. Работа с REST API (POST) – форма регистрации
    - Реализовать валидацию на фронт-енд части в соответствии с макетами и API
    документацией.
    
    - Реализовать бизнес логику формы регистрации в соответствии с макетами и API
    документацией.
    
    - После успешной регистрации обновить список пользователей в блоке “Our cheerful
    users”. Если кнопка “Show more” была нажата (т.е. больше чем одна страница
    пользователей была загружена из API), то свернуть все и отобразить только первых 6
    пользователей. В результате новый пользователь будет выведен первым и Вы сможете
    проверить корректность работы пункта 5b без перезагрузки страницы.
    
5. Самостоятельное тестирование в следующих браузерах (можно использовать BrowserStack):
    - Chrome, Firefox, Edge, Safari (Windows)
    - Chrome, Firefox, Safari (MacOS)
    - Chrome, Safari (iOS)
    - Chrome (Android)
    
6. Оптимизация вебсайта (бонусное задание). Минимизируйте и оптимизируйте css, js,
изображения, и т.д. Для этого Вам необходимо развернуть Вашу работу на любом доступном
Вам хостинге и направить на него любой доступный Вам домен.
    - Проверьте Вашу работу используя Google Page Speed и убедитесь что Ваша работа в
    зеленой зоне.
    
    - Проверьте Вашу работу используя Google Chrome Audit и убедитесь что Ваша работа в
    зеленой зоне для Performance, Best practices, SEO (mobile and desktop для 3G).
    
    - Проверьте Вашу работу используя Webpagetest и убедитесь что показатели близки к
    AAAAAA.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
