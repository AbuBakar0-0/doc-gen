import InputWithLabel from "./ui/InputWithLabel"

export const Vitals = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-full flex flex-wrap justify-start items-start gap-2">
            <InputWithLabel
                title="Vitals Date Time"
                id="date_time"
                width="w-[16%]"
                value={formData.date_time}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Blood Pressure (BP)"
                id="bp"
                width="w-[16%]"
                value={formData.bp}
                onChange={handleChange}
            />
            <InputWithLabel
                title="BP Location"
                id="bp_location"
                width="w-[16%]"
                value={formData.bp_location}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Patient Position"
                id="patient_position"
                width="w-[16%]"
                value={formData.patient_position}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Cuff Size"
                id="cuff_size"
                width="w-[16%]"
                value={formData.cuff_size}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Pulse"
                id="pulse"
                width="w-[16%]"
                value={formData.pulse}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Temperature"
                id="temp"
                width="w-[16%]"
                value={formData.temp}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Temperature Source"
                id="temp_src"
                width="w-[16%]"
                value={formData.temp_src}
                onChange={handleChange}
            />
            <InputWithLabel
                title="SpO2 (Oxygen Saturation)"
                id="sp_02"
                width="w-[16%]"
                value={formData.sp_02}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Weight"
                id="weight"
                width="w-[16%]"
                value={formData.weight}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Height"
                id="height"
                width="w-[16%]"
                value={formData.height}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Temperature in Celsius"
                id="temp_converted_to_c"
                width="w-[16%]"
                value={formData.temp_converted_to_c}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Height in Meters"
                id="height_in_meter"
                width="w-[16%]"
                value={formData.height_in_meter}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Body Mass Index (BMI)"
                id="bmi"
                width="w-[16%]"
                value={formData.bmi}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Body Surface Area (BSA)"
                id="bsa"
                width="w-[16%]"
                value={formData.bsa}
                onChange={handleChange}
            />
        </div>
    )
}
