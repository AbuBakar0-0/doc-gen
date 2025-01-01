"use client";

import Image from "next/image";
import PatientInfo from "@/components/PatientInfo";
import { UseFormData } from "./useFormData";
import OfficeInfo from "@/components/OfficeInfo";
import { Vitals } from "@/components/Vitals";
import { ExamMedications } from "@/components/ExamMedications";
import { AssessmentPlan } from "@/components/AssessmentPlan";
import { ProblemsList } from "@/components/ProblemsList";
import { FamilyHistory } from "@/components/FamilyHistory";
import { SocialHistory } from "@/components/SocialHistory";
import { SocialDeterminants } from "@/components/SocialDeterminants";
import { CurrentOutpatient } from "@/components/CurrentOutpatient";
import { Allergies } from "@/components/Allergies";
import { PreviousHospitalization } from "@/components/PreviousHospitalization";
import { ADLs } from "@/components/ADLs";
import { CognitiveScreening } from "@/components/CognitiveScreening";
import { SBIRT } from "@/components/SBIRT";
import { PhysicalExam } from "@/components/PhysicalExam";
import { MedicareVisit } from "@/components/MedicareVisit";
import { HealthMaintenence } from "@/components/HealthMaintenence";
import { OrdersPlaced } from "@/components/OrdersPlaced";
import { Divider } from "@/components/ui/Divider";
import { PhysiciansInfo } from "@/components/PhysiciansInfo";
import { Button } from "@/components/ui/Button";
import InputWithLabel from "@/components/ui/InputWithLabel";

