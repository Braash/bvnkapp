export function shortenCryptoAddress(address: string): string {
	if (address?.length <= 12) {
		return address;
	}
	
	const firstPart = address?.substring(0, 6);
	const lastPart = address?.substring(address?.length - 6);

	return `${firstPart}...${lastPart}`;
};