"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useFormData } from "@/context/FormDataContext";
import { FaUserDoctor } from "react-icons/fa6";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const currentPath = usePathname();

  const { handleSubmit } = useFormData();

  const urlList = [
    { name: "Header Footer", url: "/" },
    { name: "Patient Info", url: "/PatientInfo" },
    { name: "Physicians Info", url: "/PhysiciansInfo" },
    { name: "Office Info", url: "/OfficeInfo" },
    { name: "Vitals", url: "/Vitals" },
    { name: "Exam Medications", url: "/ExamMedications" },
    { name: "Assessment Plan", url: "/AssessmentPlan" },
    { name: "Problems List", url: "/ProblemsList" },
    { name: "Family History", url: "/FamilyHistory" },
    { name: "Social History", url: "/SocialHistory" },
    { name: "Social Determinants of Health", url: "/SocialDeterminants" },
    { name: "Current Outpatient Medications", url: "/CurrentOutpatient" },
    { name: "Allergies", url: "/Allergies" },
    { name: "ADLs/IADLs", url: "/ADLs" },
    { name: "Previous Hospitalization", url: "/PreviousHospitalization" },
    { name: "Cognitive Screening", url: "/CognitiveScreening" },
    { name: "SBIRT", url: "/SBIRT" },
    { name: "Physical Exam", url: "/PhysicalExam" },
    { name: "Medicare Visit", url: "/MedicareVisit" },
    { name: "Health Maintenence", url: "/HealthMaintenence" },
    { name: "Orders Placed", url: "/OrdersPlaced" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white h-screen ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out lg:translate-x-0 overflow-y-auto`}
      >
        <div className="h-16 sticky top-0 bg-white z-50 flex justify-center items-center shadow-md">
          <Image
            src="/assets/logo.svg"
            width={180}
            height={10}
            alt="logo"
            className="h-16"
          />
        </div>
        <nav className="shadow-xl p-1 bg-secondaryBlue">
          <ul>
            {urlList.map((item, index) => (
              <Link key={index} href={item.url} className="text-sm">
                <div
                  className={`flex flex-row justify-start items-center transition duration-300 rounded-lg my-[0.15rem] ${
                    currentPath === item.url
                      ? "bg-primaryGreen px-4"
                      : "hover:bg-primaryGreen"
                  }`}
                >
                  {currentPath === item.url ? (
                    <FaUserDoctor className="text-white size-4" />
                  ) : null}
                  <li className={`block px-4 py-2 rounded-lg text-white`}>
                    {item.name}
                  </li>
                </div>
                {index!=urlList.length-1?<div className="w-11/12 h-[0.5px] bg-white" />:null}
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-64">
        {/* Header */}
        <header className="h-16 flex items-center justify-between p-4 bg-gradient-to-r from-secondaryBlue to-primaryGreen shadow-md">
          <button
            className={`text-white mr-10 lg:hidden transform transition-transform duration-300 ${
              isSidebarOpen ? "rotate-90" : "rotate-0"
            }`}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="w-full flex flex-row justify-between items-center">
            <h1 className="text-2xl font-bold text-white">
              Document Generator
            </h1>
            <Button
              type="submit"
              onClick={handleSubmit}
              className="bg-secondaryBlue mx-2 hover:bg-white hover:text-secondaryBlue"
            >
              Download Doc
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main
          className={`p-6 transition-all duration-500 ${
            isSidebarOpen ? "opacity-50" : "opacity-100"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
