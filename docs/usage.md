# Використання

## Запуск агента

1. Відкрийте корінь репозиторію в Visual Studio Code.
2. Відкрийте Copilot Chat і виберіть агента **Build Engineer**.
3. Не вводьте `/init`: у VS Code ця слеш-команда збігається з вбудованою
   командою **Initialize Copilot instructions**. Для повної підготовки
   прикріпіть файл `#init.prompt.md` і попросіть агента виконати повністю всі
   його інструкції.
4. Для окремих етапів використовуйте `/git-init`, `/create-project`,
   `/create-build`, `/create-actions`.
5. Для перевірки без змін прикріпіть файл `#check.prompt.md` і попросіть
   виконати повністю всі його інструкції.

Замість прикріплення prompt-файлу можна відкрити Command Palette і виконати
**Chat: Run Prompt...**, а потім вибрати `init.prompt.md` або `check.prompt.md`.
Приклад запиту в Copilot Chat:

```text
Виконай повністю всі інструкції з прикріпленого #init.prompt.md.
```

Агент працює в поточному корені, зупиняється на першій помилці та показує її
первинне повідомлення. Повторний запуск безпечний для вже сумісної
конфігурації.

## Локальна перевірка підготовленого проєкту

У корені проєкту виконайте:

```text
npm install
npm run build
npm test
npm start
```

Для перевірки CI-скрипта у shell із підтримкою Bash:

```text
bash ci.sh
```

Також перевірте YAML у редакторі VS Code або валідатором YAML. Очікується
один job із matrix `ubuntu-latest`, `windows-latest`, `macos-latest`,
події `push` і `pull_request` для `develop` та `master`, а команди збірки й
тестів мають бути в `ci.sh`, а не в `ci.yml`.
