$(document).ready(function(){
    projectOpen();
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

function projectOpen(){
    $("header").stop().animate({ opacity : "1", height : "160px"}, 500);
    $("footer").stop().animate({ opacity : "1", top : "0px"}, 500);     
    $(".contents").animate({ opacity : "1", top : "0px"}, 500);
}


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
}
function projectAction(){
    $("header").stop().animate({ opacity : "0", height : "0px"}, 500);
    $("footer").stop().animate({ opacity : "0", top : "210px"}, 500);     
    $(".contents").animate({ opacity : "0", top : "210px"}, 500);
}






