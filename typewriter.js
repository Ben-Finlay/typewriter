const sentence = "hello there from lighthouse labs";

const typewriter = function(sentence) {
  let timer = 0;

  for (const char of sentence) {
      setTimeout(() => {process.stdout.write(char)}, timer);
      timer = timer + 50;
    }
    process.stdout.write("\n")

}



typewriter(sentence);