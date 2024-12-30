import React from 'react'
import InputWithLabel from './ui/InputWithLabel'

export const AssessmentPlan = ({ formData, handleChange, handleQuillChange }) => {
    return (
        <div className="w-full flex flex-wrap justify-start items-start gap-2">
            <InputWithLabel
                title="Assessment Plan 2"
                id="assessment_plan_2"
                width="w-[49%]"
                value={formData.assessment_plan_2}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Problem List Items"
                id="problem_list_items"
                width="w-[49%]"
                value={formData.problem_list_items}
                onChange={handleChange}
            />
            <InputWithLabel
                title="BMI Counseling"
                id="bmi_counseling"
                width="w-[49%]"
                value={formData.bmi_counseling}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Depression Screening"
                id="depression_screening"
                width="w-[49%]"
                value={formData.depression_screening}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Depression Detail"
                id="depression_detail"
                width="w-[49%]"
                value={formData.depression_detail}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Doctor's Name with Title"
                id="doctors_name_with_title"
                width="w-[49%]"
                value={formData.doctors_name_with_title}
                onChange={handleChange}
            />
            <InputWithLabel
                title="ROS Constitutional"
                id="ros2_constitutional"
                width="w-[49%]"
                value={formData.ros2_constitutional}
                onChange={handleChange}
            />
            <InputWithLabel
                title="ROS HENT"
                id="ros2_hent"
                width="w-[49%]"
                value={formData.ros2_hent}
                onChange={handleChange}
            />
            <InputWithLabel
                title="ROS Eyes"
                id="ros2_eyes"
                width="w-[49%]"
                value={formData.ros2_eyes}
                onChange={handleChange}
            />
            <InputWithLabel
                title="ROS Respiratory"
                id="ros2_respiratory"
                width="w-[49%]"
                value={formData.ros2_respiratory}
                onChange={handleChange}
            />
            <InputWithLabel
                title="ROS Cardiovascular"
                id="ros2_cardiovascular"
                width="w-[49%]"
                value={formData.ros2_cardiovascular}
                onChange={handleChange}
            />
            <InputWithLabel
                title="ROS Gastrointestinal"
                id="ros2_gastrointestinal"
                width="w-[49%]"
                value={formData.ros2_gastrointestinal}
                onChange={handleChange}
            />
            <InputWithLabel
                title="ROS Musculoskeletal"
                id="ros2_musculoskeletal"
                width="w-[49%]"
                value={formData.ros2_musculoskeletal}
                onChange={handleChange}
            />
            <InputWithLabel
                title="ROS Neurological"
                id="ros2_neurological"
                width="w-[49%]"
                value={formData.ros2_neurological}
                onChange={handleChange}
            />
            <InputWithLabel
                title="ROS Psychiatric"
                id="ros2_psychiatric"
                width="w-[49%]"
                value={formData.ros2_psychiatric}
                onChange={handleChange}
            />
        </div>
    )
}
