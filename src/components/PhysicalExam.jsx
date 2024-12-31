import InputWithLabel from "./ui/InputWithLabel"

export const PhysicalExam = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-full flex flex-wrap justify-start items-start gap-2">
            <InputWithLabel
                title="Physical Exam Description"
                id="physical_exam_description"
                width="w-[49%]"
                value={formData.physical_exam_description}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Eyes"
                id="eyes"
                width="w-[24%]"
                value={formData.eyes}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Neck"
                id="neck"
                width="w-[24%]"
                value={formData.neck}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Cardiovascular"
                id="cardiovascular"
                width="w-[24%]"
                value={formData.cardiovascular}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Pulmonary"
                id="pulmonary"
                width="w-[24%]"
                value={formData.pulmonary}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Abdominal"
                id="abdominal"
                width="w-[24%]"
                value={formData.abdominal}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Musculoskeletal"
                id="musculoskeletal"
                width="w-[24%]"
                value={formData.musculoskeletal}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Lymphadenopathy"
                id="lymphadenopathy"
                width="w-[24%]"
                value={formData.lymphadenopathy}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Neurological"
                id="neurological"
                width="w-[24%]"
                value={formData.neurological}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Psychiatric Behaviour"
                id="psychiatric_behaviour"
                width="w-[24%]"
                value={formData.psychiatric_behaviour}
                onChange={handleChange}
            />
        </div>
    )
}
