import { describe, expect, it } from 'vitest';
import { Flags, flagsNames } from './flags';

describe('проверяем работу с флагами', () => {
  const flags = new Flags();

  const flagsValues = {
    s: 1,
    z: 0,
    h: 1,
    o: 1,
    p: 0,
    n: 1,
    c: 0,
  };

  Object.entries(flagsValues).forEach(([flag, value]) => {
    it(`устанавливаем флаг ${flag} в значение ${value}`, () => {
      if (+value) {
        flags.setValue(flag as flagsNames);
      } else {
        flags.resetValue(flag as flagsNames);
      }
      expect(flags.getValue(flag as flagsNames)).toBe(Boolean(value));
    });
  });

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
    it(`устанавливаем маску флагов в значение ${send}`, () => {
      flags.reset();
      flags.setMask(send);
      expect(flags.getMask()).toBe(refs);
    });
  });
});
