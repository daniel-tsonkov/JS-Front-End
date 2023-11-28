function solve() {
  let rowText = document.getElementById('input').value;
  let outputElement = document.getElementById('output');
  let sentences = rowText.split('.');
  sentences = sentences.filter(s => s.length > 0);

  console.log(sentences);
}