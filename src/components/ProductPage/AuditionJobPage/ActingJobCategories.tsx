import { PrimaryBtn } from "@/styles/Btn.styled";

const categories = [
  {
    id: 1,
    label: "Any",
  },
  {
    id: 2,
    label: "Acrobatics/Stunts",
  },
  {
    id: 3,
    label: "Comedy/Clown",
  },
  {
    id: 4,
    label: "Commercials - Non-SAG",
  },
  {
    id: 5,
    label: "Commercials - SAG-AFTRA",
  },
  {
    id: 6,
    label: "Episodic TV - AFTRA",
  },
  {
    id: 7,
    label: "Episodic TV - Non-Union",
  },
  {
    id: 8,
    label: "Episodic TV - Pilots",
  },
  {
    id: 9,
    label: "Episodic TV - SAG-AFTRA",
  },
  {
    id: 10,
    label: "Extras",
  },
  {
    id: 11,
    label: "Feature Film - Documentaries",
  },
  {
    id: 12,
    label: "Feature Film - Low Budget/Independent",
  },
  {
    id: 13,
    label: "Feature Film - Non-SAG",
  },
  {
    id: 14,
    label: "Feature Film - SAG-AFTRA",
  },
  {
    id: 15,
    label: "Feature Film - Short Film",
  },
  {
    id: 16,
    label: "Feature Film - Student Films",
  },
  {
    id: 17,
    label: "Industrial/Traning Films",
  },
  {
    id: 18,
    label: "Infomercials",
  },
  {
    id: 19,
    label: "Internet",
  },
  {
    id: 20,
    label: "Music Videos",
  },
  {
    id: 21,
    label: "Reality TV",
  },
  {
    id: 22,
    label: "Theatre - Equity (Union)",
  },
  {
    id: 23,
    label: "Theatre - Equity (Union)",
  },
  {
    id: 24,
    label: "Variety Acts",
  },
  {
    id: 25,
    label: "Voice-Over",
  },
];

export default function ActingJobCategories() {
  return (
    <div className="m-5 p-5 rounded-lg shadow-md text-xs">
      <h2 className="font-bold text-base">
        Select an Acting Audition/Job Category
      </h2>

      <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3">
        {categories.map((category: any) => (
          <div key={category.id}>
            <label>
              <input type="checkbox" className="mr-2" />
              {category.label}
            </label>
          </div>
        ))}
      </div>

      <form className="flex flex-col gap-5 border-t-2 pt-3 mt-3">
        <div>
          <label className="font-bold block mb-1">Search Term</label>
          <input
            type="text"
            placeholder="Enter Search Term"
            className="border-2 rounded-md p-2"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-2 ">
          <div>
            <label className="font-bold block mb-1">Choose a City</label>
            <select className="border-2 rounded-md p-2">
              <option>Select One</option>
              <option>Albany, NY</option>
              <option>Columbia, SC</option>
            </select>
            <span className="mx-2">or</span>
          </div>
          <div>
            <label className="font-bold block mb-1">Zip</label>
            <input
              type="text"
              placeholder="Enter Zip"
              className="border-2 rounded-md p-2"
            />
          </div>
        </div>

        <PrimaryBtn className="btn md:self-start" type="submit">
          Find&nbsp;Auditions/Jobs
        </PrimaryBtn>
      </form>
    </div>
  );
}
