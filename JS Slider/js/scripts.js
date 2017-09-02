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
            id = setInterval(forward, 3000);
        }else if(pos%960 == -1){
            clearInterval(id);
            id = setInterval(forward, 5);
        }
        if (pos == -960*3) {
            clearInterval(id);
            id2 = setInterval(reverse, 2);
            //pos = 0;
            console.log("Should reverse");
        } else {
            pos--;
            elem.style.left = pos + 'px'; 
        }
    }
    function reverse(){
        console.log("In reverse");
        if(pos == 0){
            clearInterval(id2);
            id = setInterval(forward, 5);
        }
        pos+=10;
        elem.style.left = pos + 'px'; 
    }
    function next(){
        if(pos%960 == 0)
        {
            clearInterval(id);
            id = setInterval(forward, 3000);
        }
        pos++;
        elem.style.left = pos + 'px'; 
    }
}

var outer = myMove();
