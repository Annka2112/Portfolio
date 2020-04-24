var HScreen = screen.availHeight + "px";
var WScreen = screen.availWidth  + "px";
$(".section-main").css({height: HScreen});
/* $(".content").css({height: HScreen}); */

$("#navToggle").click(function() {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  $("body").toggleClass("locked");
  $(".title").toggle();
});

$(".menu-list").on("click", function() {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  $("body").toggleClass("locked");
  $("#navToggle").toggleClass("active");
  $(".title").toggle();
});


$(window).scroll( function(){
  $(".chart").each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > bottom_of_object ){ 
      $(".chart").easyPieChart({
        scaleColor: "#ecf0f1",
        lineWidth: 30,
        lineCap: 'butt',
        barColor: "#00c4e3",
        trackColor:	"#ecf0f1",
        size: 200,
        animate: 700,
        onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
        }
      });
      }
  }); 
});

$(document).ready(function() {
	$(".about-project").hide(); // скрываем все модальные окна
  $(".ProjectContent").each(function(i) {
  	$(this).attr("data-tab","tab" + i); //добавляем каждому элементу массива проектов атрибут tab+индекс
  });
 
  $(".about-project").each(function(i) {
    $(this).attr("data-tab","tab" + i); //добавляем каждому элементу массива модальных окон атрибут  tab+индекс
  });
  
  $(".ProjectContent").on("click", function() { //навешиваем на каждый проект событие click и инициируем функцию 
  	var dataTab = $(this).data("tab"); // определяем значение атрибута проекта, на который нажали
    var getService = $(this).closest("#works"); // определяем первый высше стоящий элемент section с ид works
    var top_screen = $(window).scrollTop() + "px";

    getService.find(".about-project").hide(); 
    getService.find(".about-project[data-tab = "+dataTab+"]").show(); /*ищем методом find в элемент section с ид works div c классом about-project
     и атрибутом соответствующему атрибуту проекта, и методом show показываем*/
    getService.find(".about-project[data-tab = "+dataTab+"]").css({top: top_screen});
    $("body").addClass("locked");
  });
});

//событие закрытие модального окна при клике на крестик
$(".fas").on("click", function() { 
  $(".about-project").hide();
  $("body").removeClass("locked");
});

  