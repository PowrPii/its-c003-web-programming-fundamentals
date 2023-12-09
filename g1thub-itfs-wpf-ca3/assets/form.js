document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var solution = document.getElementById('solution').value;
    var enquiries = document.getElementById('enquiries').value;

    if (!name || !email || !enquiries || solution === 'X') {
        alert('Please fill out all the fields or select a valid solution');
        return false;
    }
    
    document.location.href = "submission.html?solution=" + encodeURIComponent(solution);
});