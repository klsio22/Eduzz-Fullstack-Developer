const alpha = {
  A: "𝘈",
  B: "𝘉",
  C: "𝘊",
  D: "𝘋",
  E: "𝘌",
  F: "𝘍",
  G: "𝘎",
  H: "𝘏",
  I: "𝘐",
  J: "𝘑",
  K: "𝘒",
  L: "𝘓",
  M: "𝘔",
  N: "𝘕",
  O: "𝘖",
  P: "𝘗",
  Q: "𝘘",
  R: "𝘙",
  S: "𝘚",
  T: "𝘛",
  U: "𝘜",
  V: "𝘝",
  W: "𝘞",
  X: "𝘟",
  Y: "𝘠",
  Z: "𝘡",
  a: "𝘢",
  b: "𝘣",
  c: "𝘤",
  d: "𝘥",
  e: "𝘦",
  f: "𝘧",
  g: "𝘨",
  h: "𝘩",
  i: "𝘪",
  j: "𝘫",
  k: "𝘬",
  l: "𝘭",
  m: "𝘮",
  n: "𝘯",
  o: "𝘰",
  p: "𝘱",
  q: "𝘲",
  r: "𝘳",
  s: "𝘴",
  t: "𝘵",
  u: "𝘶",
  v: "𝘷",
  w: "𝘸",
  x: "𝘹",
  y: "𝘺",
  z: "𝘻",
};

let text = "$$$paragrafo das bermudas###";

let word = (text) => {
  let words = text.split(/[&\/\\#,+()$~%.:*<>{}]/g);
  let alocadeCaraters = text.split(/[a-z.]+/);
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    let newWord = words[i];
    let newCaracters = alocadeCaraters
    let arrayLetters = newWord.split("").reverse();
    console.log(arrayLetters);
    console.log(newCaracters)
    for (let j = 0; j < arrayLetters.length; j++) {
      if (arrayLetters[j] in alpha) {
        console.log(newWord.slice(1).toLowerCase());
        if(newCaracters[i] === " "){
          newWord = arrayLetters[j].toUpperCase() + newWord.slice(1).toLowerCase();
          newCaracters.splice(i,newCaracters.length)
        }
         
      }
    }

    console.log(newWord);
    words[i] = newWord;
  }

  return words.join(" ");
};

console.log(word(text));
