$(document).ready(function(){
    blogLink();
});




function blogLink(){
    $(".blog__banner").on("click" , function(){
        blogAction();
        setTimeout(function() { 
            location.href = "https://rosakim90.tistory.com/";
        },500);
    });
    $(".blog ul li").eq(0).on("click" , function(){
        blogAction();
        setTimeout(function() { 
            location.href = "https://rosakim90.tistory.com/category/%EB%8B%AC%EB%B0%A4%EC%97%90%20%EA%B8%B0%ED%9A%8D%ED%95%98%EA%B8%B0";
        },500);
    });
    $(".blog ul li").eq(1).on("click" , function(){
        blogAction();
        setTimeout(function() { 
            location.href = "https://rosakim90.tistory.com/category/%EB%8B%AC%EB%B0%A4%EC%97%90%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%B4%88%EC%8B%AC%EC%B0%BE%EA%B8%B0/%EB%94%94%EC%9E%90%EC%9D%B8%20%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4";
        },500);
    });
    $(".blog ul li").eq(2).on("click" , function(){
        blogAction();
        setTimeout(function() { 
            location.href = "https://rosakim90.tistory.com/category/%EB%8B%AC%EB%B0%A4%EC%97%90%20%EC%BD%94%EB%94%A9%ED%95%98%EA%B8%B0/HTML%20CSS%20%EA%B3%B5%EB%B6%80%ED%95%98%EA%B8%B0";
        },500);
    });
    $(".blog ul li").eq(3).on("click" , function(){
        blogAction();
        setTimeout(function() { 
            location.href = "https://rosakim90.tistory.com/category/%EB%8B%AC%EB%B0%A4%EC%97%90%20%EC%BD%94%EB%94%A9%ED%95%98%EA%B8%B0/%EC%BB%A4%EB%AE%A4%EB%8B%88%EC%BC%80%EC%9D%B4%EC%85%98%EC%9D%84%20%EC%9C%84%ED%95%9C%20IT%20%EC%A7%80%EC%8B%9D";
        },500);
    });
    $(".blog ul li").eq(4).on("click" , function(){
        blogAction();
        setTimeout(function() { 
            location.href = "https://rosakim90.tistory.com/category/%EB%8B%AC%EB%B0%A4%EC%97%90%20%EC%BD%94%EB%94%A9%ED%95%98%EA%B8%B0";
        },500);
    });
    $(".blog ul li").eq(5).on("click" , function(){
        blogAction();
        setTimeout(function() { 
            location.href = "https://rosakim90.tistory.com/category/%EB%8B%AC%EB%B0%A4%EC%97%90%20%EC%BD%94%EB%94%A9%ED%95%98%EA%B8%B0";
        },500);
    });
}
function blogAction(){
    $("header").stop().animate({ opacity : "0", height : "0px"}, 500);
    $("footer").stop().animate({ opacity : "0", top : "210px"}, 500);     
    $(".contents").animate({ opacity : "0", top : "210px"}, 500);
}