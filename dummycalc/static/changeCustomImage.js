
var langArray = [];
$('.vodiapicker option').each(function(){
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li data-value="' + value + '"><img src="'+ img +'" alt=""/><span>'+ text +'</span></li>';
  langArray.push(item);
})

$('#a').html(langArray);

//change button stuff on click
$('#a li').click(function(){
  var value = $(this).attr('data-value');
  var text = $(this).find('span').text();
  $('.btn-select').html('<img src="'+ $(this).find('img').attr("src") +'" alt="" /><span>'+ text +'</span>');
  $('#item_possui').val(value); // Definir o valor selecionado no elemento select
  $(".b").toggle();
});

$(".btn-select").click(function(){
  $(".b").toggle();
});

// Código para o segundo vodiapicker

var langArray2 = [];
$('.vodiapicker-2 option').each(function(){
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li data-value="' + value + '"><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
  langArray2.push(item);
})

$('#a-2').html(langArray2);

//change button stuff on click
$('#a-2 li').click(function(){
  var value = $(this).attr('data-value');
  var text = $(this).find('span').text();
  $('.btn-select-2').html('<img src="'+ $(this).find('img').attr("src") +'" alt="" /><span>'+ text +'</span>');
  $('#item_deseja').val(value); // Definir o valor selecionado no elemento select
  $(".b-2").toggle();
});

$(".btn-select-2").click(function(){
  $(".b-2").toggle();
});