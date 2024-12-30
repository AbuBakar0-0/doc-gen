import InputWithLabel from "./ui/InputWithLabel"

export const Allergies = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-full flex flex-wrap justify-start items-start gap-2">
            <InputWithLabel
                title="Allergen"
                id="allergen"
                width="w-[49%]"
                value={formData.allergen}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Reactions"
                id="reactions"
                width="w-[49%]"
                value={formData.reactions}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Immunizations"
                id="immunizations"
                width="w-[49%]"
                value={formData.immunizations}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Health Maintenance Topic"
                id="health_maintenence_topic"
                width="w-[49%]"
                value={formData.health_maintenence_topic}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Health Maintenance Due Date"
                id="health_maintenence_due_date"
                width="w-[49%]"
                value={formData.health_maintenence_due_date}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Medicare Screening"
                id="medicare_screening"
                width="w-[49%]"
                value={formData.medicare_screening}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Health Risk Assessment"
                id="health_risk_assessment"
                width="w-[49%]"
                value={formData.health_risk_assessment}
                onChange={handleChange}
            />
            <InputWithLabel
                title="PHQ Score"
                id="phq_score"
                width="w-[49%]"
                value={formData.phq_score}
                onChange={handleChange}
            />
            <InputWithLabel
                title="PHO Score"
                id="pho_score"
                width="w-[49%]"
                value={formData.pho_score}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Experience"
                id="experience"
                width="w-[49%]"
                value={formData.experience}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Urinary Screening"
                id="urinary_screening"
                width="w-[49%]"
                value={formData.urinary_screening}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Home Safety"
                id="home_safety"
                width="w-[49%]"
                value={formData.home_safety}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Nutrition"
                id="nutrition"
                width="w-[49%]"
                value={formData.nutrition}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Medications"
                id="medications"
                width="w-[49%]"
                value={formData.medications}
                onChange={handleChange}
            />
        </div>
    )
}
