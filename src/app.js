console.log("project___CodeJam-Image-API");

const loadButton = document.querySelector('.load');

function loadImage(event) {
    event.preventDefault();
    const town = inputSearchButton.value;
    const url = `https://api.unsplash.com/photos/random?query=town,${town}&client_id=c55b50800b16dc283e9d46bef6116f737439bfb808b6e7fb6d462df394db61e6`;
    
    (async function() {
        const jsonData = await fetch(url);
        const data = await jsonData.json();
        
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.imageSmoothingEnabled = false;
        img.src = data.urls.small;
        const w = data.width;
        const h = data.height;
        const ratio = w / h;
        const [width] = [canvas.width];
        const height = width / ratio;
        const leftDist = (canvas.width - width) / 2;
        const topDist = (canvas.height - height) / 2;
        img.onload = () => {
            ctx.drawImage(img, leftDist, topDist, width, height);  
        }
    })();
    haveImg = true;
}