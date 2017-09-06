// jQuery is a JavaScript Library.

// jQuery greatly simplifies JavaScript programming.

// jQuery is easy to learn.

$(document).ready(function(){
    $(".b").click(function(){
        $(this).hide();
    });
});

$(document).ready(function(){
    $("#b1").hover(function(){
        $("#test").slideDown(300);
    });
});

$(document).ready(function(){
    $("#b2").hover(function(){
        $("#test").slideUp(300);
    });
});

$(document).ready(function(){
    $("#b3").click(function(){
        $("#test").animate({left: '250px'});
    }); 
});

$(document).ready(function(){
    $("#b4").click(function(){
        $("#test").css("background-color", "blue").slideUp(2000).slideDown(2000);
    }); 
});

$(document).ready(function(){
    $("#b5").click(function(){
        alert("Value: " + $("#input").val());
        alert("Text: " + $("#tpar").text());
        alert("Html: " + $("#tpar").html());
        alert("Input is of type: " + $("#input").attr("type"));
    });
});
// $(document).ready(function(){
//     $("button").mouseleave(function(){
//         $("#test").show();
//     });
// });