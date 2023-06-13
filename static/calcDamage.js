var itemPossui = "";
var itemDeseja = "";
var resultado = document.getElementById('resultado');
var resultadoTexto = document.getElementById('resultado-texto');
var danoBaseAtual = 0;

function calcularDano() {
  var danoBase = parseFloat(document.getElementById('dano_base').value);

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

  resultado.classList.remove('esconder');
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

document.addEventListener('DOMContentLoaded', function() {
  var danoBaseInput = document.getElementById('dano_base');
  danoBaseInput.addEventListener('input', function() {
    var danoBase = parseFloat(danoBaseInput.value);
    resultadoTexto.textContent = danoBase.toFixed(2);
    resultado.classList.remove('esconder');
  });
});