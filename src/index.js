module.exports = function check(...expression) {
  let string = expression.slice("").join("");
  let newArr = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ",") {
      continue;
    } else {
      newArr.push(string[i]);
    }
  }

  const stack = [];
  let counter = 0;

  for (const symbol of newArr) {
    if (
      symbol === "(" ||
      symbol === "{" ||
      symbol === "[" ||
      (symbol === "|" && counter % 2 === 0)
    ) {
      if (symbol === "|") {
        counter++;
      }
      stack.push(symbol);
    } else if (
      symbol === ")" ||
      symbol === "}" ||
      symbol === "]" ||
      (symbol === "|" && counter % 2 !== 0)
    ) {
      if (symbol === ")") {
        if (stack.pop() !== "(") {
          return false;
        }
      }
      if (symbol === "}") {
        if (stack.pop() !== "{") {
          return false;
        }
      }
      if (symbol === "]") {
        if (stack.pop() !== "[") {
          return false;
        }
      }
      if (symbol === "|") {
        counter--;
        if (stack.pop() !== symbol) {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
};
