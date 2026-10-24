//write a program to find the largest among 3 numbers
function findlargest(a,b,c){
    if(a>b && a>c){
        document.write("a is largest ");
    }else if (b>c){
        document.write("B is Greator ");
    }else {
        document.write("c is Greator ");
    }
}
findlargest(10,5,19);