export default function Formdata() {
  const { formData, setFormData, handleChange, handleQuillChange } =
    UseFormData();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Ensure formData is populated
      if (!formData || Object.keys(formData).length === 0) {
        console.error("Form data is missing.");
        return;
      }

      // List of date fields to format
      const dateFields = [
        "date",
        "dob",
        "date_time",
        "office_visit",
        "social_date",
        "date_after_one_year",
        "medication_list_start_date",
        "medication_list_end_date",
        "past_medical_date",
        "past_surgical_date",
        "health_maintenence_due_date",
        "previous_testing",
        "immunization_due_date",
        "immunization_due_due_date",
        "start_date_2",
        "end_date_2",
      ];

      // Format all date fields in formData
      const formattedFormData = { ...formData };
      dateFields.forEach((field) => {
        if (formattedFormData[field]) {
          const dateObj = new Date(formattedFormData[field]);
          if (!isNaN(dateObj)) {
            formattedFormData[field] = dateObj.toLocaleDateString("en-US");
          }
        }
      });

      // Format nested arrays with date fields
      const formatNestedDates = (array, dateField) => {
        return array.map((item) => {
          if (item[dateField]) {
            const dateObj = new Date(item[dateField]);
            if (!isNaN(dateObj)) {
              item[dateField] = dateObj.toLocaleDateString("en-US");
            }
          }
          return item;
        });
      };

      // Handle specific nested fields with dates
      if (formattedFormData.medicalDiagnosis) {
        formattedFormData.medicalDiagnosis = formatNestedDates(
          formattedFormData.medicalDiagnosis,
          "past_medical_date"
        );
      }

      if (formattedFormData.medicationLists) {
        formattedFormData.medicationLists = formatNestedDates(
          formattedFormData.medicationLists,
          "medication_list_start_date"
        );
      }

      if (formattedFormData.medicationLists) {
        formattedFormData.medicationLists = formatNestedDates(
          formattedFormData.medicationLists,
          "medication_list_end_date"
        );
      }


      if (formattedFormData.surgicalProcedures) {
        formattedFormData.surgicalProcedures = formatNestedDates(
          formattedFormData.surgicalProcedures,
          "past_surgical_date"
        );
      }

      if (formattedFormData.familyHistory) {
        formattedFormData.familyHistory = formatNestedDates(
          formattedFormData.familyHistory,
          "age_of_onset"
        );
      }

      if (formattedFormData.healthMaintenances) {
        formattedFormData.healthMaintenances = formatNestedDates(
          formattedFormData.healthMaintenances,
          "health_maintenence_due_date"
        );
      }

      if (formattedFormData.healthMaintenanceFields) {
        formattedFormData.healthMaintenanceFields = formatNestedDates(
          formattedFormData.healthMaintenanceFields,
          "health_maintenence_due_date"
        );
      }

      if (formattedFormData.immunizationFields2) {
        formattedFormData.immunizationFields2 = formatNestedDates(
          formattedFormData.immunizationFields2,
          "immunization_due_due_date"
        );
      }

      // Dynamically import libraries
      const { default: PizZip } = await import("pizzip");
      const { default: Docxtemplater } = await import("docxtemplater");
      const { default: JSZipUtils } = await import("jszip-utils");

      // Helper function to load the docx template
      const loadFile = (url) => {
        return new Promise((resolve, reject) => {
          JSZipUtils.getBinaryContent(url, (error, content) => {
            if (error) {
              reject(new Error(`Error loading file: ${error.message}`));
            } else {
              resolve(content);
            }
          });
        });
      };

      // Load the template file
      const content = await loadFile("/assets/temp.docx");

      // Initialize PizZip and Docxtemplater
      const zip = new PizZip(content);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });

      // Add dynamic data to the template
      doc.setData({
        ...formattedFormData,
      });

      // Render the document
      doc.render();

      // Generate the document as a Blob
      const out = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });

      // Trigger download in the browser
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(out);
      downloadLink.download = "request_form.docx";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error("Error during document creation:", error);
    }
  };

  const printData = (e) => {
    e.preventDefault();
    Object.entries(formData).forEach(([key, value]) => {
      console.log(key, value);
    });
  };

  return (
    <>
      <div className="w-full h-20 shadow-lg flex flex-row justify-between items-center px-20 bg-gradient-to-r from-[#ffffff] to-[#0072b9]">
        <Image src={"assets/logo.svg"} width={200} height={100} alt="logo" />
        <h1
          className={`font-semibold text-white text-center text-lg uppercase`}
        >
          Document Generator
        </h1>
      </div>
      <div className="w-full flex flex-wrap justify-start items-start gap-4 py-10 px-20">
        <InputWithLabel
          title="First Page Date"
          width="w-[32.5%]"
          id="first_page_date"
          value={formData.first_page_date}
          onChange={handleChange}
        />
        <InputWithLabel
          title="Header Date Time"
          width="w-[32.5%]"
          id="header_date_time"
          value={formData.header_date_time}
          onChange={handleChange}
        />
        <InputWithLabel
          title="Header Fax"
          id="header_fax"
          value={formData.header_fax}
          onChange={handleChange}
          width="w-[32.5%]"
        />

        <div className="w-full flex flex-row justify-start items-start gap-2">
          <PatientInfo
            formData={formData}
            handleChange={handleChange}
            handleQuillChange={handleQuillChange}
          />
          <PhysiciansInfo
            formData={formData}
            handleChange={handleChange}
            handleQuillChange={handleQuillChange}
          />
        </div>
        <Divider title={"Office Info"} />
        <OfficeInfo
          formData={formData}
          handleChange={handleChange}
          handleQuillChange={handleQuillChange}
        />
        <Divider title={"Vitals"} />
        <Vitals
          formData={formData}
          handleChange={handleChange}
          handleQuillChange={handleQuillChange}
        />
        <Divider title={"Exam + Medications"} />
        <ExamMedications
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleQuillChange={handleQuillChange}
        />
        <Divider title={"Assessment Plan"} />
        <AssessmentPlan
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleQuillChange={handleQuillChange}
        />
        <Divider title={"Problems List"} />
        <ProblemsList
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleQuillChange={handleQuillChange}
        />
        <Divider title={"Family History"} />
        <FamilyHistory
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleQuillChange={handleQuillChange}
        />
        <Divider title={"Social History"} />
        <SocialHistory
          formData={formData}
          handleChange={handleChange}
          handleQuillChange={handleQuillChange}
        />
        <Divider title={"Social Determinants of Health"} />
        <SocialDeterminants
          formData={formData}
          handleChange={handleChange}
          handleQuillChange={handleQuillChange}
        />
        <Divider title={"Current Outpatient Medications"} />
        <CurrentOutpatient
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleQuillChange={handleQuillChange}
        />
        <Divider title={"Allergies"} />
        <Allergies
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleQuillChange={handleQuillChange}
        />
        <Divider title={"ADLs/IADLs"} />
        <ADLs
          formData={formData}
          handleChange={handleChange}
          handleQuillChange={handleQuillChange}
        />
        <Divider title={"Previous Hospitalization"} />
        <PreviousHospitalization
          formData={formData}
          handleChange={handleChange}
          handleQuillChange={handleQuillChange}
        />
        <Divider title={"Cognitive Screening"} />
        <CognitiveScreening
          formData={formData}
          handleChange={handleChange}
          handleQuillChange={handleQuillChange}
        />
        <Divider title={"SBIRT"} />
        <SBIRT
          formData={formData}
          handleChange={handleChange}
          handleQuillChange={handleQuillChange}
        />
        <Divider title={"Physical Exam"} />
        <PhysicalExam
          formData={formData}
          handleChange={handleChange}
          handleQuillChange={handleQuillChange}
        />
        <Divider title={"Next Medicare Visit"} />
        <MedicareVisit
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleQuillChange={handleQuillChange}
        />
        <Divider title={"Health Maintenence"} />
        <HealthMaintenence
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleQuillChange={handleQuillChange}
        />
        <Divider title={"Orders Placed"} />
        <OrdersPlaced
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleQuillChange={handleQuillChange}
        />
        <InputWithLabel
          title="Printed By"
          id="printed_by"
          value={formData.printed_by}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" onClick={handleSubmit} className="mx-20 mb-20">
        Download Doc
      </Button>
    </>
  );
}
