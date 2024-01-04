const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const backgroundImage = new Image();
backgroundImage.src = 'KaliR2.png';

const backgroundImageOpacity = 0.02;

class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
        this.characters = '1234567890!@#$%¨&*()_+-`{^}[]?;|/';
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = '';
        this.canvasHeight = canvasHeight;
        this.color = '#ff0000';
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
        this.fontSize = 11;
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
const fps = 30;
const interval = 1000 / fps;

function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    const imageX = canvas.width / 2.3 - backgroundImage.width / 2;
    const imageY = canvas.height / 1.8 - backgroundImage.height / 2;
    ctx.globalAlpha = backgroundImageOpacity;
    ctx.drawImage(backgroundImage, imageX, imageY);
    ctx.globalAlpha = 1;

    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.textAlign = 'center';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ff0000';
    ctx.font = effect.fontSize + 'px monospace';

    effect.symbols.forEach(symbol => symbol.draw(ctx));

    requestAnimationFrame(animate);
}

animate(0);

// Reconhecimento de Voz
const recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';

recognition.onresult = function(event) {
    const color = event.results[0][0].transcript.toLowerCase();
    console.log('Cor reconhecida:', color);
    
    switch (color) {
        case 'red':
            effect.changeColumnColor('#ff0000');
            break;
        case 'green':
            effect.changeColumnColor('#00ff00');
            break;
        case 'blue':
            effect.changeColumnColor('#0000ff');
            break;
        case 'yellow':
            effect.changeColumnColor('#ffff00');
            break;
        case 'pink':
            effect.changeColumnColor('#ff00ff');
            break;
        default:
            console.log('Cor não reconhecida.');
    }
};

recognition.onerror = function(event) {
    console.error('Erro no reconhecimento de voz:', event.error);
};

recognition.onend = function() {
    recognition.start(); // Reinicia o reconhecimento após terminar
};

recognition.start();
