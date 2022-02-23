module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    bracketsConfig.forEach((el) => {
      if (str[i] === el[1] && stack[stack.length - 1] === el[0]) {
        stack.pop(str[i]);
      } else if (str[i] === el[0]) {
        stack.push(str[i]);
      } else {
        return false;
      }
    });
  }
  return stack.length === 0;
};
