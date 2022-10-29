let bt = document.querySelector("#draw");

let cardRecipient = document.getElementById("cardRecipient");
let name = document.getElementById("name");
let cardGreeting = document.getElementById("cardGreeting");
let greet = document.getElementById("greet");
let cardMsg = document.getElementById("cardMsg");
let cardSender = document.getElementById("cardSender");
let msg = document.getElementById("msg");
let yourName = document.getElementById("yourName");

let inside = document.getElementById("inside");
let front = document.getElementById("front");
let cardFontColor = document.getElementById("cardFontColor");
let cardBorder = document.getElementById("cardBorder");
let cardbkgrndColor = document.getElementById("cardbkgrndColor");
let cardtextShadow = document.getElementById("cardtextShadow");
let imgFront = document.getElementById("imgFront");
let cardBlend = document.getElementById("cardBlend");

let borderColour = document.getElementById("borderColour");

bt.addEventListener("click", function () {
    cardRecipient.innerHTML = recipientName.options[recipientName.selectedIndex].text;
    cardGreeting.innerHTML = greet.value;
    cardMsg.innerHTML = msg.value;
    cardSender.innerHTML = yourName.value;

    inside.style.color = cardFontColor.value;
    inside.style.borderColor = borderColour.value;
    inside.style.boxShadow = "inset 2px -3px 3px" + cardtextShadow.value + ", inset -3px 2px 3px" + cardtextShadow.value;
    inside.style.backgroundColor = cardbkgrndColor.value;
    inside.style.textShadow = "1px 1px 1px" + cardtextShadow.value;

    front.style.color = cardFontColor.value;
    front.style.borderColor = borderColour.value;
    front.style.boxShadow = "inset 2px -3px 1px" + cardtextShadow.value + ", inset -3px 2px 3px" + cardtextShadow.value;
    front.style.backgroundColor = cardbkgrndColor.value;
    front.style.textShadow = "1px 1px 1px" + cardtextShadow.value;
    imgFront.style.mixBlendMode = cardBlend.options[cardBlend.selectedIndex].text;

    //The border style
    switch (cardBorder.options[cardBorder.selectedIndex].text) {
        case "solid (choose colour)":
            inside.style.borderStyle = "solid";
            front.style.borderStyle = "solid";
            inside.style.borderImageSource = "";
            front.style.borderImageSource = "";
            break;
        case "dotted (choose colour)":
            inside.style.borderStyle = "dotted";
            front.style.borderStyle = "dotted";
            inside.style.borderImageSource = "";
            front.style.borderImageSource = "";
            break;
        case "double (choose colour)":
            inside.style.borderStyle = "double";
            front.style.borderStyle = "double";
            inside.style.borderImageSource = "";
            front.style.borderImageSource = "";
            break;
        case "dashed (choose colour)":
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


    front.style.display = "block";
    inside.style.display = "block";
    console.log(document.getElementById("inside").style);
});//end eventListener

let imageInput = document.getElementById("imageInput");
let iimageSpan = document.getElementById("imageSpan");

let selectedImg = document.getElementsByClassName('selectedImg');
for (let i = 0; i < selectedImg.length; i++) {
    selectedImg[i].addEventListener('click', function () {

        //The images for front of card
        switch (this.getAttribute('alt')) {

            case "red rose":
                imgFront.setAttribute("src", 'photos/redRose.jpeg');
                break;
            case "gift1":
                imgFront.setAttribute("src", 'photos/gift1.jpeg');
                break;
            case "gift2":
                imgFront.setAttribute("src", 'photos/gift2.jpeg');
                break;
            case "snowman":
                imgFront.setAttribute("src", 'photos/snowman.jpeg');
                break;
            case "cartoon flowers":
                imgFront.setAttribute("src", 'photos/cartoonFlowers.jpeg');
                break;
            case "cute cat":
                imgFront.setAttribute("src", 'photos/cuteCat.jpeg');
                break;
            case "girl with camera":
                imgFront.setAttribute("src", 'photos/girlWithCamera.jpeg');
                break;
            case "heart passage":
                imgFront.setAttribute("src", 'photos/heartPassage.jpeg');
                break;
            case "pink roses":
                imgFront.setAttribute("src", 'photos/pinkRoses.jpeg');
                break;
            case "purple sunset":
                imgFront.setAttribute("src", 'photos/purpleSunset.jpeg');
                break;
            case "snowy white":
                imgFront.setAttribute("src", 'photos/snowyWhite.jpeg');
                break;
            case "three crosses":
                imgFront.setAttribute("src", 'photos/threeCrosses.jpeg');
                break;
            case "playhouse":
                imgFront.setAttribute("src", 'photos/playhouse.jpeg');
                break;
            case "woman and sunset":
                imgFront.setAttribute("src", 'photos/womanAndSunset.jpeg');
                break;
            case "alphabets1":
                imgFront.setAttribute("src", 'photos/alphabets1.jpeg');
                break;
            case "alphabets2":
                imgFront.setAttribute("src", 'photos/alphabets2.jpeg');
                break;
            case "balloon baby":
                imgFront.setAttribute("src", 'photos/balloonBaby.jpeg');
                break;
            case "play":
                imgFront.setAttribute("src", 'photos/play.jpeg');
                break;
            case "red heart tree":
                imgFront.setAttribute("src", 'photos/redHeartTree.jpeg');
                break;
            case "toys":
                imgFront.setAttribute("src", 'photos/toys.jpeg');
                break;
            case "minions":
                imgFront.setAttribute("src", 'photos/minions.jpeg');
                break;
            case "two girls":
                imgFront.setAttribute("src", 'photos/twoGirls.jpeg');
                break;
            case "crayons":
                imgFront.setAttribute("src", 'photos/crayons.jpeg');
                break;
            case "childs love":
                imgFront.setAttribute("src", 'photos/childsLove.jpeg');
                break;
            case "teddy carousel":
                imgFront.setAttribute("src", 'photos/teddyCarousel.jpeg');
                break;
            case "graduates1":
                imgFront.setAttribute("src", 'photos/graduates1.jpeg');
                break;
            case "graduates2":
                imgFront.setAttribute("src", 'photos/graduates2.jpeg');
                break;
            case "pink paper flowers":
                imgFront.setAttribute("src", 'photos/pinkPaperFlowers.jpeg');
                break;
            case "hoorah":
                imgFront.setAttribute("src", 'photos/hoorah.jpeg');
                break;
            case "heart wave":
                imgFront.setAttribute("src", 'photos/heartWave.jpeg');
                break;
            case "humming bird":
                imgFront.setAttribute("src", 'photos/hummingBird.jpeg');
                break;
            case "octopus war":
                imgFront.setAttribute("src", 'photos/octopusWar.jpg');
                break;
            case "apple":
                imgFront.setAttribute("src", 'photos/apple.jpeg');
                break;
            case "beauty":
                imgFront.setAttribute("src", 'photos/beauty.jpeg');
                break;
            case "birds in sunset":
                imgFront.setAttribute("src", 'photos/birdsSunset.jpeg');
                break;
            case "cake":
                imgFront.setAttribute("src", 'photos/cake.jpeg');
                break;
            case "cat in hand":
                imgFront.setAttribute("src", 'photos/catInHand.jpg');
                break;
            case "colorful flowers":
                imgFront.setAttribute("src", 'photos/colorfulFlowers.jpeg');
                break;
            case "running":
                imgFront.setAttribute("src", 'photos/running.jpeg');
                break;
            case "penguin":
                imgFront.setAttribute("src", 'photos/penguin.jpg');
                break;
            case "puppy love":
                imgFront.setAttribute("src", 'photos/puppyLove.jpeg');
                break;
            case "duck":
                imgFront.setAttribute("src", 'photos/duck.jpeg');
                break;
            case "friends":
                imgFront.setAttribute("src", 'photos/friends.jpeg');
                break;
            case "friends2":
                imgFront.setAttribute("src", 'photos/friends2.jpeg');
                break;
            case "lovely view":
                imgFront.setAttribute("src", 'photos/lovelyView.jpeg');
                break;
            case "makeup":
                imgFront.setAttribute("src", 'photos/makeup.jpeg');
                break;
            case "white flowers":
                imgFront.setAttribute("src", 'photos/whiteFlowers.jpeg');
                break;

        }
        imageInput.value = this.getAttribute('src');
        imageSpan.innerHTML = this.getAttribute('alt');
        console.log(this.getAttribute('alt'), "     this image attribute");
        console.log(this.getAttribute('src'), "     this image source");
    })
}


//If you click on a member to send a card to from the member's page then the 
//name will automatically be selecetd in the card's recipient name
let recipientName = document.getElementById("recipientName");
let selectedName = document.getElementById("selectedName");

for (let i = 0; i < recipientName.length; i++) {
    if (recipientName.options[i].text.trim() == selectedName.value.trim()) {
        recipientName.options[i].selected = 'selected';
    }
}