"use client";

import { Divider } from "@/components/ui/Divider";
import InputWithLabel from "@/components/ui/InputWithLabel";
import TextEditor from "@/components/ui/TextEditor";
import { useFormData } from "@/context/FormDataContext";

export default function PhysiciansInfo() {
  const { formData, setFormData, handleChange, handleQuillChange } =
    useFormData();
  return (
    <div className="w-full flex flex-wrap justify-between gap-x-2">
      <Divider title="Physician Information" />
      <InputWithLabel
        title="Physician Name"
        id="physician_name"
        width="w-[24.5%]"
        value={formData.physician_name}
        onChange={handleChange}
      />
      <InputWithLabel
        title="NPI"
        id="npi"
        width="w-[24.5%]"
        value={formData.npi}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Address"
        id="physician_address"
        width="w-[24.5%]"
        value={formData.physician_address}
        onChange={handleChange}
      />
      <InputWithLabel
        title="City"
        id="physician_city"
        width="w-[24.5%]"
        value={formData.physician_city}
        onChange={handleChange}
      />
      <InputWithLabel
        title="State"
        id="physician_state"
        width="w-[24.5%]"
        value={formData.physician_state}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Postal Code"
        id="physician_postal_code"
        width="w-[24.5%]"
        value={formData.physician_postal_code}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Phone Number"
        id="physician_phone_number"
        width="w-[24.5%]"
        value={formData.physician_phone_number}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Fax Number"
        id="physician_fax_number"
        width="w-[24.5%]"
        value={formData.physician_fax_number}
        onChange={handleChange}
      />
      <TextEditor
        title="Diagnosis"
        id="diagnosis"
        width="w-[50%]"
        value={formData.diagnosis} // Controlled value
        onChange={handleChange} // Pass to handleQuillChange
      />
    </div>
  );
}
