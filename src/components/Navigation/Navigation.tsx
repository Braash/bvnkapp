import React from 'react'
import { Route, Routes } from 'react-router-dom';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import { useParams } from 'react-router-dom';


const Navigation = () => {

	const { uuid } = useParams();

    return (
            <Routes>
                <Route path="/payin/:uuid" element={<PaymentProcess />} />
				<Route path="/payin/:uuid/pay" component={PayQuotePage} />
        		{/*<Route path="/payin/:uuid/expired" component={ExpiryPage} />		*/}
            </Routes>
    )
};  

export default Navigation;