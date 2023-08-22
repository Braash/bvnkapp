import React from "react";
import response from "../../constants/response.json";
import QuoteTimer from "../Timer/Timer";
import loaderImg from "../../assets/loader.gif";
import messages from "../../messages/messages";

interface PaymentProcessViewProps {
  selectedCurrency: string;
  handleCurrencyChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleAcceptedQuote: (uuid: string) => void;
  handleUpdatedQuote: (uuid: string, currency: string) => void;
  paymentSummaryData: any;
  paymentSummaryDataLoading: boolean;
  confirmPaymentSummaryLoading: boolean;
  uuid: string | undefined;
}

const currencyOptions = [
  { value: "", label: "Select currency" },
  { value: "BTC", label: "Bitcoin" },
  { value: "ETH", label: "Ethereum" },
  { value: "LTC", label: "Litecoin" },
];

const PaymentProcessView: React.FC<PaymentProcessViewProps> = ({
  selectedCurrency,
  handleCurrencyChange,
  handleAcceptedQuote,
  handleUpdatedQuote,
  paymentSummaryData,
  confirmPaymentSummaryLoading,
  paymentSummaryDataLoading,
  uuid,
}) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h3 className="absolute top-0 left-0 text-xl font-semibold ml-8 mt-4">
        {messages?.acceptQuote}
      </h3>
      <div className="w-2/5 bg-white rounded-lg shadow-lg p-8 relative">
        <h4 className="text-center text-lg font-semibold mb-4">
          {response?.merchantDisplayName}
        </h4>
        <div className="flex items-center justify-center">
          <h1 className="text-center font-bold text-3xl mb-4">
            {response?.displayCurrency?.amount}
          </h1>
          <h4 className="text-center font-bold text-xl mb-3 ml-2">
            {response?.displayCurrency?.currency}
          </h4>
        </div>
        <h2 className="text-center md:text-sm text-xs mb-4">
          <span className="text-gray-500">{messages?.reference}</span>{" "}
          <span className="text-black">{response?.reference}</span>
        </h2>
        <div className="relative">
          <h6 className="mb-1 text-xs font-semibold">
            {messages?.payWithCopy}
          </h6>
          <select
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            className="w-full py-2 pl-3 pr-8 border border-gray-300 text-md rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {currencyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
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
            <div className="border-t border-gray-300 top-0 w-full left-0 h-px bg-gray-300 mt-2 mb-2" />
            <div className="flex justify-between">
              <div className="text-center text-gray-500 md:text-sm text-xs">
                {messages?.amountDueCopy}
              </div>
              <div>
                {paymentSummaryDataLoading ? (
                  <img
                    src={loaderImg}
                    className="h-4 object-cover bg-transparent"
                    alt="Loader"
                    data-testid="logo-img"
                  />
                ) : (
                  <div className="text-center text-gray-500 md:text-sm text-xs">
                    {paymentSummaryData?.paidCurrency?.amount}{" "}
                    {paymentSummaryData?.paidCurrency?.currency}
                  </div>
                )}
              </div>
            </div>
            <div className="border-t border-gray-300 top-0 w-full left-0 h-px bg-gray-300 mt-2 mb-2" />
            <div className="flex justify-between">
              <div className="text-center text-gray-500 md:text-sm text-xs">
                {messages?.expirationCopy}
              </div>
              <div>
                {paymentSummaryDataLoading ? (
                  <img
                    src={loaderImg}
                    className="h-4 object-cover bg-transparent"
                    alt="Loader"
                    data-testid="logo-img"
                  />
                ) : (
                  <QuoteTimer
                    expiryDate={paymentSummaryData?.acceptanceExpiryDate}
                    expiryFunction={handleUpdatedQuote}
                    currency={selectedCurrency}
                  />
                )}
              </div>
            </div>
            <div className="border-t border-gray-300 top-0 w-full left-0 h-px bg-gray-300 mt-2 mb-2" />
            <button
              className="w-full mt-3 py-2 pl-3 border border-blue-500 bg-blue-500 text-white text-md rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => handleAcceptedQuote(uuid as string)}
            >
              {confirmPaymentSummaryLoading
                ? messages?.processingCopy
                : messages?.confirmCopy}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentProcessView;
