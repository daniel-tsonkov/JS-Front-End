function search() {
   let items = Array.from(document.querySelectorAll('li'));
   let myText = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matches = 0;

   for (const liItem of items) {
      liItem.style.fontWeight = '';
      liItem.style.textDecoration = '';
   }
   for (const liItem of items) {
      if (liItem.textContent.includes(myText)) {
         matches++;
         liItem.style.fontWeight = 'bold';
         liItem.style.textDecoration = 'underline';
      }
   }
   result.textContent = `${matches} matches found`;
}
