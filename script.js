const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Symbol{
    constructor(x,y,fontSize,canvasHeight){
        this.characters = '001001110111100110001010101010101011010111000001011001100101000010110100110010010101100011';
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = '';
        this.canvasHeight = canvasHeight;

    }
   draw(context){
        this.text = this.characters.charAt(Math.floor(Math.random()*this.characters.length));
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
        if(this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98){
            this.y = 0;

        }else {
            this.y +=1;
        }

    }
}

class Effect {
    constructor(canvasWidth, canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 40;
        this.columns = this.canvasWidth/this.fontSize;
        this.symbols = [];
        this.#initialize();
        console.log(this.symbols);


    }
   #initialize(){
        for (let i = 0; i< this.columns; i++){
            this.symbols[i] = new Symbol(i,0,this.fontSize,this.canvasHeight);
        }

    }
  
}

const effect = new Effect(canvas.width,canvas.height);
let lastTime = 0;
const fps = 40;
const nextFrame = 1000/fps;
let timer = 0;

function animate(timeStamp){
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    if(timer > nextFrame){
        ctx.fillStyle = 'rgba(0,0,0,0.05)';
        ctx.textAlign = 'center';
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = '#00ff00';
        ctx.font = effect.fontSize + 'px monospace';
        effect.symbols.forEach(symbol => symbol.draw(ctx));
        timer = 0;
    } else{
        timer +=deltaTime;
    }
    
    requestAnimationFrame(animate);
}

animate(0);


    
