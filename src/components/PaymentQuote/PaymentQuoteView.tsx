import React from 'react';
import QuoteTimer from '../Timer/Timer';
import loaderImg from '../../assets/loader.gif'
import qrImg from '../../assets/qr-code.png' 
import { shortenCryptoAddress } from '../../utils/address-shortener';


interface PaymentQuoteViewProps {
	paymentSummaryData: any;
	paymentSummaryDataLoading: boolean;	
	uuid: string | undefined;	
	handleCopyClick: any;
	isCopied: boolean;	
	textToCopyAmount: string;
	textToCopyAddress: string;
}

const PaymentQuoteView: React.FC<PaymentQuoteViewProps> = ({ paymentSummaryData, paymentSummaryDataLoading, uuid, handleCopyClick, isCopied, textToCopyAmount, textToCopyAddress }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-1/2 h-1/2 bg-white rounded-lg shadow-lg p-8 relative">
        <h4 className="text-center text-lg font-semibold mb-4">Pay with BTC</h4>
        <div className="flex justify-center items-center">
			<h6 className="text-center text-xs mb-4 w-3/4">
				To complete this payment send the amount due to the BTC address provided below.
			</h6>
			</div>
		<div className="border-t border-gray-300 w-full h-px bg-gray-300 mt-2 mb-2" />
			<div className="flex justify-between">
					<div className="text-center text-sm">Amount due</div>
					<div className="flex justify-between">
						<div className="text-center text-sm">{textToCopyAmount} {paymentSummaryData?.paidCurrency?.currency}</div>
						<span
							onClick={handleCopyClick('Amount')}
							className="cursor-pointer text-blue-500 ml-2 text-sm"
							>
							{isCopied ? 'Copied!' : 'Copy'}
						</span>
					</div>
			</div>
		<div className="border-t border-gray-300 w-full h-px bg-gray-300 mt-2 mb-2" />

		<div className="flex justify-between">
					<div className="text-center text-sm">BTC address</div>
					<div className="flex justify-between">
						<div className="text-center text-sm">{shortenCryptoAddress(textToCopyAddress)}</div>
						<span
							onClick={handleCopyClick('Address')}
							className="cursor-pointer text-blue-500 ml-2 text-sm"
							>
							{isCopied ? 'Copied!' : 'Copy'}
						</span>
					</div>
					
			</div>

        <div className="flex flex-col items-center">
			<img
				src={qrImg}
				className="h-32 object-cover"
				alt="qr-code"
				data-testid="qr-img"
			/>
			<div>{paymentSummaryData?.address.address}</div>
		</div>

		<div className="border-t border-gray-300 w-full h-px bg-gray-300 mt-2 mb-2" />
			<div className="flex justify-between">
					<div>Time left to pay</div>
					<div>
						{paymentSummaryDataLoading ? <img
							src={loaderImg}
							className="h-6 object-cover bg-transparent"
							alt="Loader"
							data-testid="logo-img"
						/> :
						<QuoteTimer expiryDate={paymentSummaryData?.expiryDate} />}
					</div>
			</div>
		<div className="border-t border-gray-300 w-full h-px bg-gray-300 mt-2 mb-2" />
        </div>
      </div>
  );
};

export default PaymentQuoteView;

