interface Messages {
    reference: string;
    payWithCopy: string;
    amountDueCopy: string;
    expirationCopy: string;
    confirmCopy: string;
    processingCopy: string;
	timeLeftToPayCopy: string;
	payWithProductCopy: Function;
    paymentCopy: Function;
	productAddress: Function;
	paymentDetailsExpiredCopy: string;
	paymentDetailsExpiredCopyExtended: string;
	acceptQuote: string,
	payQuote: string,
	expiry: string,
};


const messages: Messages = {
	reference: "For reference number:",
	payWithCopy: "Pay with",
	amountDueCopy: "Amount due",
	expirationCopy: "Quoted price expires in",
	confirmCopy: "Confirm",
	processingCopy: "Processing...",
	timeLeftToPayCopy: "Time left to pay",
	payWithProductCopy: (productName: string) => `Pay with ${productName}`,
	paymentCopy: (productName: string) =>
		`To complete this payment send the amount due to the ${productName} address provided below.`,
	productAddress: (productName: string) => `${productName} address`,
	paymentDetailsExpiredCopy: "Payment details expired",
	paymentDetailsExpiredCopyExtended:
		"The payment details for your transaction have expired.",
	acceptQuote: "Accept Quote",
	payQuote: 'Pay Quote',
	expiry: 'Expiry'
};

export default messages;