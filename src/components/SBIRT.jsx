import InputWithLabel from "./ui/InputWithLabel"

export const SBIRT = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-full flex flex-wrap justify-start items-start gap-2">
            <InputWithLabel
                title="Single Item Drug Screening"
                id="single_item_drug_screening"
                width="w-[49%]"
                value={formData.single_item_drug_screening}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Single Item Drug Screening Score"
                id="single_item_drug_screening_score"
                width="w-[49%]"
                value={formData.single_item_drug_screening_score}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Interpretation"
                id="interpretation"
                width="w-[49%]"
                value={formData.interpretation}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Screening Results"
                id="screening_results"
                width="w-[49%]"
                value={formData.screening_results}
                onChange={handleChange}
            />
        </div>
    )
}
