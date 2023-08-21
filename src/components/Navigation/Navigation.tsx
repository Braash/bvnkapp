import React from 'react'
import { Route, Routes } from 'react-router-dom';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import PaymentQuote from '../PaymentQuote/PaymentQuote';
import PaymentExpiry from '../PaymentExpiry/PaymentExpiry';

const Navigation = () => {
    return (
            <Routes>
                <Route path="/payin/:uuid" element={<PaymentProcess />} />
				<Route path="/payin/:uuid/pay" element={<PaymentQuote />} />
        		<Route path="/payin/:uuid/expired" element={<PaymentExpiry />} />
            </Routes>
    )
};  

export default Navigation;