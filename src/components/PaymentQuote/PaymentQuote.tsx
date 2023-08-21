import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PaymentQuoteView from './PaymentQuoteView';
import { fetchAcceptQuoteSummary, updateAcceptQuoteSummary, confirmAcceptQuoteSummary } from '../../store/actions'

const PaymentQuote: React.FC = () => {
	const { loading, data, error } = useSelector((state: any) => state?.payment?.confirmPaymentSummary);
	const dispatch = useDispatch();
	const { uuid } = useParams();

	const [textToCopyAmount, setTextToCopyAmount] = useState(data?.paidCurrency?.amount);
	const [textToCopyAddress, setTextToCopyAddress] = useState(data?.address?.address);
  	const [isCopied, setIsCopied] = useState(false);

  	const handleCopyClick = (string: string) => {
		const textArea = document.createElement('textarea');
		textArea.value = string === 'Amount' ? textToCopyAmount : textToCopyAddress;
		document.body.appendChild(textArea);
		textArea.select();
		document.execCommand("copy");
		document.body.removeChild(textArea);

		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 4000);
  };

	useEffect(() => {
		if (uuid) {
			const action: any = fetchAcceptQuoteSummary({ uuid });
			dispatch(action);
    	}
	}, [])
	
	return (
	<div>
		<PaymentQuoteView
			paymentSummaryData={data}
			paymentSummaryDataLoading={loading}
			uuid={uuid}
			handleCopyClick={handleCopyClick}
			isCopied={isCopied}
			textToCopyAmount={textToCopyAmount}
			textToCopyAddress={textToCopyAddress}
		/>
	</div>
	);
};

export default PaymentQuote;
