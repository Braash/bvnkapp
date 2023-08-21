import React from 'react';
import response from '../../constants/response.json'
import QuoteTimer from '../Timer/Timer';
import loaderImg from '../../assets/loader.gif'

interface PaymentProcessViewProps {
	selectedCurrency: string;
	handleCurrencyChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	handleAcceptedQuote: (uuid: string) => void;
	paymentSummaryData: any;
	paymentSummaryDataLoading: boolean;	
	uuid: string | undefined;		
}

const PaymentProcessView: React.FC<PaymentProcessViewProps> = ({ selectedCurrency, handleCurrencyChange, handleAcceptedQuote, paymentSummaryData, paymentSummaryDataLoading, uuid }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-1/2 h-1/2 bg-white rounded-lg shadow-lg p-8 relative">
        <h4 className="text-center text-lg font-semibold mb-4">{response?.merchantDisplayName}</h4>
        <div className="flex items-center justify-center">
			<h1 className="text-center font-bold text-3xl mb-4">{response?.displayCurrency?.amount}</h1>
			<h4 className="text-center font-bold text-xl mb-3 ml-2">{response?.displayCurrency?.currency}</h4>
		</div>
        <h2 className="text-center text-sm mb-4">For reference number: {response?.reference}</h2>
        <div className="relative">
        <h6 className="mb-2 text-xs">Pay with</h6>
          <select
            className="w-full py-2 pl-3 pr-8 border border-gray-300 text-md rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCurrency}
            onChange={handleCurrencyChange}
          >
            <option disabled value="">Select currency</option>
            <option value="BTC">Bitcoin</option>
            <option value="ETH">Ethereum</option>
            <option value="LTC">Litecoin</option>
          </select>
          <div className="absolute top-0 right-0 bottom-0 flex items-center pr-5 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            />
          </div>
        </div>
        {selectedCurrency && (
            <div className="mt-4 border-t pt-4">
            <div className="border-t border-gray-300 top-0 w-full left-0 h-px bg-gray-300" />
				
				<div className="flex justify-between">
					<div>Amount due</div>
					<div>
						{paymentSummaryDataLoading ? <img
							src={loaderImg}
							className="h-6 object-cover bg-transparent"
							alt="Loader"
							data-testid="logo-img"
						/> :
						<div>{paymentSummaryData?.paidCurrency?.amount} {paymentSummaryData?.paidCurrency?.currency}</div>}
					</div>
				</div>

            <div className="border-t border-gray-300 top-0 w-full left-0 h-px bg-gray-300" />

				

				<div className="flex justify-between">
					<div>Quoted price expires in</div>
					<div>
						{paymentSummaryDataLoading ? <img
							src={loaderImg}
							className="h-6 object-cover bg-transparent"
							alt="Loader"
							data-testid="logo-img"
						/> :
						<QuoteTimer expiryDate={paymentSummaryData?.acceptanceExpiryDate} />}
					</div>
				</div>

            <div className="border-t border-gray-300 top-0 w-full left-0 h-px bg-gray-300 m-1" />

          <button
            className="w-full mt-3 py-2 pl-3 border border-blue-500 bg-blue-500 text-white text-md rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
 			onClick={() => handleAcceptedQuote(uuid as string)}
          >
            Continue
          </button>
        </div>
        )}
      </div>
    </div>
  );
};

export default PaymentProcessView;
