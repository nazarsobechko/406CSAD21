---
description: "Створити GitHub Actions CI з matrix для трьох операційних систем"
name: "Create actions"
agent: "Build Engineer"
---

# Create actions

## Передумови

Налаштовані npm scripts і тест `BasicAddition`; кореневий каталог визначено.

## Дії

Застосувати skill `github-actions`: створити `.github/workflows/ci.yml` з
одним job, matrix `ubuntu-latest`, `windows-latest`, `macos-latest`, подіями
для `develop` і `master`, а також `ci.sh`, що сам збирає, тестує і створює
запускний результат.

## Очікувані файли

`.github/workflows/ci.yml` і `ci.sh`.

## Перевірки

Перевірити YAML, один job, matrix, checkout, setup-node, запуск `ci.sh` і
відсутність команд build/test у YAML; локально на Windows виконати `ci.sh`
через Git Bash командою `"C:\Program Files\Git\bin\bash.exe" ci.sh`.
У workflow для кроку запуску `ci.sh` використати `shell: bash`.

## Повідомлення про помилку

«create-actions зупинено на <перевірці>: код <код>: <повний текст помилки>».
