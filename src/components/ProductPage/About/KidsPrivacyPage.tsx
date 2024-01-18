import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Banner, Paper, Root } from "./styles";

export default function KidsPrivacyPage() {
  return (
    <Root>
      {/* <Banner className="hidden md:block"> */}
      <Banner className="">
            <div className="overlay flex items-center justify-center ">
          <h1 className="-mt-52 text-white font-bold text-sm md:hidden px-8" style={{fontSize:'22px'}}>Kids Privacy Policy</h1>
          <h1 className="-mt-20 text-center mx-10 hidden md:block">Kids Privacy Policy</h1>
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
          <h2>Kids Privacy Policy</h2>

          <div>
            <h3>
              ExploreTalent policy regarding usage of the site for minors under
              13 (0-12 years old)
            </h3>
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
            <h3>
              ExploreTalent policy regarding usage of the site for minors 13-17
              years old
            </h3>
            <p>
              We allow users 13 year or older to create their profile, although
              to make a purchase it must be done by a parent or guardian. We
              will not accept any transaction from any customer under 18 years
              old. We ask for guardian information during the registration for
              members 13-17 years old. See our 13-17 years old privacy policy,
              go to our general privacy policy.
            </p>
          </div>

          <div>
            <h3>Privacy Policy for Children Under 13</h3>
            <p>
              This section only applies to children under the age of 13 This
              section notifies parents that:
              <ol className="list-decimal ml-5">
                <li>
                  The types of information we may collect of children under the
                  age 13.
                </li>
                <li>How we use the information we collect.</li>
                <li>
                  Our practices for disclosing that information is consistent
                  with the other sections of this Privacy Policy.
                </li>
                <li>
                  Our practices for notifying and obtaining parents&apos;
                  consent when we collect personal information of children,
                  including how a parent may revoke consent.
                </li>
                <li>
                  operators that collect or maintain child information through
                  our Websites.
                </li>
              </ol>
            </p>
          </div>

          <div>
            <h3>Parent Consent</h3>
            <p>
              We require verifiable consent from a child&apos;s parent for any
              collection, use, and disclosure of the child&apos;s personal
              information via a toll free telephone which is directed to a
              trained verification specialist. We must speak to a parent or
              guardian before activating any profile for a child under the age
              of 13.
            </p>

            <p>
              Only a Parent or Legal Guardian of a child under the age of 13
              years old may create an account on ExploreTalent.com. When
              creating a Profile on behalf of their child, the Parent or Legal
              Guardian will be asked to enter their child&apos;s date of birth.
              If the child is under 13 years of age, a popup will ask the parent
              to call Exploretalenet.com at 800-597-4500, they must provide
              their parental consent and at that point we will create a profile
              for their child and we will send them a link to access the account
              and create the password.
            </p>

            <p>
              To protect your privacy and security, we may require you to take
              certain steps or provide additional information to verify your
              identity before we provide any information or make corrections.
            </p>
          </div>

          <div>
            <h3>
              Description of the personal information collected and how
              it&apos;s used
            </h3>

            <div>
              <h4>Child information we may collect</h4>
              <p>
                First & last name, date of birth, zip code, ethnicity, Height,
                weight, sizes, Eye color, Hair color, Pictures, Videos, Special
                skills, resume, about me, IP address, cookies. The personal
                information is collected by parents/guardian entering it or
                through cookies.
              </p>

              <p>
                The personal information will be used for matching your child
                info with casting and auditions and by making it searchable on
                the website for those who are looking for talent and for casting
                directors/recruiters.
              </p>

              <p>
                The personal information will be displayed on the child public
                profile on the website as well in search results for talent,
                feature talent, whois online and recent activity.
              </p>
              <p>
                We do not disclose child personal information collected to third
                parties.
              </p>
              <p>
                We ask that you to protect and do not enter any personal contact
                information or financial information into your child&apos;s
                &ldquo;Profile&rdquo; since you may get crank calls & spam
                emails (also, don&apos;t use your address or passcode as your
                username, or include your phone number, email or address
                anywhere on massages you may post on the site), because if you
                do then it may be posted publicly on the Site, and the
                information will then be treated as &ldquo;demographic
                information&rdquo; that is &ldquo;public information&rdquo;.
              </p>

              <p>
                We may collect Parents/guardian&apos;s credit card numbers or
                link you to login to online payment service if you chose to pay
                for upgraded service.
              </p>
            </div>

            <div>
              <h4>Your parental rights</h4>
              <p>
                Parents/guardian can review their child&apos;s personal
                information, direct us to delete it, and refuse to allow any
                further collection or use of the child&apos;s information.
              </p>

              <p>
                Parents/guardian can review, change, access, correct or delete
                their child&apos;s personal information by: Logging into your
                ExploreTalent account and visiting your child&apos;s account
                profile page.
              </p>
              <p>
                Parents/guardian can agree to the collection and use of their
                child&apos;s information, but still not allow disclosure to
                third parties unless that&apos;s part of the service.
              </p>
              <p>
                ExploreTalent will not require disclose more child information
                than is reasonably necessary to participate in an activity.
              </p>
              <p className="font-semibold">
                Parents/guardian can exercise their rights by calling to our
                Parents/guardian hotline 800-597-4500 or by writing to us via
                the contact form:{" "}
                <Link href="/requests/index/contact">
                  <a>Contact Us</a>
                </Link>
              </p>
            </div>

            <div style={{ marginTop: "1.5em" }}>
              <p>
                {" "}
                3395 S Jones Blvd. #15, Las Vegs, NV 89146 - Toll free:
                800-597-4500 M-F 9am-5pm PST
              </p>
              <p>
                End of section that applies only to the privacy policy of
                children under the age of 13.
              </p>
              <p>
                This page and its contained kids privacy policy was originally
                created on January 3, 2017.
              </p>
            </div>
          </div>
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
                notifications&rdquo; and click &ldquo;Update&rdquo;
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
                {" "}
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
