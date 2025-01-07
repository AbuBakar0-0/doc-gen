"use client";

import { createContext, useContext, useState, useEffect } from "react";

const FormDataContext = createContext();

const initialFormData = {
  first_page_date: "",
  header_date_time: "",
  header_fax: "",
  //======================================> Patient Info
  date: "",
  first_name: "",
  middle_initial: "",
  last_name: "",
  dob: "",
  gender: "",
  address: "",
  city: "",
  state: "",
  postal_code: "",
  patient_phone_number: "",
  primary_insurance: "",
  ppn1: "",
  private_insurance: "",
  ppn2: "",
  height: "",
  weight: "",

  //======================================> Physicians Info
  physician_name: "",
  npi: "",
  physician_address: "",
  physician_city: "",
  physician_state: "",
  physician_postal_code: "",
  physician_phone_number: "",
  physician_fax_number: "",

  //======================================> Diagnosis
  diagnosis: "",

  //======================================>Office Info
  mrn: "",
  office_visit: "",
  provider_name: "",
  provider_address: "",
  primary_diagnosis: "",
  reason_for_visit: "",
  assessment_plan: "",
  diagnosis_order: "",
  assessment_title: "",
  chief_complaint_title: "",
  chief_complaint_detail: "",
  chief_complaint_description: "",

  //======================================> Vitals
  date_time: "",
  bp: "",
  bp_location: "",
  patient_position: "",
  cuff_size: "",
  pulse: "",
  temp: "",
  temp_src: "",
  sp_02: "",
  weight: "",
  height: "",
  temp_converted_to_c: "",
  height_in_meter: "",
  bmi: "",
  bsa: "",

  //======================================> Exam + Medication
  physical_exam: "",
  orders_placed: "",
  medication_changes: "",
  medication_changes_date_time: "",
  medicationLists: [
    {
      id: 1,
      medication_list_title: "",
      medication_list_description: "",
      medication_list_refills: "",
      medication_list_start_date: "",
      medication_list_end_date: "",
    },
  ],
  visit_detail: "",

  //======================================> Assessment Plan 2
  assessment_plan_2: "",
  problem_list_items: "",
  bmi_counseling: "",
  depression_screening: "",
  depression_detail: "",
  doctors_name_with_title: [""],
  ros2_constitutional: "",
  ros2_hent: "",
  ros2_eyes: "",
  ros2_respiratory: "",
  ros2_cardiovascular: "",
  ros2_gastrointestinal: "",
  ros2_musculoskeletal: "",
  ros2_neurological: "",
  ros2_psychiatric: "",

  //======================================> Problems List
  patient_active_diagnosis: "",
  medicalDiagnosis: [
    {
      id: 1,
      past_medical_diagnosis: "",
      past_medical_date: "",
    },
  ],
  surgicalProcedures: [
    {
      id: 1,
      past_surgical_procedure: "",
      past_surgical_laterality: "",
      past_surgical_date: "",
    },
  ],

  //======================================> Family History
  familyHistory: [
    {
      id: 1,
      problem: "",
      relation: "",
      age_of_onset: "",
    },
  ],

  //======================================> Social History
  marital_status: "",
  spouse_name: "",
  no_of_children: "",
  years_of_education: "",
  highest_education: "",
  occupational_history: "",
  smoking_status: "",
  passive_exposure: "",
  smokeless_tobacco: "",
  vaping_use: "",
  alcohol_use: "",
  drug_use: "",
  sexual_activity: "",
  other_topics: "",
  concern: "",
  history_narrative: "",

  //======================================> Social Determinants of health
  social_date: "",
  difficulty_in_paying_living_expenses: "",
  food_insecurity: "",
  transportation_needs: "",
  lack_of_transportation_medical: "",
  lack_of_transportation_non_medical: "",
  physical_activity: "",
  stress: "",
  social_connections: "",
  intimate_partner_violence: "",
  housing_stability: "",

  //======================================> Current Outpatient Medications
  currentOutpatient: [
    {
      id: 1,
      current_outpatient_medication: "",
      current_outpatient_sig: "",
      current_outpatient_dispense: "",
      current_outpatient_refill: "",
    },
  ],
  facility_administered: "",

  //======================================> Allergies
  allergens: [
    {
      id: 1,
      allergen: "",
      reactions: "",
    },
  ],
  healthMaintenances: [
    {
      id: 1,
      health_maintenence_topic: "",
      health_maintenence_due_date: "",
    },
  ],
  immunizations: "",
  medicare_screening: "",
  health_risk_assessment: "",
  phq_score: "",
  pho_score: "",
  experience: "",
  urinary_screening: "",
  home_safety: "",
  nutrition: "",
  medications: "",

  //======================================> ADLs/IADLs
  walk_and_transfer: "",
  dress_and_groom: "",
  bathe_or_shower: "",
  feed_yourself: "",
  laundry: "",
  manage_money: "",
  make_meals: "",
  do_shopping: "",

  //======================================> Previous Hospitalization
  previous_hospitalization: "",
  living_will: "",
  durable_poa: "",
  advance_directive: "",
  end_of_life_decisions: "",

  //======================================> Cognitive Screening
  cognitive_screening: "",
  cardiovascular: "",
  diabetes: "",
  colorectal: "",
  cancer_screening: "",
  cervical_cancer: "",
  osteoporosis_screening: "",
  aaa_screening: "",
  lung_cancer_screening: "",
  hepatitis_c_screening: "",

  //======================================> SBIRT
  single_item_drug_screening: "",
  single_item_drug_screening_score: "",
  interpretation: "",
  screening_results: "",

  //======================================> Physical Exam
  physical_exam_description: "",
  eyes: "",
  neck: "",
  cardiovascular: "",
  pulmonary: "",
  abdominal: "",
  musculoskeletal: "",
  lymphadenopathy: "",
  neurological: "",
  psychiatric_behaviour: "",

  //======================================> Medicare Visit
  date_after_one_year: "",
  other_preventive_screening: "",
  preventive_screening: [
    {
      id: 1,
      service: "",
      preventive_recommendations: "",
      previous_testing: "",
    },
  ],
  immunizationFields: [
    { id: 1, immunization: "", immunization_recommendations: "" },
  ],

  //======================================> Health Maintanance
  healthMaintenanceFields: [
    // Initial health maintenance field with default values
    {
      id: 1,
      health_maintenance_topic: "",
      health_maintenence_due_date: "",
    },
  ],

  immunizationFields2: [
    // Initial immunization field with default values
    {
      id: 1,
      immunization_due_topic: "",
      immunization_due_due_date: "",
    },
  ],
  //======================================> Orders Placed 2
  orders_placed_2: "",
  medication_changes_2: "",
  medication_changes_date_time_2: "",
  medicationLists2: [
    {
      id: 1,
      medication_list_title: "",
      medication_list_description: "",
      medication_list_refills: "",
      medication_list_start_date: "",
      medication_list_end_date: "",
    },
  ],
  visit_diagnosis_2: "",
  visit_diagnosis_2_details: "",

  //======================================> Printed By
  printed_by: "",
};

const loadInitialFormData = () => {
  if (typeof window !== "undefined") {
    // Check if running in the browser
    const savedFormData = localStorage.getItem("formData");
    return savedFormData ? JSON.parse(savedFormData) : initialFormData;
  }
  return initialFormData; // Default for SSR
};

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState(loadInitialFormData);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(formData);
  };

  const handleQuillChange = (value, id) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

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

      console.log("FORMATTED FORM DATA", formattedFormData);
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

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <FormDataContext.Provider
      value={{
        formData,
        handleSubmit,
        printData,
        setFormData,
        handleChange,
        handleQuillChange,
        resetForm,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => useContext(FormDataContext);
