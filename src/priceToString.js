/* example:
  input: 500
  output: 5,00 kr
*/

export default function(number) {
  const numberFormattedDanish = (number / 100).toLocaleString('da');
  return `${numberFormattedDanish} kr`;
}