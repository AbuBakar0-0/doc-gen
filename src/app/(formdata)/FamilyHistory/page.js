"use client";

import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import InputWithLabel from "@/components/ui/InputWithLabel";
import { useFormData } from "@/context/FormDataContext";

export default function FamilyHistory() {
  const { formData, setFormData, handleChange, handleQuillChange } =
    useFormData();

  const handleAddFamilyHistory = () => {
    setFormData((prev) => ({
      ...prev,
      familyHistory: [
        ...prev.familyHistory,
        { id: Date.now(), problem: "", relation: "", age_of_onset: "" },
      ],
    }));
  };

  const handleDeleteFamilyHistory = (id) => {
    setFormData((prev) => ({
      ...prev,
      familyHistory: prev.familyHistory.filter((item) => item.id !== id),
    }));
  };

  const handleFieldChange = (id, field, value) => {
    setFormData((prev) => {
      const updatedFamilyHistory = prev.familyHistory.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      );
      return { ...prev, familyHistory: updatedFamilyHistory };
    });
  };

  return (
    <div className="w-full flex flex-wrap justify-between items-start gap-2">
      <Divider title="Family History" />
      <div className="w-[93%] flex flex-wrap gap-2">
        {/* Render each family history item */}
        {formData.familyHistory.map((history) => (
          <div key={history.id} className="w-full flex flex-wrap gap-2">
            <InputWithLabel
              title="Problem"
              id={`problem_${history.id}`}
              width="w-[30.5%]"
              value={history.problem}
              onChange={(e) =>
                handleFieldChange(history.id, "problem", e.target.value)
              }
            />
            <InputWithLabel
              title="Relation"
              id={`relation_${history.id}`}
              width="w-[30.5%]"
              value={history.relation}
              onChange={(e) =>
                handleFieldChange(history.id, "relation", e.target.value)
              }
            />
            <InputWithLabel
              title="Age of Onset"
              id={`age_of_onset_${history.id}`}
              width="w-[30.5%]"
              value={history.age_of_onset}
              onChange={(e) =>
                handleFieldChange(history.id, "age_of_onset", e.target.value)
              }
            />
            <Button
              className="mt-7"
              variant="destructive"
              onClick={() => handleDeleteFamilyHistory(history.id)}
              disabled={formData.familyHistory.length === 1}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
      <Button className="mt-7" onClick={handleAddFamilyHistory}>
        Add +
      </Button>
    </div>
  );
}
