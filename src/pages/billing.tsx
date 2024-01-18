import { WHITELABEL } from '@/utils/envProviders';
import { WHITELABELS } from '@/utils/whitelabelConfig';
import Button from 'components/Button';
import { Nav } from 'containers/payments/upgradeProPage/styles';
import { useAuth } from 'context/AuthContext';
import { useProfileStore } from 'context/ProfileStore';
import moment from 'moment';
import { cancelSubscriptionApi } from 'network/apis/payment';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { ImArrowLeft2 } from 'react-icons/im';

export default function Billing() {
    const router = useRouter();
    const { profile } = useProfileStore();
    const { token } = useAuth();
    const [isCanceled, setIsCanceled] = useState(false);
    const [cancelLoading, setCancelLoading] = useState(false);
    const [cancelMessage, setCancelMessage] = useState<any>();

    // FUNCTIONS
    const cancelSubscription = async () => {
        try {
            setCancelLoading(true);
            await cancelSubscriptionApi({ raw: { membership_type: 'pro' }, token });
            setCancelMessage({ type: 'success', text: 'Cancelled Successfully!' });
            setCancelLoading(false);
        } catch (err) {
            setCancelLoading(false);
            setCancelMessage({ type: 'error', text: 'Something went wrong!' });
        }
    }

    // SIDE EFFECTS
    useEffect(() => {
        if (!profile?.bam_talentrecurring) return;

        const checkCancel = (profile?.bam_talentrecurring && ((profile?.bam_talentrecurring?.cxl == 1) || (profile?.bam_talentrecurring?.cxl_req_ts != 0 && profile?.bam_talentrecurring.start_date_ts != 0 && moment(profile?.bam_talentrecurring.cxl_req_ts).isAfter(profile?.bam_talentrecurring.start_date_ts)))) ? true : false;
        setIsCanceled(checkCancel);
    }, [profile]);

    return (
        <div className='bg-paper' style={{ minHeight: '100vh' }}>
            <header className='bg-pure'>
                <Nav>
                    <div className="text-xl mr-auto cursor-pointer">
                        <ImArrowLeft2
                            onClick={() => router.back()}
                        />
                    </div>
                    <div className="mr-auto hidden md:block">
                        <Link href="/">
                            <a>
                                <Image src={WHITELABEL === WHITELABELS.auditions ? "/images/audition/audition-logo.png" : "/svg/logo-gray.svg"} alt="Explore Talent" height={43.66} width={226.18} priority />
                            </a>
                        </Link>
                    </div>
                    <div className="mr-auto md:hidden">
                        <Link href="/">
                            <a>
                                <Image src="/images/et-logo.png" alt="Explore Talent" height={33} width={41} priority />
                            </a>
                        </Link>
                    </div>
                </Nav>
            </header>

            <main className='text-center mt-12'>
                <div className="shadow mx-auto sm:w-[50%] w-[90%] rounded-xl sm:p-10 p-2 text-center bg-pure">
                    {profile.pro ?
                        <div>
                            <span className='sm:text-xl'>PRO member active since <strong className=''>{moment(profile?.start_date_ts * 1000).format('Do MMMM, YYYY | hh:mm A')}</strong></span>
                            {
                                isCanceled && <small className="text-red-500 text-base block mt-5 max-w-[600px] mx-auto">
                                    You have canceled your recurring payment. Your pro memembership ends on: <strong>{moment(profile?.bam_talentrecurring?.cxl_date_ts * 1000)?.format('Do MMMM, YYYY')}</strong>
                                </small>
                            }
                            <div>
                                <div className='sm:flex items-center gap-4 justify-center mt-8'>
                                    {!profile?.featured && <Link href='/upgrade-to-featured'>
                                        <Button primary>Upgrade to Featured</Button>
                                    </Link>}
                                    {!isCanceled && <div className='my-4'>
                                        <Button loading={cancelLoading} onClick={cancelSubscription}>Cancel Pro Subscription</Button>
                                    </div>}
                                </div>
                                <div className={cancelMessage?.type === 'error' ? 'text-center mt-3 text-red-500' : 'text-center mt-5 text-green-500'}>{cancelMessage?.text}</div>
                            </div>
                        </div> :
                        <>
                            <p className='mb-5 text-lg'>Upgrade to PRO, land auditions today and start working a professional talent!</p>
                            <Button primary onClick={() => router.push('/upgrade-to-pro')}>Upgrade to Pro</Button>
                        </>
                    }
                </div>
            </main>
        </div>
    )
}
