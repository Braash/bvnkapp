import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PaymentProcessView from './PaymentProcessView';
import { fetchAcceptQuoteSummary, updateAcceptQuoteSummary, confirmAcceptQuoteSummary } from '../../store/actions'

const PaymentProcess: React.FC = () => {
	const [selectedCurrency, setSelectedCurrency] = useState<string>('');
	const { loading, data, error } = useSelector((state: any) => state?.payment?.updatedPaymentSummary);
	const initialData = useSelector((state: any) => state?.payment?.paymentSummary?.data);
	const confirmData = useSelector((state: any) => state?.payment?.confirmPaymentSummary?.data);
	const dispatch = useDispatch();
	const { uuid } = useParams();
	const navigate = useNavigate();

	const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedCurrency(event.target.value);
	};

	const handleUpdatedQuote = (uuid: string, currency: string) => {
			const action: any = updateAcceptQuoteSummary({ uuid, currency: selectedCurrency });
      		dispatch(action);
	};

  	const handleAcceptedQuote = async (uuid: string) => {
		if (uuid) {
		const action: any = confirmAcceptQuoteSummary({ uuid });
		await dispatch(action);
		}
	};

	useEffect(() => {
		if (confirmData?.quoteStatus === 'ACCEPTED') {
		navigate(`/payin/${uuid}/pay`);
		}
	}, [confirmData]);

	useEffect(() => {
		if (uuid) {
			const action: any = fetchAcceptQuoteSummary({ uuid });
			dispatch(action);
    	}
	}, [])

	useEffect(() => {
		if (selectedCurrency) {
			handleUpdatedQuote(initialData?.uuid as string, selectedCurrency)
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
