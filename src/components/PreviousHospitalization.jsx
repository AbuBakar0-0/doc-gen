import InputWithLabel from "./ui/InputWithLabel"


export const PreviousHospitalization = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-full flex flex-wrap justify-start items-start gap-2">
            <InputWithLabel
                title="Previous Hospitalization"
                id="previous_hospitalization"
                width="w-[49%]"
                value={formData.previous_hospitalization}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Living Will"
                id="living_will"
                width="w-[49%]"
                value={formData.living_will}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Durable POA"
                id="durable_poa"
                width="w-[49%]"
                value={formData.durable_poa}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Advance Directive"
                id="advance_directive"
                width="w-[49%]"
                value={formData.advance_directive}
                onChange={handleChange}
            />
            <InputWithLabel
                title="End of Life Decisions"
                id="end_of_life_decisions"
                width="w-[49%]"
                value={formData.end_of_life_decisions}
                onChange={handleChange}
            />
        </div>
    )
}
