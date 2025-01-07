"use client";

import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import InputWithLabel from "@/components/ui/InputWithLabel";
import TextEditor from "@/components/ui/TextEditor";
import { useFormData } from "@/context/FormDataContext";

export default function ProblemsList (){
    const { formData, setFormData, handleChange, handleQuillChange } =
    useFormData();
    const handleAddMedical = () => {
        setFormData(prev => ({
            ...prev,
            medicalDiagnosis: [
                ...prev.medicalDiagnosis,
                { id: Date.now(), past_medical_diagnosis: '', past_medical_date: '' }
            ]
        }));
    };

    const handleAddSurgical = () => {
        setFormData(prev => ({
            ...prev,
            surgicalProcedures: [
                ...prev.surgicalProcedures,
                { id: Date.now(), past_surgical_procedure: '', past_surgical_laterality: '', past_surgical_date: '' }
            ]
        }));
    };

    const handleDeleteMedical = (id) => {
        setFormData(prev => ({
            ...prev,
            medicalDiagnosis: prev.medicalDiagnosis.filter(item => item.id !== id)
        }));
    };

    const handleDeleteSurgical = (id) => {
        setFormData(prev => ({
            ...prev,
            surgicalProcedures: prev.surgicalProcedures.filter(item => item.id !== id)
        }));
    };

    const handleFieldChange = (id, field, value, type) => {
        setFormData(prev => {
            const updatedList = prev[type].map(item =>
                item.id === id ? { ...item, [field]: value } : item
            );
            return { ...prev, [type]: updatedList };
        });
    };

    return (
        <div className="w-full flex flex-wrap justify-between items-start gap-2">
            <Divider title="Problems List" />
            <TextEditor
                title="Patient Active Problems List"
                id="patient_active_diagnosis"
                width="w-[100%] mb-10"
                value={formData.patient_active_diagnosis}
                onChange={handleChange} // Pass the event to the handler
                />

            {/* Medical Diagnosis Section */}
            <div className='w-[93%] flex flex-wrap gap-2'>
                {formData.medicalDiagnosis.map((diagnosis) => (
                    <div key={diagnosis.id} className="w-full flex flex-wrap gap-2">
                        <InputWithLabel
                            title="Past Medical Diagnosis"
                            id={`past_medical_diagnosis_${diagnosis.id}`}
                            width="w-[46.1%]"
                            value={diagnosis.past_medical_diagnosis}
                            onChange={(e) => handleFieldChange(diagnosis.id, 'past_medical_diagnosis', e.target.value, 'medicalDiagnosis')}
                        />
                        <InputWithLabel
                            type="date"
                            title="Medical Date"
                            id={`past_medical_date_${diagnosis.id}`}
                            width="w-[46.1%]"
                            value={diagnosis.past_medical_date}
                            onChange={(e) => handleFieldChange(diagnosis.id, 'past_medical_date', e.target.value, 'medicalDiagnosis')}
                        />
                        <Button
                            className="mt-7"
                            variant="destructive"
                            onClick={() => handleDeleteMedical(diagnosis.id)}
                            disabled={formData.medicalDiagnosis.length === 1}
                        >
                            Delete
                        </Button>
                    </div>
                ))}
            </div>
            <Button className="mt-7" onClick={handleAddMedical}>
                Add +
            </Button>

            {/* Surgical Procedure Section */}
            <div className='w-[93%] flex flex-wrap gap-2'>
                {formData.surgicalProcedures.map((procedure) => (
                    <div key={procedure.id} className="w-full flex flex-wrap gap-2">
                        <InputWithLabel
                            title="Past Surgical Procedure"
                            id={`past_surgical_procedure_${procedure.id}`}
                            width="w-[30.5%]"
                            value={procedure.past_surgical_procedure}
                            onChange={(e) => handleFieldChange(procedure.id, 'past_surgical_procedure', e.target.value, 'surgicalProcedures')}
                        />
                        <InputWithLabel
                            title="Past Surgical Laterality"
                            id={`past_surgical_laterality_${procedure.id}`}
                            width="w-[30.5%]"
                            value={procedure.past_surgical_laterality}
                            onChange={(e) => handleFieldChange(procedure.id, 'past_surgical_laterality', e.target.value, 'surgicalProcedures')}
                        />
                        <InputWithLabel
                            type="date"
                            title="Past Surgical Date"
                            id={`past_surgical_date_${procedure.id}`}
                            width="w-[30.5%]"
                            value={procedure.past_surgical_date}
                            onChange={(e) => handleFieldChange(procedure.id, 'past_surgical_date', e.target.value, 'surgicalProcedures')}
                        />
                        <Button
                            className="mt-7"
                            variant="destructive"
                            onClick={() => handleDeleteSurgical(procedure.id)}
                            disabled={formData.surgicalProcedures.length === 1}
                        >
                            Delete
                        </Button>
                    </div>
                ))}
            </div>
            <Button className="mt-7" onClick={handleAddSurgical}>
                Add +
            </Button>
        </div>
    );
};
