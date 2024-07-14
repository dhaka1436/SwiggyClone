import { sum } from "../sum";

const testingFxn = () => {
  const result = sum(3, 4);

  // Assertion
  expect(result).toBe(3 + 4);
};

test("Sum function should calculate the sum of two numbers", testingFxn);
