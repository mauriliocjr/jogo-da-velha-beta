var numCliques = 0;

function incrementClique (){
    numCliques++;
}

function putX(id) {
    document.getElementById(id).innerHTML = "<img src='./img/x.png'></img>";
}

function putO(id) {
    document.getElementById(id).innerHTML = "<img src='./img/o.png'></img>";
}

function clearById (id) {
    document.getElementById(id).innerHTML = "";
}

function clique (id) {
    incrementClique();

    var element = document.getElementById(id).innerHTML; 
    
    if(element !== ""){
        clearById(id);
    }
    else {
        if((numCliques % 2) == 0){
            putO(id);
        }
        else{
            putX(id);
        }
    }
}