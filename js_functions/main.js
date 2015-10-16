  function myMessage(){
      console.log('First Function')
   }

  function add(num1,num2){
          result = 2 + 3;
      console.log('5');
  }
  function add2(a,b){
      var sums = 4 + 3;
      return sums;
  }
     var add2result = add2(4,3);


     function cardflip(element){
         $(element).hide();
         src = getSrc(element);
         console.log(src);
     }

     function getSrc(back){

         var front = $(back).prev();
         var img = front.find("img");
         var src = img.attr("src");
         return src;
     }

