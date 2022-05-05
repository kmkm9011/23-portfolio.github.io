
$(document).ready(function(){
    headerAction();
});


// 메뉴 애니메이션
function headerAction(){
    $(".menu__bg").animate({ right : "-200px"});
    $('#menu__open').on("click" , function(){
        menuOpen();
      });
}
function menuOpen(){
    $("#menu").show().animate({ opacity : "1"}, 300);
    $(".menu__bg").animate({ right : "0px"}, 300);
}

