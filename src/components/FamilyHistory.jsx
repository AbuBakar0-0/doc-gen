import InputWithLabel from "./ui/InputWithLabel"

export const FamilyHistory = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-full flex flex-wrap justify-start items-start gap-2">
            <InputWithLabel
                title="Problem"
                id="problem"
                width="w-[49%]"
                value={formData.problem}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Relation"
                id="relation"
                width="w-[49%]"
                value={formData.relation}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Age of Onset"
                id="age_of_onset"
                width="w-[49%]"
                value={formData.age_of_onset}
                onChange={handleChange}
            />
        </div>
    )
}
