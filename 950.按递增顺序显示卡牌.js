/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    deck = deck.sort((a, b) => a - b);

    var res = new Array(deck.length);
    var indexs = new Array(deck.length).fill(0).map((_, i) => i);

    while (deck.length) {
        res[indexs.shift()] = deck.shift();

        indexs.push(indexs.shift());
    }

    return res;
};


console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7, 9]));
console.log(deckRevealedIncreasing(new Array(10).fill(0).map((_, i) => i)));