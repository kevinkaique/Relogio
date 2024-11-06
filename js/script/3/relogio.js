//criar 3 constantes(const) chamadas hoars, minutos e segundos 

const CaixaHoras = document.getElementById ("horas");
const CaixaMinutos = document.getElementById ("minutos");
const CaixaSegundos = document.getElementById ("segundos");
const CaixaDate = document.getElementById("date")

//crie uma constante chamada relogio e atribua o metodos= setInterval.

const relogio = setInterval(() => {
    
//crie uma variavel(let) chamada datetoday e atribua o super variavel new Date()
 let dateToday = new Date ();

 const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

 //criar 3 constantes(const) chamadas hoars, minutos e segundos e atribuir a variavel dateToday.
  let date = dateToday.toLocaleDateString('pt-BR', options);  
  let hr = dateToday.getHours(); 
  let min = dateToday.getMinutes(); 
  let sec = dateToday.getSeconds(); 

  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;
  

    CaixaHoras.textContent = hr;
    CaixaMinutos.textContent = min;
    CaixaSegundos.textContent =  sec;
    CaixaDate.textContent = date

}, 10);