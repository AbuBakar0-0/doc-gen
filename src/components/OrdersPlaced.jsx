import InputWithLabel from "./ui/InputWithLabel"

export const OrdersPlaced = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-full flex flex-wrap justify-between items-start gap-2">
            <InputWithLabel
                title="Orders Placed"
                id="orders_placed_2"
                width="w-[49%]"
                value={formData.orders_placed_2}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Medication Changes"
                id="medication_changes_2"
                width="w-[49%]"
                value={formData.medication_changes_2}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Medication"
                id="medication_2"
                width="w-[49%]"
                value={formData.medication_2}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Refills"
                id="refills_2"
                width="w-[49%]"
                value={formData.refills_2}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Start Date"
                id="start_date_2"
                width="w-[49%]"
                value={formData.start_date_2}
                onChange={handleChange}
            />
            <InputWithLabel
                title="End Date"
                id="end_date_2"
                width="w-[49%]"
                value={formData.end_date_2}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Visit Diagnosis"
                id="visit_diagnosis_2"
                width="w-[49%]"
                value={formData.visit_diagnosis_2}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Visit Diagnosis Details"
                id="visit_diagnosis_2_details"
                width="w-[49%]"
                value={formData.visit_diagnosis_2_details}
                onChange={handleChange}
            />
        </div>
    )
}
