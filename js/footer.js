$(function(){
    $(`<link rel="stylesheet" href="../css2/footer2.css">`).appendTo("head");
    $.ajax({
        url:"footer.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll("#footer")
        }
    })
})