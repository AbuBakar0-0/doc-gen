import { NextResponse } from "next/server";

// List of protected URLs
const urlList = [
  { url: "/HeaderFooter" },
  { url: "/PatientInfo" },
  { url: "/PhysiciansInfo" },
  { url: "/OfficeInfo" },
  { url: "/Vitals" },
  { url: "/ExamMedications" },
  { url: "/AssessmentPlan" },
  { url: "/ProblemsList" },
  { url: "/FamilyHistory" },
  { url: "/SocialHistory" },
  { url: "/SocialDeterminants" },
  { url: "/CurrentOutpatient" },
  { url: "/Allergies" },
  { url: "/ADLs" },
  { url: "/PreviousHospitalization" },
  { url: "/CognitiveScreening" },
  { url: "/SBIRT" },
  { url: "/PhysicalExam" },
  { url: "/MedicareVisit" },
  { url: "/HealthMaintenence" },
  { url: "/OrdersPlaced" },
];

// Function to check if user is signed in
function isUserSignedIn(req) {
  const cookie = req.cookies.get("auth_token"); // Assuming 'auth_token' is your session token or auth cookie
  return !!cookie;
}

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const userSignedIn = isUserSignedIn(req);

  const isProtectedPage = urlList.some((item) => item.url === pathname);

  if (isProtectedPage && !userSignedIn) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const publicPages = ["/Signin", "/Signup", "/"];

  if (publicPages.includes(pathname) && userSignedIn) {
    return NextResponse.redirect(new URL("/HeaderFooter", req.url));
  }

  // Allow the request to continue for other pages
  return NextResponse.next();
}

// Specify the paths to apply the middleware to (all pages that need to be protected or redirected from)
// export const config = {
//   matcher: [
//     "/",
//     "/signin",
//     "/signup",
//     "/dashboard",
//     "/HeaderFooter",
//     "/PatientInfo",
//     "/PhysiciansInfo",
//     "/OfficeInfo",
//     "/Vitals",
//     "/ExamMedications",
//     "/AssessmentPlan",
//     "/ProblemsList",
//     "/FamilyHistory",
//     "/SocialHistory",
//     "/SocialDeterminants",
//     "/CurrentOutpatient",
//     "/Allergies",
//     "/ADLs",
//     "/PreviousHospitalization",
//     "/CognitiveScreening",
//     "/SBIRT",
//     "/PhysicalExam",
//     "/MedicareVisit",
//     "/HealthMaintenence",
//     "/OrdersPlaced",
//   ], // Apply middleware to the necessary routes
// };
