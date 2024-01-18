import Header from 'components/Layout/Header'
import SingleNav from 'components/Layout/Header/SingleNav'
import SubscriptionPlans from 'containers/subscriptionPlans'
import CountdownSale from 'containers/subscriptionPlans/CountdownSale'
import React from 'react'

export default function index() {
  return (
    <div>
      {/* <Header /> */}
      <div className='md:block hidden'>
        <CountdownSale />
      </div>
      <SingleNav />
      <SubscriptionPlans />
    </div>
  )
}
