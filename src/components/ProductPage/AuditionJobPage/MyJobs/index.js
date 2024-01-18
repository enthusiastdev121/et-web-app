import { H3 } from "@/styles/Typography.styled";
import Link from "next/link";

import { List } from "./MyJobs.styled";

export default function MyJobs() {
  return (
    <div className="p-10">
      <H3 className="font-bold">My Auditions/Jobs</H3>

      <List className="mt-5 text-sm">
        <li>
          <Link href="/audition/matching-jobs">
            <a className="mb-2">My Match Audictions/Jobs</a>
          </Link>
        </li>
        <li>
          <Link href="/audition/matching-jobs">
            <a className="active my-2">My Match Audictions/Jobs</a>
          </Link>
        </li>
        <li>
          <Link href="/audition/matching-jobs">
            <a className="my-2">Audictions/Jobs Preferences</a>
          </Link>
        </li>
        <li>
          <Link href="/audition/matching-jobs">
            <a className="my-2">Audictions/Jobs Preferences</a>
          </Link>
        </li>
      </List>
    </div>
  );
}
