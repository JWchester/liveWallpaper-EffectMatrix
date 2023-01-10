# Live Wallpaper - Effect Matrix com javaScript
</br>

Qualquer animação produzida em javaScript pode ser colocada como wallpaper na área de trabalho. O exemplo utilizado foi de um código produzido em javascript que mostra o efeito matrix.


</div> 

<p align="center">
  <img src="https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Grava%C3%A7%C3%A3o-de-tela-de-10-01-2023-00_37_01.gif" alt="animated"  />
</p>


<div align = "center">
Gif - Efeito Matrix
</a></div>



## Requisitos
</br>

* Komorebi</br>
É um software open source utilizado para reproduzir wallpapers animados. Uma das opções que ele tem é obter wallpaper de páginas da web. será esse o recurso utilizado para reproduzir o código html. <br>
utilizando essa opção de usar wallpaper de uma página, o komorebi irá copiar o código fonte da página da web e reproduí-la no desktop como se fosse um terminal. dessa forma vê-se o efeito como mostrado acima.</br></br>

instale o [komorebi](https://github.com/cheesecakeufo/komorebi) a partir do repositório oficial.

## Como usar wallpaper a partir do código javaScript
Considerando que o usuário tem uma animação própria produzida e deseja usá-la como wallpaper então deve-se executar os seguintes passos.

###  1. colocar o projeto produzido em um repositório do github
<div align = "center">
<figure>
	<img align = "left" src = "https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Captura%20de%20tela%20de%202023-01-10%2010-36-17.png" width = 1000px  />
	 <figcaption>  Figura 1 - Repositório do github </div> <br/>
  
Caso deseje fazer o upload desse reposítório como base, utilize o comando no seu terminal linux para baixar o repositório para seu computador:
```
git clone https://github.com/JWchester/Live_Wallpaper-Effect-Matrix.git
```
Em seguida crie o seu próprio repositório e adicione esses arquivos </br>
  
  
  
### 2. hospedá-lo com github pages
	
<div align = "center">
<img align = "center" src = "https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Captura%20de%20tela%20de%202023-01-10%2011-32-37.png" width = 500px /> 
	
Figura 2 - site do repositório ativo pelo github pages </div>
	
	
</br>

Ativando o github pages para o seu repsitório será possível gerar uma página online assim como esse: [Effect Matrix](https://jwchester.github.io/Live_Wallpaper-Effect-Matrix/)

### 3. ativar wallpaper com komorebi

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

feito isso, abra o `Komorebi`. ao abrí-lo ele estará funcionando no desktop do seu computador. dessa forma, clica-se com o botão direito em seu desktop e seleciona a opção `change wallpaper` feito isso seleciona o walppaper que você havia criado. agora, basta apreciar sua criação na tela do seu desktop :)


<p align="center">
  <img src="https://github.com/JWchester/Live_Wallpaper-Effect-Matrix/blob/main/docs/Grava%C3%A7%C3%A3o%20de%20tela%20de%2010-01-2023%2013_04_22%20(online-video-cutter.com).gif" alt="animated"  />
</p>

<div align = "center">
Gif - Efeito Matrix
</a></div>





