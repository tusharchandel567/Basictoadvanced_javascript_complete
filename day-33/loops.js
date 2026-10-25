


var menu = [
    {category:"electronics",products:["telvesions","Mobiles"]},
    {category:"footwear",products:["boots","casuals"]}
];

function bodyload(){
    for(var i=0;i<menu.length;i++){
        var li = document.createElement("li");
        li.innerHTML = menu[i].category;
        for(var j=0;j<menu[i].products.length;j++){
            var ul = document.createElement("ul");
            var ulli = document.createElement("li");
            ulli = menu[i].products[j];
            ul.appendChild(ulli);
            li.appendChild(ul);
            document.querySelector("ol").appendChild(li);
        }
    }
}
