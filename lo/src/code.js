const babel = require('@babel/core');

babel.transform(
  `
const a = (x) => {
  return x + 2;
};
`,
  {},
  function (err, result) {
    // codeが変換されたことを確認
    console.log('generated code:');
    console.log(result.code);
  }
);
