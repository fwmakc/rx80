export type flagsNames = 's' | 'z' | 'h' | 'o' | 'p' | 'n' | 'c';

export class Flags {
  private s = false;
  private z = false;
  private h = false;
  private o = false;
  private p = false;
  private n = false;
  private c = false;

  constructor() {
    this.reset();
  }

  reset() {
    this.s = false;
    this.z = false;
    this.h = false;
    this.o = false;
    this.p = false;
    this.n = false;
    this.c = false;
  }

  getValue(name: flagsNames) {
    return this[name];
  }

  getBit(index) {
    const mask = +this.getMask();
    if (index < 0 || index > 7) {
      throw new Error('Индекс должен быть от 0 до 7');
    }

    return (this.mask >> index) & 1; // Возвращает значение бита (0 или 1)
  }

  getMask() {
    console.log('-- flags', {
      s: this.s,
      z: this.z,
      h: this.h,
      o: this.o,
      p: this.p,
      n: this.n,
      c: this.c,
    });

    const mask = [
      this.s ? '1' : '0',
      this.z ? '1' : '0',
      '0',
      this.h ? '1' : '0',
      this.o ? '1' : '0',
      this.p ? '1' : '0',
      this.n ? '1' : '0',
      this.c ? '1' : '0',
    ].join('');

    console.log('-- mask', mask);
    return mask;
  }

  setValue(name: flagsNames) {
    this[name] = true;
  }

  resetValue(name: flagsNames) {
    this[name] = false;
  }

  setMask(mask: string | number) {
    console.log('-- mask', mask);
    mask = String(mask).substring(0, 8);
    while (mask.length < 8) {
      mask = '0' + mask;
    }
    const flags = mask.split('');
    console.log('-- flags', flags);

    this.s = Boolean(+flags[0]);
    this.z = Boolean(+flags[1]);
    this.h = Boolean(+flags[3]);
    this.o = Boolean(+flags[4]);
    this.p = Boolean(+flags[5]);
    this.n = Boolean(+flags[6]);
    this.c = Boolean(+flags[7]);
  }
}
