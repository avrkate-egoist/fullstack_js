import { ageClassification } from "./main.js";
import { getWeekDay } from "./main.js";

it("incorrect values", () => {
  expect(ageClassification(-1)).toBe(null);
  expect(ageClassification(123)).toBe("Неможливо");
});

it("boundary values", () => {
  expect(ageClassification(24)).toBe("Дитинство");
  expect(ageClassification(44)).toBe("Молодість");
  expect(ageClassification(65)).toBe("Зрілість");
  expect(ageClassification(75)).toBe("Старість");
  expect(ageClassification(90)).toBe("Довголіття");
  expect(ageClassification(122)).toBe("Рекорд");
});

it("middle values", () => {
  expect(ageClassification(10)).toBe("Дитинство");
  expect(ageClassification(30)).toBe("Молодість");
  expect(ageClassification(50)).toBe("Зрілість");
  expect(ageClassification(70)).toBe("Старість");
  expect(ageClassification(80)).toBe("Довголіття");
  expect(ageClassification(100)).toBe("Рекорд");
});

it("number written as a string", () => {
  expect(ageClassification("27")).toBe("Молодість");
  expect(ageClassification("abc")).toBe(NaN);
  expect(ageClassification("двадцять сім")).toBe(NaN);
});

it("valid days", () => {
  expect(getWeekDay(1)).toBe("Понеділок");
  expect(getWeekDay(2)).toBe("Вівторок");
  expect(getWeekDay(3)).toBe("Середа");
  expect(getWeekDay(4)).toBe("Четвер");
  expect(getWeekDay(5)).toBe("Пʼятниця");
  expect(getWeekDay(6)).toBe("Субота");
  expect(getWeekDay(7)).toBe("Неділя");
});

it("invalid numbers", () => {
  expect(getWeekDay(0)).toBe(null);
  expect(getWeekDay(8)).toBe(null);
  expect(getWeekDay(-1)).toBe(null);
});

it("string input", () => {
  expect(getWeekDay("1")).toBe("Понеділок");
  expect(getWeekDay("abc")).toBe(NaN);
});
