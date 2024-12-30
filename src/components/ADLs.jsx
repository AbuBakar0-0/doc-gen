import InputWithLabel from "./ui/InputWithLabel"


export const ADLs = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-full flex flex-wrap justify-start items-start gap-2">
            <InputWithLabel
                title="Walk and Transfer"
                id="walk_and_transfer"
                width="w-[49%]"
                value={formData.walk_and_transfer}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Dress and Groom"
                id="dress_and_groom"
                width="w-[49%]"
                value={formData.dress_and_groom}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Bathe or Shower"
                id="bathe_or_shower"
                width="w-[49%]"
                value={formData.bathe_or_shower}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Feed Yourself"
                id="feed_yourself"
                width="w-[49%]"
                value={formData.feed_yourself}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Laundry"
                id="laundry"
                width="w-[49%]"
                value={formData.laundry}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Manage Money"
                id="manage_money"
                width="w-[49%]"
                value={formData.manage_money}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Make Meals"
                id="make_meals"
                width="w-[49%]"
                value={formData.make_meals}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Do Shopping"
                id="do_shopping"
                width="w-[49%]"
                value={formData.do_shopping}
                onChange={handleChange}
            />
        </div>
    )
}
