var btn=document.getElementById("icon");
btn.addEventListener("mouseover",function(){
    var icons=document.getElementById("icons");
    icons.setAttribute("id","icons2")
});

btn.addEventListener("mouseout",function(){
    var icons=document.getElementById("icons2");
    icons.setAttribute("id","icons")
});
