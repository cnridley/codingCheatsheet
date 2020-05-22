$(document).ready(function(){
    $("#clkEx").click(function(){
        $("#clkEx").css("backgroundColor", "orange");
    });

    $("#modalTrigger").click(function(){
        $(".modal").toggle();
    });
});
