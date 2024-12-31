import InputWithLabel from "./ui/InputWithLabel"
import RadioButtons from "./ui/RadioButtons"


export const CognitiveScreening = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-full flex flex-wrap justify-between items-start gap-2">
            <RadioButtons
                options={["Yes", "No"]}
                title="Provider or family/friend/caregiver concerned regarding cognition?"
                id="cognitive_screening"
                width="w-[49%]"
                value={formData.cognitive_screening}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Cardiovascular"
                id="cardiovascular"
                width="w-[49%]"
                value={formData.cardiovascular}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Diabetes"
                id="diabetes"
                width="w-[49%]"
                value={formData.diabetes}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Colorectal"
                id="colorectal"
                width="w-[49%]"
                value={formData.colorectal}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Cancer Screening"
                id="cancer_screening"
                width="w-[49%]"
                value={formData.cancer_screening}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Cervical Cancer"
                id="cervical_cancer"
                width="w-[49%]"
                value={formData.cervical_cancer}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Osteoporosis Screening"
                id="osteoporosis_screening"
                width="w-[49%]"
                value={formData.osteoporosis_screening}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Abdominal Aortic Aneurism (AAA) Screening"
                id="aaa_screening"
                width="w-[49%]"
                value={formData.aaa_screening}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Lung Cancer Screening"
                id="lung_cancer_screening"
                width="w-[49%]"
                value={formData.lung_cancer_screening}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Hepatitis C Screening"
                id="hepatitis_c_screening"
                width="w-[49%]"
                value={formData.hepatitis_c_screening}
                onChange={handleChange}
            />
        </div>
    )
}
