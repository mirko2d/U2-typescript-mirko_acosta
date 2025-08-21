enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue"
}

function printColor(color: Color): string {
  return `El color es: ${color}`;
}
console.log(printColor(Color.Green));
