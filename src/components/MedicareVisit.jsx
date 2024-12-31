import { Button } from '@/components/ui/Button';
import InputWithLabel from './ui/InputWithLabel';

export const MedicareVisit = ({ formData, setFormData, handleChange }) => {

    // Add a new dynamic field for service, preventive recommendations, and previous testing
    const handleAddField = () => {
        setFormData(prev => ({
            ...prev,
            preventive_screening: [
                ...prev.preventive_screening,
                {
                    id: Date.now(),
                    service: '',
                    preventive_recommendations: '',
                    previous_testing: ''
                }
            ]
        }));
    };

    // Add a new dynamic field for immunization and immunization recommendations
    const handleAddImmunizationField = () => {
        setFormData(prev => ({
            ...prev,
            immunizationFields: [
                ...prev.immunizationFields,
                {
                    id: Date.now(),
                    immunization: '',
                    immunization_recommendations: ''
                }
            ]
        }));
    };

    // Handle dynamic field change (service, preventive recommendations, previous testing)
    const handlePreventiveFieldChange = (id, field, value) => {
        setFormData(prev => {
            const updatedpreventive_screening = prev.preventive_screening.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            );
            return { ...prev, preventive_screening: updatedpreventive_screening };
        });
    };

    // Handle immunization field change (immunization and immunization recommendations)
    const handleImmunizationFieldChange = (id, field, value) => {
        setFormData(prev => {
            const updatedImmunizationFields = prev.immunizationFields.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            );
            return { ...prev, immunizationFields: updatedImmunizationFields };
        });
    };

    // Handle deletion of a dynamic field
    const handleDeleteDynamicField = (id) => {
        setFormData(prev => ({
            ...prev,
            preventive_screening: prev.preventive_screening.filter(item => item.id !== id)
        }));
    };

    // Handle deletion of an immunization field
    const handleDeleteImmunizationField = (id) => {
        setFormData(prev => ({
            ...prev,
            immunizationFields: prev.immunizationFields.filter(item => item.id !== id)
        }));
    };

    return (
        <div className="w-full flex flex-wrap justify-between items-start gap-2">
            {/* Render dynamic fields for service, preventive recommendations, and previous testing */}
            <div className='w-[94%] flex flex-wrap gap-2'>
                {formData.preventive_screening.map((field) => (
                    <div key={field.id} className="w-full flex flex-wrap gap-2">
                        <InputWithLabel
                            title="Service"
                            id={`service_${field.id}`}
                            width="w-[30.5%]"
                            value={field.service}
                            onChange={(e) => handlePreventiveFieldChange(field.id, 'service', e.target.value)}
                        />
                        <InputWithLabel
                            title="Preventive Recommendations"
                            id={`preventive_recommendations_${field.id}`}
                            width="w-[30.5%]"
                            value={field.preventive_recommendations}
                            onChange={(e) => handlePreventiveFieldChange(field.id, 'preventive_recommendations', e.target.value)}
                        />
                        <InputWithLabel
                            title="Previous Testing"
                            id={`previous_testing_${field.id}`}
                            width="w-[30.5%]"
                            value={field.previous_testing}
                            onChange={(e) => handlePreventiveFieldChange(field.id, 'previous_testing', e.target.value)}
                        />
                        <Button
                            className="mt-7"
                            onClick={() => handleDeleteDynamicField(field.id)}
                            disabled={formData.preventive_screening.length === 1}
                        >
                            Delete
                        </Button>
                    </div>
                ))}
            </div>
            <Button className="mt-7" onClick={handleAddField}>
                Add +
            </Button>

            {/* Render dynamic fields for immunization and immunization recommendations */}
            <div className='w-[94%] flex flex-wrap gap-2'>
                {formData.immunizationFields.map((field) => (
                    <div key={field.id} className="w-full flex flex-wrap gap-2">
                        <InputWithLabel
                            title="Immunization"
                            id={`immunization_${field.id}`}
                            width="w-[46%]"
                            value={field.immunization}
                            onChange={(e) => handleImmunizationFieldChange(field.id, 'immunization', e.target.value)}
                        />
                        <InputWithLabel
                            title="Immunization Recommendations"
                            id={`immunization_recommendations_${field.id}`}
                            width="w-[46%]"
                            value={field.immunization_recommendations}
                            onChange={(e) => handleImmunizationFieldChange(field.id, 'immunization_recommendations', e.target.value)}
                        />
                        <Button
                            className="mt-7"
                            onClick={() => handleDeleteImmunizationField(field.id)}
                            disabled={formData.immunizationFields.length === 1}
                        >
                            Delete
                        </Button>
                    </div>
                ))}
            </div>
            <Button className="mt-7" onClick={handleAddImmunizationField}>
                Add +
            </Button>

            {/* Other static inputs */}
            <InputWithLabel
                title="Date After One Year"
                id="date_after_one_year"
                width="w-[49%]"
                value={formData.date_after_one_year}
                onChange={handleChange}
            />

            <InputWithLabel
                title="Other Preventive Screening"
                id="other_preventive_screening"
                width="w-[49%]"
                value={formData.other_preventive_screening}
                onChange={handleChange}
            />
        </div>
    );
};
