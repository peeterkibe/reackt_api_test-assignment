import axios from "axios"
import { useQuery } from "react-query";

const fetchCryptoTop = () => 
axios
.get("https://api.coinlore.net/api/tickers/?start=0&limit=25")
.then((response) => response.data.data);

export default function useCryptoTop() {
  return useQuery("cryptoTop", fetchCryptoTop);
}