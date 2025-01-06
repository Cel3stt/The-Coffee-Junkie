import { capturePayment } from '@/store/shop/order-slice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

function PaypalReturnPage() {
    const dispatch = useDispatch()
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const paymentId = params.get('paymentId');
    const payerId = params.get('PayerID')

    useEffect(() => {
        if(paymentId && payerId){
            const orderId= JSON.parse(sessionStorage.getItem('currentOrderId'))
            dispatch(capturePayment({paymentId, payerId, orderId})).then(data => {
                if(data?.payload?.success){
                    sessionStorage.removeItem('currentOrderId')
                    window.location.href = '/shop/payment-success'
                }
            })
        }
    }, [paymentId, payerId, dispatch])
    return (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <div className="flex items-center justify-center">
              <div className="h-12 w-12 animate-spin text-primary" />
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Processing Payment</h1>
            <p className="mt-4 text-muted-foreground">
              Please wait while we process your payment. This should only take a moment.
            </p>
          </div>
        </div>
      )
}

export default PaypalReturnPage

