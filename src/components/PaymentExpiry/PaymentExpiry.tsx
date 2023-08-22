import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import exclamationImg from '../../assets/exclamation.png';

const PaymentExpiry: React.FC = () => {
  const { loading, data, error } = useSelector((state: any) => state?.payment?.confirmPaymentSummary);
  const dispatch = useDispatch();
  const { uuid } = useParams();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-1/2 h-1/2 bg-white rounded-lg shadow-lg p-8 relative flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-2">
          <img
            src={exclamationImg}
            className="h-16 object-cover bg-transparent"
            alt="exclamation"
            data-testid="qr-img"
          />
        </div>
        <h4 className="text-center text-xl font-semibold mb-4">Payment details expired</h4>
        <div className="flex justify-center items-center">
          <h6 className="text-center text-xs text-gray-500 mb-4 w-3/4">
            The payment details for your transaction have expired.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default PaymentExpiry;
