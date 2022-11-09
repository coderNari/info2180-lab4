document.addEventListener("DOMContentLoaded", () => {
var btn = document.getElementsByClassName("btn")[0];
// var superHeroes=  <?= json_encode ($superheroes) ?>; 

btn.addEventListener('click', function(ev){
    //alert('hyy')
    // function results(name){
        // if (name.length== 0){
            fetch("http://localhost:8888/info2180-lab4/superheroes.php")
            .then(response => response.text())
            
            .then(data =>{
            console.log(data)
            alert(data)
        
        })
        // }
        var req=new XMLHttpRequest();
        req.onreadystatechange=function() {
    //         if (this.readyState==4 && this.status==200) {
    //         document.getElementById("search").innerHTML=this.responseText;
    // }
}
        // req.open("GET","superheroes.php?n="+name,true);
        // req.send();
    // }
});


})


