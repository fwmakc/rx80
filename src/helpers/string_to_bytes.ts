export function stringToBytes(value: string | number) {
  const binaryString = String(value);

  if (!/^[01]+$/.test(binaryString)) {
    return 0;
  }

  const bitMask = parseInt(binaryString, 2);
  const bitMaskBytes = bitMask.toString(2);
  const bitMaskHex = Buffer.from(bitMask.toString(16));

  let bigIntNum = BigInt(bitMask.toString(10));

  // Создаем массив байтов, который будет необходим для хранения такого числа
  const byteCount = (bigIntNum.toString(2).length + 7) >> 3; // Количество байтов
  const byteArray = new Uint8Array(byteCount);

  for (let i = 0; i < byteCount; i++) {
    byteArray[i] = Number(bigIntNum & BigInt(0xff)); // Получаем младший байт
    bigIntNum >>= BigInt(8); // Сдвигаем битовое число на 8 бит вправо
  }

  const byteArrayBuffer = Buffer.from(byteArray);

  console.log(`Битовая маска (в десятичном формате): ${bitMask}`);
  console.log(`Битовая маска (в двоичном формате): ${bitMaskBytes}`);
  console.log(`Битовая маска (в hex формате): ${bitMaskHex}`);
  console.log(`Битовая маска (в формате): ${byteArray}`);
  console.log(`Битовая маска (в формате): ${byteArrayBuffer}`);
  return bitMask;
}
