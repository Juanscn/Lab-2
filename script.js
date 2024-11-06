
function defaultButtonColours () {
    document.getElementById('bearButton').style.backgroundColor = '';
    document.getElementById('elkButton').style.backgroundColor = '';
    document.getElementById('mooseButton').style.backgroundColor = '';
    document.getElementById('sheepButton').style.backgroundColor = '';
    document.getElementById('wolfButton').style.backgroundColor = '';
}

bearButton.addEventListener('click', function(){
    defaultButtonColours();
    document.getElementById('image').src = 'images/bear.webp';
    document.getElementById('bearButton').style.backgroundColor = '#97bf04';
})

elkButton.addEventListener('click', function(){
    defaultButtonColours();
    document.getElementById('image').src = 'images/elk.webp';
    document.getElementById('elkButton').style.backgroundColor = '#97bf04';
})

mooseButton.addEventListener('click', function(){
    defaultButtonColours();
    document.getElementById('image').src = 'images/moose.webp';
    document.getElementById('mooseButton').style.backgroundColor = '#97bf04';
})

sheepButton.addEventListener('click', function(){
    defaultButtonColours();
    document.getElementById('image').src = 'images/sheep.webp';
    document.getElementById('sheepButton').style.backgroundColor = '#97bf04';
})

wolfButton.addEventListener('click', function(){
    defaultButtonColours();
    document.getElementById('image').src = 'images/wolf.webp';
    document.getElementById('wolfButton').style.backgroundColor = '#97bf04';
})