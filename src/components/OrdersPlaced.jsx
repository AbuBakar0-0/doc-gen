import { Button } from "./ui/Button";
import InputWithLabel from "./ui/InputWithLabel"

export const OrdersPlaced = ({ formData, setFormData, handleChange, handleQuillChange }) => {

    const handleAdd = () => {
        setFormData((prev) => ({
            ...prev,
            medicationLists2: [
                ...prev.medicationLists2,
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
        if (formData.medicationLists2.length > 1) {
            setFormData((prev) => ({
                ...prev,
                medicationLists2: prev.medicationLists2.filter((list) => list.id !== id),
            }));
        }
    };

    const handleMedicationChange = (id, field, value) => {
        setFormData((prev) => ({
            ...prev,
            medicationLists2: prev.medicationLists2.map((list) =>
                list.id === id ? { ...list, [field]: value } : list
            ),
        }));
    };

    return (
        <div className="w-full flex flex-wrap justify-between items-start gap-2">
            <InputWithLabel
                title="Orders Placed"
                id="orders_placed_2"
                width="w-[32.5%]"
                value={formData.orders_placed_2}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Medication Changes"
                id="medication_changes_2"
                width="w-[32.5%]"
                value={formData.medication_changes_2}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Medication Changes Date TIme"
                id={"medication_changes_date_time_2"}
                width="w-[32.5%]"
                value={formData.medication_changes_date_time_2}
                onChange={handleChange}
            />
            <div className='w-[94%] flex flex-wrap gap-2'>
                {formData.medicationLists2.map((medication) => (
                    <div key={medication.id} className="w-full flex flex-wrap gap-2">
                        <InputWithLabel
                            title="Medication List Title"
                            id={`medication_list_title_${medication.id}`}
                            width="w-[18.2%]"
                            value={medication.medication_list_title}
                            onChange={(e) =>
                                handleMedicationChange(medication.id, 'medication_list_title', e.target.value)
                            }
                        />
                        <InputWithLabel
                            title="Medication List Description"
                            id={`medication_list_description_${medication.id}`}
                            width="w-[18.2%]"
                            value={medication.medication_list_description}
                            onChange={(e) =>
                                handleMedicationChange(medication.id, 'medication_list_description', e.target.value)
                            }
                        />
                        <InputWithLabel
                            title="Medication List Refills"
                            id={`medication_list_refills_${medication.id}`}
                            width="w-[18.2%]"
                            value={medication.medication_list_refills}
                            onChange={(e) =>
                                handleMedicationChange(medication.id, 'medication_list_refills', e.target.value)
                            }
                        />
                        <InputWithLabel
                            title="Medication List Start Date"
                            id={`medication_list_start_date_${medication.id}`}
                            width="w-[18.2%]"
                            type="date"
                            value={medication.medication_list_start_date}
                            onChange={(e) =>
                                handleMedicationChange(medication.id, 'medication_list_start_date', e.target.value)
                            }
                        />
                        <InputWithLabel
                            title="Medication List End Date"
                            id={`medication_list_end_date_${medication.id}`}
                            width="w-[18.2%]"
                            type="date"
                            value={medication.medication_list_end_date}
                            onChange={(e) =>
                                handleMedicationChange(medication.id, 'medication_list_end_date', e.target.value)
                            }
                        />
                        <Button
                            className="mt-7"
                            onClick={() => handleDelete(medication.id)}
                            disabled={formData.medicationLists2.length === 1} // Disable when only one row exists
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
