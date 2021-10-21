function addUpTo(n) {
  let total = 0;
  for (i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
//O(n) runtime complexity, this is linear time complexity, as n increases, the time it takes to addup increases

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
//O(1) runtime complexity

function charCount(str) {
  const lower = str.toLowerCase();
  let freq = {};

  for (char of lower) {
    if (/a-z0-9/.test(char)) {
      if (!freq.hasOwnProperty(char)) {
        freq[char] = 1;
      } else {
        freq[char]++;
      }
    }
  }
  return freq;
}

console.log(charCount("Hello World"));
