import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_q8IWRyZff8UVju2B9BcYP6SxvmgwlgLmclZCtJNP');

  const convertCurrency=async(fromCur,toCur,unit)=>{
    const response= await freecurrencyapi.latest({
        base_currency:fromCur,
        currencies:toCur,
    })
    const multiplyer=response.data[toCur]
    return multiplyer*unit


}

export default convertCurrency

// freecurrencyapi.latest({
//     base_currency: 'USD',
//     currencies: 'EUR'
// }).then(response => {
//     console.log(response);
// });