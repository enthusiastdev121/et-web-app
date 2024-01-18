import { PrimaryBtn } from "@/styles/Btn.styled";

const categories = [
  {
    id: 1,
    label: "Any",
  },
  {
    id: 2,
    label: "Commercials - SAG-AFTRA",
  },
  {
    id: 3,
    label: "Commercials - Non-SAG",
  },
  {
    id: 4,
    label: "Hair/Cosmetics",
  },
  {
    id: 5,
    label: "Industrial/Traning Films",
  },
  {
    id: 6,
    label: "Internet",
  },
  {
    id: 7,
    label: "Music Videos",
  },
  {
    id: 8,
    label: "Print",
  },
  {
    id: 9,
    label: "Reality TV",
  },
  {
    id: 10,
    label: "Runway",
  },
  {
    id: 11,
    label: "Trade Shows/Live Events/Promo Model",
  },
];

export default function ModelingJobCategories() {
  return (
    <div className="m-5 p-5 rounded-lg shadow-md text-xs">
      <h2 className="font-bold text-base">
        Select a Modeling Audition/Job Category
      </h2>

      <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2">
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
          <label className="font-bold mb-1 block">Search Term</label>
          <input
            type="text"
            placeholder="Enter Search Term"
            className="border-2 rounded-md p-2"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-2 ">
          <div>
            <label className="font-bold mb-1 block">Choose a City</label>
            <select className="border-2 rounded-md p-2">
              <option>Select One</option>
              <option>Albany, NY</option>
              <option>Columbia, SC</option>
            </select>
            <span className="mx-2">or</span>
          </div>
          <div>
            <label className="font-bold mb-1 block">Zip</label>
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
