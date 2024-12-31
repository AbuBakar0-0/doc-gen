import InputWithLabel from "./ui/InputWithLabel"
import TextEditor from "./ui/TextEditor"

export const PhysiciansInfo = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-1/2 flex flex-wrap justify-between gap-x-2">
            <InputWithLabel
                title="Physician Name"
                id="physician_name"
                width="w-full"
                value={formData.physician_name}
                onChange={handleChange}
            />
            <InputWithLabel
                title="NPI"
                id="npi"
                width="w-full"
                value={formData.npi}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Address"
                id="physician_address"
                width="w-full"
                value={formData.physician_address}
                onChange={handleChange}
            />
            <InputWithLabel
                title="City"
                id="physician_city"
                width="w-full"
                value={formData.physician_city}
                onChange={handleChange}
            />
            <InputWithLabel
                title="State"
                id="physician_state"
                width="w-full"
                value={formData.physician_state}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Postal Code"
                id="physician_postal_code"
                width="w-full"
                value={formData.physician_postal_code}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Phone Number"
                id="physician_phone_number"
                width="w-full"
                value={formData.physician_phone_number}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Fax Number"
                id="physician_fax_number"
                width="w-full"
                value={formData.physician_fax_number}
                onChange={handleChange}
            />
            <TextEditor
                title="Diagnosis"
                id="diagnosis"
                width="w-full"
                value={formData.diagnosis} // Controlled value
                onChange={(content, id) => handleQuillChange(content, id)} // Pass to handleQuillChange
            />
        </div>
    )
}



