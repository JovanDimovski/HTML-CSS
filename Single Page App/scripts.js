console.log("In script");
var products = [];
$.getJSON( "products.json", function(data) {
    products = data;
    console.log(data);
    listProducts();
});

function listProducts(){
    for(var i=0;i<products.length;i++){
        $("#main-page").append('<div class="phone" id="p'+i+'"><h3>'+products[i].name+'</h3><img class="thumb" src="'+products[i].image.small+'"></img><br><span>OS: '+products[i].specs.os+'</span><br><span>Storage: '+products[i].specs.storage+'GB</span><br><span>Manufacturer: '+products[i].specs.manufacturer+'</span></div>');
        console.log(i+": "+products[i]);
    }
}

$(".check").click(function(){
    //alert("Android: " + $("#android").prop('checked') +" IOS: " + $("#ios").prop('checked')+" Windows: " + $("#windows").prop('checked'));
    if($("#android").prop('checked')||$("#ios").prop('checked')||$("#windows").prop('checked')){
        for(var i=0;i<products.length;i++){
            if(products[i].specs.os.toUpperCase() == "android".toUpperCase() && $("#android").prop('checked')){
                $("#p"+i).addClass("opaque");
                $("#p"+i).removeClass("transparent");
            }
            else if(products[i].specs.os.toUpperCase() == "android".toUpperCase() && !$("#android").prop('checked')){
                $("#p"+i).addClass("transparent");
                $("#p"+i).removeClass("opaque");
            }
            if(products[i].specs.os.toUpperCase() == "ios".toUpperCase() && $("#ios").prop('checked')){
                $("#p"+i).addClass("opaque");
                $("#p"+i).removeClass("transparent");
            }
            else if(products[i].specs.os.toUpperCase() == "ios".toUpperCase() && !$("#ios").prop('checked')){
                $("#p"+i).addClass("transparent");
                $("#p"+i).removeClass("opaque");
            }
            if(products[i].specs.os.toUpperCase() == "windows".toUpperCase() && $("#windows").prop('checked')){
                $("#p"+i).addClass("opaque");
                $("#p"+i).removeClass("transparent");
            }
            else if(products[i].specs.os.toUpperCase() == "windows".toUpperCase() && !$("#windows").prop('checked')){
                $("#p"+i).addClass("transparent");
                $("#p"+i).removeClass("opaque");
            }
            console.log(i+": "+products[i]);
        }
    }
    else{
        for(var i=0;i<products.length;i++){
            $("#p"+i).addClass("opaque");
            $("#p"+i).removeClass("transparent");
        }
    }
});

$(document).ready(function(){
    $("#main-page").on("click",".phone",function(){
        //alert("Value: " + $(this).attr("id"));
        var id = $(this).attr("id");
        var index = id.slice(1);
        console.log("index"+index);
        $("#main-page").addClass("hidden");
        $("#single-phone-page").addClass("visible");
        $("#single-phone-page").html('<div><img src="'+products[index].image.small+'"></img><button id="close">CLOSE</button></div>');
    });
});

$(document).ready(function(){
    $("#single-phone-page").on("click","#close",function(){
        $("#main-page").removeClass("hidden");
        $("#single-phone-page").removeClass("visible");
        $("#single-phone-page").addClass("hidden");
    });
});