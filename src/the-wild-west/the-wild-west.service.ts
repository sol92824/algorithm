import { Injectable } from '@nestjs/common';

@Injectable()
export class TheWildWestService {
  test77() {
    console.log(constructNote('aa', 'abc'));
    console.log(constructNote('abc', 'dcba'));
    console.log(constructNote('aabbcc', 'bcabcaddff'));

    function constructNote(character, message) {
      const count = {};
      for (let i = 0; i < character.length; i++) {
        const char = character[i];
        if (count[char]) {
          count[char] += 1;
        } else {
          count[char] = 1;
        }
      }

      for (let j = 0; j < message.length; j++) {
        const char = message[j];
        if (count[char]) {
          count[char] -= 1;
        }
      }

      for (const detailCount in count) {
        if (count[detailCount]) {
          return false;
        }
      }

      return true;
    }
  }

  test78() {
    console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
    console.log(findAllDuplicates([4, 3, 2, 1, 0]));
    console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]));

    function findAllDuplicates(array) {
      const count = {};
      const result = [];

      for (let index = 0; index < array.length; index++) {
        const val = array[index];

        if (count[val]) {
          count[val] += 1;
        } else {
          count[val] = 1;
        }

        if (count[val] === 2) {
          result.push(val);
        }
      }

      return result;
    }
  }

  test79() {
    console.log(findPair([6, 1, 4, 10, 2, 4], 2));
    console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1));
    console.log(findPair([4, -2, 3, 10], -6));
    console.log(findPair([6, 1, 4, 10, 2, 4], 22));
    console.log(findPair([], 0));
    console.log(findPair([5, 5], 0));
    console.log(findPair([-4, 4], -8));
    console.log(findPair([-4, 4], 8));
    console.log(findPair([1, 3, 4, 6], -2));
    console.log(findPair([0, 1, 3, 4, 6], -2));

    function findPair(array, number) {
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
          if (i == j) {
            continue;
          }

          if (array[i] + number === array[j]) {
            return true;
          }
        }
      }

      return false;
    }
  }
}
