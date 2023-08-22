import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface QuoteTimerProps {
	expiryDate: number;
	expiryFunction?: (uuid: string, currency: string) => void;
	currency?: string;
}

const QuoteTimer: React.FC<QuoteTimerProps> = ({ expiryDate, expiryFunction, currency }) => {
  	const [timeRemaining, setTimeRemaining] = useState<number>(expiryDate - Date.now());
	const { uuid } = useParams();

	useEffect(() => {
		const interval = setInterval(() => {
		const updatedTimeRemaining = expiryDate - Date.now();
		setTimeRemaining(updatedTimeRemaining);

		if (updatedTimeRemaining <= 0 && expiryFunction) {
			clearInterval(interval);
			expiryFunction(uuid as string, currency as string);
		}
		}, 1000);

		return () => {
		clearInterval(interval);
		};
	}, [expiryDate, expiryFunction]);

	const formatTime = (milliseconds: number): string => {
		const seconds = Math.floor((milliseconds / 1000) % 60);
		const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
		const hours = Math.floor(milliseconds / 1000 / 3600);

		return `${hours}:${minutes}:${seconds}`;
	};

	return (
		<div>
			<p className="text-center md:text-sm text-xs">{formatTime(timeRemaining)}</p>
		</div>
	);
};

export default QuoteTimer;

