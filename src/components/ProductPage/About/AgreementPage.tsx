import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Banner, Paper, Root } from "./styles";

export default function AgreementPage() {
  return (
    <Root>
      {/* <Banner className="hidden md:block"> */}
      <Banner className="">
        <div className="overlay flex items-center justify-center">
        <h1 className="-mt-52 leading-7 text-white text-center font-bold text-sm md:hidden" style={{fontSize:'22px'}}>
        Terms of Services & User Agreement

        </h1>
          <h1 className="-mt-20 text-center mx-10 hidden md:block">
            Terms of Services & User Agreement
          </h1>
        </div>
        <Image
          src="/images/banner-about.png"
          alt="actor performing in front of camera"
          layout="fill"
          priority

        />
      </Banner>

      <div className="md:-mt-20">
        <Paper className="relative z-20">
          <h2>Explore Talent User Agreement</h2>
          <p>
            Explore Talent User Agreement This Membership Agreement
            (&ldquo;Agreement&rdquo;) will detail the membership terms between
            you and Explore Talent. (&ldquo;Explore Talent&rdquo;), with respect
            to your use of the ExploreTalent.com service (the
            &ldquo;Service&rdquo;). Please read it carefully. By signing up for
            the service, you agree to the following:
          </p>

          <div>
            <h3 className="uppercase"> 1. THE SERVICE</h3>
            <p>
              The Service is a casting, audition and online submission Internet
              website which provides a talent gallery, talent calendar of events
              and opportunities, e-mail and administrative functions to
              facilitate and promote modeling careers, and includes all products
              and services which are described on the Explore Talent website or
              which Explore Talent otherwise agrees to provide to you. Your
              Casting Calendar provides you with the details of all submissions
              and casting inquiries made by you or on your behalf by one of our
              service representatives and talent advisors per your Membership.
            </p>
          </div>

          <div>
            <h3 className="uppercase"> 2. MEMBER PRIVACY</h3>
            <p>
              Explore Talent&apos;s policy is to respect the privacy of its
              members. Explore Talent will not monitor, edit, or disclose any
              personal information about you or your account, including its
              contents, without your prior permission unless Explore Talent
              believes that such action is necessary or if it is required to do
              so to: (1) conform to legal requirements or comply with legal
              process; (2) protect and defend the rights or property of Explore
              Talent; (3) enforce this agreement; (4) remove or modify
              information in order to protect you from scam and spam or (5) act
              to protect the interests of other members or third parties.
              Warning! Don&apos;t post personal information such as your phone
              number, email, address, IM screen name, or specific whereabouts.
              Don&apos;t post anything that would make it easy for a stranger to
              find your location, like your local hangout or school. Post
              pictures and videos, but remember to think about where you&apos;re
              taking them, what you&apos;re wearing that could identify you to a
              stranger (like school uniforms or landmarks in the background).
              Don&apos;t take the risk and meet people in real life that you
              only &ldquo;know&rdquo; online, and have no mutual real life
              friends. You consent to receive live, autodialed or prerecorded
              calls and text messages from ExploreTalent at any telephone number
              that you have provided us or that we have otherwise obtained even
              if the number(s) is/are found on the National Do Not Call
              Registry. We may place such calls or texts to (i) notify you
              regarding your account; (ii) troubleshoot problems with your
              account; (iii) resolve a dispute; (iv) collect a debt; (v) poll
              your opinions through surveys or questionnaires, (vi) contact you
              with offers and promotions, or (vii) as otherwise necessary to
              service your account or enforce this User Agreement.
            </p>
          </div>

          <div>
            <h3 className="uppercase">3. PROPRIETARY RIGHTS TO CONTENT</h3>
            <p>
              You acknowledge that content, including but not limited to text,
              software, music, sound, photographs, video, graphics or other
              material accessible to you by virtue of membership is protected by
              copyrights, trademarks, service marks, patents or other
              intellectual property rights and laws. Unless you are expressly
              authorized to do so, you must not sell, lease, modify, copy,
              republish, upload, download, post, broadcast, transmit, or
              distribute in any way content available through the Service,
              including code and software. You further acknowledge and agree
              that any information provided by or through Explore Talent is for
              information purposes only and is not intended to constitute
              professional advice.
            </p>
          </div>

          <div>
            <h3 className="uppercase"> 4. CHARGES AND USE OF SERVICE</h3>
            <p>
              The cost of the Service you use will be charged to the credit
              card, checking account debiting or PayPal account designated by
              you. You acknowledge that you are solely responsible for ensuring
              that no unauthorized use of your account or PIN occurs and that
              any risk associated with the transmission of information over the
              Internet or through the Service is borne by you. You further
              acknowledge and agree to pay the charges for use of the Service in
              accordance with the then-current pricing structure.
            </p>
          </div>

          <div>
            <h3 className="uppercase">
              5. APPLICATION AND VARIATION OF TERMS AND PRICING
            </h3>
            <p>
              The cost of the Service you use will be charged to the credit
              card, checking account debiting or PayPal account designated by
              you. You acknowledge that you are solely responsible for ensuring
              that no unauthorized use of your account or PIN occurs and that
              any risk associated with the transmission of information over the
              Internet or through the Service is borne by you. You further
              acknowledge and agree to pay the charges for use of the Service in
              accordance with the then-current pricing structure.
            </p>
          </div>

          <div>
            <h3 className="uppercase">6. SUSPENSION OF SERVICE</h3>
            <p>
              Explore Talent may, with notice of why and when, suspend the
              Service or disconnect, deny or restrict your access to the
              Service: (a) during any technical failure of, modification or
              maintenance to the Service, but Explore Talent will use reasonable
              endeavors to procure the resumption of the Service as soon as
              reasonably practicable; or (b) if you use the Service in breach of
              this Agreement until the breach (if capable of remedy) is
              remedied, or if you do or fail to do anything which in Explore
              Talent&apos;s opinion may have the affect of jeopardizing the
              operation or integrity of the Service or any other service.
              Despite suspension, disconnection, denial or restriction of the
              Service under this clause you remain liable for all charges due
              throughout the period of suspension, disconnection, denial or
              restriction.
            </p>
          </div>

          <div>
            <h3 className="uppercase">
              {" "}
              7. EXCLUSION OF WARRANTIES AND LIMITATION OF LIABILITY
            </h3>
            <p>
              To the extent permitted by law all terms, warranties,
              undertakings, inducements and representations relating to the
              Service are excluded and Explore Talent will not be liable for any
              loss or damage (including without limitation indirect, special or
              consequential loss or damage) arising from the Service whether or
              not caused by any negligent act or omission. If any legislation
              implies any term or warranty that cannot be excluded, Explore
              Talent&apos;s sole liability will be, in the case of goods or
              services, to re-supply the goods or services, or to pay for the
              cost of having the goods or services re-supplied. To the extent
              permitted by law, Explore Talent is not liable for the
              unavailability of the Service at any time or for any reason, or
              for any failure of the Service to submit, receive or accept any
              calls or messages. To the extent permitted by law, Explore Talent
              disclaims any warranty in relation to the performance, operation,
              reliability or availability of the Service. Without limiting the
              preceding provisions of this clause, Explore Talent expressly
              disclaims liability for any loss, damage, costs, expenses and
              liabilities of whatever nature arising (directly or indirectly)
              from the use of products proprietary to, or provided by, third
              parties, or from any recommendation by Explore Talent that you use
              or accept such products.
            </p>
          </div>

          <div>
            <h3 className="uppercase"> 8. MEMBER CONDUCT</h3>
            <p>
              The Service is provided to individuals only. Any unauthorized
              commercial use of the Service, or the resale of its services, is
              prohibited. You must not use the Service to solicit business for
              any competitive service. You agree to abide by all applicable
              local, state, national and international laws, regulations,
              ordinances, by-laws and rules and are solely responsible for all
              acts or omissions that occur under your account name or password,
              including, without limitation, the content of your transmissions
              through the Service. By way of example, and not as a limitation,
              you agree not to: A. use the Service in connection with chain
              letters, junk email, spamming, or any duplicative or unsolicited
              messages (commercial or otherwise); B. harvest or otherwise
              collect information about others, including email addresses,
              without their consent; C. create a false identity or forged email
              address or header, or otherwise attempt to mislead others as to
              the identity of the sender or the origin of a message; D. transmit
              through the Service unlawful, harassing, defamatory, abusive,
              threatening, harmful, vulgar, obscene, offensive or otherwise
              objectionable material; E. transmit any material that may infringe
              the intellectual property rights or other rights of third parties,
              including without limitation, trademarks or copyright; F. transmit
              any material that contains viruses, Trojan horses, worms, time
              bombs, cancelbots, or any other harmful or deleterious programs;
              G. use the Service to violate any applicable law restricting the
              export or import of data, software or any other content: H.
              interfere with or disrupt networks connected to the Service or
              violate the regulations, policies or procedures of such networks;
              I. gain or attempt to gain unauthorized access to the Service,
              other accounts, computer systems or networks connected to the
              Service, through password mining or by any other means; or J.
              interfere with another member&apos;s use and enjoyment of the
              Service or another entity&apos;s use and enjoyment of similar
              services. K. use the Service in any unethical manner or contrary
              to accepted community standards.
            </p>
          </div>

          <div>
            <h3 className="uppercase">
              9. EMAIL STORAGE, OUTBOUND MESSAGES AND OTHER LIMITATIONS
            </h3>
            <p>
              The amount of storage space per member is limited to 10MB, and
              some messages may not be processed due to space constraints or
              outbound message limitations. You agree that Explore Talent is not
              responsible or liable for the deletion of, failure to store or
              non-deliveries of email messages.
            </p>
          </div>

          <div>
            <h3 className="uppercase">10. INDEMNITY</h3>
            <p>
              You indemnify and will keep indemnified Explore Talent and its
              employees, subcontractors and consultants from and against all
              actions, claims, demands, costs or expenses made, sustained,
              brought or prosecuted or in any manner based upon, occasioned by
              or attributable to the Service which may arise from or as a result
              of any breach of the terms of this Agreement by Explore Talent,
              its employees, subcontractors or consultants or any unlawful or
              negligent act or omission of Explore Talent, its employees,
              subcontractors or consultants.
            </p>
          </div>

          <div>
            <h3 className="uppercase">11. ENDORSEMENTS</h3>
            <p>
              All product and service marks that appear on the Explore Talent
              web site that are not Explore Talent marks are the trademarks of
              their owners. References to any names, marks, products or services
              of third parties or hypertext links to third party sites or
              information do not constitute or imply endorsement, sponsorship or
              recommendation of the third party information, product or service.
            </p>
          </div>

          <div>
            <h3 className="uppercase"> 12. GOVERNING LAW</h3>
            <p>
              The laws of the State of Nevada govern this Agreement and the
              parties irrevocably and unconditionally submit to the exclusive
              jurisdiction of the courts of that jurisdiction.
            </p>
          </div>

          <div>
            <h3 className="uppercase"> 13. INVALIDITY</h3>
            <p>
              If a provision of this Agreement or a right or remedy under it is
              invalid or unenforceable in a particular jurisdiction: (a) it is
              to be read down or severed in that jurisdiction only to the extent
              of the invalidity or unenforceability; and (b) it does not affect
              the validity or enforceability of that provision in another
              jurisdiction or the remaining provisions in any jurisdiction.
            </p>
          </div>

          <div>
            <h3 className="uppercase"> 14. TERMINATION</h3>
            <p>
              Explore Talent may immediately terminate this Agreement or the
              provision of the Service if the Customer&apos;s account is
              inactive for a period of 12 months since the date on which the
              Customer last used the Service. In addition, Explore Talent may
              immediately terminate this Agreements or the provision of the
              Service if it considers that: (a) you have breached any term of
              this agreement; (b) you are or may be or likely to become
              insolvent or bankrupt; (c) an unauthorized person is, or may be
              using, your account; (d) you do not have any prepaid credit. All
              outstanding charges will become immediately due and payable to
              Explore Talent on giving of notice of termination and in no
              circumstances shall the member be entitled to any refund of
              payments made except as set forth in Sections 18 and 19 below.
            </p>
          </div>

          <div>
            <h3 className="uppercase">15. WAIVER</h3>
            <p>
              A single or partial exercise of a right does not preclude a
              further exercise of that right or the exercise of another right.
              Failure by a party to exercise a right or delay in exercising that
              right does not prevent its exercise or operate as a waiver. A
              waiver is only effective in the specific instance and for the
              specific purpose for which it is given.
            </p>
          </div>

          <div>
            <h3 className="uppercase"> 16. YOUR RIGHT TO CANCEL</h3>
            <p>
              You may cancel this contract, and if you paid, get a full refund
              without any penalty or obligation, if notice of cancellation is
              given, within 10 business days from the date you commence
              utilizing our services. To cancel this contract, please visit HOW
              TO CANCEL and follow the instructions as provided. You may also
              cancel at anytime during business hours 9am - 5pm PST Monday -
              Friday by calling (702) 553 2700. When you cancel, your billing
              stops immediately, and no new charges will be billed to you unless
              you re-instate your subscription.
            </p>
          </div>

          <div>
            <h3 className="uppercase">17. RIGHT TO REFUND</h3>
            <p>
              If you pay a fee and you fail to receive the services promised
              (fully functional site and submission casting calendar), then
              Explore Talent shall, upon your written or e-mailed request,
              return the amount paid by you within 7 days of your request for a
              refund.
            </p>
          </div>

          <div>
            <h3 className="uppercase">18. PHOTO RELEASE</h3>
            <p>
              I hereby assign and grant to Explore Talent the right and
              permission to use and/or publish photographs or likeness, videos
              or MP3s of me for advertising purposes, promotion or display, in
              all forms of media. I hereby release and discharge Explore Talent,
              it&apos;s owners, and employees, and any persons acting on behalf
              of Explore Talent from any liability stemming from the publishing
              of said photos, videos or MP3s, including, but not limited to,
              copyright infringement or piracy. I further discharge
              ExploreTalent from any and all liability for damages caused by any
              blurring, distortion, alteration,optical illusion, or use in
              composite form of said picture which may occur during the taking,
              processing, or production of said picture or the finished product.
              I understand that Explore Talent shall have the right to terminate
              my portfolio for any reason whatsoever. I hereby certify that I am
              over eighteen years of age, or, in the alternative, that my parent
              or guardian hereby gives their express consent to my entering into
              this release.
            </p>
          </div>

          <div>
            <h3 className="uppercase">19. ENTIRE AGREEMENT</h3>
            <p>
              This Agreement is the entire agreement between you and Explore
              Talent. An understanding, arrangement, representation or provision
              not expressly set out in it is not binding. All correspondence,
              negotiations and other communications in relation to its subject
              matter that precede it are suspended by it and merged in it.
            </p>
          </div>

          <div>
            <h3 className="uppercase">20. CREDIT CARD DESCRIPTOR</h3>
            <p>
              Charges will appear on your credit card statement as:
              &ldquo;ExploreTalent 800 495 1212&rdquo; or &ldquo;ExploreTal 800
              495 1212&rdquo; or &ldquo;ExploreFeatured 800 495 1212&rdquo;
              depending on your bank.
            </p>
          </div>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>HOW TO REDEEM; OFFER INFORMATION</h2>
            </summary>
            <div>
              <h3>$2 for the first 7 days Trial Agreement</h3>
              <p>
                To redeem your $2 for the first 7 days trial subscription to
                ExploreTalent.com (&ldquo;Trial&rdquo;) you must go to
                ExploreTalent.com promo page. After that, appropriately complete
                the registration and subscription forms. As part of the
                enrollment process for the Trial, you will be required to submit
                a valid credit card, checking account or PayPal information and
                pick an ExploreTalent.com subscription package. If you do not
                cancel your subscription during the Trial period, you will be
                billed for the subscription package to ExploreTalent.com, which
                you select during the Trial registration process. Your Trial
                allows access to all of ExploreTalent.com&apos;s site features
                and begins immediately upon approval by ExploreTalent.com of the
                above information. ExploreTalent.com reserves the right to
                refuse any Trial or subscription for any reason. Limit one Trial
                per person per year. Any attempt by a person to redeem more than
                one Trial shall subject such subsequent Trials to
                disqualification. Void where prohibited. ExploreTalent.com may
                discontinue this offer at any time.
              </p>
            </div>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>IF YOU ARE UNDER 18</h2>
            </summary>

            <div style={{ marginTop: "1.5em" }}>
              <p>
                You affirm that you are either more than eighteen (18) years of
                age, or an emancipated minor, or possess legal parental or
                guardian consent, and are fully able and competent to enter into
                the terms, conditions, obligations, affirmations,
                representations, and warranties set forth in these Terms of Use,
                and to abide by and comply with these Terms of Use, and are not
                a person barred from using the Websites under the laws of the
                United States or other applicable jurisdiction.
              </p>

              <p>
                Users under the age of thirteen (13) who would like to
                participate in any of the Websites (a &ldquo;Young User&rdquo;),
                must have their parent or legal guardian (a &ldquo;Parent
                Registered User&rdquo;) register to use the Websites, using the
                Parent Registered User&apos;s name, email, and credit card
                information, and consent to a Young Users use of the Websites.
                Parent Registered Users are responsible for updating the
                settings of and terminating their account and thereby use of the
                Websites by the applicable Young User.
              </p>

              <p>
                For purposes of these Terms of Use, Parent Registered Users and
                their Young Users are deemed to be Users as used in these Terms
                of Use. By registering as a Parent Registered User, you hereby
                represent, warrant, understand, agree to and accept these Terms
                of Use and any applicable additional terms in their entirety on
                behalf of yourself and your Young User whether or not you use
                any of the Websites. You further understand and agree that you
                will ensure your Young User&apos;s compliance with these Terms
                of Use and that you are responsible for any noncompliance by
                your Young User.
              </p>

              <p>
                If you are a Parent Registered User, you also agree that you are
                responsible for monitoring the account of your Young User as
                well as your Young User&apos;s activities both on and off of the
                Websites, including monitoring who your Young User communicates
                with and meets both on and off the Websites. When a Young User
                turns eighteen (18) years old, the Parent Registered User may
                transfer the account to their child, by changing the account
                name, email address, and credit card number on file in the
                account, if they so wish.
              </p>

              <p>
                If a parent or guardian believes that any Website has collected
                information of a child under the age of thirteen (13) without
                proper consent, please{" "}
                <Link href="/requests/index/contact">
                  <a>contact Explore Talent</a>
                </Link>{" "}
                or call us at 702-553-2700.
              </p>
            </div>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>ELIGIBILITY</h2>
            </summary>
            <div style={{ marginTop: "1.5em" }}>
              <p>
                Eligibility is limited to non-subscribers of ExploreTalent.com.
                Current subscribers are not eligible. Only members that did not
                cancel their subscription within the $2 for the first 7 days
                trial will be eligible for the free business cards.
              </p>
            </div>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>BILLING UPON EXPIRATION</h2>
            </summary>
            <div style={{ marginTop: "1.5em" }}>
              <p>
                Upon the completion of your Trial period, you will be
                automatically billed for an ExploreTalent.com subscription for
                the rate and term you select when you sign up for your Trial.
                Thereafter, your subscription will be automatically renewed
                until you submit your resignation or cancel on-line or by
                calling by calling (702) 553 2700 during business hours 9am -
                5pm PST Monday - Friday .
              </p>
            </div>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>TERMS OF MEMBERSHIP</h2>
            </summary>
            <div style={{ marginTop: "1.5em" }}>
              <p>
                Your Trial and any subsequent subscriptions are governed by all
                of the terms and conditions on the ExploreTalent.com site,
                including but not limited to the ExploreTalent.com Terms of Use.
                The Terms of Use can be found by going to ExploreTalent.com and
                clicking on the &ldquo;User agreement&rdquo; link on the help
                page.
              </p>
            </div>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>PRIVACY</h2>
            </summary>
            <div style={{ marginTop: "1.5em" }}>
              <p>
                All information supplied by you to ExploreTalent.com is subject
                to the ExploreTalent.com{" "}
                <Link href="/about/privacy">
                  <a>Privacy Policy</a>
                </Link>{" "}
                which can be found a link to on the help page.
              </p>
            </div>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>ARBITRATION PROVISION</h2>
            </summary>
            <div style={{ marginTop: "1.5em" }}>
              <p>
                Any dispute, claim or controversy arising out of or relating to
                this Agreement or the breach, termination, enforcement,
                interpretation or validity thereof, including the determination
                of the scope or applicability of this agreement to arbitrate,
                shall be determined by arbitration in Las Vegas, Nevada before
                one arbitrator,. The arbitration shall be administered by JAMS
                pursuant to its Comprehensive Arbitration Rules and Procedures.
                Judgment on the Award may be entered in any court having
                jurisdiction.
              </p>

              <p>
                The parties shall maintain the confidential nature of the
                arbitration proceeding and the Award, including the Hearing,
                except as may be necessary to prepare for or conduct the
                arbitration hearing on the merits, or except as may be necessary
                in connection with a court application for a preliminary remedy,
                a judicial challenge to an Award or its enforcement, or unless
                otherwise required by law or judicial decision.
              </p>

              <p>
                This Agreement and the rights of the parties hereunder shall be
                governed by and construed in accordance with the laws of the
                State of Nevada, exclusive of conflict or choice of law rules.
              </p>

              <p>
                The parties acknowledge that this Agreement evidences a
                transaction involving interstate commerce. Notwithstanding the
                provision in the preceding paragraph with respect to applicable
                substantive law, any arbitration conducted pursuant to the terms
                of this Agreement shall be governed by the Federal Arbitration
                Act (9 U.S.C., Secs. 1-16).
              </p>

              <p>
                In any arbitration arising out of or related to this Agreement,
                the arbitrator is not empowered to award punitive or exemplary
                damages, except where permitted by statute, and the parties
                waive any right to recover any such damages.
              </p>

              <p>
                NEITHER YOU NOR WE WILL HAVE THE RIGHT TO LITIGATE THAT CLAIM IN
                COURT OR HAVE A JURY TRIAL ON THAT CLAIM, OR TO ENGAGE IN
                PRE-ARBITRATION DISCOVERY EXCEPT AS PROVIDED FOR IN THE
                APPLICABLE ARBITRATION RULES. FURTHER, YOU WILL NOT HAVE THE
                RIGHT TO PARTICIPATE AS A REPRESENTATIVE OR MEMBER OF ANY CLASS
                OF CLAIMANTS PERTAINING TO ANY CLAIM SUBJECT TO ARBITRATION.
                EXCEPT AS SET FORTH BELOW, THE ARBITRATOR&apos;S DECISION WILL
                BE FINAL AND BINDING. YOU UNDERSTAND THAT OTHER RIGHTS THAT YOU
                WOULD HAVE IF YOU WENT TO COURT MAY ALSO NOT BE AVAILABLE IN
                ARBITRATION. THE FEES CHARGED BY THE ARBITRATION ADMINISTRATOR
                MAY BE GREATER THAN THE FEES CHARGED BY A COURT.
              </p>

              <p>
                There shall be no authority for any Claims to be arbitrated on a
                class action or private attorney general basis. Furthermore,
                arbitration can only decide your or our Claim(s) and may not
                consolidate or join the claims of other persons that may have
                similar claims. There shall be no pre-arbitration discovery
                except as provided for in the applicable Arbitration Rules. Each
                party shall bear the expense of that party&apos;s
                attorneys&apos;, experts&apos;, and witness fees, regardless of
                which party prevails in the arbitration, unless applicable law
                gives a party the right to recover any of those fees from the
                other party.
              </p>

              <p>
                Contacting Arbitration Administrators If you have a question
                about the arbitration administrators mentioned in this
                Arbitration Provision or would like to obtain a copy of their
                Arbitration Rules or fee schedules, you can contact them as
                follows: J.A.M.S, at
                http://www.jamsadr.com/rules-comprehensive-arbitration/ 222
                South Riverside Plaza, Suite 1850, Chicago, IL 60606,
                www.jams-endispute.com, (800) 352-5267, Financial Services
                Arbitration Rules and Procedures, or National Arbitration Forum,
                P.O. Box 50191, Minneapolis, MN 55405,
                www.arbitration-forum.com, (800) 474-2371, Code of Procedure.
              </p>
            </div>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>LIMITATION ON LIABILITY</h2>
            </summary>
            <div style={{ marginTop: "1.5em" }}>
              <p>
                ExploreTalent.com is not responsible for any problems or
                technical malfunction of any telephone network or lines,
                computer online systems, servers, or providers, computer
                equipment, software, failure of any e-mail or redemption to be
                received by ExploreTalent.com on account of technical problems
                or traffic congestion online or on the Internet or at any web
                site, or any combination thereof including any injury or damage
                to entrant&apos;s or any other person&apos;s computer related to
                or resulting from downloading any materials consistent with this
                Trial or subsequent use of ExploreTalent.com. If, for any
                reason, the Trial offer is not capable of running online as
                planned, including infection by computer virus, bugs, tampering,
                unauthorized intervention, fraud, technical failures, or any
                other causes beyond the control of ExploreTalent.com which
                threatens or corrupts or adversely affects the administration,
                security, fairness, integrity or proper conduct of this Trial
                offer, ExploreTalent.com, reserves the right, in its sole
                discretion, to cancel, terminate or suspend the offer and/or any
                Trials.
              </p>

              <p>
                EXPLORETALENT.COM IS A TALENT RESOURCE AND AN INDUSTRY DATA BASE
                LISTING SERVICE. EXPLORETALENT.COM IS NOT A TALENT AGENCY
                CONTRACT. TO THE EXTENT THAT IT APPLIES, PURSUANT CALIFORNIA
                LABOR LAW SECTION 1700.5 OF THE LABOR CODE, ONLY A TALENT AGENT
                LICENSED MAY ENGAGE IN THE OCCUPATION OF PROCURING, OFFERING,
                PROMISING, OR ATTEMPTING TO PROCURE EMPLOYMENT OR ENGAGEMENTS
                FOR AN ARTIST. EXPLORETALENT.COM IS PROHIBITED BY LAW FROM
                OFFERING OR ATTEMPTING TO OBTAIN AUDITIONS OR EMPLOYMENT FOR
                YOU, THEREFORE ONLY YOU CAN SUBMIT YOURSELF TO AN AUDITION OR
                OBTAIN AN EMPLOYMENT FOR YOURSELF. IT MAY ONLY PROVIDE YOU
                INFORMATION. FOR MORE INFORMATION, TO THE EXTENT THAT IT APPLIES
                CONSULT CHAPTER 4.5 (COMMENCING WITH SECTION 1701) OF PART 6 OF
                DIVISION 2 OF THE CALIFORNIA LABOR CODE. A DISPUTE ARISING OUT
                OF THE PERFORMANCE OF THE CONTRACT BY EXPLORETALENT.COM THAT IS
                NOT RESOLVED TO THE SATISFACTION OF THE ARTIST SHOULD BE
                REFERRED TO A LOCAL CONSUMER AFFAIRS DEPARTMENT OR LOCAL LAW
                ENFORCEMENT, AS APPROPRIATE.
              </p>
            </div>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>NOTICE FOR CALIFORNIA PRO OR PAID MEMBERS</h2>
            </summary>
            <div style={{ marginTop: "1.5em" }}>
              <p>
                EXPLORE TALENT IS A WEBSITE THAT MAYBE CONSIDERED BY SOME AS A
                TALENT LISTING SERVICE. THIS IS NOT A TALENT AGENCY CONTRACT.
                ONLY A TALENT AGENT LICENSED PURSUANT TO SECTION 1700.5 OF THE
                LABOR CODE MAY ENGAGE IN THE OCCUPATION OF PROCURING, OFFERING,
                PROMISING, OR ATTEMPTING TO PROCURE EMPLOYMENT OR ENGAGEMENTS
                FOR AN ARTIST. EXPLORE TALENT IS PROHIBITED BY LAW FROM OFFERING
                OR ATTEMPTING TO OBTAIN AUDITIONS OR EMPLOYMENT FOR YOU. IT MAY
                ONLY PROVIDE YOU WITH LISTING INFORMATION. FOR MORE INFORMATION,
                CONSULT CHAPTER 4.5 (COMMENCING WITH SECTION 1701) OF PART 6 OF
                DIVISION 2 OF THE LABOR CODE. A DISPUTE ARISING OUT OF THE
                PERFORMANCE OF THE CONTRACT BY THE TALENT SERVICE THAT IS NOT
                RESOLVED TO THE SATISFACTION OF THE ARTIST SHOULD BE REFERRED TO
                A LOCAL CONSUMER AFFAIRS DEPARTMENT OR LOCAL LAW ENFORCEMENT, AS
                APPROPRIATE.
              </p>

              <h3 style={{ fontSize: "14px" }}>YOUR RIGHT TO CANCEL</h3>
              <p>
                You may cancel this contract and obtain a full refund, without
                any penalty or obligation, if notice of cancellation is given,
                in writing, within 10 business days from the date you commence
                utilizing our paid services. For purposes of this section,
                business days are Monday through Friday. To cancel this
                contract, mail or deliver or send by facsimile transmission a
                signed and dated copy of the following cancellation notice or
                any other written notice of cancellation to EXPLORE TALENT at
                3395 S. JONES BLVD #15, LAS VEGAS. NV 89146, fax number (702)
                832 5666, or contact us form Conatct us page and Internet Web
                site address www.exploretalent.com, NOT LATER THAN MIDNIGHT OF
                THE 10th BUSINESS DAY. If the contract was executed in part or
                in whole through the Internet, you may cancel the contract by
                sending the notification to: Conatct us page or calling (702)
                553-2700
              </p>

              <h3 style={{ fontSize: "14px" }}>CANCELLATION NOTICE</h3>
              <ul className="mb-5">
                <li>I hereby cancel this contract.</li>
                <li>Dated:</li>
                <li>Artist Signature.</li>
              </ul>

              <p>
                <strong>
                  If you cancel, all fees you have paid must be refunded to you
                  within 10 business days after delivery of the cancellation
                  notice to Explore Talent.
                </strong>
              </p>

              <p>
                (1,3,6,12 months) will be charged as recurring charges for the
                whole term and are non refundable (requests for refunds will be
                reviewed on a case by case basis with the possibility of only a
                pro rated refund for unused months). The initial contracted term
                of this Agreement is twelve (12) months. By accessing the
                Service you are committed to the above terms.
              </p>

              <p>
                Explore Talent offers to list or display information about an
                artist, including a photograph, on the service&apos;s Internet
                Web site, or on a Web site that the talent service has authority
                to design or alter, the contract shall contain a notice that the
                talent service will remove the listing and content within 10
                days of a request by the artist or, in the case of a minor, the
                artist&apos;s parent or guardian. If you would like to have any
                information please contact us here{" "}
                <Link href="/requests/index/contact">
                  <a>Conatct us page</a>
                </Link>{" "}
                or call our customer service at (702) 553-2700
              </p>

              <p>
                A contract that does not comply with subdivisions 1703(a) to
                (f), of the labor code inclusive, is voidable at the election of
                the artist and may be canceled by the artist at any time without
                any penalty or obligation.
              </p>
            </div>
          </details>
        </Paper>

        {/* Contact */}
        <Paper>
          <details>
            <summary>
              <h2>Contact Information & Address</h2>
            </summary>

            <div style={{ marginTop: "1.5em", marginBottom: "1em" }}>
              <Image
                src="/svg/blue-phone.svg"
                height={70}
                width={70}
                alt="phone"
                priority
              />
            </div>

            <div className="text-base">
              <p>If you have any issues please call our customer service</p>
              <strong className="text-2xl">(702) 553-2700</strong>
              <p>between Monday to Friday 9am-5pm • PST</p>
              <strong>Booking Department</strong>
              <p>
                <strong>For Casting directors (702) 446-0888 • </strong>
                Monday to Friday 8am-5pm PST
              </p>
            </div>

            <hr className="my-7" />

            <div className="text-base">
              <strong>Explore Talent</strong>
              <ul>
                <li>Explore Talent</li>
                <li>3395 S. Jones Blvd #15</li>
                <li>Las Vegas, NV 89146</li>
                <li>Exploretalent.com</li>
              </ul>
            </div>
          </details>
        </Paper>
      </div>
    </Root>
  );
}

/* <p>
  in order to avoid any payments to ExploreTalent.com you must cancel your Trial
  prior to the end of your Trial (this is, before the end of the seventh day).
  To cancel this contract, please visit{" "}
  <Link href="/requests/index/contact/title/cancel_subscription">
    <a>HOW TO CANCEL</a>
  </Link>{" "}
  and follow the instructions as provided. You may also cancel at anytime during
  business hours 9am - 5pm PST Monday - Friday by calling (702) 553 2700. When
  you cancel, your billing stops immediately, and no new charges will be billed
  to you unless you re-instate your subscription.
</p> */
