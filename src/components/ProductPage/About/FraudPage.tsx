import Image from "next/image";
import Link from "next/link";
import { FeaturedTestimonialCard, Paper, Root } from "./styles";

export default function FraudPage() {
  return (
    <Root className="padding-small">
      <div style={{ margin: "0 auto", maxWidth: "1100px" }}>
        <h1
          style={{ color: "#191919", fontSize: "35px", maxWidth: "1100px" }}
          className="mb-5 mx-auto px-5 md:px-0"
        >
          Is Explore Talent a Fraud?
        </h1>
        <Paper>
          <p>
            A lot of Explore Talent&apos;s rivals&rdquo; just can&apos;t stand
            our success and the quickly growing community of members we&apos;ve
            got. These confidence men would like nothing but to exploit
            unknowing victims as well as posting daft lies in numerous and
            random places online. The actuality is that numbers don&apos;t lie
            and with over 4,900,000 members, we are the largest talent resource
            site. Explore Talent works hard to make and run customer
            satisfaction, posting over 50 thousand auditions and roles daily.
            Explore Talent isn&apos;t a Fraud We are always working to reveal
            the myths and lies about Explore Talent Fraud . Because no other
            company comes close to the worth and service Explore Talent offers
            to their members, we are a big threat to these supposed
            &ldquo;competitors&ldquo;. They can not stand that Explore Talent
            offers such an enormous volume of worth at costs reasonable on any
            budget, making it tough for even the sleaziest fraudsters to deal
            with us. Without regard for these confidence men &apos; attempts to
            tear down Explore talent we keep growing. Explore Talent Fraud and
            Fraud Compensation Programme Explore Talent has an impossible to
            resist need to reach out to those victimized by offering our own
            Fraud Compensation Programme . With this Programme , you can receive
            Explore Talent&apos;s monthly service free for each $29.95 you were
            tricked. We here at Explore Talent need to resurrect the hope, faith
            and enthusiasm which may have decreased from these sting sites.
          </p>

          <p>
            Qualifying for the Programme is a simple snap. All you need to do is
            supply Explore Talent with your MasterCard statement showing the
            amount in which you were cheated.
          </p>

          <p>
            Remember that no Credit card or billing information is needed from
            you to state a claim your free service.
          </p>

          <p>
            If you used to become a victim of one of those swindle sites, it is
            reasonable that you contact the Better Business Bureau and file a
            formal complaint. Explore Talent is taking a powerful approach in
            exposing these industry swindle sites. Being that Explore Talent is
            simply the largest online talent resource world wide, you really
            have zip to lose. And, we are patently not an explore talent crime,
            acting crime, modeling crime or anything even close! We offer 50
            thousand auditions and job lists on a common-or-garden basis and
            thousands of our members have secured auditions and landed roles due
            to our phenomenal services. The numbers speak out for themselves, so
            give Explore Talent a call and get your career back on course today!
            So now, ask is explore talent crime? We at Explore Talent are
            attempting to be the best talent resource online as practical giving
            the highest sort of legitimacy to our site and, naturally, to our
            buyers.
          </p>

          <p>
            That having been asserted, our Talent Fraud Compensation Programme ,
            which provides our young talent members with a comfort and
            guarantee.
          </p>

          <p>
            For each twenty-nine dollars and ninety five cents that you are
            mislead, you can receive Explore Talent&apos;s first tier service
            for free! To be accepted for the Fraud Compensation Programme ,
            which in its turn gives you the free monthly service ; simply supply
            us with a card statement showing the amount you were conned.
          </p>

          <p>
            To put the member&apos;s mind at ease more so no billing information
            or MasterCard will be wanted to lodge a claim your free service.
            Explore Talent&apos;s motto is to be highly pushy in the area of
            exposing the entertaining industry acting crime, talent crime and
            modeling crime artists who have time after time defrauded new finds
            by giving them fake guarantees and hollow dreams, promising that
            they can get them through the &ldquo;entertainment door&rdquo; with
            a click of the mouse and the price of a set charge.
          </p>

          <p>
            Explore Talent is the premiere talent resource site, who&apos;s sole
            resolution is to get young talent through the door of the
            entertainment business in the highest direct and honest way, helping
            fresh faces new to Hollywood navigate the shark-invested waters of
            the industry. And nobody comes close to the worth that Explore
            Talent provides its over 11.7 million members by listing over 10,000
            auditions and job openings daily, which is twenty times the amount
            of any other site on the net, providing all our members with the
            best opportunity to explore the entertainment business.
          </p>
        </Paper>

        <h2 className="text-xl font-bold mb-5 text-center mt-5 md:mt-0">
          Featured Testimonials
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeaturedTestimonialCard>
            <div className="img-container">
              <Image
                src="/images/snoop.png"
                alt="fettured talent"
                height={180}
                width={120}
              />
            </div>

            <div className="text-container">
              <h3>Landed role in a film within 2 weeks!</h3>
              <p>
                I would like to thank Explore Talent for signing up my daughter
                Terah.
              </p>
              <Link href="/testimonials">
                <a className="txt-link">Read More..</a>
              </Link>
            </div>
          </FeaturedTestimonialCard>

          <FeaturedTestimonialCard>
            <div className="img-container">
              <Image
                src="/images/snoop.png"
                alt="fettured talent"
                height={180}
                width={120}
              />
            </div>

            <div className="text-container">
              <h3>Landed role in a film within 2 weeks!</h3>
              <p>
                Just wanted to say &ldquo;Thank You&rdquo; for getting AJ his
                last job. He just did a commercial for Bounty Paper Towels.
              </p>
              <Link href="/testimonials">
                <a className="txt-link">Read More..</a>
              </Link>
            </div>
          </FeaturedTestimonialCard>

          <FeaturedTestimonialCard>
            <div className="img-container">
              <Image
                src="/images/snoop.png"
                alt="fettured talent"
                height={180}
                width={120}
              />
            </div>

            <div className="text-container">
              <h3>Landed role in a film within 2 weeks!</h3>
              <p>
                I would like to thank Explore Talent for signing up my daughter
                Terah.
              </p>
              <Link href="/testimonials">
                <a className="txt-link">Read More..</a>
              </Link>
            </div>
          </FeaturedTestimonialCard>
        </div>
      </div>
    </Root>
  );
}
