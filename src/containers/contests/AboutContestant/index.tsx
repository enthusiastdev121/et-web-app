import BackToTop from 'components/BackToTop';
import Advertisement from 'components/UpgradeToPro';
import CommunityBuzz from 'containers/CommunityBuzz';
import SuccessStories from 'containers/SuccessStories';
import React from 'react'
import { HiInformationCircle } from 'react-icons/hi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { AboutSection, Container } from "./styles";

export default function AboutContestant({ res }: any) {
    return (
        <Container className="padding-small">
            <BackToTop />
            <main
                className="padding-x lg:flex gap-10"
                style={{ maxWidth: "1530px", margin: "0 auto" }}
            >
                <div className="left">

                    <AboutSection>
                        <div className='about-section-title'>
                            <h3>About our contests</h3>
                            <p>Official Rules for the Explore Talent Contest</p>
                            <div className='about-part'>
                                <HiInformationCircle className='txt-primary text-2xl mr-1 min-w-[30px]' />
                                <h4>Be a part of our contests to win reputation and prices</h4>
                                <MdKeyboardArrowRight className='txt-primary text-2xl ml-1' />
                            </div>
                        </div>

                        <div className='contest-terms-section'>
                            <div className='contest-terms-single'>
                                <h4>GENERAL RELEASE</h4>
                                <p>By entering the &ldquo;Explore Talent&rdquo; contest, entrants release Explore Talent, and each of their respective affiliated companies, subsidiaries, advertising or promotional agencies, and other agents, and any other promotional sponsors, and each of their respective affiliated companies, directors, officers, employees, representatives, partners and agents from any liability whatsoever for any claims, costs, injuries, losses or damages of any kind arising out of or in conjunction with the "Explore Talent" contest or with the acceptance, possession or use of any prize (including, without limitation, claims, costs, injuries, losses or damages elated to personal injuries, death, damage to, loss or destruction of property, rights of publicity or privacy, defamation or portrayal in a false light).</p>

                                <p> This contest is not associated with, or sponsored by the National Academy of Recording Arts & Sciences, Inc.; any professional artist or group; any recording company or have any affiliation in any way with any musical organization</p>
                            </div>

                            <div className='contest-terms-single'>
                                <h4>PARTICIPATION</h4>
                                <p>By participating, entrants agree to be bound by these Official Rules and the decisions of Explore Talent. Explore Talent reserves the right to disqualify persons determined to be tampering with or abusing any aspect of the contest, as solely determined by Explore Talent. In the event the contest is compromised by a virus, non-authorized human intervention, tampering, or other causes beyond the control of the Explore Talent which corrupts or impairs the administration, security, fairness or proper operation of the contest, Explore Talent reserves the right in its sole discretion to suspend, modify or terminate the contest.</p>

                                <p> Should the contest be terminated prior to the stated expiration date, Explore Talent reserves the right to award prizes based on the entries received before the termination date .</p>
                            </div>

                            <div className='contest-terms-single'>
                                <h4>ELIGIBILITY</h4>
                                <p>The "Explore Talent" contest is open to U.S. Residents, (excluding Puerto Rico), 18 years or older at the time of entry. Employees of Explore Talent, each of their respective affiliated subsidiaries, companies or agencies and the immediate family members of, and any persons domiciled with such employees, are not eligible.</p>
                            </div>


                            <div className='contest-terms-single'>
                                <h4>CONTEST RULES</h4>
                                <ul>
                                    <p>
                                        <li>No purchase necessary. Federal, state, local and municipal laws and regulations apply. Void where prohibited.
                                        </li>
                                    </p>
                                    <p>
                                        <li>Explore Talent will not be responsible for incomplete, lost, or late entries or for the failure to receive entries due to transmission failures or technical failures of any kind, including, without limitation, malfunctioning of any network, hardware or software, whether originating with the sender. In the event of a dispute, all online entries will be deemed to have been submitted by the owner of the member account from which they were sent. Explore Talent reserves the right to disqualify any entries by persons determined to be tampering with or abusing any aspect of the "Explore Talent" contest.
                                            .
                                        </li>
                                    </p>
                                    <p>
                                        <li>By entering, each entrant accepts and agrees to the "Explore Talent" contest rules.

                                        </li>
                                    </p>
                                    <p>
                                        <li>Any entrant who attempts to enter with multiple e-mail addresses or under multiple identities, or uses any other device to enter multiple times will be disqualified. Any entrant who participates using a nickname deemed inappropriate by Explore Talent will be automatically disqualified.

                                        </li>
                                    </p>
                                    <p>
                                        <li>Winner agrees to the use of his/her name and likeness without any additional compensation by sponsors for publicity. By entering this contest, the winner acknowledges that Explore Talent and venues have the right to publicize his/her name, voice, likeness, the fact that he/she won, and all matters incidental thereto.

                                        </li>
                                    </p>
                                    <p>
                                        <li> In the event of a dispute, the decision made by Explore Talent, is final and binding.
                                        </li>
                                    </p>
                                </ul>
                            </div>


                            <div className='contest-terms-single'>
                                <h4>PRIZES AND ODDS</h4>
                                <ul>
                                    <p>
                                        <li>Winner will receive the prize as described on the contest page.</li>
                                    </p>
                                    <p>
                                        <li> Odds of winning depend on the number of eligible entries received and the number of votes received.
                                        </li>
                                    </p>
                                    <p>
                                        <li>Winner will be notified by email, phone, message, or other means at the conclusion of the "Explore Talent" contest, near contest conclusion. Return of prize notification as undeliverable or failure to respond by winner within 10 days of notification may result in disqualification and an alternate winner may be selected.
                                        </li>
                                    </p>
                                    <p>
                                        <li>
                                            Winner may waive his/her right to receive prize. Prize is non-transferable and non-assignable and may not be exchanged for cash. No substitution of the prize is allowed, except that prize and individual components of prize package are subject to availability, and Explore Talent reserves right to substitute prizes of equal or greater value. Winner is solely responsible for reporting and payment of any taxes on prizes.
                                        </li>
                                    </p>
                                    <p>
                                        <li>Winner may be required to complete an affidavit of eligibility, and a liability and publicity release (except where prohibited by law) which must be returned within ten (10) days of the postmark. Failure to sign and return affidavit or release within ten (10) days, or to comply with any term or condition of these Official Rules, will result in a winner’s disqualification, the forfeiture of his/her interest in the prize, and the award of prize to an alternate winner.
                                        </li>
                                    </p>
                                    <p>
                                        <li>
                                            Winner agrees to the user of his/her name and likeness without any additional compensation, by the sponsors for publicity, by entering this contest. The winner acknowledges that the Explore Talent, and all other sponsors and venues have the right to publicize his/her name, voice and likeness, the fact that he/she won.
                                        </li>
                                    </p>
                                    <p>
                                        <li>
                                            Driver’s license or other appropriate picture identification is required to claim the prize. Winner may be required to execute and return an affidavit of eligibility and a release.
                                        </li>
                                    </p>
                                    <p>
                                        <li>
                                            For prize winners’ list (available after contest end), send a self-addressed, stamped envelope to: the "Explore Talent" contest Explore Talent, 3395 S. Jones Blvd #15, Las Vegas, NV 89108
                                        </li>
                                    </p>
                                    <p>
                                        <li>
                                            Winners will be chosen as described. In the event of a tie, the winners will be chosen in a random drawing from those tied entries with the highest scores. One grand prize winner will receive the grand prize as described. Any runners up will receive the prizes as described on the contest page.

                                        </li>
                                    </p>
                                    <p>
                                        <li>
                                            When the prize is being the opening act for a concert, the winner must be experienced in performing on stage and will be chosen by the event promoters which will have the final judgment on who is the winner. The selection will be made from 100 top voted contestants.
                                        </li>
                                    </p>
                                </ul>
                            </div>


                            <div className='contest-terms-single'>
                                <h4>FAIR USE/ABUSE POLICY</h4>
                                <p>Explore Talent and sponsoring parties to "Explore Talent" reserve the right to disqualify participants at will, and to adjust the scoring and rankings because of unfair or unsportsmanlike conduct or abuse. This includes but is not limited to:</p>
                                <p>· Setting up false accounts to increase point values</p>
                                <p>· Over use of additional feature sets to increase point values</p>
                                <p>Rules and Regulations subject to change without notice.</p>
                                <p>Explore Talent reserves the right to end, cancel, postpone, extend, contract, pause, and resume the Contest at any time.</p>
                            </div>


                            <div className='contest-terms-single'>
                                <h4>Terms of Use</h4>
                                <p>You are solely responsible for the photos, profiles (including your name, image, and likeness), messages, notes, text, information, music, video, advertisements, listings, and other content that you upload, publish or display (hereinafter, “post”) on or through ExploreTalent.com, or transmit to or share with other users (collectively the “User Content”). You may not post, transmit, or share User Content on the Site or Service that you did not create or that you do not have permission to post. You understand and agree that the Company may, but is not obligated to, review the Site and may delete or remove (without notice) any Site Content or User Content in its sole discretion, for any reason or no reason, including User Content that in the sole judgment of ExploreTalent.com violates this, or which might be offensive, illegal, or that might violate the rights, harm, or threaten the safety of users or others. You are solely responsible at your sole cost and expense for creating backup copies and replacing any User Content you post or store on the Site or provide to ExploreTalent.com.</p>
                                <p>When you post User Content to the Site, you authorize and direct us to make such copies thereof as we deem necessary in order to facilitate the posting and storage of the User Content on the Site. By posting User Content to any part of the Site, you automatically grant, and you represent and warrant that you have the right to grant, to the Company an irrevocable, perpetual, non-exclusive, transferable, fully paid, worldwide license (with the right to sublicense) to use, copy, publicly perform, publicly display, reformat, translate, excerpt (in whole or in part) and distribute such User Content for any purpose, commercial, advertising, or otherwise, on or in connection with the Site or the promotion thereof, to prepare derivative works of, or incorporate into other works, such User Content, and to grant and authorize sublicenses of the foregoing.</p>
                                <p>Upon completion of contest, it is the sole responsibility of the individual who entered the contest to claim the prize within thirty days (30) from the contest winner announcement. ExploreTalent.com assumes no responsibility for any failure or inability of the prizewinner to access the decision of the contest or information declaring winner. Failure of applicant to claim the prize, the prize will be forfeited with no revote or redraw. Void where prohibited. Prize is subject to availability. Prizewinner must agree to all terms and conditions of contest including the use of photo across any and all mediums.</p>
                            </div>

                            <div className='contest-terms-single'>
                                <h4>Privacy Policy Statement</h4>
                                <p>We at ExploreTalent.com, ("we" or "ExploreTalent.com") have created this privacy policy to demonstrate our firm commitment to protecting your personal information and informing you about how we handle it. This privacy policy only applies to transactions and activities in which you engage, and data gathered, on the ExploreTalent.com Website, ExploreTalent.com email communications between ExploreTalent.com members (collectively, the "Site") but does not apply to any other Website or offline point of contact between ExploreTalent.com, or any other company, and consumers. Please review this privacy policy periodically as we may modify it from time to time. This privacy policy was last revised on April 27, 2010. Each time you visit the Site or provide us with information, by doing so you are accepting the practices described in this privacy policy at that time.</p>

                            </div>

                            <div className='contest-terms-single'>
                                <h4>Your IP Address</h4>
                                <p>Like most e-commerce Websites, each time you visit the Site, we automatically collect your IP address and the web page from which you came. In order to administer and optimize the Site for you and to diagnose problems with our Site, we use your IP address to help identify you and to gather broad demographic information about you.</p>

                            </div>

                            <div className='contest-terms-single'>
                                <h4>Cookies</h4>
                                <p>Like most Websites, the Site uses cookies to keep track of your purchases and other activity on the Site and enhance your experience on the Site. We also use cookies to deliver content specific to your interests, to save your password, and if you choose, to save other personal and financial information so you do not have to reenter it each time you visit the Site. If you wish to disable these cookies, the "help" portion of the tool bar on most browsers will tell you how. However, if you set your browser to disable cookies, you may not be able to access certain areas on the Site.</p>

                            </div>


                            <div className='contest-terms-single'>
                                <h4>Information We Collect From You</h4>
                                <p>In order to operate the Site and to provide you with information about products or services that may be of interest to you, we may collect "personal information" (i.e. information that could be used to contact you directly (without using the Site) such as full name, postal address, phone number or email address), or "demographic information" (i.e. information that you submit, or that we collect, that is neither personal information nor financial information; this may include, but is not limited to, zip code, postal code, hometown, gender, username, age/birth date, browsing history information, searching history information, registration history information, and the content of communications between you and other members over the Site), subject to the rest of this paragraph. Demographic information is divided into two categories: 1) "non-public information", which consists of purchase history information and one-on-one communications between you and other users of the Site; and 2) "public information", which consists of all other demographic information. We ask that you do not enter personal information into your "Profile" (for example, don't use your address or passcode as your username, or include your name or address in your written responses), because if you do then it may be posted publicly on the Site, and the information will then be treated as "demographic information" that is "public information."</p>

                            </div>


                            <div className='contest-terms-single'>
                                <h4>Information Other Websites Collect From You</h4>
                                <p>On the Site, we place links to other Websites operated by other parties. Some of these other Websites contain our brand names and trademarks and other intellectual property that we own; others do not. When you click on these links and visit these other Websites, regardless of whether or not they contain our brand names, trademarks and other intellectual property, you need to be aware that we do not control these other Websites or these other Websites' business practices, and that this privacy policy does not apply to these other Websites. Consequently, the operators of these other Websites may collect different kinds of information about you, and may use and disclose that information in different ways than we would if it were collected on the Site. We encourage you to review their privacy policies and remind you that we will not be responsible for their actions.</p>

                            </div>


                            <div className='contest-terms-single'>
                                <h4>How We Use Personal Information</h4>
                                <p>We use your email address and your other personal information to help us efficiently operate the Site, to contact you in connection with your transactions and other activities on the Site (including, but not limited to, confirmation emails or important news that could affect your relationship with ExploreTalent.com), and to forward messages to you from other ExploreTalent.com users. These types of communications are known as "Operational Communications." In some cases, Operational Communications may also contain commercial messages, such as banner ads and special offers.</p>

                                <p>We also use personal information to send you newsletters, information, offers and other promotional materials for ExploreTalent.com’s or third parties' goods or services. We attempt to send you offers that are of value to you, such as discounts, exclusive offers or special event information. The Site provides you with options to decline to receive communications from ExploreTalent.com (other than those contained in Operational Communications). Some of these options may only be for a certain category of communications; others may be more general. By posting a profile on the Site, you are opting in to receive the ExploreTalent.com by Mail email.</p>

                                <p>To operate the Site, including processing your transactions and supporting your activities on the Site, we may share your personal information with our agents, representatives, contractors and service providers so they can provide us with support services such as authorization of email origination, receipt or support services, customer relationship management services, order fulfillment and sweepstakes and promotional fulfillment. We require these entities not to use your information for any other purpose.</p>
                            </div>


                            <div className='contest-terms-single'>
                                <h4>How We Use Financial Information</h4>
                                <p>We use your financial information to check your qualifications, to bill you for products and services and to enable you to participate in discount, rebate and similar programs in which you may elect to participate. By making a purchase, or engaging in any other kind of activity or transaction that uses financial information, on the Site, you consent to our providing your financial information to our service providers and to such third parties as we determine are necessary to support and process your activities and transactions, as well as to your credit card issuer for their purposes. These third parties may include the credit card companies and banking institutions used to process and support the transaction or activity. By purchasing, or registering or making reservations for, products or services of third parties offered on the Site, or by participating in programs offered on the Site that are administered by third parties and that require you to submit financial information in order to use them, you also consent to our providing your financial information to those third parties.</p>

                            </div>


                            <div className='contest-terms-single'>
                                <h4>How We Use Public Information and Other Demographic Information</h4>
                                <p>We may review all demographic information. We may use public information to enable other users to find your profile, to determine whether they are a match for you and to communicate with you. We may use demographic information to tailor the Site and communications to your interests.</p>

                            </div>

                            <div className='contest-terms-single'>
                                <h4>Our Security Precautions</h4>
                                <p>The Site has security measures in place to protect against the loss, misuse and alteration of the information under our control. Our secure server software (SSL) is the industry standard and among the best software available today for secure commerce transactions. We encrypt all of your personal information as it travels over the Internet. Your information may be transferred to and maintained on computer networks which may be located outside of the state, province, country or other governmental jurisdiction in which you reside, and the country or jurisdiction in which these computer networks are located may not have privacy laws as protective as the laws in your country or jurisdiction.</p>
                            </div>


                            <div className='contest-terms-single'>
                                <h4>Changing our Privacy Policy for Previously Gathered Information</h4>
                                <p>If at any point we decide to use particular personally identifiable information in a manner different from that stated at the time it was collected, we will notify users by way of an email or by providing 30 days notice on the Site. Please note that we will continue to have the right to change our privacy policy and practices, and how we use your personally identifiable information, without notice, as described in the first paragraph of this Privacy Policy, provided that such changes shall only apply to information gathered on or after the date of the change.</p>
                            </div>

                            <div className='contest-terms-single'>
                                <h4>How You Can Access and Update Your Email Preferences, Personal Information and Public Information</h4>
                                <p>We give you the opportunity to opt-out of certain communications and modify personal information or demographic information you have provided to us, and to hide demographic information from, or make demographic information visible to, the public users of the Site, at anytime by going to the Account Settings or My Profile section of the Site. Please be aware that it may take several hours for the changes you make to take effect on the public areas of the Site. These changes and deletions will not change or delete emails or information that we may have already forwarded to other users or any other third parties, all as provided above in this privacy policy.</p>

                                <p>If you have any questions or concerns about this privacy policy, the practices of the Site, or your dealings with the Site, you can contact us.</p>
                            </div>

                        </div>


                    </AboutSection>

                </div>
                <aside className="right mt-5 lg:mt-0">
                    <Advertisement />
                    <div className="mb-5">
                        <CommunityBuzz />
                    </div>
                    <div className="mb-5">
                        <SuccessStories />
                    </div>
                </aside>
            </main>
        </Container>
    )
}
