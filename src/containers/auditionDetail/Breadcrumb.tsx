import Link from "next/link";
import { BreadcrumbContainer } from "./AuditionDetail.styled";

export default function Breadcrumb({ title }: any) {
  return (
    <BreadcrumbContainer className="txt-base">
      <div className="flex font-semibold gap-2 whitespace-nowrap">
        <div>
          <Link href="/auditions/all-jobs">
            <a className="link">Audition & Jobs</a>
          </Link>
        </div>
        /
        <div>
          <Link href="/auditions/all-jobs">
            <a className="link">Job listing</a>
          </Link>
        </div>
        /
        <div style={{ textOverflow: 'ellipsis', overflow: 'hidden' }} >{title}</div>
      </div>
    </BreadcrumbContainer>
  );
}
