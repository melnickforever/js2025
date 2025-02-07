'use strict';

const italianFoods = new Set([
                                 'pasta',
                                 'gnocchi',
                                 'tomatoes',
                                 'olive oil',
                                 'garlic',
                                 'basil',
                             ]);

const mexicanFoods = new Set([
                                 'tortillas',
                                 'beans',
                                 'rice',
                                 'tomatoes',
                                 'avocado',
                                 'garlic',
                             ]);

const commonFoods = mexicanFoods.intersection(italianFoods);
//const commonFoods = new Set([...italianFoods].filter(food => mexicanFoods.has(food)));

const italianMexicanFoods = new Set([...italianFoods, ...mexicanFoods]);

console.log(commonFoods);
console.log([...commonFoods]);
console.log(italianMexicanFoods);

const unigueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(unigueItalianFoods);

const unigueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log(unigueMexicanFoods);

const uniqueItalianMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianMexicanFoods);
