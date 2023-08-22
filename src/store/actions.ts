import {
    setPaymentSummaryLoading,
    setPaymentSummaryData,
    setPaymentSummaryError,
	setUpdatedPaymentSummaryLoading,
    setUpdatedPaymentSummaryData,
    setUpdatedPaymentSummaryError,
	setConfirmPaymentSummaryLoading,
    setConfirmPaymentSummaryData,
    setConfirmPaymentSummaryError,
} from './slice';
import * as apiActions from '../services/api-actions';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface UpdateAcceptQuoteSummaryArgs {
	uuid: string;
	currency: string;
}

export const fetchAcceptQuoteSummary = createAsyncThunk(
  'payment/fetchAcceptQuoteSummary',
  async ({ uuid }: { uuid: string }, { dispatch }) => {
    try {
      dispatch(setPaymentSummaryLoading(true));
      const data = await apiActions.getAcceptQuoteSummary(uuid);
      dispatch(setPaymentSummaryData(data));
      dispatch(setPaymentSummaryLoading(false));
      return data;
    } catch (error) {
      dispatch(setPaymentSummaryError(error));
      dispatch(setPaymentSummaryLoading(false));
      throw error;
    }
  }
);

export const updateAcceptQuoteSummary = createAsyncThunk(
  'payment/updateAcceptQuoteSummary',
  async ({ uuid, currency }: { uuid: string | undefined; currency: string }, { dispatch }) => {
    try {
      dispatch(setUpdatedPaymentSummaryLoading(true));
      const data = await apiActions.putAcceptQuoteSummary(uuid as string, currency);
      dispatch(setUpdatedPaymentSummaryData(data));
      dispatch(setUpdatedPaymentSummaryLoading(false));
      return data;
    } catch (error) {
      dispatch(setUpdatedPaymentSummaryError(error));
      dispatch(setUpdatedPaymentSummaryLoading(false));
      throw error;
    }
  }
);

export const confirmAcceptQuoteSummary = createAsyncThunk(
  'payment/confirmAcceptQuoteSummary',
  async ({ uuid }: { uuid: string | undefined }, { dispatch }) => {
    try {
      dispatch(setConfirmPaymentSummaryLoading(true));
      const data = await apiActions.putConfirmtQuoteSummary(uuid as string);
      dispatch(setConfirmPaymentSummaryData(data));
      dispatch(setConfirmPaymentSummaryLoading(false));
      return data;
    } catch (error) {
      dispatch(setConfirmPaymentSummaryError(error));
      dispatch(setConfirmPaymentSummaryLoading(false));
      throw error;
    }
  }
);




