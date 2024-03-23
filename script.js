function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if(html.classList.contains("light")){
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatarkiki-light.png")
  }
  else {
    //se tiver sem ligh tmode, manter a imagem normal
    img.setAttribute("src", "./assets/avatarkiki.png")}

  if(html.classList.contains("light")){
    img.setAttribute("alt", "Cris no fundo rosa")
  }
  else {
    img.setAttribute("alt", "Cris no fundo colorido")
  }
}


