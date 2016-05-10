var placeholder = 0
for (i = 2; i < process.argv.length ; i++) {
  placeholder += +process.argv[i];
};
console.log(placeholder);
