"use client";

import { Divider } from "@/components/ui/Divider";
import InputWithLabel from "@/components/ui/InputWithLabel";
import TextEditor from "@/components/ui/TextEditor";
import { useFormData } from "@/context/FormDataContext";

export default function OfficeInfo() {
  const { formData, handleChange } = useFormData();

  return (
    <div className="w-full flex flex-wrap justify-between items-start gap-2">
      <Divider title="Office Information" />
      <InputWithLabel
        title="MRN"
        id="mrn"
        width="w-full"
        value={formData.mrn}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Office Visit"
        id="office_visit"
        width="w-[49%]"
        type="date"
        value={formData.office_visit}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Provider"
        id="provider_name"
        width="w-[49%]"
        value={formData.provider_name}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Provider Address"
        id="provider_address"
        width="w-[49%]"
        value={formData.provider_address}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Primary Diagnosis"
        id="primary_diagnosis"
        width="w-[49%]"
        value={formData.primary_diagnosis}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Reason for Visit"
        id="reason_for_visit"
        width="w-[49%]"
        value={formData.reason_for_visit}
        onChange={handleChange}
      />
      <Divider title={"Progress Notes"} />
      <InputWithLabel
        title="Assessment Plan"
        id="assessment_plan"
        width="w-[49%]"
        value={formData.assessment_plan}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Diagnosis Order"
        id="diagnosis_order"
        width="w-[49%]"
        value={formData.diagnosis_order}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Assessment Title"
        id="assessment_title"
        width="w-[49%]"
        value={formData.assessment_title}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Chief Complaint Title"
        id="chief_complaint_title"
        width="w-[49%]"
        value={formData.chief_complaint_title}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Chief Complaint Detail"
        id="chief_complaint_detail"
        width="w-[49%]"
        value={formData.chief_complaint_detail}
        onChange={handleChange}
      />
      <TextEditor
        title="Chief Complaint Description"
        id="chief_complaint_description"
        width="w-[49%]"
        value={formData.chief_complaint_description}
        onChange={handleChange} // Pass the event to the handler
      />
    </div>
  );
}
