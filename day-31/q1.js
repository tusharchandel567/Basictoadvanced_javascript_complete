 //Wite a program to find if the given number is with in the specified range ?
        function findRange(number,min,max){
            if(number >= min&&number<=max){
               console.log(`your number ${number} is with in ${min} - ${max}`);
            }else{
               console.log(`out of range ${number} is the ${min} to  ${max}`);
            }
        }
        findRange(3,1,10);
        findRange(12,20,30);