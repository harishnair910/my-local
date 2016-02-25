alert('Hi Javascript, looking for me?!?');



 $(document).ready(function() {
        alert("JQuery is working just fine !");
        console.log("JQuery and JS are now script connected");
    });

 /*Light Bulb*/
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "LightBulb1.jpg";
    } else {
        image.src = "article-1051436-0003C888000004B0-224_468x286.jpg";
    }
}


/*Validate*/
function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("number").value;

    // If x is Not a Number or less than one or greater than 25
    if (isNaN(x) || x < 1 || x > 25) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("sub-text").innerHTML = text;
}


