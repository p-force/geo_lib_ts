import Shape from "./AShape";

/**
  * Класс, представляющий круг.
  */

class Circle extends Shape {
  private _radius: number;

  /**
  * Создает экземпляр круга.
  * @param radiusValue - Радиус круга.
  */
  constructor(private radiusValue: number) {
    super();
    this._radius = radiusValue;
  }

  /**
   * Возвращает радиус круга.
   * @returns Радиус круга.
   */
  get radius(): number {
    return this._radius;
  }

  /**
   * Устанавливает радиус круга.
   * @param value - Новое значение радиуса.
   * @throws {Error} Если передано отрицательное значение.
   */
  set radius(value: number) {
    if (value < 0) {
      throw new Error("Радиус не может быть отрицательным");
    }
    this._radius = value;
  }

  /**
  * Вычисляет площадь круга.
  * @returns Площадь круга.
  */
  getArea(): number {
    return Math.PI * this._radius ** 2;
  }

  /**
  * Вычисляет диаметр круга.
  * @returns диаметр круга.
  */
  getDiameter(): number {
    return this.radius * 2;
  }
}

export default Circle;
