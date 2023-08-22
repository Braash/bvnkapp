interface Messages {
    reference: string;
    payWithLabel: string;
    amountDueLabel: string;
    expirationCopy: string;
    confirmCopy: string;
    processingCopy: string;
    signUpCopy: string;
    name: string;
}

const messages: Messages = {
    reference: 'For reference number:',
    payWithLabel: 'Pay with',
    amountDueLabel: 'Amount due',
    expirationCopy: 'Quoted price expires in',
    confirmCopy: 'Confirm',
    processingCopy: 'Processing...',
    signUpCopy: 'Amount due',
    name: 'BRALE',
};

export default messages;