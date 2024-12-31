import React, { useState } from 'react';
import InputWithLabel from './ui/InputWithLabel';
import TextEditor from './ui/TextEditor';
import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';

export const AssessmentPlan = ({ formData, setFormData, handleChange, handleQuillChange }) => {
    // Handler to add a new doctor's name input
    const handleAddDoctor = () => {
        setFormData((prev) => ({
            ...prev,
            doctors_name_with_title: [
                ...prev.doctors_name_with_title,
                "", // Empty string for new input
            ],
        }));
    };

    // Handler to update doctor's name input
    const handleDoctorNameChange = (index, value) => {
        setFormData((prev) => ({
            ...prev,
            doctors_name_with_title: prev.doctors_name_with_title.map((name, idx) =>
                idx === index ? value : name
            ),
        }));
    };

    // Handler to delete a doctor's name input (ensuring there's at least one)
    const handleDeleteDoctor = (index) => {
        if (formData.doctors_name_with_title.length > 1) {
            setFormData((prev) => ({
                ...prev,
                doctors_name_with_title: prev.doctors_name_with_title.filter((_, idx) => idx !== index),
            }));
        }
    };

    return (
        <div className="w-full flex flex-wrap justify-start items-start gap-2">
            <InputWithLabel
                title="Assessment and Plan"
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
            <TextEditor
                title="Depression Detail"
                id="depression_detail"
                width="w-[49%] mb-10"
                value={formData.depression_detail}
                onChange={(content, id) => handleQuillChange(content, id)}
            />

            {/* Render the list of doctor's name input fields dynamically */}
            <div className='w-[44%] flex flex-col '>
                {formData.doctors_name_with_title.map((doctorName, index) => (
                    <div key={index} className="flex gap-2 w-full">
                        <InputWithLabel
                            title="Doctor's Name with Title"
                            id={`doctors_name_with_title_${index}`}
                            width="w-[95.5%]"
                            value={doctorName}
                            onChange={(e) => handleDoctorNameChange(index, e.target.value)}
                        />
                        <Button
                            className="mt-7"
                            onClick={() => handleDeleteDoctor(index)}
                            disabled={formData.doctors_name_with_title.length === 1}
                        >
                            Delete
                        </Button>
                    </div>
                ))}

            </div>
            {/* Button to add a new doctor's name input field */}
            <Button className="mt-7" onClick={handleAddDoctor}>
                Add +
            </Button>

            <Divider title="Review of Systems (ROS)" />
            <InputWithLabel
                title="Constitutional"
                id="ros2_constitutional"
                width="w-[32%]"
                value={formData.ros2_constitutional}
                onChange={handleChange}
            />
            <InputWithLabel
                title="HENT"
                id="ros2_hent"
                width="w-[32%]"
                value={formData.ros2_hent}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Eyes"
                id="ros2_eyes"
                width="w-[32%]"
                value={formData.ros2_eyes}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Respiratory"
                id="ros2_respiratory"
                width="w-[32%]"
                value={formData.ros2_respiratory}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Cardiovascular"
                id="ros2_cardiovascular"
                width="w-[32%]"
                value={formData.ros2_cardiovascular}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Gastrointestinal"
                id="ros2_gastrointestinal"
                width="w-[32%]"
                value={formData.ros2_gastrointestinal}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Musculoskeletal"
                id="ros2_musculoskeletal"
                width="w-[32%]"
                value={formData.ros2_musculoskeletal}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Neurological"
                id="ros2_neurological"
                width="w-[32%]"
                value={formData.ros2_neurological}
                onChange={handleChange}
            />
            <InputWithLabel
                title="Psychiatric"
                id="ros2_psychiatric"
                width="w-[32%]"
                value={formData.ros2_psychiatric}
                onChange={handleChange}
            />
        </div>
    );
};
