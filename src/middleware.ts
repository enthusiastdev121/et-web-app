import { NextResponse, NextRequest } from "next/server";

const CD_INVITE =
  "http://www.exploretalent.com/cd-invitation?utm_source=CD_Inv_A&utm_medium=email&utm_campaign=CD_Inv&utm_content=free&utm_term=10221222";
// - /auditions/cd-invite/12121

export function middleware(request: NextRequest) {
  // console.log("RES-----PAGE", request.nextUrl.pathname);

  if (request.nextUrl.pathname.match("/cd-invitation*")) {
    return NextResponse.redirect(
      new URL("/auditions/applications", request.url)
    );
  }
  if (request.nextUrl.pathname.match("/requests/index/change-password")) {
    return NextResponse.redirect(new URL("/reset-password", request.url));
  }
  if (request.nextUrl.pathname.match("/update-missing-details")) {
    return NextResponse.redirect(new URL("/profile/edit/contact", request.url));
  }

  //NEW

  // if (request.nextUrl.pathname.match("/movie_auditions")) {
  //   return NextResponse.redirect(new URL("/join/talentb", request.url));
  // }
  // if (request.nextUrl.pathname.match("/casting_auditions")) {
  //   return NextResponse.redirect(new URL("/join/talentb", request.url));
  // }
  // if (request.nextUrl.pathname.match("/agency_vegas")) {
  //   return NextResponse.redirect(new URL("/join/talentb", request.url));
  // }
  // if (request.nextUrl.pathname.match("/auditionspaidjobs")) {
  //   return NextResponse.redirect(new URL("/join/talentb", request.url));
  // }
  // if (request.nextUrl.pathname.match("/gameshowauditions")) {
  //   return NextResponse.redirect(new URL("/join/talentb", request.url));
  // }
}
