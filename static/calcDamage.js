function atualizarImagensItens() {
  var imgItemPossui = document.createElement("img");
  var imgItemDeseja = document.createElement("img");
  var imgPadrao = document.createElement("img");

  var caminhoItemPossui = "";
  var caminhoItemDeseja = "";
  var caminhoPadrao = "static/img/arrowindication.png";

  switch (itemPossui) {
      case "0":
          caminhoItemPossui = "static/img/vazio.png";
          break;
      case "1":
          caminhoItemPossui = "static/img/attack-1.png";
          break;
      case "2":
          caminhoItemPossui = "static/img/attack-2.png";
          break;
      case "3":
          caminhoItemPossui = "static/img/attack-3.png";
          break;
      case "4":
          caminhoItemPossui = "static/img/attack-4.png";
          break;
      case "5":
          caminhoItemPossui = "static/img/attack-5.png";
          break;
      case "6":
          caminhoItemPossui = "static/img/attack-6.png";
          break;
      case "7":
          caminhoItemPossui = "static/img/attack-7.png";
          break;
      case "8":
          caminhoItemPossui = "static/img/attack-8.png";
          break;
      default:
          caminhoItemPossui = "static/img/sword.png";
  }

  switch (itemDeseja) {
      case "0":
          caminhoItemDeseja = "static/img/vazio.png";
          break;
      case "1":
          caminhoItemDeseja = "static/img/attack-1.png";
          break;
      case "2":
          caminhoItemDeseja = "static/img/attack-2.png";
          break;
      case "3":
          caminhoItemDeseja = "static/img/attack-3.png";
          break;
      case "4":
          caminhoItemDeseja = "static/img/attack-4.png";
          break;
      case "5":
          caminhoItemDeseja = "static/img/attack-5.png";
          break;
      case "6":
          caminhoItemDeseja = "static/img/attack-6.png";
          break;
      case "7":
          caminhoItemDeseja = "static/img/attack-7.png";
          break;
      case "8":
          caminhoItemDeseja = "static/img/attack-8.png";
          break;
      default:
          caminhoItemDeseja = "static/img/sword.png"; 
  }

  imgItemPossui.src = caminhoItemPossui;
  imgItemDeseja.src = caminhoItemDeseja;
  imgPadrao.src = caminhoPadrao;

  imgItemPossui.classList.add("item-image");
  imgItemDeseja.classList.add("item-image");
  imgPadrao.classList.add("item-image-default");

  resultado.innerHTML = "";

  resultado.appendChild(imgItemPossui);
  resultado.appendChild(imgPadrao);
  resultado.appendChild(imgItemDeseja);
  resultadoTexto.style.color = "white";
  resultadoTexto.style.fontSize = "30px";
  resultadoTexto.style.marginTop = "20px";
  resultado.appendChild(resultadoTexto);
}

var itemPossui = "0";
var itemDeseja = "";
var resultado = document.getElementById('resultado');
var resultadoTexto = document.getElementById('resultado-texto');
var danoBaseAtual = 0;

function calcularDano() {

  atualizarImagensItens();

  var danoBase = parseFloat(document.getElementById('dano_base').value);
  if (isNaN(danoBase)) {
      console.log(0);
      return resultadoTexto.textContent = "Digite um Valor";
  }
  var itemAcrescimo = {
      1: 0.08,
      2: 0.12,
      3: 0.16,
      4: 0.19,
      5: 0.22,
      6: 0.25,
      7: 0.28,
      8: 0.31
  };

  function calcularDanoBase(danoBase, item) {
      if (item === "0") {
          return danoBase;
      } else {
          var fatorReducao = 1 + itemAcrescimo[item];
          return danoBase / fatorReducao;
      }
  }

  function calcularDanoFinal(danoBase, item) {
      if (item === "0") {
          return danoBase;
      } else {
          var fatorAcrescimo = 1 + itemAcrescimo[item];
          return danoBase * fatorAcrescimo;
      }
  }

  if (itemPossui === "0") {
      danoBaseAtual = danoBase;
  } else {
      danoBaseAtual = calcularDanoBase(danoBase, itemPossui);
  }

  var danoBaseFinal = calcularDanoFinal(danoBaseAtual, itemDeseja);

  if (isNaN(danoBaseFinal)) {
      resultadoTexto.textContent = formatarNumero(danoBase);
  } else {
      resultadoTexto.textContent = formatarNumero(danoBaseFinal);
  }

}

function formatarNumero(numero) {
  return numero.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowIcon");

selectField.onclick = function() {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};

for (var i = 0; i < options.length; i++) {
  options[i].onclick = function() {
      itemPossui = this.getAttribute("value");
      console.log("Valor possuinte:", itemPossui);
      selectText.innerHTML = this.textContent;
      list.classList.toggle("hide");
      arrowIcon.classList.toggle("rotate");
      calcularDano();
  };
}

document.getElementById("selectText").onclick = function() {
  itemPossui = "0";
  selectText.innerHTML = "Selecione um item (Possui)";
  calcularDano();
};

var selectField2 = document.getElementById("selectField-2");
var selectText2 = document.getElementById("selectText-2");
var options2 = document.getElementsByClassName("options-2");
var list2 = document.getElementById("list-2");
var arrowIcon2 = document.getElementById("arrowIcon-2");

selectField2.onclick = function() {
  list2.classList.toggle("hide2");
  arrowIcon2.classList.toggle("rotate");
};

for (var i = 0; i < options2.length; i++) {
  options2[i].onclick = function() {
      itemDeseja = this.getAttribute("value");
      console.log("Valor desejado:", itemDeseja);
      selectText2.innerHTML = this.textContent;
      list2.classList.toggle("hide2");
      arrowIcon2.classList.toggle("rotate");
      calcularDano();
  };
}

document.getElementById("selectText-2").onclick = function() {
  itemDeseja = "0";
  selectText2.innerHTML = "Selecione um item (Deseja)";
  calcularDano();
};

document.addEventListener("DOMContentLoaded", function() {
    var danoBaseInput = document.getElementById("dano_base");
    danoBaseInput.addEventListener("input", function() {
      var danoBase = parseFloat(danoBaseInput.value);
      if (isNaN(danoBase) || danoBaseInput.value.trim() === "") {
        resultadoTexto.textContent = "Insira um valor";
      } else {
        resultadoTexto.textContent = formatarNumero(danoBase);
      }
    });
  });

atualizarImagensItens();