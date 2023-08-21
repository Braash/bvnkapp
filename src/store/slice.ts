import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AsyncReduxItem, AsyncReduxList } from './types';
import response from '../constants/response.json'

export interface paymentDetails {
        paymentSummary: AsyncReduxItem<any>;
		updatedPaymentSummary: AsyncReduxItem<any>;
		confirmPaymentSummary: AsyncReduxItem<any>;

}

const initialPaymentState: paymentDetails = {
        paymentSummary: {
            loading: true,
            data: response,
            error: null,
        },
		updatedPaymentSummary: {
            loading: true,
            data: response,
            error: null,
        },
		confirmPaymentSummary: {
            loading: true,
            data: response,
            error: null,
        },
};

const paymentSlice = createSlice({
    name: 'payment',
    initialState: initialPaymentState,
    reducers: {
        setPaymentSummaryLoading(
            state: any,
            action: PayloadAction<boolean | undefined>
        ) {
            if (state.paymentSummary) {
                state.paymentSummary.loading = action.payload;
            }
        },
        setPaymentSummaryData(
            state: any,
            action: PayloadAction<any>
        ) {
            if (state.paymentSummary) {
                state.paymentSummary.data = action.payload;
            }
        },
        setPaymentSummaryError(
            state: any,
            action: PayloadAction<string | any>
        ) {
            if (state.paymentSummary) {
                state.paymentSummary.error = action.payload;
            }
        },
		setUpdatedPaymentSummaryLoading(
            state: any,
            action: PayloadAction<boolean | undefined>
        ) {
            if (state.updatedPaymentSummary) {
                state.updatedPaymentSummary.loading = action.payload;
            }
        },
        setUpdatedPaymentSummaryData(
            state: any,
            action: PayloadAction<any>
        ) {
            if (state.updatedPaymentSummary) {
                state.updatedPaymentSummary.data = action.payload;
            }
        },
        setUpdatedPaymentSummaryError(
            state: any,
            action: PayloadAction<string | any>
        ) {
            if (state.updatedPaymentSummary) {
                state.updatedPaymentSummary.error = action.payload;
            }
        },
		setConfirmPaymentSummaryLoading(
            state: any,
            action: PayloadAction<boolean | undefined>
        ) {
            if (state.confirmPaymentSummary) {
                state.confirmPaymentSummary.loading = action.payload;
            }
        },
        setConfirmPaymentSummaryData(
            state: any,
            action: PayloadAction<any>
        ) {
            if (state.confirmPaymentSummary) {
                state.confirmPaymentSummary.data = action.payload;
            }
        },
        setConfirmPaymentSummaryError(
            state: any,
            action: PayloadAction<string | any>
        ) {
            if (state.confirmPaymentSummary) {
                state.confirmPaymentSummary.error = action.payload;
            }
        },
        
    },
});

export const {
    setPaymentSummaryLoading,
    setPaymentSummaryData,
    setPaymentSummaryError,
	setUpdatedPaymentSummaryLoading,
    setUpdatedPaymentSummaryData,
    setUpdatedPaymentSummaryError,
	setConfirmPaymentSummaryLoading,
    setConfirmPaymentSummaryData,
    setConfirmPaymentSummaryError,
} = paymentSlice.actions;

export default paymentSlice.reducer;
