import { Button } from '@/components/ui/Button';
import InputWithLabel from './ui/InputWithLabel';

export const HealthMaintenence = ({ formData, setFormData, handleChange }) => {

    // Add a new dynamic field for health maintenance topic and due date
    const handleAddHealthMaintenanceField = () => {
        setFormData(prev => ({
            ...prev,
            healthMaintenanceFields: [
                ...prev.healthMaintenanceFields,
                {
                    id: Date.now(),
                    health_maintenance_topic: '',
                    health_maintenence_due_date: ''
                }
            ]
        }));
    };

    // Add a new dynamic field for immunization topic and due date
    const handleAddImmunizationField = () => {
        setFormData(prev => ({
            ...prev,
            immunizationFields2: [
                ...prev.immunizationFields2,
                {
                    id: Date.now(),
                    immunization_due_topic: '',
                    immunization_due_due_date: ''
                }
            ]
        }));
    };

    // Handle dynamic field change for health maintenance (topic, due date)
    const handleHealthMaintenanceFieldChange = (id, field, value) => {
        setFormData(prev => {
            const updatedHealthMaintenanceFields = prev.healthMaintenanceFields.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            );
            return { ...prev, healthMaintenanceFields: updatedHealthMaintenanceFields };
        });
    };

    // Handle dynamic field change for immunization (topic, due date)
    const handleImmunizationFieldChange = (id, field, value) => {
        setFormData(prev => {
            const updatedImmunizationFields2 = prev.immunizationFields2.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            );
            return { ...prev, immunizationFields2: updatedImmunizationFields2 };
        });
    };

    // Handle deletion of a health maintenance field
    const handleDeleteHealthMaintenanceField = (id) => {
        setFormData(prev => ({
            ...prev,
            healthMaintenanceFields: prev.healthMaintenanceFields.filter(item => item.id !== id)
        }));
    };

    // Handle deletion of an immunization field
    const handleDeleteImmunizationField = (id) => {
        setFormData(prev => ({
            ...prev,
            immunizationFields2: prev.immunizationFields2.filter(item => item.id !== id)
        }));
    };

    return (
        <div className="w-full flex flex-wrap justify-start items-start gap-2">
            {/* Render dynamic fields for health maintenance topic and due date */}
            <div className="w-[94%] flex flex-wrap gap-2">
                {formData.healthMaintenanceFields.map((field) => (
                    <div key={field.id} className="w-full flex flex-wrap gap-2">
                        <InputWithLabel
                            title="Health Maintenance Topic"
                            id={`health_maintenance_topic_${field.id}`}
                            width="w-[45%]"
                            value={field.health_maintenance_topic}
                            onChange={(e) => handleHealthMaintenanceFieldChange(field.id, 'health_maintenance_topic', e.target.value)}
                        />
                        <InputWithLabel
                            type='date'
                            title="Health Maintenance Due Date"
                            id={`health_maintenence_due_date_${field.id}`}
                            width="w-[45%]"
                            value={field.health_maintenence_due_date}
                            onChange={(e) => handleHealthMaintenanceFieldChange(field.id, 'health_maintenence_due_date', e.target.value)}
                        />
                        <Button
                            className="mt-7"
                            onClick={() => handleDeleteHealthMaintenanceField(field.id)}
                            disabled={formData.healthMaintenanceFields.length === 1}
                        >
                            Delete
                        </Button>
                    </div>
                ))}
            </div>
            <Button className="mt-7" onClick={handleAddHealthMaintenanceField}>
                Add +
            </Button>

            {/* Render dynamic fields for immunization topic and due date */}
            <div className="w-[94%] flex flex-wrap gap-2">
                {formData.immunizationFields2.map((field) => (
                    <div key={field.id} className="w-full flex flex-wrap gap-2">
                        <InputWithLabel
                            title="Immunization Due Topic"
                            id={`immunization_due_topic_${field.id}`}
                            width="w-[45%]"
                            value={field.immunization_due_topic}
                            onChange={(e) => handleImmunizationFieldChange(field.id, 'immunization_due_topic', e.target.value)}
                        />
                        <InputWithLabel
                            type='date'
                            title="Immunization Due Due Date"
                            id={`immunization_due_due_date_${field.id}`}
                            width="w-[45%]"
                            value={field.immunization_due_due_date}
                            onChange={(e) => handleImmunizationFieldChange(field.id, 'immunization_due_due_date', e.target.value)}
                        />
                        <Button
                            className="mt-7"
                            onClick={() => handleDeleteImmunizationField(field.id)}
                            disabled={formData.immunizationFields2.length === 1}
                        >
                            Delete
                        </Button>
                    </div>
                ))}
            </div>
            <Button className="mt-7" onClick={handleAddImmunizationField}>
                Add +
            </Button>

        </div>
    );
};
