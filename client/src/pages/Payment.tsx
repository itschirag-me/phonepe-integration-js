import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Payment = () => {
  const [paymentStatus, setPaymentStatus] = React.useState(false); // [paymentStatus, setPaymentStatus

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("code") === "PAYMENT_SUCCESS") {
      setPaymentStatus(true);
    }
  }, [searchParams.get("code")]);

  return (
    <div className="phonepe">
      <div className="phonepe-header">
        <h1 className="phonepe-heading">Phone pe Payment Gateway</h1>
      </div>
      <div className="phonepe-body">
        <div className="phonepe-status">
          <h2 className="phonepe-status-heading">Payment Status</h2>

          <div className={`phonepe-status-icon ${paymentStatus ? 'success': 'failed'}`}>
            {paymentStatus ? "Success" : "Failed, Please try again later."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
