const sentence = "hello there from lighthouse labs";

for (let i = 0; i <= sentence.length; i++) {
  let time = i * 50
  setTimeout(() => {
    if (i !== sentence.length) {
      process.stdout.write(sentence[i]);
    } else {
      console.log();
    }
  }, time)
}