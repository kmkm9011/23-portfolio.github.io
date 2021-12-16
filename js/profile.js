$(document).ready(function(){
    openAction();
});

function openAction(){
    $(".skill__graphic").stop().delay(1000).animate({ width : "90%"}, 1500);
    $(".skill__ui").stop().delay(1200).animate({ width : "100%"}, 1500);
    $(".skill__video").stop().delay(1400).animate({ width : "50%"}, 1500);
    $(".skill__basic").stop().delay(1600).animate({ width : "90%"}, 1500);
    $(".skill__publishing").stop().delay(1800).animate({ width : "50%"}, 1500);    
}