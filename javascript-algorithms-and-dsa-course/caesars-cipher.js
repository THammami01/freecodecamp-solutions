const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function rot13(str) {
  const arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    if (ALPHABET.includes(arr[i])) {
      let idx = ALPHABET.indexOf(arr[i]) - 13;
      if (idx < 0) idx = ALPHABET.length + idx;
      arr[i] = ALPHABET[idx];
    }
  }

  return arr.join("");
}

rot13("SERR PBQR PNZC");
