# Live Wallpaper - Effect Matrix com javaScript
</br>

Any animation produced in JavaScript can be placed as wallpaper on the desktop. The example used was a code produced in javascript that shows the matrix effect.


</div> 

<p align="center">
  <img src="https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Grava%C3%A7%C3%A3o-de-tela-de-10-01-2023-00_37_01.gif" alt="animated"  />
</p>


<div align = "center">
Gif - Matrix Effect
</a></div>



## Requirements
</br>

* Komorebi</br>
It is an open source software used to reproduce animated wallpapers. One of the options it has is to get wallpaper from web pages. this will be the resource used to reproduce the html code. <br>
using this option to use a page's wallpaper, komorebi will copy the source code of the web page and reproduce it on the desktop as if it were a terminal. in this way one sees the effect as shown above.</br></br>

install [komorebi](https://github.com/cheesecakeufo/komorebi/releases/download/v2.1/komorebi-2.1-64-bit.deb) from the official repository.

## How to use wallpaper from javascript code
Considering that the user has his own animation produced and wants to use it as wallpaper, then the following steps must be performed

###  1. put the project produced in a github repository
<div align = "center">
<figure>
	<img align = "left" src = "https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Captura%20de%20tela%20de%202023-01-10%2010-36-17.png" width = 1000px  />
	 <figcaption>  Figura 1 - github repository </div> <br/>
  
If you want to upload this repository as a base, use the command in your linux terminal to download the repository to your computer:
```
git clone https://github.com/JWchester/Live_Wallpaper-Effect-Matrix.git
```
Then create your own repository and add these files </br>
  
  
  
### 2.host it with github pages
	
<div align = "center">
<img align = "center" src = "https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Captura%20de%20tela%20de%202023-01-10%2011-32-37.png" width = 500px /> 
	
Figura 2 - active repository site by github pages </div>
	
	
</br>

Enabling github pages for your repository will be able to generate an online page like this: [Effect Matrix](https://jwchester.github.io/Live_Wallpaper-Effect-Matrix/)

### 3. activate wallpaper with komorebi

After installing komorebi, open the `Komorebi Wallpaper Creator` to add your JavaScript animation as your desktop wallpaper.</br>
when opening:
* determine name of your new wallpaper
* determine the wallpaper type `a web page` and add the link of the web page hosted on github pages with your animation
* assign an image as the cover of your animation

observe the steps in the following images:


<div align = "center">
<img align = "center" src = "https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Captura%20de%20tela%20de%202023-01-10%2012-28-12.png" width = 800px /> 
	
Figura 3 - Filling in the information </div>
</br>
	
<div align = "center">
<img align = "center" src = "https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Captura%20de%20tela%20de%202023-01-10%2012-28-18.png" width = 800px /> 
	
Figura 4 - Setting the screen wallpaper </div>
</br>

<div align = "center">
<img align = "center" src = "https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Captura%20de%20tela%20de%202023-01-10%2012-28-25.png" width = 800px /> 
	
Figura 5 - Saved settings </div>
</br>

Now you must run the command provided in Figure 5 in the linux terminal. It will add the wallpaper created to the list of komorebi wallpapers. </br>

done, open `Komorebi`. when you open it, it will be running on your computer's desktop. that way, right-click on your desktop and select the `change wallpaper` option, and then select the wallpaper you had created. now, just enjoy your creation on your desktop screen :)

<p align="center">
  <img src="https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Grava%C3%A7%C3%A3o%20de%20tela%20de%2010-01-2023%2013_04_22%20(online-video-cutter.com).gif" alt="animated"  />
</p>

<div align = "center">
Gif - Matrix Effect
</a></div>





