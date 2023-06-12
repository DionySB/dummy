function calcularDano() {
  var danoBase = parseFloat(document.getElementById('dano_base').value);
  var itemPossui = document.getElementById('item_possui').value;
  var itemDeseja = document.getElementById('item_deseja').value;
  var resultado = document.getElementById('resultado');
  
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

  var danoBaseOriginal = calcularDanoBase(danoBase, itemPossui);

  function calcularDanoFinal(danoBase, item) {
    if (item === "0") {
      return danoBase;
    } else {
      var fatorAcrescimo = 1 + itemAcrescimo[item];
      return danoBase * fatorAcrescimo;
    }
  }

  var danoBaseFinal = calcularDanoFinal(danoBaseOriginal, itemDeseja);
  resultado.innerHTML = 'Dano base final: ' + danoBaseFinal.toFixed(2);

  return false;
}

document.getElementById('calcular-btn').onclick = calcularDano;