import Button from 'components/Button';
import { PLAN_DETAILS } from 'containers/subscriptionPlans';
import { useAuth } from 'context/AuthContext';
import { paymentFormApi, paymentSalesApi } from 'network/apis/payment';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import styled from 'styled-components';
import { PlanD } from 'types/subscription';

const PAYMENT_FEATURES: string[] = [
    "Unlimited casting call submissions",
    "Communicate directly with casting professionals",
    "Priority position in search",
    "Unlimited photo upload",
    "Photo Analyzer",
    "Upload videos & add skills",
    "Industry approved comp card",
    "Personalized profile link"
]

const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const currentYear = new Date().getFullYear();
const years = Array.from(new Array(10), (val, index) => currentYear + index);

export default function PaymentCard() {
    const [paymentDetails, setPaymentDetails] = useState({
        fName: "",
        lName: "",
        cardNumber: "",
        cvv: "",
        expMonth: "",
        expYear: '',
        zipCode: "",
    });
    const { token } = useAuth();
    const [apiError, setApiError] = useState('');
    const [loading, setLoading] = useState(false);
    const [subscriptionPrice, setSubscriptionPrice] = useState({
        actualPrice: "",
        discountedPrice: "",
        planDuration: "",
        totalAmount: ''
    });
    const router = useRouter();
    console.log(apiError, "apiError");
    console.log(paymentDetails, "paymentDetails");

    useEffect(() => {
        PLAN_DETAILS.map((i: PlanD) => {
            if (i.id == Number(router?.query?.plan)) {
                setSubscriptionPrice((pre) => ({
                    ...pre,
                    actualPrice: i.actualPrice,
                    discountedPrice: i.discountedPrice,
                    planDuration: i.planDuration,
                    totalAmount: i.totalAmount,
                }))
            }
        })
    }, [router?.query?.plan])

    const onSubmit = async () => {
        try {
            setLoading(true);
            const res = await paymentFormApi({
                po_ccnum: paymentDetails.cardNumber,
                po_ccscode: paymentDetails.cvv.toString(),
                po_fname: paymentDetails.fName,
                po_lname: paymentDetails.lName,
                po_address1: "N/A",
                po_zip: paymentDetails.zipCode,
                po_type: 1,
                po_name: "Credit Debit Card",
                po_exp: Math.floor(new Date(Number(paymentDetails.expYear), Number(paymentDetails.expMonth), 1).getTime() / 1000),
                po_city: '',
                po_state: '',
                token,
            });
            if (res) {
                setPaymentDetails({
                    fName: "",
                    lName: "",
                    cardNumber: "",
                    cvv: "",
                    expMonth: "1",
                    expYear: new Date().getFullYear().toString(),
                    zipCode: "",
                });
                const res2 = await paymentSalesApi({ id: res.id, token, packageId: Number(router?.query?.plan || 0), featured: false, claim: true });
                setLoading(false);
                toast.success("Payment successfull, You are a featured talent now!");
                console.log("RES2", res2);
                router.push('/')
            } else {
                setLoading(false);
            }
        } catch (err: any) {
            setLoading(false);

            setApiError("We are having trouble authorizing the payment. Please verify or update your payment method. If you need assistance please feel free  to call our customer service at 702-553-2700.");
            return;

            // localStorage.removeItem(STORAGE_KEYS.lastPaymentId)
            if (err?.errors?.talent_payment_option) {
                if (!err?.errors?.talent_payment_option?.paid) {
                    setApiError(err?.errors?.talent_payment_option?.message);
                } else {
                    setApiError("Something went wrong");
                }
            } else {
                if (err.errors && typeof err.errors === 'object') {
                    const err1 = Object.values(err.errors)[0];
                    setApiError(JSON.stringify(err1))
                } else {
                    setApiError("Something went wrong");
                }
            }
        }
    }

    return (
        <Root className='max-w-7xl m-auto rounded-lg'>
            <div className='flex items-center justify-between gap-4 px-8 h-20 payment-header text-white'>
                <div className='md:flex md:items-end md:gap-2'> <span className='lg:text-3xl md:text-2xl text-lg'>{subscriptionPrice.planDuration} <br className='md:hidden block' /></span>
                    <span className='text-base md:block hidden'>Cancel Any Time</span>
                </div>
                <div>

                    <div className='text-end flex md:flex-row justify-end flex-col items-end md:gap-1'> <span className='md:text-lg line-through'>{subscriptionPrice.actualPrice}</span> <span className='md:text-3xl text-2xl'>{subscriptionPrice.discountedPrice}</span>
                    </div>
                    <div className=' sm:text-sm text-xs' >Billed in one prepayment of {subscriptionPrice.totalAmount}
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='payment-sidebar md:block hidden text-white p-10 max-w-sm'>
                    <h3 className='text-2xl mb-4'>Premium features</h3>
                    <ul className='list-disc pl-8'>
                        {
                            PAYMENT_FEATURES.map((feature, ind) => {
                                return <li className='leading-7 font-light' key={ind}>{feature}</li>
                            })
                        }
                    </ul>
                </div>
                <div className='payment-main lg:px-20 md:px-10 px-5 py-10 w-full'>

                    <h4 className='text-base opacity-50 mb-5 flex justify-between items-center'>Payment Method: <span className='font-normal text-sm text-gray-400 md:hidden block'>Cancel any time</span></h4>


                    <div className='visa-logo px-16 py-3 rounded mb-8 w-fit'>
                        <img src="/images/subscription/visa-logo.png" alt="visa logo" />
                    </div>
                    <h4 className='text-base font-semibold mb-5 flex justify-between items-center'>Payment information: </h4>
                    <div className='flex flex-col gap-5'>
                        <div className='flex lg:flex-row flex-col lg:gap-14 gap-5 justify-between'>
                            <input className='input' type="text" placeholder='First Name' value={paymentDetails.fName} onChange={(e) => {
                                setPaymentDetails(s => ({
                                    ...s,
                                    fName: e.target.value
                                }));
                            }} />
                            < input className='input' type="text" placeholder='Last Name' value={paymentDetails.lName} onChange={(e) => {
                                setPaymentDetails(s => ({
                                    ...s,
                                    lName: e.target.value
                                }));
                            }} />
                        </div>
                        <div className='flex lg:gap-14 gap-5 justify-between lg:flex-row flex-col'>
                            <div className='relative flex-1'>
                                <input className='input w-full' type="number" placeholder='Card number' value={paymentDetails.cardNumber} onChange={(e) => {
                                    setPaymentDetails(s => ({
                                        ...s,
                                        cardNumber: e.target.value
                                    }));
                                }} />
                                <img className='absolute right-0 top-0' src="/images/subscription/visa-logo.png" alt="visa logo" />
                            </div>
                            <div className='flex flex-1 items-center'>
                                <input className='input' type="text" placeholder='CVV/CVC' value={paymentDetails.cvv} onChange={(e) => {
                                    setPaymentDetails(s => ({
                                        ...s,
                                        cvv: e.target.value
                                    }));
                                }} />
                                <div className='flex items-center relative top-4 pl-4'>
                                    <img className='h-6' src="/images/subscription/cvv.png" alt="visa logo" />
                                    <span className='text-gray-400 pl-2 italic'>123</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex lg:gap-14 justify-between lg:flex-row flex-col gap-5'>
                            <div className='flex gap-8 flex-1'>
                                <select placeholder='Month' className="month-dropdown px-2 py-0 flex-1" value={paymentDetails.expMonth} onChange={(e) => {
                                    setPaymentDetails(s => ({
                                        ...s,
                                        expMonth: e.target.value
                                    }));
                                }}>
                                    <option className='text-gray-200' disabled value="">Month</option>
                                    {months.map((month, index) => (
                                        <option key={index}>{month}</option>
                                    ))}
                                </select>
                                <select placeholder='Year' className="month-dropdown px-2 py-0 flex-1" value={paymentDetails.expYear} onChange={(e) => {
                                    setPaymentDetails(s => ({
                                        ...s,
                                        expYear: e.target.value
                                    }));
                                }}>
                                    <option className='text-gray-500' disabled value="">Year</option>
                                    {years.map((year, index) => (
                                        <option key={index}>{year}</option>
                                    ))}
                                </select>
                            </div>
                            <input className='input' type="text" placeholder='Zip Code' value={paymentDetails.zipCode} onChange={(e) => {
                                setPaymentDetails(s => ({
                                    ...s,
                                    zipCode: e.target.value
                                }));
                            }} />
                        </div>
                    </div>
                    <div className='md:my-20 my-10 text-center'>
                        <p className='text-sm mb-5'>Your subscription will <strong>automatically renew</strong> for the same price (<strong>$96</strong>) and package length until you cancel via your Account Settings page. By subscribing, you <strong>authorize us</strong> to charge your <strong>card now</strong> and upon each <strong>renewal</strong>. <span className='text-[#0070F4] cursor-pointer'>Learn more</span> </p>
                        <p className='text-sm'>By clicking Complete Subscription I agree to the AllCasting.com <span className='text-[#0070F4] cursor-pointer'>privacy policy</span>  and <span className='text-[#0070F4] cursor-pointer'>terms of use</span> </p>
                    </div>

                    <div className='text-red-600 py-2 text-center' >{apiError}</div>

                    <div className='text-center'>
                        <Button primary onClick={onSubmit} loading={loading}>
                            <span className="px-6 py-1">
                                Complete Subscription
                            </span>
                        </Button>
                    </div >
                </div >
            </div >
        </Root >
    )
}

const Root = styled.div`
    box-shadow: 1px 6px 33px rgba(0, 0, 0, 0.25);
    .payment-header {
        background-color: ${p => p.theme.abs.gradColorBlue};
        background-color: #333333;
        border-radius: 8px 8px 0 0;
        @media screen and (max-width: 767px) {
           border-radius : 0;
        }
    }
    .payment-sidebar{
        background-color: #063B7A;
        border-radius: 0px 0px 0px 8px;
    }
    .visa-logo{
        background-color: ${p => p.theme.abs.grayLight};
    }
    .payment-main {
        .input {
            border: none;
            outline: none;
            flex: 1;
            padding: 5px 0;
            border-bottom: 2px solid ${p => p.theme.abs.grayLight};
            &:focus {
                border-bottom: 2px solid ${p => p.theme.abs.gray};
                transition: all 0.2s;
            }
        }
    }
    .month-dropdown {
        border-bottom: 2px solid ${p => p.theme.abs.grayLight};
        &:focus {
            border-bottom: 2px solid ${p => p.theme.abs.gray};
            transition: all 0.2s;
        }
    }
`;
