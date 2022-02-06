$(document).ready(function(){
    widthSetting();
    $(window).resize(function() {
        widthSetting();
    });
});

function widthSetting(){
    if($(window).width() < 480) {           
        header480();
        $(window).scroll(function(){
            header480();
        });
    }else if($(window).width() < 960) {  
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



function header480(){
    if($('body, html').scrollTop() > 100){   
        headerResize480();  
    }else if($('body, html').scrollTop() < 100){
        headerDefault480();  
    }
}
function header960(){	
    if($('body, html').scrollTop() > 100){   
        headerResize960();  
    }else if($('body, html').scrollTop() < 100){
        headerDefault960();  
    }
}
function header1920(){	
    if($('body, html').scrollTop() > 100){   
        headerResize1920();  
    }else if($('body, html').scrollTop() < 100){
        headerDefault1920();  
    }
}




// 480 header 설정
function headerResize480(){
    $("header").stop().animate({ height : "60px"}, 300).css({"background-color":"#ffffff", "box-shadow":"0 10px 10px #0000000d"}); 
    $("#menu__open").stop().animate({ width : "24px", height : "24px", padding : "18px 32px"}, 300);
    $("#logo").stop().animate({ width : "24px", height : "24px", padding : "18px 32px"}, 300);
}
function headerDefault480(){
    $("header").stop().animate({ height : "100px"}, 300).css({"background-color":"#ffffff00", "box-shadow":"0 10px 10px #00000000"});  
    $("#menu__open").stop().animate({ width : "30px", height : "30px", padding : "35px 32px"}, 300);
    $("#logo").stop().animate({ width : "30px", height : "30px", padding : "35px 32px"}, 300);
}

// 960 header 설정
function headerResize960(){
    $("header").stop().animate({ height : "60px"}, 300).css({"background-color":"#ffffff", "box-shadow":"0 10px 10px #0000000d"}); 
    $("#menu__open").stop().animate({ width : "24px", height : "24px", padding : "18px 60px"}, 300);
    $("#logo").stop().animate({ width : "24px", height : "24px", padding : "18px 60px"}, 300);
}
function headerDefault960(){
    $("header").stop().animate({ height : "100px"}, 300).css({"background-color":"#ffffff00", "box-shadow":"0 10px 10px #00000000"});  
    $("#menu__open").stop().animate({ width : "30px", height : "30px", padding : "35px 60px"}, 300);
    $("#logo").stop().animate({ width : "30px", height : "30px", padding : "35px 60px"}, 300);
}
// 1920 header 설정
function headerResize1920(){
    $("header").stop().animate({ height : "60px"}, 300).css({"background-color":"#ffffff", "box-shadow":"0 10px 10px #0000000d"}); 
    $("#menu__open").stop().animate({ width : "24px", height : "24px", padding : "18px 100px"}, 300);
    $("#logo").stop().animate({ width : "24px", height : "24px", padding : "18px 100px"}, 300);
}
function headerDefault1920(){
    $("header").stop().animate({ height : "160px"}, 300).css({"background-color":"#ffffff00", "box-shadow":"0 10px 10px #00000000"});  
    $("#menu__open").stop().animate({ width : "40px", height : "40px", padding : "60px 100px"}, 300);
    $("#logo").stop().animate({ width : "40px", height : "40px", padding : "60px 100px"}, 300);
}