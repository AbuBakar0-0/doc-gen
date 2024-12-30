import InputWithLabel from "./ui/InputWithLabel"


export const HealthMaintenence = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-full flex flex-wrap justify-start items-start gap-2">
            <InputWithLabel
                title="Health Maintenance Topic"
                id="health_maintenance_topic_2"
                width="w-[49%]"
                value={formData.health_maintenance_topic_2}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Health Maintenance Due Date"
                id="health_maintenence_due_date_2"
                width="w-[49%]"
                value={formData.health_maintenence_due_date_2}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Immunization Due Topic"
                id="immunization_due_topic"
                width="w-[49%]"
                value={formData.immunization_due_topic}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Immunization Due Due Date"
                id="immunization_due_due_date"
                width="w-[49%]"
                value={formData.immunization_due_due_date}
                onChange={handleChange}
            />
        </div>
    )
}
