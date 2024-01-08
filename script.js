// Add click event listeners to all elements with the 'customLink' class
var customLinks = document.querySelectorAll('.customLink');

customLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        window.location.href = 'not-a-flashbang.html';
    });
});

// Make the transition of the images in the carousel

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

function prevImage(){
    count--;
    if(count<1){
        count = 4;
    }

    document.getElementById("radio"+count).checked = true;
}