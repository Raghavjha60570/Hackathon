var select = document.querySelectorAll('.Currency'),
input_currency = document.getElementById('input_currency'),
output_currency=document.getElementById('output_currency');

const  host= `api.frankfurter.app`;
fetch(`https://${host}/currencies`)
.then((data)=>data.json())
.then((data)=>{
    const entries = Object.entries(data);
    for  ( i=0 ; i<entries.length ; i++){
        select[0].innerHTML +=`<option value="${entries[i][0] }">${entries[i][0]} </option>`
    select[1].innerHTML +=`<option value="${entries[i][0] }">${entries[i][0]} </option>`
    }
});

function converter(){
    var input_currency_val =input_currency.value;
    if ( select[0].value != select[1].value){
      
      //  alert("Right")
      const  host= `api.frankfurter.app`;
      fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`)
      .then((val) => val.json())
      .then((val)=>{
       
        output_currency.value= Object.values(val.rates)[0]    
      });
    }else{
        alert('Please select two differnt currencies')
    }
}

