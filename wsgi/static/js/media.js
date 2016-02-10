$(document).ready(function(){
   $("#calcular").click(function(){
       $.post( "/calcular", { username: "John", password: "2pm" })
            .done(function( data ) {
                alert( "Data Loaded: " + data );
            });

       console.log("calculando!");
   });
});