import { configureStore } from '@reduxjs/toolkit';
import paymentReducer from './slice';

const store = configureStore({
	reducer: {
		payment: paymentReducer,
	},
});

export default store;