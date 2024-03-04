var textoOriginal = "";
var letras = "[^a-z ]";

function encriptar() { 
  textoOriginal = document.getElementById('campoCriptografar').value;
  var textoEncriptado = textoOriginal.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

  imagemCampoCriptografado(textoEncriptado);

  document.querySelector('.textoCriptografado').textContent = textoEncriptado;

  limparCampo();
}

function descriptografar() {
  textoOriginal = document.getElementById('campoCriptografar').value;
  var textoDescriptografado = textoOriginal.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

  imagemCampoCriptografado(textoDescriptografado);

  document.querySelector('.textoCriptografado').textContent = textoDescriptografado;

  limparCampo();  
}

function imagemCampoCriptografado(texto) {
  var imagem = document.querySelector('.exibirCriptografia');
  var btnCopiar = document.querySelector('.btnCopiar');
  if(texto === '') {
    imagem.style.backgroundImage = 'url("imagens/codigoBinario.gif")';
    btnCopiar.style.display = 'none';
  } else {
    imagem.style.backgroundImage = 'none';
    btnCopiar.style.display = 'block';
  }
}

function limparCampo() {
  document.getElementById('campoCriptografar').value = '';
}

const copiarTexto = document.querySelector('.textoCriptografado'); 

function copiar() {
  navigator.clipboard.writeText(copiarTexto.textContent);
}

function conferirLetrasCriptografar() {
  textoOriginal = document.getElementById('campoCriptografar').value;
  
  if(!textoOriginal.match(letras)) {
    document.querySelector('.info').style.fontSize = '1rem';
    document.querySelector('.imgAlert').style.display = 'none';
    encriptar();
  } else {
    document.querySelector('.exibirCriptografia').style.backgroundImage = 'url("imagens/codigoBinario.gif")';
    document.querySelector('.textoCriptografado').textContent = '';
    document.querySelector('.btnCopiar').style.display = 'none';
    document.querySelector('.imgAlert').style.display = 'inline-block';
    document.querySelector('.info').style.fontSize = '1.5rem';
  }

}

function conferirLetrasDescriptografar() {
  textoOriginal = document.getElementById('campoCriptografar').value;
  document.querySelector('.info').style.fontSize = '1rem';
  document.querySelector('.imgAlert').style.display = 'none';
  if(!textoOriginal.match(letras)) {
    
    descriptografar();
  } else {
    document.querySelector('.exibirCriptografia').style.backgroundImage = 'url("imagens/codigoBinario.gif")';
    document.querySelector('.textoCriptografado').textContent = '';
    document.querySelector('.btnCopiar').style.display = 'none';
    document.querySelector('.imgAlert').style.display = 'inline-block';
    document.querySelector('.info').style.fontSize = '1.5rem';
  }

}