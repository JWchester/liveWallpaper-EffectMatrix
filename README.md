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

install [komorebi](https://github.com/cheesecakeufo/komorebi) from the official repository.

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

Após a instalação do komorebi deve-se abrir o  `Komorebi Wallpaper Creator` para adicionar sua animação em javaScript como wallpaper do seu desktop.</br>
ao abrir:
* determine nome do seu novo wallpaper
* determine o tipo do wallpaper `a web page` e adicione o link da  pagina da web hospedado no github pages com sua animação
* determine uma imagem como capa da sua animação

observe os passos nas iamgens a seguir:

<div align = "center">
<img align = "center" src = "https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Captura%20de%20tela%20de%202023-01-10%2012-28-12.png" width = 800px /> 
	
Figura 3 - Preenchendo com as informações </div>
</br>
	
<div align = "center">
<img align = "center" src = "https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Captura%20de%20tela%20de%202023-01-10%2012-28-18.png" width = 800px /> 
	
Figura 4 - Configurando o wallpaper na tela </div>
</br>

<div align = "center">
<img align = "center" src = "https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Captura%20de%20tela%20de%202023-01-10%2012-28-25.png" width = 800px /> 
	
Figura 5 - configurações salvas </div>
</br>

Agora deve-se executar no terminal linux o comando fornecido na Figura 5. Ele adicionará o wallpaper criado para a lista de wallpapers do komorebi. </br>

feito isso, abra o `Komorebi`. ao abrí-lo ele estará funcionando no desktop do seu computador. dessa forma, clica-se com o botão direito em seu desktop e seleciona a opção `change wallpaper` feito isso seleciona o wallpaper que você havia criado. agora, basta apreciar sua criação na tela do seu desktop :)


<p align="center">
  <img src="https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Grava%C3%A7%C3%A3o%20de%20tela%20de%2010-01-2023%2013_04_22%20(online-video-cutter.com).gif" alt="animated"  />
</p>

<div align = "center">
Gif - Efeito Matrix
</a></div>





