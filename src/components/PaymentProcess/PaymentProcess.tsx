import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PaymentProcessView from './PaymentProcessView';
import { fetchAcceptQuoteSummary, updateAcceptQuoteSummary, confirmAcceptQuoteSummary } from '../../store/actions'

const PaymentProcess: React.FC = () => {
	const [selectedCurrency, setSelectedCurrency] = useState<string>('');
	const { loading, data, error } = useSelector((state: any) => state?.payment?.updatedPaymentSummary);
	const dispatch = useDispatch();
	const { uuid } = useParams();
	console.log(uuid, data, 'uuid');

	const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedCurrency(event.target.value);
	};

	const handleAcceptedQuote = (uuid: string) => {
		if (uuid) {
			const action: any = confirmAcceptQuoteSummary({ uuid });
			dispatch(action);
    	}
		
	};

	useEffect(() => {
		if (uuid) {
			const action: any = fetchAcceptQuoteSummary({ uuid });
			dispatch(action);
    	}
	}, [])

	useEffect(() => {
		if (selectedCurrency) {
			console.log('hey', uuid, selectedCurrency);
			const action: any = updateAcceptQuoteSummary({ uuid, currency: selectedCurrency });
      		dispatch(action);
    }
	}, [selectedCurrency, uuid])

	return (
	<div>
		<PaymentProcessView
			selectedCurrency={selectedCurrency}
			handleCurrencyChange={handleCurrencyChange}
			handleAcceptedQuote={handleAcceptedQuote}
			paymentSummaryData={data}
			paymentSummaryDataLoading={loading}
			uuid={uuid}
		/>
	</div>
	);
};

export default PaymentProcess;
