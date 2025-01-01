import InputWithLabel from "./ui/InputWithLabel"


export const SocialDeterminants = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-full flex flex-wrap justify-start items-start gap-2">
            <InputWithLabel
                title="Financial Resource Strain"
                id="social_date"
                width="w-[32.8%]"
                value={formData.social_date}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Difficulty in Paying Living Expenses"
                id="difficulty_in_paying_living_expenses"
                width="w-[32.8%]"
                value={formData.difficulty_in_paying_living_expenses}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Food Insecurity"
                id="food_insecurity"
                width="w-[32.8%]"
                value={formData.food_insecurity}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Transportation Needs"
                id="transportation_needs"
                width="w-[32.8%]"
                value={formData.transportation_needs}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Lack of Transportation (Medical)"
                id="lack_of_transportation_medical"
                width="w-[32.8%]"
                value={formData.lack_of_transportation_medical}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Lack of Transportation (Non-Medical)"
                id="lack_of_transportation_non_medical"
                width="w-[32.8%]"
                value={formData.lack_of_transportation_non_medical}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Physical Activity"
                id="physical_activity"
                width="w-[32.8%]"
                value={formData.physical_activity}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Stress"
                id="stress"
                width="w-[32.8%]"
                value={formData.stress}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Social Connections"
                id="social_connections"
                width="w-[32.8%]"
                value={formData.social_connections}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Intimate Partner Violence"
                id="intimate_partner_violence"
                width="w-[32.8%]"
                value={formData.intimate_partner_violence}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Housing Stability"
                id="housing_stability"
                width="w-[32.8%]"
                value={formData.housing_stability}
                onChange={handleChange}
            />
        </div>
    )
}
