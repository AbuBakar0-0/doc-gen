import { useState } from "react";

export const UseFormData = () => {
  const [formData, setFormData] = useState({
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
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Update the state with the new value
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleQuillChange = (value, id) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return { handleChange, handleQuillChange, formData, setFormData };
};
