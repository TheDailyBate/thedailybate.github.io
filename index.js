function homepageExpand(event, id){
    element = document.getElementById(id)
    list = document.getElementsByClassName("homepageDescription")
    for(i=0; i<list.length; i++){
        if(list[i].id === id+"_open"){
            list[i].style.display = "none";
            list[i].id=list[i].id.substring(0,list[i].id.indexOf("_")>-1 ? list[i].id.indexOf("_") : list[i].id.length )
            event.target.innerHTML= "&#187;".concat(event.target.innerText.substr(1));
        }else if(list[i].id === id){
            list[i].style.display = "block";
            list[i].id= list[i].id+"_open"
            event.target.innerText = "^".concat(event.target.innerText.substr(1));
        }
    }
}