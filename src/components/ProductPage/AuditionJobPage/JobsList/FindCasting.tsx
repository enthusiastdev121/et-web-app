import JobCard from "components/jobs/JobCard";
import { PrimaryBtnOutline } from "../../../../styles/Btn.styled";

export default function FindCasting() {
  return (
    <section className="padding">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-2">
            Find Open Casting Calls & Auditions Near You
          </h2>
          <p className="text-xl">You have 1459 matched auditions</p>
        </div>
        <PrimaryBtnOutline className="btn py-5">
          Casting Preferences
        </PrimaryBtnOutline>
        <select
          name="filter"
          id="filter"
          className="border-2 border-gray-200 p-3 rounded-lg lg:col-span-3"
        >
          <option disabled>Search Filter</option>
          <option value="filter1">filter 1</option>
          <option value="filter2">filter 2</option>
          <option value="filter3">filter 3</option>
        </select>

        <div>
          <JobCard
            image="/images/audition.png"
            heading="Actor/Voice Over Actor with Strong Hindi Accent Needed for an Online Video"
            description="We are looking for an actor/voice over actor either located in London or anywhere in the world for a video production aimed for online streaming. The length of the finished production/video will be 12 minutes. You will be either invited to…"
            link="/"
            age="Anyone, aged 18 and over"
            location="Job can be done remotely worldwide"
            matchingRoles="Matching Roles : Role Asian Adult Male / Role American"
            gender="Adult Male"
          />
        </div>
      </div>
    </section>
  );
}
