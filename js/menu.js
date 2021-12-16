
$(document).ready(function(){
    menuAction();
});


// 메뉴 애니메이션
function menuAction(){
    // $("#menu").hide().animate({ opacity : "0"});
    $(".menu__bg").animate({ right : "-200px"});

    $("#header").contents().find('#menu__open').on("click" , function(){menuOpen();});
    $('#menu__close').on("click" , function(){menuClose();});

    menuLink();
}
function menuOpen(){
    $("#menu").show().animate({ opacity : "1"}, 300);
    $(".menu__bg").animate({ right : "0px"}, 300);
}
function menuClose(){
    $("#menu").animate({ opacity : "0"}, 300);
    $(".menu__bg").animate({ right : "-200px"}, 300);
    setTimeout(function() { 
        $("#menu").hide();
    },300);
}
function menuLink(){
    // index로 이동
    $("#logo").on("click" , function(){
        menuClose();
        menuIndexConnect();
        setTimeout(function() { 
            location.href = "../index.html";
        },600);
    });
    $(".menu__list ul li").eq(0).on("click" , function(){
        menuClose();
        menuIndexConnect();
        setTimeout(function() { 
            location.href = "../index.html";
        },600);
    });
    // 그 외로 이동
    $(".menu__list ul li").eq(1).on("click" , function(){
        menuClose();
        menuConnect();
        setTimeout(function() { 
            location.href = "../project.html";
        },600);
    });
    $(".menu__list ul li").eq(2).on("click" , function(){
        menuClose();
        menuConnect();
        setTimeout(function() { 
            location.href = "../blog.html";
        },600);
    });
    $(".menu__list ul li").eq(3).on("click" , function(){
        menuClose();
        menuConnect();
        setTimeout(function() { 
            location.href = "../profile.html";
        },600);
    });
}

function menuIndexConnect(){
    $("header").animate({ opacity : "0", top : "50px"}, 600);
    $(".contents").animate({ opacity : "0", top : "50px"}, 600);
    $("footer").animate({ opacity : "0", top : "50px"}, 600);
}
function menuConnect(){
    $(".contents").animate({ opacity : "0", top : "50px"}, 600);
    $("footer").animate({ opacity : "0", top : "50px"}, 600);
    $("#header__title").animate({ opacity : "0"}, 600);

}


