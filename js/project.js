$(document).ready(function(){
    projectLink();
    $(window).bind("pageshow", function (event) {
        if (event.originalEvent.persisted) {
            projectOpen();
        }
        else {
            // 새로운 페이지 로드 시
        }
    });
    
});



function projectLink(){
    $(".nea").on("click" , function(){
        projectAction();
        setTimeout(function() { 
            location.href = "https://kmkm9011.github.io/23-portfolio.github.io/pj-nea.html";
        },500);
    });
    $(".nea-ux").on("click" , function(){
        projectAction();
        setTimeout(function() { 
            location.href = "https://kmkm9011.github.io/23-portfolio.github.io/pj-nea-ux.html";
        },500);
    });
    $(".ndc").on("click" , function(){
        projectAction();
        setTimeout(function() { 
            location.href = "https://kmkm9011.github.io/23-portfolio.github.io/pj-ndc.html";
        },500);
    });
    $(".ne-branding").on("click" , function(){
        projectAction();
        setTimeout(function() { 
            location.href = "https://kmkm9011.github.io/23-portfolio.github.io//pj-ne-branding.html";
        },500);
    });
    $(".iot").on("click" , function(){
        projectAction();
        setTimeout(function() { 
            location.href = "https://kmkm9011.github.io/23-portfolio.github.io//pj-iot.html";
        },500);
    });
}
function projectAction(){
    $("header").stop().animate({ opacity : "0", height : "0px"}, 500);
    $("footer").stop().animate({ opacity : "0", top : "210px"}, 500);     
    $(".contents").stop().animate({ opacity : "0", top : "210px"}, 500);
}






