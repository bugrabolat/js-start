var cumle = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ipsum.";
     var maxkarakter = 20;
     var ozetcumle = [];

     if(maxkarakter>cumle.length){
         console.log(cumle);
     }else{
         var kelimeler = cumle.split(' ');
         
         var toplamkarakter = 0;

         for(var i=0;i<kelimeler.length;i++){
             ozetcumle.unshift(kelimeler[i]);
             toplamkarakter+=kelimeler[i].length;

             if(toplamkarakter>maxkarakter){
                 break;
             }
         }
     }
     console.log(ozetcumle.join(' '));