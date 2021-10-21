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

//naive approach
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i] ** 2) === -1) {
      return false;
    }
  }
  return true;
}

//naive approach
function sameApp(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr2[i] !== arr1[i] ** 2) {
      return false;
    }
  }
  return true;
}

//using frequency counter
function sameFreq(arr1, arr2) {
  let freqCounter1 = {};
  let freqCounter2 = {};
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (x of arr1) {
    if (!freqCounter1.hasOwnProperty(x)) {
      freqCounter1[x] = 1;
    } else {
      freqCounter1[x]++;
    }
  }
  for (x of arr2) {
    if (!freqCounter2.hasOwnProperty(x)) {
      freqCounter2[x] = 1;
    } else {
      freqCounter2[x]++;
    }
  }
  for (key in freqCounter1) {
    //check for keys
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    //check for their values
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      console.log(freqCounter2);
      return false;
    }
  }
  return true;
}

//anagrams
function anagram1(str1, str2) {
  freqCounter1 = {};
  freqCounter2 = {};

  for (char of str1) {
    !freqCounter1.hasOwnProperty(char)
      ? (freqCounter1[char] = 1)
      : freqCounter1[char]++;
  }

  for (char of str2) {
    !freqCounter2.hasOwnProperty(char)
      ? (freqCounter2[char] = 1)
      : freqCounter2[char]++;
  }
  for (key in freqCounter1) {
    if (!(key in freqCounter2)) {
      return false;
    }
    if (freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }
  return true;
}

function uniqueVal(arr) {
  let unique = [];
  for (x of arr) {
    if (!unique.includes(x)) {
      unique.push(x);
    }
  }
  return unique;
}
console.log(uniqueVal([1, 2, 2, 2, 3, 3, 3]));
