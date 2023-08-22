import React from 'react';
import exclamationImg from '../../assets/exclamation.png';
import messages from '../../messages/messages';

const PaymentExpiry: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h3 className="absolute top-0 left-0 text-xl font-semibold ml-8 mt-4">
        {messages?.expiry}
      </h3>
      <div className="w-2/5 bg-white rounded-lg shadow-lg p-8 relative flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-2">
          <img
            src={exclamationImg}
            className="h-16 object-cover bg-transparent"
            alt="exclamation"
            data-testid="qr-img"
          />
        </div>
        <h4 className="text-center text-xl font-semibold mb-4">
          {messages?.paymentDetailsExpiredCopy}
        </h4>
        <div className="flex justify-center items-center">
          <h6 className="text-center text-sm text-gray-500 mb-4 w-3/4 mb-6">
            {messages?.paymentDetailsExpiredCopyExtended}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default PaymentExpiry;
