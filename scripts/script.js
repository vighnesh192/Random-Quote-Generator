var button = document.getElementById('new-quote')

//ON CLICK
button.addEventListener('click', getQuote)

//AJAX
function getQuote() {
  var xhr = new XMLHttpRequest();
  
  xhr.open('GET', 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
  
  xhr.onload = function() {
    if(xhr.status == 200) {
      var data = JSON.parse(this.responseText);
      
      //GET ELEMENTS
      var text = document.getElementById('text');
      var author = document.getElementById('author')
      
      //GENERATE RANDOM NO
      var random = Math.round(Math.random()*10)
      
      //DOM MANIPULATION
      text.textContent = data.quotes[random].quote;
      author.textContent = data.quotes[random].author;
    }
  }
  
  xhr.send();
}