var settings = {
    showControls: true,
    showPosition: true,
    colorPrimary: "rgb(255,255,255)",
    colorSecondary: "rgb(0,0,0)"
}

function myMove() {
    var elem = document.getElementById("animate"); 
    var pos = 0;
    var off = 0;
    var id;
    var colorPrimary = settings.colorPrimary.slice(0,-1);
    var colorSecondary = settings.colorSecondary.slice(0,-1);

    function parseSettings(){
        if(settings.showControls == false){
            document.getElementById("prev").style.display = 'none'; 
            document.getElementById("next").style.display = 'none'; 
        }
        if(settings.showPosition == false){
            document.getElementById("position").style.display = 'none'; 
        }
        colorPrimary = colorPrimary.slice(4);
        colorSecondary = colorSecondary.slice(4);
        console.log(colorPrimary);

        document.getElementById("prev").setAttribute("style", "background-color: rgba("+colorSecondary+",0.2)"); 
        document.getElementById("next").setAttribute("style", "background-color: rgba("+colorSecondary+",0.2)"); 
        document.getElementById("arrow right").setAttribute("style", "border-color: rgba("+colorPrimary+",1)");
        document.getElementById("arrow left").setAttribute("style", "border-color: rgba("+colorPrimary+",1)"); 
    }
    parseSettings();
    
    setTimeout(forward,5000);
    function reset(func,interval){
        clearInterval(id);
        id = setInterval(func, interval);
    }
    function setActiveImage(){
        var imNu = 1-1*Math.floor(pos/960);
        console.log("p"+ imNu);
        var element;
        for(var i = 1;i<=4;i++){
            element = document.getElementById("p" + i);
            if(imNu == i){
                element.setAttribute("style", "background-color: rgba("+colorPrimary+",0.8)");
            }
            else{
                element.setAttribute("style", "background-color: rgba("+colorSecondary+",0.4)");
            }
        }
    }

    setActiveImage();
    
    function forward (){
        next();
        if (pos != -960*3)
            setTimeout(forward,5000);
        else
            reverse();
    }

    function reverse(){
        reset(innerReverse,2);
        function innerReverse(){
            if(pos >= 0)
                reset(forward,5);
            pos+=10;
            elem.style.left = (pos+off) + 'px'; 
            setActiveImage();
        }
    }

    function next(){
        reset(innerNext,5);
        function innerNext (){
            if(pos> -960*3+10)
                pos-=10;
            else
                pos = -960*3;
            elem.style.left = (pos+off) + 'px';
            setActiveImage(); 
            if(pos%960 == 0)
                reset(forward,5000);
        }
    }

    function prev(){
        reset(innerPrev,2);
        function innerPrev (){
            if(pos <= -10)
                pos+=10;
            else
                pos = 0;
            elem.style.left = (pos+off) + 'px'; 
            setActiveImage();
            if(pos%960 == 0)
                reset(forward,5000);
        }
    }

    function resize(){
        var body = document.getElementById("body");
        var positionInfo = body.getBoundingClientRect();
        var width = positionInfo.width;
        console.log("Resizing " + width);
        var container = document.getElementById("container");
        if(width>960){
            container.setAttribute("stylr", "width: 960px");
            off = 0;
        }
        else if(width>480){
            container.setAttribute("style",  "width: "+width+"px");
            off = -Math.floor((960-width)/2);
        }
        else{
            container.setAttribute("style",  "width: 480px");
            off = -240;
        }
    }

    return{
        forward: forward,
        reverse: reverse,
        next:next,
        prev:prev,
        resize:resize
    }
}

var outer = myMove();
var next = outer.next;
var prev = outer.prev;
var resizeFunction = outer.resize;