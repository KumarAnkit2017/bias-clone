import { useEffect, useState } from 'react';
import React from 'react';
import './css/invoicematch.css';

export default function InvoiceMatch() {
  const [selectedItem, setSelectedItem] = useState({});
  const [errors, setError] = useState(null);
  const [options, setOptions] = useState([]);
  const [portfolioMasterId, setPortfolioMasterId] = useState(null);
  const [responseData, setResponseData] = useState([]);
  const [fromDate, setfromDate] = useState("");
  const [toDate, settoDate] = useState("");
  const [portfolioId, setPortfolioId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1400/portfolio');
        const result = await response.json();
        setOptions(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  let selectedValue;

  const handleSelectChange = (e) => {
    debugger;
    selectedValue = e.target.value;
    const selectedOption = options.find((item) => item.portfolioId === selectedValue);

    console.log('Selected Value:', selectedValue);
    console.log('Options:', options);
    console.log('Selected Option:', selectedOption);

    setSelectedItem(selectedOption || {});
    setPortfolioMasterId(selectedOption?.portfolioMasterId || null);
    setPortfolioId(selectedOption?.portfolioId || null);
  };




  const handleButtonClick = async () => {
    try {
      debugger
      if(selectedItem.portfolioId==undefined)
      {
        alert("Please Select Portfolio");
        return false;
      }
      const response = await fetch('http://localhost:1400/findInvoiceByPortfolioAndDate?portfolioId=S3KL1PTC0551&fromDate=' + fromDate + '&toDate=' + toDate); // Replace with your API endpoint
      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const changeFromDate = (e) => {
    
    setfromDate(e.target.value)
  }

  const changeToDate = (v) => {

    settoDate(v.target.value);
  
  }

  return (
    <div >
      <div className='invoice-container'>
        <div>

          <select
            value={selectedItem.portfolioId || ''}
            onChange={handleSelectChange} style={{ borderRadius: "5px", width: "168px", height: "30px" }}>
            <option value="">Select Option</option>

            {options.map((item) => (
              <option key={item.portfolioMasterId} value={item.portfolioId}>
                {item.portfolioId}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            className="portfolio-name"
            value={selectedItem.portfolioName || ''}
            readOnly
            placeholder='Portfolio Name'
          />
        </div>
        <div>
          <input type="date" className='fromdate-field' onChange={changeFromDate}></input>
        </div>
        <div>
          <input type="date" className='todate-field' onChange={changeToDate}></input>
        </div>
        <div>
          <input type="button" value="View" className='view-btn' onClick={handleButtonClick}></input>
        </div>
      </div>

      <div className='table-Define'>
        <input type="radio" id="matchs" defaultChecked title='Indicate Matched Value' />
        <input type="radio" id="miss-match" defaultChecked title='Indicate Miss-Matched Value' />
      </div>

      <div className='table-are'>
      <table className='table-match'>
        <thead>
          <tr>
            <td>Portfolio</td>
            <td>InvoiceDate</td>
            <td>Buy Quantum</td>
            <td>Sell Quantum</td>
            <td>Grand Total</td>
            <td>Net Amount</td>
            <td>Match Status</td>
          </tr>
        </thead>
        <tbody>
          {
          responseData.map((items, index) => ( 
            <tr key={index}>
              <td>{items.portfolioid}</td>
              <td>{(items.invoicedate).split("-")[2]+"-"+(items.invoicedate).split("-")[1]+"-"+(items.invoicedate).split("-")[0]}</td>
              <td>{(items.totalbuyqty)/1000/4}</td>
              <td>{(items.totalsellqty)/1000/4}</td>
              <td>{items.grandtotal}</td>
              <td>{items.netbalance}</td>
              <td>{}</td>
            </tr>
          ))}

        </tbody>
        <tfoot>

        </tfoot>
      </table>
      </div>
      

    </div>
  );
}
