import Shape from "./AShape";

/**
  * Класс, представляющий прямоугольник.
  */

class Rectangle extends Shape {
  private _width: number;
  private _height: number;

  /**
  * Создает экземпляр прямоугольника.
  * @param widthValue - Ширина прямоугольника.
  * @param heightValue - Высота прямоугольника.
  */
  constructor(private widthValue: number, private heightValue: number) {
    super();
    this._width = widthValue;
    this._height = heightValue;
  }

  /**
  * Возвращает ширину прямоугольника.
  * @return Ширина прямоугольника.
  */
  get width(): number {
    return this._width;
  }

  /**
   * Устанавливает ширину прямоугольника.
   * @param value - Новое значение ширины.
   * @throws {Error} Если передано отрицательное значение.
   */
  set width(value: number) {
    if (value < 0) {
      throw new Error("Ширина не может быть отрицательной");
    }
    this._width = value;
  }

  /**
  * Возвращает высоту прямоугольника.
  * @return Высота прямоугольника.
  */
  get height(): number {
    return this._height;
  }

  /**
   * Устанавливает высоту прямоугольника.
   * @param value - Новое значение высоты.
   * @throws {Error} Если передано отрицательное значение.
   */
  set height(value: number) {
    if (value < 0) {
      throw new Error("Высота не может быть отрицательной");
    }
    this._height = value;
  }

  /**
  * Вычисляет площадь прямоугольника.
  * @returns Площадь прямоугольника.
  */
  getArea(): number {
    return this._width * this._height;
  }

  /**
  * Вычисляет периметр прямоугольника.
  * @returns Периметр прямоугольника.
  */
  getPerimeter(): number {
    return 2 * (this._width + this._height);
  }
}

export default Rectangle;
