  function ExclSignCheck(Element) {
      return Element.endsWith("!!");
     }
  function SgnFndr(Arr) {
      return Arr.filter(ExclSignCheck);
  }
module.exports = function zeros(expression) {
     var MltplElemArr = expression.split("*");
     var exclsign2Arr = SgnFndr(MltplElemArr);
     var exclsign1Arr = [];
     var fives=deuces=0;

     for(var i=0; i<exclsign2Arr.length; i++){
        var a= MltplElemArr.indexOf(exclsign2Arr[i]);
          MltplElemArr.splice(a, 1);
          exclsign2Arr[i]=parseInt(exclsign2Arr[i]);
        }
    for(var i=0;i<MltplElemArr.length;i++ ){
        exclsign1Arr[i]=parseInt(MltplElemArr[i]);
    }
   for(var n=0;n<exclsign1Arr.length;n++ ){
          for(var i=1;i<=exclsign1Arr[n];i++ ){
              var z=i;
              while(z%5==0){
                  fives++;
                  z=z/5;

              }
          }
    }
    for(var n=0;n<exclsign2Arr.length;n++ ){
         for(var i=exclsign2Arr[n]; i>0; i=i-2 ){
             var z=i;
             while(z%5==0){
                 fives++;
                 z=z/5;

             }
          }
    }
     for(var n=0;n<exclsign1Arr.length;n++ ){
          for(var i=1;i<=exclsign1Arr[n];i++ ){
              var z=i;
              while(z%2==0){
                  deuces++;
                  z=z/2;

              }
          }
    }
     for(var n=0;n<exclsign2Arr.length;n++ ){
         for(var i=exclsign2Arr[n]; i>0; i=i-2 ){
             var z=i;
             while(z%2==0){
                 deuces++;
                 z=z/2;

             }
          }
    }
  return Math.min(deuces, fives);
}
