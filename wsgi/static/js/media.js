$(document).ready(function(){
   $("#calcular").click(function(){
       $.post( "/calcular", { username: $("#username").val(), password: $("#password").val() })
            .done(function( data ) {
                alert( "Data Loaded: " + data );
            });

       console.log("calculando!");
   });
});