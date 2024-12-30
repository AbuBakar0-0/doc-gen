import InputWithLabel from "./ui/InputWithLabel"

export const ExamMedications = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-full flex flex-wrap justify-start items-start gap-2">
            <InputWithLabel
                title="Physical Exam"
                id="physical_exam"
                width="w-[49%]"
                value={formData.physical_exam}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Medication List Title"
                id="medication_list_title"
                width="w-[49%]"
                value={formData.medication_list_title}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Medication List Description"
                id="medication_list_description"
                width="w-[49%]"
                value={formData.medication_list_description}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Medication List Refills"
                id="medication_list_refills"
                width="w-[49%]"
                value={formData.medication_list_refills}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Medication List Start Date"
                id="medication_list_start_date"
                width="w-[49%]"
                type="date"
                value={formData.medication_list_start_date}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Medication List End Date"
                id="medication_list_end_date"
                width="w-[49%]"
                type="date"
                value={formData.medication_list_end_date}
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
                title="Visit Detail"
                id="visit_detail"
                width="w-[49%]"
                value={formData.visit_detail}
                onChange={handleChange}
            />
        </div>
    )
}
