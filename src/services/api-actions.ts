import axios, { AxiosError } from 'axios';

const api = axios.create({
    baseURL: 'https://api.sandbox.bvnk.com/api/v1/pay/',
});

export const getAcceptQuoteSummary = async (uuid: string) => {
    try {
        const result = await api.get(`/${uuid}/summary`);
        return result.data;
    } catch (error) {
        const exception = error as AxiosError;
        console.error(exception);
        return exception.response?.data || {};
    }
};

export const putAcceptQuoteSummary = async (uuid: string, currency: string) => {

	const payload = {
		currency: currency,
		payInMethod: "crypto"
	}
	console.log('payload', payload)

    try {
		console.log('hey3')
        const result = await api.put(`/${uuid}/update/summary`, payload);
        return result.data;
    } catch (error) {
        const exception = error as AxiosError;
        console.error(exception);
        return exception.response?.data || {};
    }
};

export const putConfirmtQuoteSummary = async (uuid: string) => {

	const payload = {
  		successUrl: "no_url"
	}
	console.log('payload', payload)

    try {
        const result = await api.put(`/${uuid}/accept/summary`, payload);
        return result.data;
    } catch (error) {
        const exception = error as AxiosError;
        console.error(exception);
        return exception.response?.data || {};
    }
};