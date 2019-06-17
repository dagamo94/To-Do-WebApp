// CHECK OFF SPECIFIC TODOS BY CLCIKING

$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});



// CLICK ON 'X' TO DELETE TODO

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    var todoText;
    if(event.which === 13){
        todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span>" + todoText + "</li>");
    }
});

