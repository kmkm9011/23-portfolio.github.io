$(document).ready(function(){
    projectLink();
});




function projectLink(){
    $(".project ul li").eq(0).on("click" , function(){
        projectAction();
        setTimeout(function() { 
            location.href = "../html/project1.html";
        },500);
    });
    $(".project ul li").eq(1).on("click" , function(){
        projectAction();
        setTimeout(function() { 
            location.href = "../html/project2.html";
        },500);
    });
    $(".project ul li").eq(2).on("click" , function(){
        projectAction();
        setTimeout(function() { 
            location.href = "../html/project3.html";
        },500);
    });
    $(".project ul li").eq(3).on("click" , function(){
        projectAction();
        setTimeout(function() { 
            location.href = "../html/project4.html";
        },500);
    });
    $(".project ul li").eq(4).on("click" , function(){
        projectAction();
        setTimeout(function() { 
            location.href = "../html/project5.html";
        },500);
    });
    $(".project ul li").eq(5).on("click" , function(){
        projectAction();
        setTimeout(function() { 
            location.href = "../html/project6.html";
        },500);
    });
}
function projectAction(){
    $("header").stop().animate({ opacity : "0", height : "0px"}, 500);
    $("footer").stop().animate({ opacity : "0", top : "210px"}, 500);     
    $(".contents").animate({ opacity : "0", top : "210px"}, 500);
}






