document.addEventListener("DOMContentLoaded", () => {
var btn = document.getElementsByClassName("btn")[0];

btn.addEventListener('click', function(ev){
    //alert('hyy')

    fetch("http://localhost:8888/info2180-lab4/superheroes.php")
    .then(response => response.text())
    .then(data =>{
    alert(data)
    
       
    })

});
})

