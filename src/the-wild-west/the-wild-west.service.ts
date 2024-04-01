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
}
