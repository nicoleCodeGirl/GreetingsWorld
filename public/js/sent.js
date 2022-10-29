/*==============================================
    OPENING AND CLOSING PREVIEWED CARD
===============================================*/

let previewBtn = document.getElementsByClassName("previewBtn");//button to preview card
let deleteBtn = document.getElementsByClassName("deleteBtn");//button to delete card
let inside = document.getElementById("inside");//inside of card
let front = document.getElementById("front");//front of card
let imgFront = document.getElementById("imgFront");//image on front
let closeCardPreview = document.getElementById("closeCardPreview");//close the card preview



let replyDiv = document.getElementById('replyDiv');
let replies = document.getElementById('replies');
//Close the card preview
closeCardPreview.addEventListener('click', function () {
    inside.style.display = "none";
    front.style.display = "none";
    replyDiv.style.display = "none";
    if(replies){
      replies.style.display = "none";  
    }
    
})







/*==============================================
        CARD QUALITIES
===============================================*/
if (document.getElementById("imageBlend") != null) {
    // console.log(document.getElementById("borderStylePath").innerHTML);

    /*INSIDE OF CARD*/
    inside.style.color = document.getElementById("fontColour").innerHTML;
    inside.style.textShadow = "1px 1px 1px" + document.getElementById("textShadow").innerHTML;
    inside.style.backgroundColor = document.getElementById("backgroundColour").innerHTML;
    inside.style.borderColor = document.getElementById("borderColour").innerHTML
    inside.style.boxShadow = "inset 2px -3px 3px" + document.getElementById("textShadow").innerHTML + ", inset -3px 2px 3px" + document.getElementById("textShadow").innerHTML;


    /*FRONT OF CARD*/
    imgFront.style.mixBlendMode = document.getElementById("imageBlend").innerHTML;

    front.style.color = document.getElementById("fontColour").innerHTML;
    front.style.textShadow = "1px 1px 1px" + document.getElementById("textShadow").innerHTML;
    front.style.backgroundColor = document.getElementById("backgroundColour").innerHTML;
    front.style.borderColor = document.getElementById("borderColour").innerHTML
    front.style.boxShadow = "inset 2px -3px 3px" + document.getElementById("textShadow").innerHTML + ", inset -3px 2px 3px" + document.getElementById("textShadow").innerHTML;



    switch (document.getElementById("borderStyle").innerHTML) {
        case "solid":
            inside.style.borderStyle = "solid";
            front.style.borderStyle = "solid";
            inside.style.borderImageSource = "";
            front.style.borderImageSource = "";
            break;
        case "dotted":
            inside.style.borderStyle = "dotted";
            front.style.borderStyle = "dotted";
            inside.style.borderImageSource = "";
            front.style.borderImageSource = "";
            break;
        case "double":
            inside.style.borderStyle = "double";
            front.style.borderStyle = "double";
            inside.style.borderImageSource = "";
            front.style.borderImageSource = "";
            break;
        case "dashed":
            inside.style.borderStyle = "dashed";
            front.style.borderStyle = "dashed";
            inside.style.borderImageSource = "";
            front.style.borderImageSource = "";
            break;
        case "flowers":
            inside.style.borderImageSource = "url('photos/borders/flowers.jpeg')";
            inside.style.borderImageRepeat = "repeat";
            inside.style.borderImageSlice = 6;

            front.style.borderImageSource = "url('photos/borders/flowers.jpeg')";
            front.style.borderImageRepeat = "repeat";
            front.style.borderImageSlice = 6;
            break;

        case "blue feathers":
            inside.style.borderImageSource = "url('photos/borders/ltBlueFeathers.jpeg')";
            inside.style.borderImageRepeat = "repeat";
            inside.style.borderImageSlice = 6;

            front.style.borderImageSource = "url('photos/borders/ltBlueFeathers.jpeg')";
            front.style.borderImageRepeat = "repeat";
            front.style.borderImageSlice = 6;
            break;

        case "candy":
            inside.style.borderImageSource = "url('photos/borders/candy.jpeg')";
            inside.style.borderImageRepeat = "repeat";
            inside.style.borderImageSlice = 6;

            front.style.borderImageSource = "url('photos/borders/candy.jpeg')";
            front.style.borderImageRepeat = "repeat";
            front.style.borderImageSlice = 6;
            break;

        case "rainbow paint":
            inside.style.borderImageSource = "url('photos/borders/rainbowPaint.jpeg')";
            inside.style.borderImageRepeat = "repeat";
            inside.style.borderImageSlice = 6;

            front.style.borderImageSource = "url('photos/borders/rainbowPaint.jpeg')";
            front.style.borderImageRepeat = "repeat";
            front.style.borderImageSlice = 6;
            break;
        case "pink roses":
            inside.style.borderImageSource = "url('photos/borders/pinkRoses.jpeg')";
            inside.style.borderImageRepeat = "repeat";
            inside.style.borderImageSlice = 6;

            front.style.borderImageSource = "url('photos/borders/pinkRoses.jpeg')";
            front.style.borderImageRepeat = "repeat";
            front.style.borderImageSlice = 6;
            break;

        case "yellow fractal":
            inside.style.borderImageSource = "url('photos/borders/yellowFractal.jpg')";
            inside.style.borderImageRepeat = "repeat";
            inside.style.borderImageSlice = 6;

            front.style.borderImageSource = "url('photos/borders/yellowFractal.jpg')";
            front.style.borderImageRepeat = "repeat";
            front.style.borderImageSlice = 6;
            break;

        case "electric fractal":
            inside.style.borderImageSource = "url('photos/borders/electricFractal.jpg')";
            inside.style.borderImageRepeat = "repeat";
            inside.style.borderImageSlice = 12;

            front.style.borderImageSource = "url('photos/borders/electricFractal.jpg')";
            front.style.borderImageRepeat = "repeat";
            front.style.borderImageSlice = 12;
            break;
    }
}


