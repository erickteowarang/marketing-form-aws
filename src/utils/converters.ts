const fontSize = 16

export const rem = (size: number) => {
  return size / fontSize + 'rem'
}

export const em = (size: number) => {
  return size / fontSize + 'em'
}