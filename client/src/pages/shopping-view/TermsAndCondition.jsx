import ShoppingFooter from '@/components/shopping-view/Footer'
import TermsAndConditions from '@/components/shopping-view/TermsAndConditions'
import React from 'react'

function ShoppingTermsAndConditions() {
  return (
 <div>
     <div className='container mx-auto px-6 py-16  md:px-12 lg:px-24 lg:py-24'>
      <TermsAndConditions/>
    </div>
    <ShoppingFooter/>
   
 </div>

  )
}
export default ShoppingTermsAndConditions
