import React from 'react'
import CoinInfo from '../interfaces/CoinInterface';
import useCryptoTop from '../query-hooks/useCryptoTop';
import '../App.css'


export default function CryptoTopList() {
  const topCrypto = useCryptoTop();

  return (
      <div>
        {topCrypto.isLoading && <p>Loading...</p>}
        
        {topCrypto.isError && <p>An error ocurred</p>}

        {topCrypto.isSuccess && 
        <table className='table'>
          <tr>
            <th className='th'>Rank</th>
            <th className='th'>Name</th>
            <th className='th'>Price</th>
            <th className='th'>Change 1h</th>
            <th className='th'>Change 24h</th>
            <th className='th'>Change 7d</th>
            <th className='th'>Market cap</th>
          </tr>
          {topCrypto.data.map((coinInfo:CoinInfo) =>(
            <tr> 
              <td className='td'>{coinInfo.rank}</td>
              <td className='td'>{coinInfo.name}</td> 
              <td className='td'>$ {coinInfo.price_usd}</td>
              <td className='td'>{coinInfo.percent_change_1h}%</td>
              <td className='td'>{coinInfo.percent_change_24h}%</td>
              <td className='td'>{coinInfo.percent_change_7d}%</td>
              <td className='td'>$ {Math.round(coinInfo.market_cap_usd/100000000)/10} B</td>
            </tr>
            ))}  
        </table>}
      </div>   
  )
}
 