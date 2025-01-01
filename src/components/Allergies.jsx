import { Button } from '@/components/ui/Button';
import InputWithLabel from './ui/InputWithLabel';

export const Allergies = ({ formData, setFormData, handleChange }) => {

    // Add a new allergen entry
    const handleAddAllergen = () => {
        setFormData(prev => ({
            ...prev,
            allergens: [
                ...prev.allergens,
                {
                    id: Date.now(),
                    allergen: '',
                    reactions: ''
                }
            ]
        }));
    };

    // Add a new health maintenance entry (topic and due date)
    const handleAddHealthMaintenance = () => {
        setFormData(prev => ({
            ...prev,
            healthMaintenances: [
                ...prev.healthMaintenances,
                {
                    id: Date.now(),
                    health_maintenence_topic: '',
                    health_maintenence_due_date: ''
                }
            ]
        }));
    };

    // Handle allergen field change (allergen and reactions)
    const handleAllergenFieldChange = (id, field, value) => {
        setFormData(prev => {
            const updatedAllergens = prev.allergens.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            );
            return { ...prev, allergens: updatedAllergens };
        });
    };

    // Handle health maintenance field change (topic and due date)
    const handleHealthMaintenanceFieldChange = (id, field, value) => {
        setFormData(prev => {
            const updatedHealthMaintenances = prev.healthMaintenances.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            );
            return { ...prev, healthMaintenances: updatedHealthMaintenances };
        });
    };

    // Handle deletion of an allergen entry
    const handleDeleteAllergen = (id) => {
        setFormData(prev => ({
            ...prev,
            allergens: prev.allergens.filter(item => item.id !== id)
        }));
    };

    // Handle deletion of a health maintenance entry
    const handleDeleteHealthMaintenance = (id) => {
        setFormData(prev => ({
            ...prev,
            healthMaintenances: prev.healthMaintenances.filter(item => item.id !== id)
        }));
    };

    return (
        <div className="w-full flex flex-wrap justify-between items-start gap-2">
            {/* Render allergen entries */}
            <div className='w-[94%] flex flex-wrap gap-2'>
                {formData.allergens.map((allergen) => (
                    <div key={allergen.id} className="w-full flex flex-wrap gap-2">
                        <InputWithLabel
                            title="Allergen"
                            id={`allergen_${allergen.id}`}
                            width="w-[46.5%]"
                            value={allergen.allergen}
                            onChange={(e) => handleAllergenFieldChange(allergen.id, 'allergen', e.target.value)}
                        />
                        <InputWithLabel
                            title="Reactions"
                            id={`reactions_${allergen.id}`}
                            width="w-[46.5%]"
                            value={allergen.reactions}
                            onChange={(e) => handleAllergenFieldChange(allergen.id, 'reactions', e.target.value)}
                        />
                        <Button
                            className="mt-7"
                            onClick={() => handleDeleteAllergen(allergen.id)}
                            disabled={formData.allergens.length === 1}
                        >
                            Delete
                        </Button>
                    </div>
                ))}
            </div>
            {/* First Add button: Add allergen and reaction */}
            <Button className="mt-7" onClick={handleAddAllergen}>
                Add +
            </Button>

            <InputWithLabel
                title="Immunizations"
                id="immunizations"
                width="w-[100%]"
                value={formData.immunizations}
                onChange={handleChange}
            />

            {/* Render health maintenance entries */}
            <div className='w-[94%] flex flex-wrap gap-2'>
                {formData.healthMaintenances.map((maintenance) => (
                    <div key={maintenance.id} className="w-full flex flex-wrap gap-2">
                        <InputWithLabel
                            title="Health Maintenance Topic"
                            id={`health_maintenence_topic_${maintenance.id}`}
                            width="w-[46.5%]"
                            value={maintenance.health_maintenence_topic}
                            onChange={(e) => handleHealthMaintenanceFieldChange(maintenance.id, 'health_maintenence_topic', e.target.value)}
                        />
                        <InputWithLabel
                            type='date'
                            title="Health Maintenance Due Date"
                            id={`health_maintenence_due_date_${maintenance.id}`}
                            width="w-[46.5%]"
                            value={maintenance.health_maintenence_due_date}
                            onChange={(e) => handleHealthMaintenanceFieldChange(maintenance.id, 'health_maintenence_due_date', e.target.value)}
                        />
                        <Button
                            className="mt-7"
                            onClick={() => handleDeleteHealthMaintenance(maintenance.id)}
                            disabled={formData.healthMaintenances.length === 1}
                        >
                            Delete
                        </Button>
                    </div>
                ))}
            </div>
            {/* Second Add button: Add Health Maintenance (Topic & Due Date) */}
            <Button className="mt-7" onClick={handleAddHealthMaintenance}>
                Add +
            </Button>

            {/* Other static inputs */}
            
            <InputWithLabel
                title="Medicare Screening"
                id="medicare_screening"
                width="w-[32%]"
                value={formData.medicare_screening}
                onChange={handleChange}
            />

            <InputWithLabel
                title="Health Risk Assessment"
                id="health_risk_assessment"
                width="w-[32%]"
                value={formData.health_risk_assessment}
                onChange={handleChange}
            />

            <InputWithLabel
                title="PHQ-2 Score"
                id="phq_score"
                width="w-[32%]"
                value={formData.phq_score}
                onChange={handleChange}
            />

            <InputWithLabel
                title="PHO-9 Score"
                id="pho_score"
                width="w-[32%]"
                value={formData.pho_score}
                onChange={handleChange}
            />

            <InputWithLabel
                title="Fall Risk Screening"
                id="experience"
                width="w-[32%]"
                value={formData.experience}
                onChange={handleChange}
            />

            <InputWithLabel
                title="Urinary Incontinence Screening"
                id="urinary_screening"
                width="w-[32%]"
                value={formData.urinary_screening}
                onChange={handleChange}
            />

            <InputWithLabel
                title="Home Safety"
                id="home_safety"
                width="w-[32%]"
                value={formData.home_safety}
                onChange={handleChange}
            />

            <InputWithLabel
                title="Nutrition"
                id="nutrition"
                width="w-[32%]"
                value={formData.nutrition}
                onChange={handleChange}
            />

            <InputWithLabel
                title="Medications"
                id="medications"
                width="w-[32%]"
                value={formData.medications}
                onChange={handleChange}
            />
        </div>
    );
};
