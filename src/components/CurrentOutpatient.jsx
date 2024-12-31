import { useState } from "react";
import { Button } from './ui/Button';
import InputWithLabel from './ui/InputWithLabel';

export const CurrentOutpatient = ({ formData, setFormData, handleChange }) => {
    const handleAddCurrentOutpatient = () => {
        setFormData(prev => ({
            ...prev,
            currentOutpatient: [
                ...prev.currentOutpatient,
                {
                    id: Date.now(),
                    current_outpatient_medication: "",
                    current_outpatient_sig: "",
                    current_outpatient_dispense: "",
                    current_outpatient_refill: ""
                }
            ]
        }));
    };

    const handleDeleteCurrentOutpatient = (id) => {
        setFormData(prev => ({
            ...prev,
            currentOutpatient: prev.currentOutpatient.filter(item => item.id !== id)
        }));
    };

    const handleFieldChange = (id, field, value) => {
        setFormData(prev => {
            const updatedCurrentOutpatient = prev.currentOutpatient.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            );
            return { ...prev, currentOutpatient: updatedCurrentOutpatient };
        });
    };

    return (
        <div className="w-full flex flex-wrap justify-between items-start gap-2">
            {/* Render each current outpatient item */}
            <div className="w-[94%] flex flex-wrap gap-2">
                {formData.currentOutpatient.map((outpatient) => (
                    <div key={outpatient.id} className="w-full flex flex-wrap gap-2">
                        <InputWithLabel
                            title="Current Outpatient Medication"
                            id={`current_outpatient_medication_${outpatient.id}`}
                            width="w-[22.95%]"
                            value={outpatient.current_outpatient_medication}
                            onChange={(e) => handleFieldChange(outpatient.id, "current_outpatient_medication", e.target.value)}
                        />
                        <InputWithLabel
                            title="Current Outpatient SIG"
                            id={`current_outpatient_sig_${outpatient.id}`}
                            width="w-[22.95%]"
                            value={outpatient.current_outpatient_sig}
                            onChange={(e) => handleFieldChange(outpatient.id, "current_outpatient_sig", e.target.value)}
                        />
                        <InputWithLabel
                            title="Current Outpatient Dispense"
                            id={`current_outpatient_dispense_${outpatient.id}`}
                            width="w-[22.95%]"
                            value={outpatient.current_outpatient_dispense}
                            onChange={(e) => handleFieldChange(outpatient.id, "current_outpatient_dispense", e.target.value)}
                        />
                        <InputWithLabel
                            title="Current Outpatient Refill"
                            id={`current_outpatient_refill_${outpatient.id}`}
                            width="w-[22.95%]"
                            value={outpatient.current_outpatient_refill}
                            onChange={(e) => handleFieldChange(outpatient.id, "current_outpatient_refill", e.target.value)}
                        />
                        <Button
                            className="mt-7"
                            onClick={() => handleDeleteCurrentOutpatient(outpatient.id)}
                            disabled={formData.currentOutpatient.length === 1}
                        >
                            Delete
                        </Button>
                    </div>
                ))}
            </div>
            {/* Add button for current outpatient */}
            <Button className="mt-7" onClick={handleAddCurrentOutpatient}>
                Add +
            </Button>
            {/* Facility Administered input */}
            <InputWithLabel
                title="Facility Administered"
                id="facility_administered"
                width="w-[100%]"
                value={formData.facility_administered}
                onChange={handleChange}
            />
        </div>
    );
};
