const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result1) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result1;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result2) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result2);
      }
    );
  });
});
