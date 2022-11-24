jQuery(function(){
    $("#clickC").on("click", function(){
        $("p").css("background-color", "green");
    })
    $("#img2").hide();
    $("#changePhoto").on("click", function() {
        $("#img1").hide(2000, function(){
            $("#img2").show(1000);
        });
    })
})