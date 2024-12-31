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
        const content = await loadFile("/assets/template.docx");
    
        // Initialize PizZip and Docxtemplater
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
        });
    
        // Add dynamic data to the template
        doc.setData({
          ...formData, // Ensure formData is defined and populated
          date: new Date().toLocaleDateString(),
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
      <div className="w-full h-20 shadow-lg flex flex-row justify-between items-center px-20 bg-gradient-to-r from-[#0073b9]/75 to-[#4ec39e]">
        <Image src={"assets/logo.svg"} width={200} height={100} alt="logo" />
        <h1
          className={`font-semibold text-white text-center text-lg uppercase`}
        >
          Document Generator
        </h1>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-4 py-10 px-20">
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
        <div className="w-full flex flex-wrap justify-start items-start gap-2">
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
            handleChange={handleChange}
            handleQuillChange={handleQuillChange}
          />
          <InputWithLabel
            title="Printed By"
            id="printed_by"
            value={formData.printed_by}
            handleChange={handleChange}
          />
        </div>
      </div>
      <Button type="submit" onClick={handleSubmit} className="mx-20 mb-20">
        Download Doc
      </Button>
    </>
  );
}
