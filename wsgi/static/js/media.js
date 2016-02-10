$(document).ready(function(){
   $("#calcular").click(function(){
       $.post( "/calcular", { username: $("#username").text(), password: $("#password").text() })
            .done(function( data ) {
                alert( "Data Loaded: " + data );
            });

       console.log("calculando!");
   });
});