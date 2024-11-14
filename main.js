const apiKey = 'ce441f5103886e3ca928a8bc';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;
 
// funçao para consultar à taxa de câmbio via API
async function getExchangeRate(daMoeda, paraMoeda){
    // trata erro try
 
    try{
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = response.json();
 
        if(data.result === "success"){
            return data.conversion_rates[paraMoeda];
        }else{
            throw new Error('Erro ao buscar taxa de câmbio');
            }
    }catch (error){
        console.error("Erro:", error);
       return null;
 
    }
}
 
 // função que busca taxa de câmbio da API
async function getExchangeRate(deMoeda, paraMoeda){
    try{
        const response = await fetch(`${apiURL}${deMoeda}`)
        const data = await response.json();
 
        if(data.result === 'success'){
            return data.conversion_rates[paraMoeda];
        }else{
            throw new Error('Erro ao buscar a taxa de câmbio');
        }
 
    }catch(error ){
        console.error("Erro: ", error);
        return null;
    }
}
 
document.getElementById('currency-form').addEventListener('submit', async function(event){
    event.preventDefault();
    
    // obter valores de entrada
    const valor = parseFloat(document).getElementById('').value);
    const Damoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    const exchangeRate = await getExchangeRate (daMoeda, paraMoeda);

    if (exchargerate){
        const convertedValue = valor * exchangeRate;
        const conversao = document.getElementById('conversao');
        conversao.textContent = `resultado: ${convertedValue.toFixed(2)} ${paraMoeda}';

        else{
    alert('Erro ao buscar a cotação. Tente novamente. ');
    }
}
})
 
 