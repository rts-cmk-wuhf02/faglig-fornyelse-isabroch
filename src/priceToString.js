/* example:
  input: 500
  output: 5,00 kr
*/

export default function(number) {
  return `${String(number / 100).replace(".", ",")} kr`;
}