import InputWithLabel from './ui/InputWithLabel'

export const MedicareVisit = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-full flex flex-wrap justify-start items-start gap-2">
            <InputWithLabel
                title="Date After One Year"
                id="date_after_one_year"
                width="w-[49%]"
                value={formData.date_after_one_year}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Service"
                id="service"
                width="w-[49%]"
                value={formData.service}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Preventive Recommendations"
                id="preventive_recommendations"
                width="w-[49%]"
                value={formData.preventive_recommendations}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Other Preventive Screening"
                id="other_preventive_screening"
                width="w-[49%]"
                value={formData.other_preventive_screening}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Previous Testing"
                id="previous_testing"
                width="w-[49%]"
                value={formData.previous_testing}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Immunization"
                id="immunization"
                width="w-[49%]"
                value={formData.immunization}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Immunization Recommendations"
                id="immunization_recommendations"
                width="w-[49%]"
                value={formData.immunization_recommendations}
                onChange={handleChange}
            />
        </div>
    )
}
