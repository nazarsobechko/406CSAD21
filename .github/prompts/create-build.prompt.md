---
description: "Додати npm scripts, функцію add і Jest-тест BasicAddition"
name: "Create build"
agent: "Build Engineer"
---

# Create build

## Передумови

Структура, створена `create-project`, існує, а Node.js і npm доступні.

## Дії

Застосувати skill `build-and-test`: налаштувати `package.json`, `add`, Jest і
локальний результат збірки без дублювання сумісних наявних налаштувань.

## Очікувані файли

`package.json`, код `add`, тест `BasicAddition`, конфігурація Jest за потреби
та визначений каталог збірки.

## Перевірки

Послідовно виконати `npm run build`, `npm test` і визначений `npm start`.

## Повідомлення про помилку

«create-build зупинено на <команді>: код <код>: <повний текст помилки>».
