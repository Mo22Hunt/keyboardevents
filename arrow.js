'use strict';
    let boxTop = 200;
    let boxLeft = 200;

        document.addEventListener('keydown', (event) => {
        const keyName = event.key;
       console.log('keydown event\n\n' + 'key: ' + keyName);
        
        if(keyName === "ArrowDown"){
            console.log("down")
            boxTop = boxTop +10
        }
        if(keyName === "ArrowUp"){
            console.log("Up")
            boxTop = boxTop -10
        }
        if(keyName === "ArrowLeft"){
            console.log("left")
            boxLeft = boxLeft -10
        }
        if(keyName === "ArrowRight"){
            console.log("Right")
            boxLeft = boxLeft +10
        }
        
        document.getElementById("box").style.top = boxTop + "px";
        document.getElementById("box").style.left = boxLeft + "px";
    });
