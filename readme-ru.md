# Библиотека для работы с геометрическими фигурами

Эта библиотека предоставляет классы для создания и работы с геометрическими фигурами, такими как прямоугольник, треугольник и круг. Построена с использованием TypeScript и использует принципы, аналогичные архитектуре стандартных JS-библиотек, таких как [Web API](https://developer.mozilla.org/ru/docs/Web/API).

## Основные функции и требования

- **Структура проекта**:

  - Использование современных подходов TypeScript (`async/await`, `Promise`, строгая типизация).
  - Использование `EventTarget` для генерации событий, связанных с изменениями параметров фигур.

- **Компиляция**:

  - Библиотека компилируется с настройками `"allowJs": false` и `"strict": true`.

- **Поддерживаемые фигуры**:
  - **Прямоугольник**: высота и ширина; вычисление площади и периметра.
  - **Треугольник**: основание и высота, периметр (с заданной третьей стороной), вычисление площади.
  - **Круг**: радиус, вычисление диаметра и площади.

### Поддержка расширения

Архитектура библиотеки позволяет легко добавлять новые фигуры (например, трапеции, многоугольники) без существенных изменений в коде.

---

## API библиотеки

Каждая фигура реализована в виде отдельного класса с методами и свойствами для доступа и изменения параметров. Библиотека также предоставляет события для отслеживания изменений параметров фигур.

### Методы и свойства

#### Прямоугольник (`Rectangle`)

- `Rectangle.height` - получить или установить высоту прямоугольника.
- `Rectangle.width` - получить или установить ширину прямоугольника.
- `Rectangle.getArea()` - возвращает площадь прямоугольника.
- `Rectangle.getPerimeter()` - возвращает периметр прямоугольника.

#### Треугольник (`Triangle`)

- `Triangle.base` - получить или установить длину основания треугольника.
- `Triangle.height` - получить или установить высоту треугольника.
- `Triangle.getArea()` - возвращает площадь треугольника.
- `Triangle.getPerimeter()` - возвращает периметр треугольника (принимает длину третьей стороны в качестве параметра).

#### Круг (`Circle`)

- `Circle.radius` - получить или установить радиус круга.
- `Circle.getDiameter()` - возвращает диаметр круга.
- `Circle.getArea()` - возвращает площадь круга.

### События

Все фигуры наследуют от `EventTarget`, что позволяет подписываться на события. Например, можно отслеживать событие `parameterChange`, которое будет срабатывать при изменении параметра фигуры.

---

## Импорт и использование

Импортируйте необходимые классы из библиотеки:

```typescript
import { Rectangle, Triangle, Circle } from "./src";
```

## Примеры использования

- Пример с использованием основных методов

```typescript
const rectangle = new Rectangle(5, 10);
console.log("Rectangle area:", rectangle.getArea());
console.log("Rectangle perimeter", rectangle.getPerimeter());
console.log("Rectangle width:", rectangle.width);

rectangle.width = 20;
console.log("Rectangle new area:", rectangle.getArea());
```

- Пример с использованием `Promise` и `async/await`

```typescript
async function calculateCircleAreaAsync(radius: number): Promise<number> {
  const circle = new Circle(radius);
  return await new Promise((resolve) => resolve(circle.getArea()));
}

calculateCircleAreaAsync(7).then((area) => {
  console.log("Async Circle Area:", area);
});
```

- Пример использования событий

```typescript
const triangle = new Triangle(3, 4, 5);

triangle.addEventListener("parameterChange", (event) => {
  console.log("Parameter changed:", event);
});

triangle.base = 6; // Генерирует событие "parameterChange"
```

## Установка и компиляция

### Установка

Чтобы установить библиотеку, выполните:

```sh
  git clone https://github.com/p-force/geo-lib-ts.git
  npm i
```

### Компиляция

Для компиляции библиотеки выполните:

```sh
npm run build
```

## Комментарии

*Все основные методы и классы снабжены комментариями в формате TSDoc, что делает использование библиотеки удобным в TypeScript.*
