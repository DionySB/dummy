function calcularDano() {
  var danoBase = parseFloat(document.getElementById('dano_base').value);
  var itemPossui = document.getElementById('item_possui').value;
  var itemDeseja = document.getElementById('item_deseja').value;
  var resultado = document.getElementById('resultado');

  var itemReducao = {
    1: 0.08,
    2: 0.12,
    3: 0.16,
    4: 0.19,
    5: 0.22,
    6: 0.25,
    7: 0.28,
    8: 0.31
  };

  var itemAumento = {
    1: 0.08,
    2: 0.12,
    3: 0.16,
    4: 0.19,
    5: 0.22,
    6: 0.25,
    7: 0.28,
    8: 0.31
  };

  function calcularDanoBase(danoBase, itemPossui) {
    if (itemPossui === 'n/a') {
      return danoBase;
    } else {
      var item = parseInt(itemPossui);
      var fatorAcrescimo = 1 - itemReducao[item];
      return danoBase / fatorAcrescimo;
    }
  }

  function calcularDanoFinal(danoBase, itemDeseja) {
    if (itemDeseja !== "") {
      var item = parseInt(itemDeseja);
      var fatorAcrescimo = 1 + itemAumento[item];
      return danoBase * fatorAcrescimo;
    } else {
      return danoBase;
    }
  }

  var danoBaseOriginal = calcularDanoBase(danoBase, itemPossui);
  console.log("Dano base original:", danoBaseOriginal);

  var danoBaseFinal = calcularDanoFinal(danoBaseOriginal, itemDeseja);
  console.log("Dano base final:", danoBaseFinal);

  resultado.innerHTML = 'Dano base final: ' + danoBaseFinal;

  return false;
}

$(document).ready(function() {

  $('#item_possui').change(function() {
    var selectedOption = $(this).find('option:selected');
    var thumbnailUrl = selectedOption.data('thumbnail');
    $('#selected_thumbnail').attr('src', thumbnailUrl);
  });
});