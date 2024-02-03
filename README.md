# Live Wallpaper - Effect Matrix with JavaScript
</br>

Any animation produced in JavaScript can be placed as wallpaper on the desktop. The example used was a code produced in javascript that shows the matrix effect.

</div> 

<p align="center">
  <img src="https://github.com/JWchester/liveWallpaper-EffectMatrix/blob/main/docs/Kali%20desktop.gif"  />
</p>


<div align = "center">
Gif - Matrix animation that changes color when issuing a voice command
</a></div>

## update
</br>

1. Now the code ` has voice capture `. By enabling microphone usage, you can perform the following voice commands:

* Red
* Blue
* Yellow
* Green
* Pink

NOTE: the voice command only works on Google Chrome due to the way the code was implemented, using 'webkitSpeechRecognition'.

2. An image was inserted as a backround with a degree of opacity to make the animation interesting.



## Requirements To Add The Animation On Your Desktop
</br>

* Hidamari</br>
It is an open source software used to reproduce animated wallpapers. One of the options it has is to get wallpaper from web pages. this will be the resource used to reproduce the html code. <br>
using this option to use a page's wallpaper, Hidamari will copy the source code of the web page and reproduce it on the desktop as if it were a terminal. in this way one sees the effect as shown above.</br></br>


install [Hidamari](https://github.com/cheesecakeufo/komorebi/releases/download/v2.1/komorebi-2.1-64-bit.deb) directly from the official flathub.

In this [link](https://youtu.be/ghpY6ShHug4) you will find initial instructions for installing Hidamari, which are extremely important, and some of Hidamari's features.

## How to use wallpaper from javascript code
Considering that the user has his own animation produced and wants to use it as wallpaper, then the following steps must be performed

###  1. put the project produced in a github repository
<div align = "center">
<figure>
	<img align = "left" src = "https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Captura%20de%20tela%20de%202024-01-28%2016-39-21.png" width = 1000px  />
	 <figcaption>  Figura 1 - github repository </div> <br/>
  
If you want to upload this repository as a base, use the command in your linux terminal to download the repository to your computer:
```
git clone https://github.com/JWchester/liveWallpaper-EffectMatrix.git
```
Then create your own repository and add these files </br>
  
  
  
### 2.host it with github pages
	
<div align = "center">
<img align = "center" src = "https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Captura%20de%20tela%20de%202024-01-28%2016-41-44.png" width = 500px /> 
	
Figura 2 - active repository site by github pages </div>
	
	
</br>

Enabling github pages for your repository will be able to generate an online page like this: [Effect Matrix](https://jwchester.github.io/Live_Wallpaper-Effect-Matrix/)

### 3. activate wallpaper with Hidamari

After installing Hidamari, open the application `Hidamari` to add your JavaScript animation as your desktop wallpaper.</br>
When opening the application you will see the following screen:

<div align = "center">
<img align = "center" src = "https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Captura%20de%20tela%20de%202024-01-28%2017-13-05.png" width = 800px /> 
	
Figura 3 - Hidamari open  </div>
</br>

Press the `Web Page` option and you will be redirected to the following window:
	
<div align = "center">
<img align = "center" src = "https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Captura%20de%20tela%20de%202024-01-28%2017-13-21.png" width = 800px /> 
	
Figura 4 - Insert the web page that has the desired animation </div>
</br>

Insert the Link of the web page you created. then press 'enter'. now, just enjoy your creation on your desktop screen :)

<p align="center">
  <img src="https://github.com/JWchester/liveWallpaper-EffectMatrix/blob/main/docs/Kali%20desktop.gif"  />
</p>

<div align = "center">
Gif - Matrix Effect
</a></div>

NOTE: Voice command does not work for Hidamari due to its limitations. (I am trying to explore an alternative solution)

## CHALLENGE
Have the image, which is in the backround, be exchanged for another image as soon as the colors of the matrix terminal are changed. Example: when sending the voice command 'pink', the colors of the matrix animation will be changed to pink and the background image will also be changed to another image you choose :)



