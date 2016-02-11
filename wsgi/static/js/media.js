$(document).ready(function(){
   $("#calcular").click(function(){
       var notas = '{"media": 15.685714285714285, "semestres": [{"semestre": 1, "ano": 1, "nota": 16.466666666666665, "ects": 30.0}, {"semestre": 2, "ano": 1, "nota": 14.0, "ects": 30.0}, {"semestre": 1, "ano": 2, "nota": 15.066666666666666, "ects": 30.0}, {"semestre": 2, "ano": 2, "nota": 14.533333333333333, "ects": 30.0}, {"semestre": 1, "ano": 3, "nota": 15.733333333333333, "ects": 30.0}, {"semestre": 2, "ano": 3, "nota": 17.8, "ects": 30.0}, {"semestre": 1, "ano": 4, "nota": 16.2, "ects": 30.0}], "cadeiras": [{"semestre": 1, "ects": 8.0, "ano": 1, "nome": "AN\u00c1LISE MATEM\u00c1TICA I", "nota": 13.0, "codigo": 42706}, {"semestre": 1, "ects": 8.0, "ano": 1, "nome": "PROGRAMA\u00c7\u00c3O I", "nota": 20.0, "codigo": 43255}, {"semestre": 1, "ects": 8.0, "ano": 1, "nome": "\u00c1LGEBRA LINEAR", "nota": 16.0, "codigo": 43294}, {"semestre": 1, "ects": 6.0, "ano": 1, "nome": "INTRODU\u00c7\u00c3O \u00c0 ENGENHARIA DE COMPUTADORES E TELEM\u00c1TICA", "nota": 17.0, "codigo": 47137}, {"semestre": 2, "ects": 8.0, "ano": 1, "nome": "SISTEMAS DIGITAIS", "nota": 14.0, "codigo": 42501}, {"semestre": 2, "ects": 8.0, "ano": 1, "nome": "AN\u00c1LISE MATEM\u00c1TICA II", "nota": 14.0, "codigo": 42707}, {"semestre": 2, "ects": 8.0, "ano": 1, "nome": "PROGRAMA\u00c7\u00c3O II", "nota": 17.0, "codigo": 43257}, {"semestre": 2, "ects": 6.0, "ano": 1, "nome": "MATEM\u00c1TICA DISCRETA", "nota": 10.0, "codigo": 47166}, {"semestre": 1, "ects": 8.0, "ano": 2, "nome": "MEC\u00c2NICA E CAMPO ELECTROMAGN\u00c9TICO", "nota": 14.0, "codigo": 47170}, {"semestre": 1, "ects": 8.0, "ano": 2, "nome": "PROGRAMA\u00c7\u00c3O III", "nota": 17.0, "codigo": 47213}, {"semestre": 1, "ects": 6.0, "ano": 2, "nome": "M\u00c9TODOS PROBAB\u00cdLISTICOS PARA ENGENHARIA INFORM\u00c1TICA", "nota": 14.0, "codigo": 40337}, {"semestre": 1, "ects": 8.0, "ano": 2, "nome": "ARQUITETURA DE COMPUTADORES I", "nota": 15.0, "codigo": 40334}, {"semestre": 2, "ects": 8.0, "ano": 2, "nome": "SISTEMAS ELECTR\u00d3NICOS", "nota": 11.0, "codigo": 41541}, {"semestre": 2, "ects": 8.0, "ano": 2, "nome": "ARQUITECTURA DE COMPUTADORES II", "nota": 17.0, "codigo": 42548}, {"semestre": 2, "ects": 6.0, "ano": 2, "nome": "LINGUAGENS FORMAIS E AUT\u00d3MATOS", "nota": 18.0, "codigo": 43343}, {"semestre": 2, "ects": 8.0, "ano": 2, "nome": "ALGORITMOS E COMPLEXIDADE", "nota": 13.0, "codigo": 47003}, {"semestre": 1, "ects": 6.0, "ano": 3, "nome": "SISTEMAS DE OPERA\u00c7\u00c3O", "nota": 16.0, "codigo": 42509}, {"semestre": 1, "ects": 8.0, "ano": 3, "nome": "AN\u00c1LISE E MODELA\u00c7\u00c3O DE SISTEMAS", "nota": 15.0, "codigo": 47006}, {"semestre": 1, "ects": 8.0, "ano": 3, "nome": "FUNDAMENTOS DE REDES", "nota": 16.0, "codigo": 47112}, {"semestre": 1, "ects": 8.0, "ano": 3, "nome": "INTRODU\u00c7\u00c3O \u00c0 INTELIG\u00caNCIA ARTIFICIAL", "nota": 16.0, "codigo": 47139}, {"semestre": 2, "ects": 6.0, "ano": 3, "nome": "INTERA\u00c7\u00c3O HUMANO-COMPUTADOR", "nota": 14.0, "codigo": 41549}, {"semestre": 2, "ects": 6.0, "ano": 3, "nome": "BASES DE DADOS", "nota": 18.0, "codigo": 42532}, {"semestre": 2, "ects": 6.0, "ano": 3, "nome": "ARQUITECTURA DE REDES", "nota": 19.0, "codigo": 47023}, {"semestre": 2, "ects": 12.0, "ano": 3, "nome": "PROJECTO EM ENGENHARIA INFORM\u00c1TICA", "nota": 19.0, "codigo": 49984}, {"semestre": 1, "ects": 6.0, "ano": 4, "nome": "ARQUITECTURA DE REDES AVAN\u00c7ADAS", "nota": 18.0, "codigo": 42566}, {"semestre": 1, "ects": 6.0, "ano": 4, "nome": "ARQUITECTURA DE COMPUTADORES AVAN\u00c7ADA", "nota": 15.0, "codigo": 47022}, {"semestre": 1, "ects": 6.0, "ano": 4, "nome": "COMPUTA\u00c7\u00c3O VISUAL", "nota": 15.0, "codigo": 47053}, {"semestre": 1, "ects": 6.0, "ano": 4, "nome": "ENGENHARIA DE DADOS E CONHECIMENTO", "nota": 16.0, "codigo": 47092}, {"semestre": 1, "ects": 6.0, "ano": 4, "nome": "SEGURAN\u00c7A", "nota": 17.0, "codigo": 47232}]}';
       notas = JSON.parse(notas);
       console.log(notas);

       var cadeiras = [];
       var cadeiras_notas = [];

       for(var i=0; i<notas.cadeiras.length; i++){
           cadeiras.push(notas.cadeiras[i].nome);
           cadeiras_notas.push(notas.cadeiras[i].nota);
       }

       $("#showmedia").html('<h2>Média: ' + notas.media + '</h2><br/><div id=\"container\" style=\"min-width: 310px; height: 400px; margin: 0 auto\"></div><br/><div class=\"row\"><div class=\"col-lg-12\"><div class=\"btn-group btn-group-lg\" role=\"group\" aria-label="Large button group\"> <button type="button\" class="btn btn-default\" disabled="disabled" id="porcadeiras">Por cadeiras</button> <button id="porsemestres" type=\"button\" class=\"btn btn-default\">Por semestres</button> </div></div></div>');
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

       $("#porcadeiras").click(function(){

       });
       $("#porsemestres").click(function(){

       });

       /*
       $.post( "/calcular", { username: $("#username").val(), password: $("#password").val() })
            .done(function( data ) {
               console.log(data);
            });;
        */
   });
});