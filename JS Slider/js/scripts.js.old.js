function myMove() {
    var elem = document.getElementById("animate"); 
    var pos = 0;
    var id = setInterval(forward, 5);
    var id2;
    //var reverse = false;
    function forward() {
        if(pos%960 == 0)
        {
            clearInterval(id);
            id = setInterval(forward, 5000);
        }else if(pos%960 == -1){
            clearInterval(id);
            id = setInterval(forward, 5);
        }
        if (pos == -960*3) {
            clearInterval(id);
            id2 = setInterval(reverse, 5000);
            //pos = 0;
            console.log("Should reverse");
        } else {
            pos--;
            elem.style.left = pos + 'px'; 
        }
    }
    function reverse(){
        clearInterval(id);
        clearInterval(id2);
        id2 = setInterval(innerReverse, 2);
        function innerReverse(){
            console.log("In reverse");
            if(pos >= 0){
                clearInterval(id2);
                clearInterval(id);
                id = setInterval(forward, 5);
            }
            pos+=10;
            elem.style.left = pos + 'px'; 
        }
    }
    function next(){
        clearInterval(id);
        clearInterval(id2);
        id = setInterval(innerNext, 5);
        function innerNext (){
            console.log("In next");
            if(pos> -960*3+10)
                pos-=10;
            else
                pos = -960*3;
            elem.style.left = pos + 'px'; 
            if (pos <= -960*3) {
                clearInterval(id);
                id2 = setInterval(reverse, 5000);
                //pos = 0;
                console.log("Should reverse");
            }
            if(pos%960 <= 0 && pos%960 > -10)
                {
                clearInterval(id);
                id = setInterval(forward, 5000);
                }
            }
    }
    function prev(){
        clearInterval(id);
        clearInterval(id2);
        id = setInterval(innerPrev, 5);
        function innerPrev (){
            console.log("In next");
            if(pos <= -10)
                pos+=10;
            else
                pos = 0;
            elem.style.left = pos + 'px'; 
            /*if (pos <= -960*3) {
                clearInterval(id);
                id2 = setInterval(reverse, 5000);
                //pos = 0;
                console.log("Should reverse");
            }*/
            if(pos%960 == 0)
                {
                clearInterval(id);
                id = setInterval(forward, 5000);
                }
            }
    }
    return{
        forward: forward,
        reverse: reverse,
        next:next,
        prev:prev
    }
}

var outer = myMove();
var next = outer.next;
var prev = outer.prev;