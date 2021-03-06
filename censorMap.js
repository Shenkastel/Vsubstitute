/*
 * This extension would censor the selected words
 */

let dictionary = new Map();
dictionary.set('arse', 'xxxx');
dictionary.set('fuck', 'xxxx');
dictionary.set('fucking', 'xxxxxxx');
dictionary.set('hole', 'xxxx');
dictionary.set('ass', 'xxx');
dictionary.set('hole', 'xxxx');
dictionary.set('badass', 'xxxxxxx');
dictionary.set('bastard', 'xxxxxxx');
dictionary.set('beaver', 'xxxxxx');
dictionary.set('bitch', 'xxxxx');
dictionary.set('bollock', 'xxxxxxx');
dictionary.set('bollocks', 'xxxxxxxx');
dictionary.set('boner', 'xxxxx');
dictionary.set('bugger', 'xxxxxx');
dictionary.set('bullshit', 'xxxxxxxx');
dictionary.set('cock', 'xxxx');
dictionary.set('crap', 'xxxx');
dictionary.set('creampie', 'xxxxxxxx');
dictionary.set('cunt', 'xxxx');
dictionary.set('dick', 'xxxx');
dictionary.set('dickhead', 'xxxxxxxx');
dictionary.set('dyke', 'xxxx');
dictionary.set('fag', 'xxx');
dictionary.set('faggot', 'xxxxxx');
dictionary.set('fart', 'xxxx');
dictionary.set('fatass', 'xxxxxx');
dictionary.set('Greek', 'xxxxx');
dictionary.set('holy shit', 'xxxx xxxx');
dictionary.set('bum', 'xxx');
dictionary.set('jerk', 'xxxx');
dictionary.set('kike', 'xxxx');
dictionary.set('nigga', 'xxxxx');
dictionary.set('nigger', 'xxxxxx');
dictionary.set('piss', 'xxxx');
dictionary.set('shit', 'xxxx');
dictionary.set('suck', 'xxxx');
dictionary.set('wank', 'xxxx');
dictionary.set('stfu', 'xxxx');
dictionary.set('twat', 'xxx');
dictionary.set('neggar', 'xxxxxx');
dictionary.set('tit', 'xxx');
/*
 * After all the dictionary entries have been set, sort them by length.
 *
 * Because iteration over Maps happens by insertion order, this avoids
 * scenarios where words that are substrings of other words get substituted
 * first, leading to the longer word's substitution never triggering.
 */
let tempArray = Array.from(dictionary);
tempArray.sort((pair1, pair2) => {
  // Each pair is an array with two entries: a word and a censorship.
  // Ex: ['woman', 'xxxxx']
  const firstWord = pair1[0];
  const secondWord = pair2[0];

  if (firstWord.length > secondWord.length) {
    // The first word should come before the second word.
    return -1;
  }
  if (secondWord.length > firstWord.length) {
    // The second word should come before the first word.
    return 1;
  }

  // The words have the same length, it doesn't matter which comes first.
  return 0;
});

// Now that the entries are sorted, put them back into a Map.
let sortedCensorMap = new Map(tempArray);
