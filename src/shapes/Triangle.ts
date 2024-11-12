import Shape from "./AShape";

/**
  * Класс, представляющий треугольник.
  */

class Triangle extends Shape {
  private _base: number;
  private _height: number;

  /**
  * Создает экземпляр треугольника.
  * @param baseValue - Длина стороны треугольника.
  * @param heightValue - Высота треугольника.
  */
  constructor(private baseValue: number, private heightValue: number) {
    super();
    this._base = baseValue;
    this._height = heightValue;
  }

  /**
   * Возвращает длину стороны треугольника.
   * @returns Длина стороны треугольника.
   */
  get base(): number {
    return this._base;
  }

  /**
   * Устанавливает длину стороны треугольника.
   * @param value - Новое значение длины.
   * @throws {Error} Если передано отрицательное значение.
   */
  set base(value: number) {
    if (value < 0) {
      throw new Error("Длина стороны не может быть отрицательной");
    }
    this._base = value;
  }

  /**
   * Возвращает высоту треугольника.
   * @returns Высота треугольника.
   */
  get height(): number {
    return this._height;
  }

  /**
   * Устанавливает высоту треугольника.
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
  * Вычисляет площадь треугольника.
  * @returns Площадь треугольника.
  */
  getArea(): number {
    return (this._base * this._height) / 2;
  }

  /**
  * Вычисляет периметр треугольника.
  * @param value - Третья сторона треугольника.
  * @returns Периметр треугольника.
  */
  getPerimeter(value: number): number {
    return this._base + this._height + value;
  }
}

export default Triangle;
