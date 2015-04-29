var globalVar = "NULL";


var main = function () {
  "use strict";
  var ob = "NULL";
  var $img = $("<img>").hide();
     
      var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
              "tags=dogs&format=json&jsoncallback=?";
    $.getJSON(url, function (flickrResponse) {
        //просто выводим ответ в консоль
        //console.log(flickrResponse.items[0].media.m);
   


  $(".tabs a:nth-child(1)").on("click", function () {
    // делаем все вкладки неактивными
    $(".tabs span").removeClass("active");
    // делаем активной первую вкладку
    $(".tabs a:nth-child(1) span").addClass("active");
    // очищаем основное содержание, чтобы переопределить его
    $("main .content").empty();

    var i = getRandomInt(0, 10);
    $img.attr("src", flickrResponse.items[i].media.m);
	// прикрепляем тег к функции main элемента photos, а затем отображаем его
	$img.fadeIn();
    //console.log(flickrResponse.items[i].media.m);
    $("main .content").append($img);
    //
var $comminput = $(
     "<section class='comment-input'><input placeholder='Оставьте сообщение здесь'><button onclick='butevent()'>+</button>"+
      +"</section>"+
      +"<section class='comments'>"+
      +"</section>"
      );
       $("main .content").append($comminput).append("<section class='comments'></section>");
      
//
    // возвращается false, так как мы не переходим по ссылке
    return false;
  });
  $(".tabs a:nth-child(2)").on("click", function () {
    $(".tabs span").removeClass("active");
    $(".tabs a:nth-child(2) span").addClass("active");
    $("main .content").empty();
//

      
//


    return false;
  });

  $(".tabs a:nth-child(3)").on("click", function () {
    $(".tabs span").removeClass("active");
    $(".tabs a:nth-child(3) span").addClass("active");
    $("main .content").empty();
    return false;
  });
   });
};

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function butevent() {
  alert('Спасибо!');
  var $new_comment = $("<p>");
  if ($(".comment-input input").val()!== "") {
      $new_comment.text($(".comment-input input").val());
      $(".comments").append($new_comment);
      globalVar = $(".comment-input input").val();
      //$.get("/newcomment?=" + globalVar);
      //
      console.log(globalVar);
      //var fromFront = "{ 'name': 'Вася', 'comment': '"+globalVar+"'}"; 
       ob = {
            name: 'Вася', 
            comment: globalVar
              };

      //setInterval(function () {
    $.post("jsoncomment", ob, function (response) {
    // это обратный вызов, выполняется при ответе сервера
    console.log("Получение данных с сервера");
    console.log(response);
});
  //}, 5000);
      //
      //console.log(globalVar);
      $(".comment-input input").val("");
    }
  }

function getImg()
{
 var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
              "tags=dogs&format=json&jsoncallback=?";
    $.getJSON(url, function (flickrResponse) {
        //просто выводим ответ в консоль
        //console.log(flickrResponse.items[0].media.m);
    });

    $.getJSON(url, function (flickrResponse) {
flickrResponse.items.forEach(function (item) {


var i = getRandomInt(0, 10);
// устанавливаем атрибут для URL, находящегося в ответе
//console.log(item.media.m);
$img.attr("src", item.media.m);
// прикрепляем тег к функции main элемента photos, а затем отображаем его
$img.fadeIn();
});
});
}

$(document).ready(main);
