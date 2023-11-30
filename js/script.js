$(document).ready(function () {
    $("button#white").click(function () {
        $("body").removeClass();
        $("body").addClass("white-background");
    });

    $("button#black").click(function () {
        $("body").removeClass();
        $("body").addClass("black-background");
    });

    $("button#original").click(function(){
        $("body").removeClass();
        $("body").addClass("original-background");
    })

    $(".cta-sec").click(function(){
        $("p").addClass("prt")
    })

});