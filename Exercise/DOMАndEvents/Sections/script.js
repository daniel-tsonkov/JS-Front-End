/*function create(words) {
   const container = document.querySelector('#content');

   words.forEach(word => {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';

      div.append(p);
      div.addEventListener('click', () => {
         p.style.display = 'block';
      });
      container.appendChild(div);
   });
}*/

function create(words) {
   let mainDiv = document.querySelector('#content');

   for (const word of words) {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');

      paragraph.textContent = word;
      paragraph.style.display = 'none';

      div.appendChild(paragraph);
      

      div.addEventListener('click', () => {
         paragraph.style.display = '';
      })
      mainDiv.appendChild(div);
   }
}