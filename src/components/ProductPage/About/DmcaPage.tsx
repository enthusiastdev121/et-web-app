import Button from "components/Button";
import Image from "next/image";
import React from "react";
import { Banner, Paper, Root } from "./styles";

export default function DmcaPage() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Root>
      {/* <Banner className="hidden md:block"> */}
      <Banner className="">
        <div className="overlay flex items-center justify-center">
          <h1 className="-mt-52 text-white font-bold text-sm md:hidden text-center leading-7 px-8" style={{ fontSize: '20px' }}> Digital Millennium Copyright Act (DMCA) Notice</h1>
          <h1 className="-mt-20 text-center mx-10 hidden md:block">
            Digital Millennium Copyright Act (DMCA) Notice
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
          <h2>DMCA</h2>
          <p>
            ExploreTalent values intellectual property and follows a policy to
            address infringement claims in accordance to Digital Millennium
            Copyright Act (DMCA). DMCA provides copyright owners a process in
            notifying online service providers regarding copyright infringement.
          </p>
          <p>
            If you have concerns on the materials and contents available in our
            sites that violate your copyright, please provide us a valid and
            complete DMCA notice for proper actions. Under the terms of DMCA,
            ExploreTalent will respond to notices in legal circumstances and
            avail the protection under the Act. We will take out the infringed
            material and take plausible steps to contact the user who use your
            property.
          </p>
          <p>
            A DMCA notification should include the following contents: A
            physical or electronic signature of the copyright owner or the
            person authorized to act on behalf of the owner with valid
            identification; A description of the nature and the location of the
            material that allegedly infringed your copyright;
          </p>
          <p>Your address, telephone number, and email address;</p>
          <p>
            A statement that you have a bona fide belief that the use of the
            disputed material is not authorized by the copyright owner, its
            agent, or the law; and, A statement, under penalty of perjury, that
            the information in your notification is accurate as the copyright
            owner or the person authorized to act on behalf of the owner;
          </p>

          <p>
            To file a notice of infringement with us, you must provide a written
            communication that sets forth the items specified below. Please note
            that you will be liable for damages (including costs and
            attorneys&apos; fees) if you materially misrepresent that a product
            or activity is infringing your copyrights. Accordingly, if you are
            not sure whether material available online infringes your copyright,
            we suggest that you first contact an attorney.
          </p>
        </Paper>

        <Paper>
          <header className="flex items-center gap-10 mb-5 md:mb-12">
            <div className="hidden md:block">
              <Image
                src="/images/Saly-26.png"
                height={100}
                width={81.29}
                alt="form"
              />
            </div>

            <div>
              <h2>DMCA</h2>
              <p className="-mt-2">
                Please fill out this form if you have compain about copyright
                work:
              </p>
            </div>
          </header>

          <form onSubmit={handleSubmit} className="grid gap-5 md:gap-8">
            <div>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-8">
              <div>
                <label htmlFor="fname">First name</label>
                <input type="text" id="fname" placeholder="First Name" />
              </div>
              <div>
                <label htmlFor="lname">Last name</label>
                <input type="text" id="lname" placeholder="Last Name" />
              </div>
              <div>
                <label htmlFor="number">Phone Number</label>
                <input type="number" id="number" placeholder="Phone Number" />
              </div>
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <select id="subject">
                <option>DMCA</option>
              </select>
            </div>

            <div>
              <label htmlFor="url">
                Location(URL) of infringing third party content.(Please enter
                one URL per line): <span className="text-red-500">*</span>
              </label>
              <textarea id="url" placeholder="Enter here..."></textarea>
            </div>

            <div>
              <label htmlFor="add-info">
                Additional information about the copyrighted work(optional):{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea id="add-info" placeholder="Enter here..."></textarea>
            </div>

            <div className="justify-self-start">
              <Button primary>Submit</Button>
            </div>
          </form>
        </Paper>
      </div>
    </Root>
  );
}
