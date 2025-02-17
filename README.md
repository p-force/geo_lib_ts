---

# Library for Working with Geometric Figures

This library provides classes for creating and working with geometric figures, such as rectangles, triangles, and circles. It is built using TypeScript and follows principles similar to the architecture of standard JS libraries, such as the [Web API](https://developer.mozilla.org/en-US/docs/Web/API).

## Key Features and Requirements

- **Project Structure**:
  - Uses modern TypeScript approaches (`async/await`, `Promise`, strict typing).
  - Uses `EventTarget` for generating events related to figure parameter changes.

- **Compilation**:
  - The library is compiled with settings `"allowJs": false` and `"strict": true`.

- **Supported Figures**:
  - **Rectangle**: height and width; calculates area and perimeter.
  - **Triangle**: base and height, perimeter (with a specified third side), calculates area.
  - **Circle**: radius, calculates diameter and area.

### Extension Support

The library's architecture allows for easy addition of new figures (such as trapezoids, polygons) without major changes to the code.

---

## Library API

Each figure is implemented as a separate class with methods and properties for accessing and modifying its parameters. The library also provides events to track changes to the figure parameters.

### Methods and Properties

#### Rectangle (`Rectangle`)

- `Rectangle.height` - Get or set the rectangle's height.
- `Rectangle.width` - Get or set the rectangle's width.
- `Rectangle.getArea()` - Returns the area of the rectangle.
- `Rectangle.getPerimeter()` - Returns the perimeter of the rectangle.

#### Triangle (`Triangle`)

- `Triangle.base` - Get or set the length of the triangle's base.
- `Triangle.height` - Get or set the height of the triangle.
- `Triangle.getArea()` - Returns the area of the triangle.
- `Triangle.getPerimeter()` - Returns the perimeter of the triangle (takes the length of the third side as a parameter).

#### Circle (`Circle`)

- `Circle.radius` - Get or set the radius of the circle.
- `Circle.getDiameter()` - Returns the diameter of the circle.
- `Circle.getArea()` - Returns the area of the circle.

### Events

All figures inherit from `EventTarget`, allowing you to subscribe to events. For example, you can track the `parameterChange` event, which is triggered when a figure's parameter changes.

---

## Import and Usage

Import the necessary classes from the library:

```typescript
import { Rectangle, Triangle, Circle } from "./src";
```

## Usage Examples

- Example using basic methods

```typescript
const rectangle = new Rectangle(5, 10);
console.log("Rectangle area:", rectangle.getArea());
console.log("Rectangle perimeter", rectangle.getPerimeter());
console.log("Rectangle width:", rectangle.width);

rectangle.width = 20;
console.log("Rectangle new area:", rectangle.getArea());
```

- Example using `Promise` and `async/await`

```typescript
async function calculateCircleAreaAsync(radius: number): Promise<number> {
  const circle = new Circle(radius);
  return await new Promise((resolve) => resolve(circle.getArea()));
}

calculateCircleAreaAsync(7).then((area) => {
  console.log("Async Circle Area:", area);
});
```

- Example using events

```typescript
const triangle = new Triangle(3, 4, 5);

triangle.addEventListener("parameterChange", (event) => {
  console.log("Parameter changed:", event);
});

triangle.base = 6; // Triggers the "parameterChange" event
```

## Installation and Compilation

### Installation

To install the library, run:

```sh
  git clone https://github.com/p-force/geo-lib-ts.git
  npm i
```

### Compilation

To compile the library, run:

```sh
npm run build
```

## Comments

*All major methods and classes are documented with TSDoc comments, making the library easy to use in TypeScript.*

--- 
