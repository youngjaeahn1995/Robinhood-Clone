import axios from "axios";

export const getStocks = () => axios.get('https://api.twelvedata.com/stocks', {
    headers: {'Authorization': import.meta.env.VITE_API_KEY}
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
})