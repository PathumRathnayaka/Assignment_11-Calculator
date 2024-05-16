function setScreen(num){


    if (document.getElementById('txtScreen').value !="0"){

        document.getElementById('txtScreen').value += num;
    }
    else {
        document.getElementById('txtScreen').value = num;
    }
    console.log(num);
}

function reset(){
    document.getElementById('txtScreen').value = "0";
}