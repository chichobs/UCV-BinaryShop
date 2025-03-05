document.querySelector('.header').addEventListener('mouseover', function() {
    document.querySelector('.logo').style.display = 'none';
    document.querySelector('.logo-2').style.display = 'none';
    document.querySelector('.mensaje').style.display = 'block';
});

document.querySelector('.header').addEventListener('mouseout', function() {
    document.querySelector('.logo').style.display = 'block';
    document.querySelector('.logo-2').style.display = 'block';
    document.querySelector('.mensaje').style.display = 'none';
});