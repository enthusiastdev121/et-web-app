import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Banner, Paper, Root } from "./styles";

export default function PrivacyPage() {
  return (
    <Root>
      {/* <Banner className="hidden md:block"> */}
      <Banner className="">
        <div className="overlay flex items-center justify-center">
        <h1 className="-mt-52 text-white font-bold text-sm md:hidden " style={{fontSize:'23px'}}>Privacy Policy</h1>
          <h1 className="-mt-20 text-center mx-10 hidden md:block">Privacy Policy</h1>
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
          <h2>Explore Privacy policy</h2>
          <p>
            We at ExploreTalent.com, (&ldquo;we&rdquo; or
            &ldquo;ExploreTalent.com&rdquo;) have created this privacy policy to
            demonstrate our firm commitment to protecting your personal
            information and informing you about our practices. This privacy
            policy only applies to transactions and activities in which you
            engage and gather data on the ExploreTalent.com Website,
            ExploreTalent.com email communications between ExploreTalent.com
            members (collectively, the &ldquo;Site&rdquo;) but does not apply to
            any other Website or offline point of contact between
            ExploreTalent.com, or any other company, and consumers. Please
            review this privacy policy periodically as we may modify it from
            time to time. This privacy policy was last revised on December 14,
            2011. Each time you visit the Site or provide us with information,
            by doing so you are accepting the practices described in this
            privacy policy at that time.
          </p>
          <p>
            We have a privacy policy for kids Check{" "}
            <Link href="/about/kidsprivacy">
              <a>Kids Privacy Policy</a>
            </Link>
          </p>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>Your IP Address</h2>
            </summary>
            <div style={{ marginTop: "1.5em" }}>
              <p>
                Like most e-commerce Websites, each time you visit the Site, we
                automatically collect your IP address and the web page from
                which you came. In order to administer and optimize the Site for
                you and to diagnose problems with our Site, we use your IP
                address to help identify you and to gather broad demographic
                information about you.
              </p>
            </div>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>Cookies</h2>
            </summary>
            <div style={{ marginTop: "1.5em" }}>
              <p>
                Like most Websites, the Site uses cookies to keep track of your
                purchases and other activity on the Site and enhance your
                experience on the Site. We also use cookies to deliver content
                specific to your interests, to save your password, and if you
                choose, to save other personal and financial information so you
                do not have to reenter it each time you visit the Site. If you
                wish to disable these cookies, the &ldquo;help&rdquo; portion of
                the toolbar on most browsers will tell you how. However, if you
                set your browser to disable cookies, you may not be able to
                access certain areas on the Site.
              </p>
            </div>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>Information We Collect From You</h2>
            </summary>
            <div style={{ marginTop: "1.5em" }}>
              <p>
                In order to operate the Site and to provide you with information
                about products or services that may be of interest to you, we
                may collect &ldquo;personal information&rdquo; (i.e. information
                that could be used to contact you directly (without using the
                Site) such as full name, postal address, phone number or email
                address), &ldquo;financial information&rdquo; (i.e. credit card
                numbers or passwords) or &ldquo;demographic information&rdquo;
                (i.e. information that you submit, or that we collect, that is
                neither personal information nor financial information; this may
                include, but is not limited to, zip code, postal code, hometown,
                gender, username, age/birth date, purchase history information,
                browsing history information, searching history information,
                registration history information, and the content of
                communications between you and other members over the Site),
                subject to the rest of this paragraph. Demographic information
                is divided into two categories: 1) &ldquo;non-public
                information&rdquo;, which consists of purchase history
                information and one-on-one communications between you and other
                users of the Site; and 2) &ldquo;public information&rdquo;,
                which consists of all other demographic information. We ask that
                you do not enter personal information or financial information
                into your &ldquo;Profile&rdquo; (for example, don&apos;t use
                your address or passcode as your username, or include your name
                or address in your written responses), because if you do then it
                may be posted publicly on the Site, and the information will
                then be treated as &ldquo;demographic information&rdquo; that is
                &ldquo;public information.&rdquo;
              </p>
            </div>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>Information Other Websites Collect From You</h2>
            </summary>
            <div style={{ marginTop: "1.5em" }}>
              <p>
                On the Site, we place links to other Websites operated by other
                parties. Some of these other Websites contain our brand names
                and trademarks and other intellectual property that we own;
                others do not. When you click on these links and visit these
                other Websites, regardless of whether or not they contain our
                brand names, trademarks and other intellectual property, you
                need to be aware that we do not control these other Websites or
                these other Websites&apos; business practices, and that this
                privacy policy does not apply to these other Websites.
                Consequently, the operators of these other Websites may collect
                different kinds of information about you, and may use and
                disclose that information in different ways than we would if it
                were collected on the Site. We encourage you to review their
                privacy policies and remind you that we will not be responsible
                for their actions.
              </p>
            </div>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>CHILDREN UNDER THE AGE OF 13</h2>
            </summary>
            <div style={{ marginTop: "1.5em" }}>
              <p>
                If you are a child under the age of 13, your profile must be
                created by a legal guardian. No one under age 13 may provide any
                Information to or through the Services. We do not knowingly
                collect personal information from children under 13. If you are
                under 13, do not use or provide any Information on the Services
                or on or through any of its features/register on the Services,
                make any purchases through the Services, use any of the
                interactive or public comment features of the Services or
                provide any information about yourself to us.
              </p>
            </div>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>How We Use Personal Information</h2>
            </summary>
            <div style={{ marginTop: "1.5em" }}>
              <p>
                We use your email address and your other personal information to
                help us efficiently operate the Site, to contact you in
                connection with your transactions and other activities on the
                Site (including, but not limited to, confirmation emails or
                important news that could affect your relationship with
                ExploreTalent.com), and to forward messages to you from other
                ExploreTalent.com users. These types of communications are known
                as &ldquo;Operational Communications.&rdquo; In some cases,
                Operational Communications may also contain commercial messages,
                such as banner ads and special offers.
              </p>

              <p>
                We also use personal information to send you newsletters,
                information, offers and other promotional materials for
                ExploreTalent.com&apos;s or third parties&apos; goods or
                services. We attempt to send you offers that are of value to
                you, such as discounts, exclusive offers or special event
                information. The Site provides you with options to decline to
                receive communications from ExploreTalent.com (other than those
                contained in Operational Communications). Some of these options
                may only be for a certain category of communications; others may
                be more general. By posting a profile on the Site, you are
                opting in to receive the ExploreTalent.com by Mail email. To
                stop receiving ExploreTalent.com by Mail and stop all automatic
                notifications login to your Explore Talent Account go &ldquo;My
                Account&rdquo; {">"} &ldquo;My Contact Info&rdquo;, check the
                checkbox &ldquo;Yes, I do not want to recieve any automatic
                notifications&ldquo; and click &ldquo;Update&rdquo;
              </p>

              <p>
                To operate the Site, including processing your transactions and
                supporting your activities on the Site, we may share your
                personal information with our agents, representatives,
                contractors and service providers so they can provide us with
                support services such as authorization of credit card
                transactions, email origination, receipt or support services,
                customer relationship management services, order fulfillment and
                sweepstakes and promotional fulfillment. We require these
                entities not to use your information for any other purpose.
              </p>
            </div>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>How We Use Financial Information</h2>
            </summary>
            <div style={{ marginTop: "1.5em" }}>
              <p>
                We use your financial information to check your qualifications,
                to bill you for products and services and to enable you to
                participate in discount, rebate and similar programs in which
                you may elect to participate. By making a purchase, or engaging
                in any other kind of activity or transaction that uses your
                financial information on the Site, you consent to our providing
                your financial information to our service providers and to such
                third parties as we determine are necessary to support and
                process your activities and transactions, as well as to your
                credit card issuer for their purposes. These third parties may
                include the credit card companies and banking institutions used
                to process and support the transaction or activity. By
                purchasing, or registering or making reservations for products
                or services of third parties offered on the Site, or by
                participating in programs offered on the Site that are
                administered by third parties and that require you to submit
                financial information in order to use them, you also consent to
                our providing your financial information to those third parties.
              </p>
            </div>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>
                How We Use Public Information and Other Demographic Information
              </h2>
            </summary>
            <div style={{ marginTop: "1.5em" }}>
              <p>
                We may review all demographic information. We may use public
                information to enable other users to find your profile, to
                determine whether they are a match for you and to communicate
                with you. We may use demographic information to tailor the Site
                and communications to your interests.
              </p>

              <p>
                The Site has security measures in place to protect against the
                loss, misuse and alteration of the information under our
                control. Our secure server software (SSL) is the industry
                standard and among the best software available today for secure
                commerce transactions. We encrypt all of your personal and
                financial information as it travels over the Internet and we
                store your financial information on our servers in encrypted
                form. Your information may be transferred to and maintained on
                computer networks which may be located outside of the state,
                province, country or other governmental jurisdiction in which
                you reside, and the country or jurisdiction in which these
                computer networks are located may not have privacy laws as
                protective as the laws in your country or jurisdiction.
              </p>
            </div>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>
                Changing our Privacy Policy for Previously Gathered Information
              </h2>
            </summary>
            <div style={{ marginTop: "1.5em" }}>
              <p>
                If at any point we decide to use particular personally
                identifiable information in a manner different from that stated
                at the time it was collected, we will notify users by way of an
                email or by providing 30 days notice on the Site. Please note
                that we will continue to have the right to change our privacy
                policy and practices, and how we use your personally
                identifiable information, without notice, as described in the
                first paragraph of this Privacy Policy, provided that such
                changes shall only apply to information gathered on or after the
                date of the change.
              </p>
            </div>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>
                How You Can Access and Update Your Email Preferences, Personal
                and Public Information
              </h2>
            </summary>
            <div style={{ marginTop: "1.5em" }}>
              <p>
                We give you the opportunity to opt-out of certain communications
                and modify personal information or demographic information you
                have provided to us, and to hide demographic information from,
                or make demographic information visible to, the public users of
                the Site, at anytime by going to the Account Settings or My
                Profile section of the Site. Please be aware that it may take
                several hours for the changes you make to take effect on the
                public areas of the Site. We thank you for your patience. Please
                note that changing or deleting your information through the
                &ldquo;Account Settings&rdquo; or &ldquo;My Profile&rdquo;
                section of the Site, or otherwise opting-out of receipt of email
                communications from ExploreTalent.com, will only change or
                delete the data in our database for purposes of future
                activities on the Site and for managing future communications
                from ExploreTalent.com. These changes and deletions will not
                change or delete emails or information that we may have already
                forwarded to other users or credit card companies or any other
                third parties, all as provided above in this privacy policy.
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
