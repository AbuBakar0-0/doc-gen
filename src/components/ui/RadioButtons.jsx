import { Label } from "@/components/ui/Label";

const RadioButtons = ({ title = "", id, width = "w-1/4", options = [], value, handleChange }) => {
    return (
        <div className={`${width} flex flex-col justify-start items-start gap-1.5 my-2`}>
            <Label htmlFor={id}>{title}</Label>
            <div className="flex flex-row justify-start items-center gap-4 mt-1.5">
                {options.map((item, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            id={id}
                            name={id}
                            value={item}
                            checked={index === 0 || value === item} // Select the first option or the one matching the value
                            onChange={handleChange} // Trigger handleChange when selected
                        />
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RadioButtons;
