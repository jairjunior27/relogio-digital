
let horas,min,seg;
let dia = new Array('Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado')
let mes = new Array('Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro')
function relogio(){

    data = new Date()
    horas = data.getHours();
    min =data.getMinutes();
    seg= data.getSeconds();

    if(horas<10){
        horas = '0'+horas;
    }
    if(min<10){
        min = '0'+min;
    }
    if(seg<10){
        seg = '0'+seg;
    }
    horario = horas+':'+min+':'+seg;
    detalhes =  dia[data.getDay()] +' '+ data.getDate()+ ' de ' + mes[data.getMonth()] + ' '+data.getFullYear();
    document.getElementById('time').innerHTML = horario;
    document.getElementById('d-time').innerHTML =detalhes;
}
let click = setInterval(relogio,1000)
