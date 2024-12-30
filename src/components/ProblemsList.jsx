import InputWithLabel from './ui/InputWithLabel'

export const ProblemsList = ({formData,handleChange,handleQuillChange}) => {
    return (
        <div className="w-full flex flex-wrap justify-start items-start gap-2">
            <InputWithLabel
                title="Patient Active Diagnosis"
                id="patient_active_diagnosis"
                width="w-[49%]"
                value={formData.patient_active_diagnosis}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Past Medical Diagnosis"
                id="past_medical_diagnosis"
                width="w-[49%]"
                value={formData.past_medical_diagnosis}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Past Medical Date"
                id="past_medical_date"
                width="w-[49%]"
                value={formData.past_medical_date}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Past Surgical Procedure"
                id="past_surgical_procedure"
                width="w-[49%]"
                value={formData.past_surgical_procedure}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Past Surgical Laterality"
                id="past_surgical_laterality"
                width="w-[49%]"
                value={formData.past_surgical_laterality}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Past Surgical Date"
                id="past_surgical_date"
                width="w-[49%]"
                value={formData.past_surgical_date}
                onChange={handleChange}
            />
        </div>
    )
}
