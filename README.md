# Build Engineer

- **Студент:** Собечко Назар Олегович
- **Група:** КІ-406
- **Варіант:** 3 (21 у списку)

## Опис

Лабораторна робота присвячена створенню AI-агента **Build Engineer** для
автоматизації розробки та CI/CD JavaScript-проєкту з npm scripts і Jest.
Проєкт містить мінімальний Hello World-застосунок, функцію `add`, локальну
збірку та Jest-тести.

## Запуск агента

У VS Code слеш-команда `/init` збігається з вбудованою командою
**Initialize Copilot instructions**, тому оркестратор запускається інакше:
відкрийте Copilot Chat, виберіть агента **Build Engineer**, прикріпіть файл
`#init.prompt.md` і попросіть виконати повністю його інструкції. Для окремої
перевірки прикріпіть `#check.prompt.md` і так само попросіть виконати всі його
інструкції. Альтернатива — відкрити Command Palette та виконати
**Chat: Run Prompt...**, вибравши відповідний prompt-файл.

Приклад запиту:

```text
Виконай повністю всі інструкції з прикріпленого #init.prompt.md.
```

Локальні команди:

```text
npm install
npm run build
npm test
npm start
```

Детальні команди наведені в
[docs/usage.md](docs/usage.md), а схема взаємодії — у
[docs/architecture.md](docs/architecture.md).
