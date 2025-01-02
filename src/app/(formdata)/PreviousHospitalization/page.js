"use client";

import { Divider } from "@/components/ui/Divider";
import RadioButtons from "@/components/ui/RadioButtons";
import { useFormData } from "@/context/FormDataContext";

export default function PreviousHospitalization() {
  const { formData, setFormData, handleChange, handleQuillChange } =
    useFormData();
  return (
    <div className="w-full flex flex-wrap justify-between items-start gap-2">
      <Divider title="Previous Hospitalization" />
      <RadioButtons
        options={["Yes", "No"]}
        title="Any hospitalizations or ED visits within the last 12 months?"
        id="previous_hospitalization"
        width="w-[49%]"
        value={formData.previous_hospitalization}
        onChange={handleChange}
      />
      <Divider title={"Advance Care Planning"} />
      <RadioButtons
        options={["Yes", "No"]}
        title="Living Will"
        id="living_will"
        width="w-[23%]"
        value={formData.living_will}
        onChange={handleChange}
      />
      <RadioButtons
        options={["Yes", "No"]}
        title="Durable POA for healthcare"
        id="durable_poa"
        width="w-[23%]"
        value={formData.durable_poa}
        onChange={handleChange}
      />
      <RadioButtons
        options={["Yes", "No"]}
        title="Advanced directive"
        id="advance_directive"
        width="w-[23%]"
        value={formData.advance_directive}
        onChange={handleChange}
      />
      <RadioButtons
        options={["Yes", "No"]}
        title="Provider agrees with end of life decisions"
        id="end_of_life_decisions"
        width="w-[23%]"
        value={formData.end_of_life_decisions}
        onChange={handleChange}
      />
    </div>
  );
}
