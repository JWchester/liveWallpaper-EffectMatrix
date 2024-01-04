const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let backgroundImage = new Image();
backgroundImage.src = 'KaliS.png';

const backgroundImageOpacity = 0.025;

class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
        this.characters = '1234567890!@#$%¨&*()_+-`{^}[]?;|/';
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = '';
        this.canvasHeight = canvasHeight;
        this.color = '#727272';
    }

    draw(context) {
        this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));

        context.fillStyle = this.color;
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);

        if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.95) {
            this.y = 0;
        } else {
            this.y += 1;
        }
    }
}

class Effect {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 12;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.initialize();
        this.columnColorIndex = 0;
    }

    initialize() {
        for (let i = 0; i < this.columns; i++) {
            this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
        }
    }

    changeColumnColor(color) {
        this.symbols.forEach(symbol => {
            symbol.color = color;
        });
    }
}

const effect = new Effect(canvas.width, canvas.height);
let lastTime = 0;
let fps = 45; 
let interval = 1000 / fps;
let colorChangeInterval = 10000; 
let lastColorChangeTime = 0;

function getRandomColor() {
    const coresHex = ["#ff0000", "#00ff00", "#0000ff","#727272"];
    return coresHex[Math.floor(Math.random() * coresHex.length)];
}

function setCorrespondingBackgroundImage(color) {
    switch (color) {
        case '#ff0000':
            backgroundImage.src = 'KaliR2.png';
            ctx.fillStyle = 'rgba(0,0,0,0.09)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.textAlign = 'center';
            
            
            break;
        case '#00ff00':
            backgroundImage.src = 'KaliG2.png';
            ctx.fillStyle = 'rgba(0,0,0,0.09)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.textAlign = 'center';
            
            
            break;
        case '#0000ff':
            backgroundImage.src = 'KaliB.png';
            ctx.fillStyle = 'rgba(0,0,0,0.09)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.textAlign = 'center';
            
            break;
        case '#727272':
            backgroundImage.src = 'KaliS.png';
            ctx.fillStyle = 'rgba(0,0,0,0.09)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.textAlign = 'center';
            
            break;
       
    }
}

function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    const imageX = canvas.width / 2.3 - backgroundImage.width / 2;
    const imageY = canvas.height / 1.8 - backgroundImage.height / 2;
    ctx.globalAlpha = backgroundImageOpacity;
    ctx.drawImage(backgroundImage, imageX, imageY);
    ctx.globalAlpha = 1;

    ctx.fillStyle = 'rgba(0,0,0,0.08)';
    ctx.textAlign = 'center';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#727272';
    ctx.font = effect.fontSize + 'px monospace';

    effect.symbols.forEach(symbol => symbol.draw(ctx));

    if (timeStamp - lastColorChangeTime > colorChangeInterval) {
        const newColor = getRandomColor();
        effect.changeColumnColor(newColor);
        setCorrespondingBackgroundImage(newColor);
        lastColorChangeTime = timeStamp;
    }

    setTimeout(() => {
        requestAnimationFrame(animate);
    }, interval);
}

animate(0);
