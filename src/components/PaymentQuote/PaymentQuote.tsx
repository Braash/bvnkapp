import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PaymentQuoteView from './PaymentQuoteView';
import { fetchAcceptQuoteSummary, confirmAcceptQuoteSummary } from '../../store/actions'

const PaymentQuote: React.FC = () => {

	// REGION: REDUX STORE, HOOKS and OTHER

	const { loading, data } = useSelector((state: any) => state?.payment?.confirmPaymentSummary);
	const initialData = useSelector((state: any) => state?.payment?.paymentSummary?.data);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { uuid } = useParams();

	// #endregion

	// REGION: STATE

	const [textToCopyAmount, setTextToCopyAmount] = useState(data?.paidCurrency?.amount);
	const [textToCopyAddress, setTextToCopyAddress] = useState(data?.address?.address);
	const [isCopiedAmount, setIsCopiedAmount] = useState(false);
	const [isCopiedAddress, setIsCopiedAddress] = useState(false);

	// #endregion

	// REGION: HANDLERS

	const handleCopyClick = (fieldType: string, textToCopy: string) => {
		const textArea = document.createElement('textarea');
		textArea.value = textToCopy;
		document.body.appendChild(textArea);
		textArea.select();
		document.execCommand("copy");
		document.body.removeChild(textArea);

		if (fieldType === 'Amount') {
			setIsCopiedAmount(true);
			setTimeout(() => setIsCopiedAmount(false), 4000);
		} else if (fieldType === 'Address') {
			setIsCopiedAddress(true);
			setTimeout(() => setIsCopiedAddress(false), 4000);
		}
	};

	// #endregion

	const handleExpiredQuote = (uuid: string) => {
		navigate(`/payin/${uuid}/pay`);
	};

	// REGION: LIFECYCLE

	useEffect(() => {
		if (uuid && data?.length <= 0) {
		const action: any = confirmAcceptQuoteSummary({ uuid });
		dispatch(action);
		}
	}, []);

	useEffect(() => {
		if (uuid && initialData?.length <= 0) {
		const action: any = fetchAcceptQuoteSummary({ uuid });
		dispatch(action);
		}
	}, []);

	// #endregion

	return (
		<div>
		<PaymentQuoteView
			paymentSummaryData={data}
			paymentSummaryDataLoading={loading}
			uuid={uuid}
			isCopiedAmount={isCopiedAmount}
			isCopiedAddress={isCopiedAddress}
			textToCopyAmount={textToCopyAmount}
			textToCopyAddress={textToCopyAddress}
			handleCopyClick={handleCopyClick}
			handleExpiredQuote={handleExpiredQuote}
		/>
		</div>
	);
};

export default PaymentQuote;
