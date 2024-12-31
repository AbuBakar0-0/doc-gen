import RadioButtons from "./ui/RadioButtons"


export const ADLs = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-full flex flex-wrap justify-between items-start gap-2">
            <RadioButtons
                title="Walk and transfer into and out of bed and chair?"
                id="walk_and_transfer"
                options={["Yes", "No"]}
                value={formData.walk_and_transfer} // Pass the current value
                handleChange={handleChange} // Pass the change handler
                width="w-[20%]"
            />
            <RadioButtons
                title="Dress and groom yourself?"
                id="dress_and_groom"
                options={["Yes", "No"]}
                value={formData.dress_and_groom} // Pass the current value
                handleChange={handleChange} // Pass the change handler
                width="w-[20%]"
            />
            <RadioButtons
                title="Bathe or Shower yourself?"
                id="bathe_or_shower"
                options={["Yes", "No"]}
                value={formData.bathe_or_shower} // Pass the current value
                handleChange={handleChange} // Pass the change handler
                width="w-[20%]"
            />
            <RadioButtons
                title="Feed yourself?"
                id="feed_yourself"
                options={["Yes", "No"]}
                value={formData.feed_yourself} // Pass the current value
                handleChange={handleChange} // Pass the change handler
                width="w-[20%]"
            />
            <RadioButtons
                title="Do your laundry/housekeeping?"
                id="laundry"
                options={["Yes", "No"]}
                value={formData.laundry} // Pass the current
                handleChange={handleChange} // Pass the change handler
                width="w-[20%]"
            />
            <RadioButtons
                title="Manage your money, pay your bills and track your expenses?"
                id="manage_money"
                options={["Yes", "No"]}
                value={formData.manage_money} // Pass the current
                handleChange={handleChange} // Pass the change handler
                width="w-[20%]"
            />
            <RadioButtons
                title="Make your own meals?"
                id="make_meals"
                options={["Yes", "No"]}
                value={formData.make_meals} // Pass the current
                handleChange={handleChange} // Pass the change handler
                width="w-[20%]"
            />
            <RadioButtons
                title="Do your own shopping?"
                id="do_shopping"
                options={["Yes", "No"]}
                value={formData.do_shopping} // Pass the current
                handleChange={handleChange} // Pass the change handler
                width="w-[20%]"
            />
        </div>
    )
}
