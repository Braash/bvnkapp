import React from 'react';
import QuoteTimer from '../Timer/Timer';
import loaderImg from '../../assets/loader.gif'
import qrImg from '../../assets/qr-code.png' 
import { shortenCryptoAddress } from '../../utils/address-shortener';
import messages from '../../messages/messages';

interface PaymentQuoteViewProps {
	paymentSummaryData: any;
	paymentSummaryDataLoading: boolean;	
	uuid: string | undefined;	
	handleCopyClick: any;
	handleExpiredQuote: any;
	isCopiedAmount: boolean;
	isCopiedAddress: boolean;	
	textToCopyAmount: string;
	textToCopyAddress: string;
}

const PaymentQuoteView: React.FC<PaymentQuoteViewProps> = ({ paymentSummaryData, paymentSummaryDataLoading, uuid, handleCopyClick, handleExpiredQuote, isCopiedAmount, isCopiedAddress, textToCopyAmount, textToCopyAddress }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h3 className="absolute top-0 left-0 text-xl font-semibold ml-8 mt-4">
        {messages?.payQuote}
      </h3>
      <div className="w-2/5 bg-white rounded-lg shadow-lg p-8 relative">
        <h4 className="text-center text-lg font-semibold mb-4">
          {messages?.payWithProductCopy(
            paymentSummaryData?.paidCurrency?.currency
          )}
        </h4>
        <div className="flex justify-center items-center">
          <h6 className="text-center text-xs mb-4 w-3/4 text-gray-500">
            {messages?.paymentCopy(paymentSummaryData?.paidCurrency?.currency)}
          </h6>
        </div>
        <div className="border-t border-gray-300 w-full h-px bg-gray-300 mt-2 mb-2" />
        <div className="flex justify-between">
          <div className="text-center md:text-sm text-xs text-gray-500">
            {messages?.amountDueCopy}
          </div>
          <div className="flex justify-between">
            <div className="text-center md:text-sm text-xs">
              {textToCopyAmount} {paymentSummaryData?.paidCurrency?.currency}
            </div>
            <span
              onClick={() => handleCopyClick("Amount", textToCopyAmount)}
              className="cursor-pointer text-blue-500 ml-2 md:text-sm text-xs"
            >
              {isCopiedAmount ? "Copied!" : "Copy"}
            </span>
          </div>
        </div>
        <div className="border-t border-gray-300 w-full h-px bg-gray-300 mt-2 mb-2" />

        <div className="flex justify-between">
          <div className="text-center text-gray-500 md:text-sm text-xs">
            {messages?.productAddress(
              paymentSummaryData?.paidCurrency?.currency
            )}
          </div>
          <div className="flex justify-between">
            <div className="text-center md:text-sm text-xs">
              {shortenCryptoAddress(textToCopyAddress)}
            </div>
            <span
              onClick={() => handleCopyClick("Address", textToCopyAddress)}
              className="cursor-pointer text-blue-500 ml-2 md:text-sm text-xs"
            >
              {isCopiedAddress ? "Copied!" : "Copy"}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={qrImg}
            className="h-32 object-cover m-2"
            alt="qr-code"
            data-testid="qr-img"
          />
          <div className="text-center text-xs text-gray-500 mb-2">
            {paymentSummaryData?.address?.address}
          </div>
        </div>

        <div className="border-t border-gray-300 w-full h-px bg-gray-300 mt-2 mb-2" />
        <div className="flex justify-between">
          <div className="text-center text-gray-500 md:text-sm text-xs">
            {messages?.amountDueCopy}
          </div>
          <div>
            {paymentSummaryDataLoading ? (
              <img
                src={loaderImg}
                className="h-6 text-xs object-cover bg-transparent"
                alt="Loader"
                data-testid="logo-img"
              />
            ) : (
              <QuoteTimer
                expiryDate={paymentSummaryData?.expiryDate}
                expiryFunction={handleExpiredQuote}
              />
            )}
          </div>
        </div>
        <div className="border-t border-gray-300 w-full h-px bg-gray-300 mt-2 mb-2" />
      </div>
    </div>
  );
};

export default PaymentQuoteView;

