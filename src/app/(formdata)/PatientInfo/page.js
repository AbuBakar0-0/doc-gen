"use client";

import InputWithLabel from "@/components/ui/InputWithLabel";
import RadioButtons from "@/components/ui/RadioButtons";
import { useFormData } from "@/context/FormDataContext";
import { Divider } from '@/components/ui/Divider';

export default function PatientInfo() {
  const { formData, setFormData, handleChange, handleQuillChange } =
    useFormData();
  return (
    <div className="w-full flex flex-wrap justify-start gap-x-2">
      <Divider title="Patient Information" />
      <InputWithLabel
        title="Date"
        id="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        width="w-[24.5%]"
      />
      <InputWithLabel
        title="First Name"
        id="first_name"
        width="w-[24.5%]"
        value={formData.first_name}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Middle Initial"
        id="middle_initial"
        value={formData.middle_initial}
        onChange={handleChange}
        width="w-[24.5%]"
      />
      <InputWithLabel
        title="Last Name"
        id="last_name"
        width="w-[24.5%]"
        value={formData.last_name}
        onChange={handleChange}
      />
      <InputWithLabel
        title="DOB"
        id="dob"
        type="date"
        value={formData.dob}
        onChange={handleChange}
        width="w-[24.5%]"
      />
      <RadioButtons
        title="Gender"
        id="gender"
        options={["Male", "Female"]}
        value={formData.gender} // Pass the current value
        handleChange={handleChange} // Pass the change handler
        width="w-[24.5%]"
      />
      <InputWithLabel
        title="Address"
        id="address"
        value={formData.address}
        onChange={handleChange}
        width="w-[24.5%]"
      />
      <InputWithLabel
        title="City"
        id="city"
        value={formData.city}
        onChange={handleChange}
        width="w-[24.5%]"
      />
      <InputWithLabel
        title="State"
        id="state"
        value={formData.state}
        onChange={handleChange}
        width="w-[24.5%]"
      />
      <InputWithLabel
        title="Postal Code"
        id="postal_code"
        value={formData.postal_code}
        onChange={handleChange}
        width="w-[24.5%]"
      />
      <InputWithLabel
        title="Patient Phone Number"
        id="patient_phone_number"
        value={formData.patient_phone_number}
        onChange={handleChange}
        width="w-[24.5%]"
      />
      <InputWithLabel
        title="Primary Insurance"
        id="primary_insurance"
        value={formData.primary_insurance}
        onChange={handleChange}
        width="w-[24.5%]"
      />
      <InputWithLabel
        title="Policy Number"
        id="ppn1"
        value={formData.ppn1}
        onChange={handleChange}
        width="w-[24.5%]"
      />
      <InputWithLabel
        title="Private Insurance"
        id="private_insurance"
        value={formData.private_insurance}
        onChange={handleChange}
        width="w-[24.5%]"
      />
      <InputWithLabel
        title="Policy Number"
        id="ppn2"
        value={formData.ppn2}
        onChange={handleChange}
        width="w-[24.5%]"
      />
      <InputWithLabel
        title="Height"
        id="height"
        value={formData.height}
        onChange={handleChange}
        width="w-[24.5%]"
      />
      <InputWithLabel
        title="Weight"
        id="weight"
        value={formData.weight}
        onChange={handleChange}
        width="w-[24.5%]"
      />
    </div>
  );
}
