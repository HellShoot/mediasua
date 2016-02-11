$(document).ready(function(){
   var cadeiras = [];
   var cadeiras_notas = [];
   var semestres_notas = [];
   var semestres = [];

   function showCadeiras(){
        $('#container').highcharts({
            title: {
                text: '',
                x: -20 //center
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: cadeiras
            },
            yAxis: {
                title: {
                    text: '[0-20]'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }],
                max: 20,
                min: 10
            },
            tooltip: {
                valueSuffix: ''
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Nota',
                data: cadeiras_notas
            }]
        });
   }

    function showSemestres(){
        $('#container').highcharts({
            title: {
                text: '',
                x: -20 //center
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: semestres
            },
            yAxis: {
                title: {
                    text: '[0-20]'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }],
                max: 20,
                min: 10
            },
            tooltip: {
                valueSuffix: ''
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Nota',
                data: semestres_notas
            }]
        });
    }

   $("#calcular").click(function(){
       $.post( "/calcular", { username: $("#username").val(), password: $("#password").val() })
        .done(function( data ) {
           var notas = JSON.parse(data);

           for(var i=0; i<notas.cadeiras.length; i++){
               cadeiras.push(notas.cadeiras[i].nome);
               cadeiras_notas.push(notas.cadeiras[i].nota);
           }

           for(i=0; i<notas.semestres.length; i++){
               semestres.push(notas.semestres[i].ano + "º ano " + notas.semestres[i].semestre + "º semestre");
               semestres_notas.push(notas.semestres[i].nota);
           }

           $("#showmedia").html('<h2>Média: ' + notas.media + '</h2><br/><div id=\"container\" style=\"min-width: 310px; height: 400px; margin: 0 auto\"></div><br/><div class=\"row\"><div class=\"col-lg-12\"><div class=\"btn-group btn-group-lg\" role=\"group\" aria-label="Large button group\"> <button type="button\" class="btn btn-default\" disabled="disabled" id="porcadeiras">Por cadeiras</button> <button id="porsemestres" type=\"button\" class=\"btn btn-default\">Por semestres</button> </div></div></div>');
           showCadeiras();

           $("#porcadeiras").click(function(){
              showCadeiras();
               $(this).prop( "disabled", true );
               $("#porsemestres").prop( "disabled", false );
           });
           $("#porsemestres").click(function(){
               showSemestres();
               $(this).prop( "disabled", true );
               $("#porcadeiras").prop( "disabled", false );
           });
        })
       .fail(function() {
           
       });
   });
});