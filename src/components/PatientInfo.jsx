"use client";

import InputWithLabel from "./ui/InputWithLabel";
import RadioButtons from "./ui/RadioButtons";

const PatientInfo = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-1/2 flex flex-wrap justify-between gap-x-2">
            <InputWithLabel
                title="Date"
                id="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                width="w-full"
            />
            <InputWithLabel
                title="First Name"
                id="first_name"
                value={formData.first_name}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Middle Initial"
                id="middle_initial"
                value={formData.middle_initial}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Last Name"
                id="last_name"
                value={formData.last_name}
                onChange={handleChange}
            />
            <InputWithLabel
                title="DOB"
                id="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                width="w-[49%]"
            />
            <RadioButtons
                title="Gender"
                id="gender"
                options={["Male", "Female"]}
                value={formData.gender} // Pass the current value
                handleChange={handleChange} // Pass the change handler
                width="w-[49%]"
            />
            <InputWithLabel
                title="Address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                width="w-full"
            />
            <InputWithLabel
                title="City"
                id="city"
                value={formData.city}
                onChange={handleChange}
                width="w-full"
            />
            <InputWithLabel
                title="State"
                id="state"
                value={formData.state}
                onChange={handleChange}
                width="w-full"
            />
            <InputWithLabel
                title="Postal Code"
                id="postal_code"
                value={formData.postal_code}
                onChange={handleChange}
                width="w-full"
            />
            <InputWithLabel
                title="Patient Phone Number"
                id="patient_phone_number"
                value={formData.patient_phone_number}
                onChange={handleChange}
                width="w-full"
            />
            <InputWithLabel
                title="Primary Insurance"
                id="primary_insurance"
                value={formData.primary_insurance}
                onChange={handleChange}
                width="w-[49%]"
            />
            <InputWithLabel
                title="Policy Number"
                id="ppn1"
                value={formData.ppn1}
                onChange={handleChange}
                width="w-[49%]"
            />
            <InputWithLabel
                title="Private Insurance"
                id="private_insurance"
                value={formData.private_insurance}
                onChange={handleChange}
                width="w-[49%]"
            />
            <InputWithLabel
                title="Policy Number"
                id="ppn2"
                value={formData.ppn2}
                onChange={handleChange}
                width="w-[49%]"
            />
            <InputWithLabel
                title="Height"
                id="height"
                value={formData.height}
                onChange={handleChange}
                width="w-[49%]"
            />
            <InputWithLabel
                title="Weight"
                id="weight"
                value={formData.weight}
                onChange={handleChange}
                width="w-[49%]"
            />
        </div>
    );
};

export default PatientInfo;
