import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PaymentProcessView from './PaymentProcessView';
import { fetchAcceptQuoteSummary, updateAcceptQuoteSummary, confirmAcceptQuoteSummary } from '../../store/actions'

const PaymentProcess: React.FC = () => {
	const [selectedCurrency, setSelectedCurrency] = useState<string>('');
	const { loading, data, error } = useSelector((state: any) => state?.payment?.updatedPaymentSummary);
	const dispatch = useDispatch();
	const { uuid } = useParams();
	let navigate = useNavigate();

	const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedCurrency(event.target.value);
	};

	const handleAcceptedQuote = (uuid: string) => {
		if (uuid) {
			const action: any = confirmAcceptQuoteSummary({ uuid });
			dispatch(action);
    	}
		navigate(`/payin/${uuid}/pay`)
	};

	const handleUpdatedQuote = (uuid: string, currency: string) => {
			const action: any = updateAcceptQuoteSummary({ uuid, currency: selectedCurrency });
      		dispatch(action);
	};

	useEffect(() => {
		if (uuid) {
			const action: any = fetchAcceptQuoteSummary({ uuid });
			dispatch(action);
    	}
	}, [])

	useEffect(() => {
		if (selectedCurrency) {
			handleUpdatedQuote(uuid as string, selectedCurrency)
    }
	}, [selectedCurrency, uuid])

	return (
	<div>
		<PaymentProcessView
			selectedCurrency={selectedCurrency}
			handleCurrencyChange={handleCurrencyChange}
			handleAcceptedQuote={handleAcceptedQuote}
			handleUpdatedQuote={handleUpdatedQuote}
			paymentSummaryData={data}
			paymentSummaryDataLoading={loading}
			uuid={uuid}
		/>
	</div>
	);
};

export default PaymentProcess;
