import { describe, expect, it } from 'vitest';
import { stringToBytes } from './string_to_bytes';

describe('проверяем работу хелпера преобразования строки в битовую маску', () => {
  const flagsMasks = [
    {
      send: '00000000',
      refs: '00000000',
    },
    {
      send: '11111111',
      refs: '11011111',
    },
    {
      send: '01010101',
      refs: '01010101',
    },
    {
      send: '10101010',
      refs: '10001010',
    },
    {
      send: '000111011101',
      refs: '00011101',
    },
    {
      send: '110111',
      refs: '00010111',
    },
  ];

  flagsMasks.forEach(({ send, refs }) => {
    it(`устанавливаем маску в значение ${send}`, () => {
      const result = stringToBytes(send);
      expect(result).toBe(refs);
    });
  });
});
