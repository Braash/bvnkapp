import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PaymentProcessView from './PaymentProcessView';
import { fetchAcceptQuoteSummary, updateAcceptQuoteSummary, confirmAcceptQuoteSummary } from '../../store/actions'

const PaymentProcess: React.FC = () => {

	// REGION: REDUX STORE, HOOKS and OTHER

	const { loading, data } = useSelector((state: any) => state?.payment?.updatedPaymentSummary);
	const initialData = useSelector((state: any) => state?.payment?.paymentSummary?.data);
	const confirmData = useSelector((state: any) => state?.payment?.confirmPaymentSummary?.data);
	const confirmPaymentLoading = useSelector((state: any) => state?.payment?.confirmPaymentSummary?.loading);
	const dispatch = useDispatch();
	const { uuid } = useParams();
	const navigate = useNavigate();

	// #endregion

	// REGION: STATE

	const [selectedCurrency, setSelectedCurrency] = useState<string>('');

	// #endregion

	// REGION: HANDLERS

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

	// #endregion

	// REGION: LIFECYCLE

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

	// #endregion

	return (
	<div>
		<PaymentProcessView
			selectedCurrency={selectedCurrency}
			paymentSummaryData={data}
			paymentSummaryDataLoading={loading}
			confirmPaymentSummaryLoading={confirmPaymentLoading}
			uuid={uuid}
			handleCurrencyChange={handleCurrencyChange}
			handleAcceptedQuote={handleAcceptedQuote}
			handleUpdatedQuote={handleUpdatedQuote}
		/>
	</div>
	);
};

export default PaymentProcess;
