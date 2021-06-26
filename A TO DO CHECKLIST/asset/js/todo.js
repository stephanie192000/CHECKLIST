//Check of specific Todos By clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//if li is gray
//if ($(this).css("color") === "rgb(128, 128, 128)") {
//turn it black
// $(this).css({
// color: "black",
//textDecoration: "none"
//  });
// } else {
//   $(this).css({
//     color: "grey",
//   textDecoration: "Line-through"
//});
//}
//});

//click on x to delete todods

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropogation();
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        //grabbing new todod from input
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class = 'fa fa-trash'></i></span>" + todoText + "</li>")
    }
});

$(".fa-plus").click(function() {
    $("input[type='text'").fadeToggle()
});