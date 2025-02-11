//alert('testing')

function askQuestion() {
    var p = prompt('is this a question?')
    if (p != null) {
        document.getElementById('question').innerHTML = 'um... "' + p + '" is wrong' 
    }
}