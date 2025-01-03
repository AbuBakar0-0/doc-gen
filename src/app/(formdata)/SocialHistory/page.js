"use client";

import { Divider } from "@/components/ui/Divider";
import InputWithLabel from "@/components/ui/InputWithLabel";
import { useFormData } from "@/context/FormDataContext";

export default function SocialHistory() {
  const { formData, setFormData, handleChange, handleQuillChange } =
    useFormData();
  return (
    <div className="w-full flex flex-wrap justify-start items-start gap-2">
      <Divider title="Social History" />
      <InputWithLabel
        title="Marital Status"
        id="marital_status"
        width="w-[24%]"
        value={formData.marital_status}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Spouse Name"
        id="spouse_name"
        width="w-[24%]"
        value={formData.spouse_name}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Number of Children"
        id="no_of_children"
        width="w-[24%]"
        value={formData.no_of_children}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Years of Education"
        id="years_of_education"
        width="w-[24%]"
        value={formData.years_of_education}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Highest Education"
        id="highest_education"
        width="w-[24%]"
        value={formData.highest_education}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Occupational History"
        id="occupational_history"
        width="w-[24%]"
        value={formData.occupational_history}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Smoking Status"
        id="smoking_status"
        width="w-[24%]"
        value={formData.smoking_status}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Passive Exposure"
        id="passive_exposure"
        width="w-[24%]"
        value={formData.passive_exposure}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Smokeless Tobacco"
        id="smokeless_tobacco"
        width="w-[24%]"
        value={formData.smokeless_tobacco}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Vaping Use"
        id="vaping_use"
        width="w-[24%]"
        value={formData.vaping_use}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Alcohol Use"
        id="alcohol_use"
        width="w-[24%]"
        value={formData.alcohol_use}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Drug Use"
        id="drug_use"
        width="w-[24%]"
        value={formData.drug_use}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Sexual Activity"
        id="sexual_activity"
        width="w-[24%]"
        value={formData.sexual_activity}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Other Topics"
        id="other_topics"
        width="w-[24%]"
        value={formData.other_topics}
        onChange={handleChange}
      />
      <InputWithLabel
        title="Concern"
        id="concern"
        width="w-[24%]"
        value={formData.concern}
        onChange={handleChange}
      />
      <InputWithLabel
        title="History Narrative"
        id="history_narrative"
        width="w-[24%]"
        value={formData.history_narrative}
        onChange={handleChange}
      />
    </div>
  );
}
