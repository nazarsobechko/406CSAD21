# Журнал взаємодії з AI

## 1. Запити

### Запит 1 — гілка `develop`

Потрібно було згенерувати агента **Build Engineer** для лабораторної
роботи, варіант 3: JavaScript, npm scripts і Jest.

Було створено:

- `.github/agents/build-engineer.agent.md`;
- skills `project-scaffold`, `build-and-test` і `github-actions`;
- prompts `git-init`, `create-project`, `create-build`, `create-actions`,
  `check` і `init`;
- `docs/architecture.md`;
- `docs/usage.md`;
- `README.md`;
- `.gitignore`.

Усього створено 14 файлів. Сам JavaScript-проєкт на цьому етапі не
створювався.

### Запит 2 — гілка `feature/init`

Потрібно було повністю виконати інструкції з `init.prompt.md` послідовно:
`git-init`, `create-project`, `create-build`, `create-actions`, `check`,
зупиняючись на першій помилці.

### Запит 3

Потрібно було виправити запуск `ci.sh` на Windows без оновлення WSL:
додати правила для Git Bash у відповідні skills і prompts, додати
`shell: bash` до workflow, повторити `create-actions` і виконати `check`.

## 2. Запуск оркестратора

Під час запуску `init` на гілці `feature/init` етапи виконувалися
послідовно:

1. `git-init` — перевірено наявний Git-репозиторій.
2. `create-project` — створено базову структуру JavaScript-проєкту.
3. `create-build` — додано npm scripts, збірку та Jest-тести.
4. `create-actions` — створено CI-скрипт і GitHub Actions workflow.
5. `check` — спочатку не виконувався через помилку на етапі
   `create-actions`, а після виправлення був виконаний повністю.

Повторний запуск `init` підтвердив ідемпотентність: наявні файли не було
перезаписано, а `check` завершився успішно.

## 3. Важливі відповіді та створені файли

Після `create-project` створено:

- `src/index.js`;
- `tests/index.test.js`.

Після `create-build` створено:

- `package.json`;
- `src/add.js` з функцією `add`;
- `tests/basicAddition.test.js` з тестом `BasicAddition`;
- `scripts/build.js`;
- `package-lock.json` після встановлення залежностей.

Результати перевірок етапу `create-build`:

- `npm run build` завершився з кодом 0;
- `npm test` завершився з кодом 0: успішно пройшли 2 набори тестів і
  2 тести;
- `npm start` вивів `Hello World`.

Після `create-actions` створено:

- `ci.sh`, який запускає збірку і тести;
- `.github/workflows/ci.yml` з одним job і matrix для
  `ubuntu-latest`, `windows-latest` та `macos-latest`.

До workflow додано `shell: bash` для запуску `ci.sh`. Після виправлення
локальний запуск через Git Bash завершився з кодом 0, а `check` повністю
підтвердив структуру, npm scripts, YAML, збірку і тести.

Правило запуску Windows-версії `ci.sh` додано до:

- `.github/skills/build-and-test/SKILL.md`;
- `.github/skills/github-actions/SKILL.md`;
- `.github/prompts/create-actions.prompt.md`;
- `.github/prompts/check.prompt.md`.

Окремо згадувалися коміти для виправлення агента, генерації проєкту,
`ci.sh` і workflow, а також README.

## 4. Помилки

### Помилка 1: команда `/init`

Запуск через `/init` у Copilot Chat спрацював як вбудована команда VS Code
**Initialize Copilot instructions** і створив зайвий
`.github/copilot-instructions.md`. Те саме повторилося через кнопку **Run
Prompt**.

### Помилка 2: запуск `bash ci.sh` у Windows

Команда `bash ci.sh` запустила Bash від WSL. WSL потребував оновлення, тому
етап `create-actions` завершився зі статусом `failed`, а `check` не
виконувався.

### Помилка 3: неповна матриця операційних систем

Під час навмисної поломки з матриці `.github/workflows/ci.yml` було
вилучено `ubuntu-latest`. Команда `check` не виявила проблему і завершилася
успішно, хоча вимога потребує всі три операційні системи. У звіті `check`
навіть було показано матрицю без `ubuntu-latest`.

## 5. Прийняті рішення

- Зайвий `.github/copilot-instructions.md` було видалено.
- `init.prompt.md` вирішено запускати прикріпленням файлу в чат без
  слеш-команди `/init`.
- WSL не оновлювати.
- Для локального запуску на Windows використовувати Git Bash:

  ```powershell
  "C:\Program Files\Git\bin\bash.exe" ci.sh
  ```

- У GitHub Actions для кроку запуску `ci.sh` явно використовувати
  `shell: bash`.
- Оркестратор має зупинятися на першій помилці; після виправлення
  повторити `create-actions` і виконати `check`.
- У `check.prompt.md` та skill `github-actions` додано сувору перевірку
  точного складу `matrix.os`: `ubuntu-latest`, `windows-latest`,
  `macos-latest`.
- Повторний `check` після виправлення повернув код 1 і повідомлення
  `Пропущено ОС: ubuntu-latest`.
- `ci.yml` відновлено командою `git restore`, а виправлення агента
  закомічено з повідомленням `Fix check: require exact
  ubuntu/windows/macos matrix`.
