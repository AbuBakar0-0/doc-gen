"use client";

import InputWithLabel from "@/components/ui/InputWithLabel";
import { useFormData } from "@/context/FormDataContext";
import { Divider } from '@/components/ui/Divider';

export default function SBIRT() {
  const { formData, setFormData, handleChange, handleQuillChange } =
    useFormData();
  return (
    <div className="w-full flex flex-wrap justify-start items-start gap-2">
      <Divider title={"Screening, Breif Intervention, and Referral to Treatment"}/>
      <InputWithLabel
        title="Single Item Drug Screening"
        id="single_item_drug_screening"
        width="w-[24.5%]"
        value={formData.single_item_drug_screening}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Single Item Drug Screening Score"
        id="single_item_drug_screening_score"
        width="w-[24.5%]"
        value={formData.single_item_drug_screening_score}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Interpretation"
        id="interpretation"
        width="w-[24.5%]"
        value={formData.interpretation}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Screening Results"
        id="screening_results"
        width="w-[24.5%]"
        value={formData.screening_results}
        onChange={handleChange}
      />
    </div>
  );
}
