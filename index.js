const images = [
    `/images/balloons-beach-beach-wedding-chairs.jpg`,
    `/images/istockphoto-1129866002-612x612.jpg`,
    `/images/istockphoto-1177485677-612x612.jpg`,
    `/images/istockphoto-1386180326-612x612.jpg`,
    `/images/istockphoto-1874106657-612x612.jpg`,
    `/images/wedding-backdrop-with-flower-wedding-decoration_33799-552.jpg`,
    `/images/wedding-birthday-reception-decoration-chairs-tables-and-flowers.jpg`,
    `/images/wedding-ceremony-and-celebration-bride-and-groom-at-a-beautiful-outdoor-venue-on-a-sunny-day-luxury-wedding-decor-with-flowers-a.jpg`
]

const headerImages = [
    `/images/balloons-beach-beach-wedding-chairs.jpg`,
    `/images/istockphoto-1129866002-612x612.jpg`,
    `/images/istockphoto-1177485677-612x612.jpg`,
    `/images/istockphoto-1386180326-612x612.jpg`,
    `/images/istockphoto-1874106657-612x612.jpg`,
    `/images/wedding-backdrop-with-flower-wedding-decoration_33799-552.jpg`,
    `/images/wedding-birthday-reception-decoration-chairs-tables-and-flowers.jpg`,
    `/images/wedding-ceremony-and-celebration-bride-and-groom-at-a-beautiful-outdoor-venue-on-a-sunny-day-luxury-wedding-decor-with-flowers-a.jpg`
]

const leftImages = [
    `/images/Recent-pics/left-pics/image1.jpg`,
    `/images/Recent-pics/left-pics/image2.jpeg`,
    `/images/Recent-pics/left-pics/image3.jpeg`,
    `/images/Recent-pics/left-pics/image4.jpeg`,
    `/images/Recent-pics/left-pics/image5.jpeg`
]
const rightUp = [
    `/images/Recent-pics/right-top-pics/image6.jpeg`,
    `/images/Recent-pics/right-top-pics/image7.jpeg`,
    `/images/Recent-pics/right-top-pics/image8.jpeg`,
    `/images/Recent-pics/right-top-pics/image9.jpeg`,
    `/images/Recent-pics/right-top-pics/image10.jpeg`,
]
const rightDown = [
    `/images/Recent-pics/bottom-right-pics/image11.jpeg`,
    `/images/Recent-pics/bottom-right-pics/image12.jpeg`,
    `/images/Recent-pics/bottom-right-pics/image13.jpeg`,
    `/images/Recent-pics/bottom-right-pics/image14.jpeg`,
    `/images/Recent-pics/bottom-right-pics/image15.jpeg`,
    `/images/Recent-pics/bottom-right-pics/image16.jpeg`
]

const main = document.querySelector(`main`);
const head = document.querySelector(`header`);
const leftPics = document.getElementById(`leftPics`);
const topRight = document.getElementById(`topRight`);
const bottomRight = document.getElementById(`bottomRight`);
const ham = document.getElementById(`ham`);
const close = document.getElementById(`close`);
const menu = document.getElementById(`menu`);

let currentIndex = 0;
let currentHead = 0;
let currentLeft = 0
let currentTop = 0;
let currentBottom = 0;

// Main background image
main.style.backgroundImage = `linear-gradient(to left, rgba(0, 0, 0, 0) 1%, #14161f 100%), url(${images[currentIndex]})`;

function showImage(){
    main.style.backgroundImage = `linear-gradient(to left, rgba(0, 0, 0, 0) 1%, #14161f 100%), url(${images[currentIndex]})`;
}

setInterval(() => {
    currentIndex++;

    if (currentIndex >= images.length){
        currentIndex = 0;
    }
    showImage();
}, `10000`);

// Header backgroun image
head.style.backgroundImage = `linear-gradient(to left, rgba(0, 0, 0, 0) 1%, #14161f 100%), url(${headerImages[currentHead]})`;
head.style.backgroundSize = `cover`;

function showHead(){
    head.style.backgroundImage = `linear-gradient(to left, rgba(0, 0, 0, 0) 1%, #14161f 100%), url(${headerImages[currentHead]})`;
}

setInterval(() => {
    currentHead++;

    if (currentHead >= headerImages.length){
        currentHead = 0;
    }
    showHead();
}, `10000`);

// Left recent picture
leftPics.src = leftImages[currentIndex];
leftPics.style.width = `350px`;
leftPics.style.height = `500px`;
leftPics.style.zIndex = `0`;
leftPics.style.objectFit = `cover`;

function showLeft(){
    leftPics.src = leftImages[currentLeft];
}

setInterval(() => {
    currentLeft++;
    if (currentLeft >= leftImages.length){
        currentLeft = 0;
    }
    showLeft();
}, `10000`);

// Top right recent picture
topRight.src = rightUp[currentIndex];
topRight.style.width = `350px`;
topRight.style.height = `240px`;
topRight.style.zIndex = `0`;
topRight.style.objectFit = `cover`;

function showTop(){
    topRight.src = rightUp[currentTop];
}

setInterval(() => {
    currentTop++;
    if (currentTop >= rightUp.length){
        currentTop = 0;
    }
    showTop();
}, `10000`);

// Bottom right recent picture
bottomRight.src = rightDown[currentIndex];
bottomRight.style.width = `350px`;
bottomRight.style.height = `240px`;
bottomRight.style.zIndex = `0`;
bottomRight.style.objectFit = `cover`;

function showBottom(){
    bottomRight.src = rightDown[currentBottom];
}

setInterval(() => {
    currentBottom++;
    if (currentBottom >= rightDown.length){
        currentBottom = 0;
    }
    showBottom();
}, `10000`);

ham.addEventListener(`click`, function(){
    menu.style.display = `block`;
})

close.addEventListener(`click`, function(){
    menu.style.display = `none`;
})