import { Button } from '@/components/ui/Button';
import InputWithLabel from "./ui/InputWithLabel";
import TextEditor from "./ui/TextEditor";

export const ExamMedications = ({ formData, setFormData, handleQuillChange }) => {
    const handleAdd = () => {
        setFormData((prev) => ({
            ...prev,
            medicationLists: [
                ...prev.medicationLists,
                {
                    id: Date.now(),
                    medication_list_title: '',
                    medication_list_description: '',
                    medication_list_refills: '',
                    medication_list_start_date: '',
                    medication_list_end_date: '',
                },
            ],
        }));
    };

    const handleDelete = (id) => {
        if (formData.medicationLists.length > 1) {
            setFormData((prev) => ({
                ...prev,
                medicationLists: prev.medicationLists.filter((list) => list.id !== id),
            }));
        }
    };

    const handleMedicationChange = (id, field, value) => {
        setFormData((prev) => ({
            ...prev,
            medicationLists: prev.medicationLists.map((list) =>
                list.id === id ? { ...list, [field]: value } : list
            ),
        }));
    };

    return (
        <div className="w-full flex flex-wrap justify-between items-start gap-2">
            <TextEditor
                title="Physical Exam"
                id="physical_exam"
                width="w-[100%] mb-10"
                value={formData.physical_exam}
                onChange={(content, id) => handleQuillChange(content, id)}
            />
            <div className='w-[90%] flex flex-wrap gap-2'>
                {formData.medicationLists.map((medication) => (
                    <div key={medication.id} className="w-full flex flex-wrap gap-2">
                        <InputWithLabel
                            title="Medication List Title"
                            id={`medication_list_title_${medication.id}`}
                            width="w-[18%]"
                            value={medication.medication_list_title}
                            onChange={(e) =>
                                handleMedicationChange(medication.id, 'medication_list_title', e.target.value)
                            }
                        />
                        <InputWithLabel
                            title="Medication List Description"
                            id={`medication_list_description_${medication.id}`}
                            width="w-[18%]"
                            value={medication.medication_list_description}
                            onChange={(e) =>
                                handleMedicationChange(medication.id, 'medication_list_description', e.target.value)
                            }
                        />
                        <InputWithLabel
                            title="Medication List Refills"
                            id={`medication_list_refills_${medication.id}`}
                            width="w-[18%]"
                            value={medication.medication_list_refills}
                            onChange={(e) =>
                                handleMedicationChange(medication.id, 'medication_list_refills', e.target.value)
                            }
                        />
                        <InputWithLabel
                            title="Medication List Start Date"
                            id={`medication_list_start_date_${medication.id}`}
                            width="w-[18%]"
                            type="date"
                            value={medication.medication_list_start_date}
                            onChange={(e) =>
                                handleMedicationChange(medication.id, 'medication_list_start_date', e.target.value)
                            }
                        />
                        <InputWithLabel
                            title="Medication List End Date"
                            id={`medication_list_end_date_${medication.id}`}
                            width="w-[18%]"
                            type="date"
                            value={medication.medication_list_end_date}
                            onChange={(e) =>
                                handleMedicationChange(medication.id, 'medication_list_end_date', e.target.value)
                            }
                        />
                        <Button
                            className="mt-7"
                            onClick={() => handleDelete(medication.id)}
                            disabled={formData.medicationLists.length === 1} // Disable when only one row exists
                        >
                            Delete
                        </Button>
                    </div>
                ))}
            </div>
            <Button className="mt-7" onClick={handleAdd}>
                Add +
            </Button>
            <InputWithLabel
                title="Visit Detail"
                id="visit_detail"
                width="w-[100%]"
                value={formData.visit_detail}
                onChange={(e) => setFormData({ ...formData, visit_detail: e.target.value })}
            />
        </div>
    );
};
