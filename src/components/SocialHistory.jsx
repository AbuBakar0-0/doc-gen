import InputWithLabel from "./ui/InputWithLabel"

export const SocialHistory = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-full flex flex-wrap justify-start items-start gap-2">
            <InputWithLabel
                title="Marital Status"
                id="marital_status"
                width="w-[49%]"
                value={formData.marital_status}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Spouse Name"
                id="spouse_name"
                width="w-[49%]"
                value={formData.spouse_name}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Number of Children"
                id="no_of_children"
                width="w-[49%]"
                value={formData.no_of_children}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Years of Education"
                id="years_of_education"
                width="w-[49%]"
                value={formData.years_of_education}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Highest Education"
                id="highest_education"
                width="w-[49%]"
                value={formData.highest_education}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Occupational History"
                id="occupational_history"
                width="w-[49%]"
                value={formData.occupational_history}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Smoking Status"
                id="smoking_status"
                width="w-[49%]"
                value={formData.smoking_status}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Passive Exposure"
                id="passive_exposure"
                width="w-[49%]"
                value={formData.passive_exposure}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Smokeless Tobacco"
                id="smokeless_tobacco"
                width="w-[49%]"
                value={formData.smokeless_tobacco}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Vaping Use"
                id="vaping_use"
                width="w-[49%]"
                value={formData.vaping_use}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Alcohol Use"
                id="alcohol_use"
                width="w-[49%]"
                value={formData.alcohol_use}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Drug Use"
                id="drug_use"
                width="w-[49%]"
                value={formData.drug_use}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Sexual Activity"
                id="sexual_activity"
                width="w-[49%]"
                value={formData.sexual_activity}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Other Topics"
                id="other_topics"
                width="w-[49%]"
                value={formData.other_topics}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Concern"
                id="concern"
                width="w-[49%]"
                value={formData.concern}
                onChange={handleChange}
            />
            <InputWithLabel
                title="History Narrative"
                id="history_narrative"
                width="w-[49%]"
                value={formData.history_narrative}
                onChange={handleChange}
            />
        </div>
    )
}
