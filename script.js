function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')  

  //pegar a tag img
  const img = document.querySelector ("#profile img")

  //substituir a imagem
  if(html.classList.contains('light')) {
    //Se tiver no light mode, mudar a imagem light
    img.setAttribute('src', './assets/Avatar-light-mode.png')
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e jaqueta preta, fundo colorido e oculos escuros"
    )
  } else{
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/Avatar.png')
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e jaqueta preta, fundo colorido."
    )
  }
}