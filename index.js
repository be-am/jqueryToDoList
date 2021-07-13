
$(".content").keydown(function (key) {
    if (key.keyCode == 13) {
        event.preventDefault();

        var must = $(".content").val();

        $("#to-do").append("<div>" + must + '<button class="done-btn">X</button>' + "</div>")

        $('.done-btn').click(function () {
            $(this).parent().animate({
                width: "300px",
                opacity: 0.5,
            }, 2000);
            $(this).parent().addClass("selected");
        });
    }
});