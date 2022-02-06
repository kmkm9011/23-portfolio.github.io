$(document).ready(function(){
    widthSetting();
    $(window).resize(function() {
        widthSetting();
    });
});
function widthSetting(){
    if($(window).width() < 960) {  
        header960();  
        $(window).scroll(function(){
            header960();
        });
    }else if($(window).width() > 960) {   
        header1920();  
        $(window).scroll(function(){
            header1920();
        });
    }; 
}
function header960(){
    if($('body, html').scrollTop() > 1){   
        $("header").css({"background-color" : "#ffffff", "box-shadow" : "0 10px 10px #0000000d"}); 
        $("#header__title").stop().animate({ opacity : "1"}, 0);
    }else if($('body, html').scrollTop() < 1){
        $("header").css({"background-color" : "#ffffff00", "box-shadow" : "0 10px 10px #00000000"}); 
        $("#header__title").stop().animate({ opacity : "1"}, 0);
    }
}
function header1920(){	
    if($('body, html').scrollTop() > 60){   
        $("header").css({"background-color":"#ffffff00", "box-shadow" : "0 10px 10px #00000000"});
        $("#header__title").stop().animate({ opacity : "0"}, 0);
    }else if($('body, html').scrollTop() < 60){
        $("header").css({"background-color":"#ffffff00", "box-shadow" : "0 10px 10px #00000000"}); 
        $("#header__title").stop().animate({ opacity : "1"}, 0);
    }
}