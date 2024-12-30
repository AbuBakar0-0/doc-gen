import InputWithLabel from './ui/InputWithLabel'

export const CurrentOutpatient = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-full flex flex-wrap justify-start items-start gap-2">
            <InputWithLabel
                title="Current Outpatient Medication"
                id="current_outpatient_medication"
                width="w-[49%]"
                value={formData.current_outpatient_medication}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Current Outpatient SIG"
                id="current_outpatient_sig"
                width="w-[49%]"
                value={formData.current_outpatient_sig}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Current Outpatient Dispense"
                id="current_outpatient_dispense"
                width="w-[49%]"
                value={formData.current_outpatient_dispense}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Current Outpatient Refill"
                id="current_outpatient_refill"
                width="w-[49%]"
                value={formData.current_outpatient_refill}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Facility Administered"
                id="facility_administered"
                width="w-[49%]"
                value={formData.facility_administered}
                onChange={handleChange}
            />
        </div>
    )
}
