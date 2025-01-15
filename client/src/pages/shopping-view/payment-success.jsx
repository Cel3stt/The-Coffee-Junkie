import { Button } from '@/components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function PaymentSuccessPage() {
  const navigate = useNavigate()
    function CircleCheckIcon(props) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        )
      }
    return(
      <div className=" container mx-auto px-6 py-1 flex flex-col items-center justify-center min-h-screen  dark:bg-gray-900">
    <div className="max-w-md w-full space-y-6 p-6 bg-white rounded-lg dark:bg-gray-800">
      <div className="flex flex-col items-center">
        <CircleCheckIcon className="text-green-600 h-16 w-16" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mt-4">Payment Successful</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-center">
          Thank you for your payment. Your order is being processed.
        </p>
        <Button
        onClick={() => navigate('/shop/account')}
        className='items-center mt-6'>
        View Order History
      </Button>
      </div>
    
    
      {/* <div className="flex justify-center">
        <Link
          href="#"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
          prefetch={false}
        >
          View Order History
        </Link>
      </div> */}
    </div>
  </div>
    )
}

export default PaymentSuccessPage


