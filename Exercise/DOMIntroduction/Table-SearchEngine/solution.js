function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let input = document.getElementById('searchField');
   let tableRowls = document.querySelectorAll('tbody tr');

   function onClick() {
      for (const row of tableRowls) {
         row.className = '';
      }
      for (const row of tableRowls) {
         
         if (input.value !== '' && row.innerHTML.includes(input.value)) {
            console.log('asd');
            row.className = 'select';
         }
      }

   }
}