import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import exclamationImg from '../../assets/exclamation.png' 


const PaymentExpiry: React.FC = () => {
	const { loading, data, error } = useSelector((state: any) => state?.payment?.confirmPaymentSummary);
	const dispatch = useDispatch();
	const { uuid } = useParams();
	

  	
	
	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<div className="w-1/2 h-1/2 bg-white rounded-lg shadow-lg p-8 relative">
			 	<div className="flex justify-between">
					<img
						src={exclamationImg}
						className="h-32 object-cover justify-center items-center bg-transparent"
						alt="qr-code"
						data-testid="qr-img"
					/>
				</div>
				<h4 className="text-center text-lg font-semibold mb-4">Pay with BTC</h4>
				<div className="flex justify-center items-center">
					<h6 className="text-center text-xs mb-4 w-3/4">
						To complete this payment send the amount due to the BTC address provided below.
					</h6>
					</div>
			</div>
		</div>

	);
};

export default PaymentExpiry;