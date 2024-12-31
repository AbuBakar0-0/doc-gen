import RadioButtons from "./ui/RadioButtons"
import { Divider } from './ui/Divider';


export const PreviousHospitalization = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-full flex flex-wrap justify-between items-start gap-2">
            <RadioButtons
                options={["Yes", "No"]}
                title="Any hospitalizations or ED visits within the last 12 months?"
                id="previous_hospitalization"
                width="w-[49%]"
                value={formData.previous_hospitalization}
                onChange={handleChange}
            />
            <Divider title={"Advance Care Planning"} />
            <RadioButtons
                options={["Yes", "No"]}
                title="Living Will"
                id="living_will"
                width="w-[23%]"
                value={formData.living_will}
                onChange={handleChange}
            />
            <RadioButtons
                options={["Yes", "No"]}
                title="Durable POA for healthcare"
                id="durable_poa"
                width="w-[23%]"
                value={formData.durable_poa}
                onChange={handleChange}
            />
            <RadioButtons
                options={["Yes", "No"]}
                title="Advanced directive"
                id="advance_directive"
                width="w-[23%]"
                value={formData.advance_directive}
                onChange={handleChange}
            />
            <RadioButtons
                options={["Yes", "No"]}
                title="Provider agrees with end of life decisions"
                id="end_of_life_decisions"
                width="w-[23%]"
                value={formData.end_of_life_decisions}
                onChange={handleChange}
            />
        </div>
    )
}
