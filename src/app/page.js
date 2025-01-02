"use client";

import InputWithLabel from "@/components/ui/InputWithLabel";
import { useFormData } from "@/context/FormDataContext";
import Layout from "./(formdata)/layout";

export default function Home() {
  const { formData, setFormData, handleChange, handleQuillChange } =
    useFormData();
  return (
    <Layout>
      <div className="w-full flex flex-wrap justify-start items-start gap-4">
        <InputWithLabel
          title="First Page Date"
          width="w-[49%]"
          id="first_page_date"
          value={formData.first_page_date}
          onChange={handleChange}
        />
        <InputWithLabel
          title="Header Date Time"
          width="w-[49%]"
          id="header_date_time"
          value={formData.header_date_time}
          onChange={handleChange}
        />
        <InputWithLabel
          title="Header Fax"
          id="header_fax"
          value={formData.header_fax}
          onChange={handleChange}
          width="w-[49%]"
        />
        <InputWithLabel
          title="Printed By"
          id="printed_by"
          width="w-[49%]"
          value={formData.printed_by}
          onChange={handleChange}
        />
      </div>
    </Layout>
  );
}
