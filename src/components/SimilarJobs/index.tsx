import { PrimaryBtnOutline, PrimaryBtnSingle } from "@/styles/Btn.styled";
import { AiFillStar } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { Container } from "./Styles";

const dummyData = [
  {
    id: 1,
    title: `Godspell Auditions in Kentucky`,
    location: "Washington, DC",
    availableRoles: 8,
    matchedRoles: 2,
  },
  {
    id: 2,
    title: `2022 Season Auditions`,
    location: "Cleveland, OH",
    availableRoles: 2,
    matchedRoles: 0,
  },
  {
    id: 3,
    title: `The Trip to Bountiful`,
    location: "Cleveland, OH",
    availableRoles: 12,
    matchedRoles: 7,
  },
  {
    id: 4,
    title: `Legally Blonde: The Musical`,
    location: "Cleveland, OH",
    availableRoles: 6,
    matchedRoles: 0,
  },
];

export default function SimilarJobs() {
  return (
    <Container className="p-5 rounded">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-semibold">Similar Jobs</h3>
        <PrimaryBtnSingle>view&nbsp;all</PrimaryBtnSingle>
      </div>

      <ul className="no-scroll">
        {dummyData.map((data: any) => (
          <li key={data.id}>
            <h4>{data.title}</h4>
            <div className="flex items-center justify-between pt-3 secondary-info">
              <div className="flex items-center gap-2">
                <HiLocationMarker /> {data.location}
              </div>

              <div className="flex items-center gap-2 font-semibold">
                {data.availableRoles} Available Roles{" "}
                {data.matchedRoles > 0 && (
                  <span className="flex items-center matched-star">
                    <AiFillStar style={{ marginRight: "1px" }} />{" "}
                    {data.matchedRoles}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <PrimaryBtnOutline className="btn w-full text-base mt-5">
        View&nbsp;all
      </PrimaryBtnOutline>
    </Container>
  );
}
