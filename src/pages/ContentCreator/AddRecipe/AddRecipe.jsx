import React, { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { FaMinusCircle } from 'react-icons/fa';
import { FaUser, FaInfoCircle } from 'react-icons/fa';

const AddRecipe = () => {
    const [ingredientFields, setIngredientFields] = useState([{ id: 1, value: '' }]);
    const [stepFields, setStepFields] = useState([{ id: 1, value: '' }]);
    const [tags, setTags] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const handleIngredientChange = (index, event) => {
        const values = [...ingredientFields];
        values[index].value = event.target.value;
        setIngredientFields(values);
    };

    const handleAddIngredient = () => {
        setIngredientFields([...ingredientFields, { id: ingredientFields.length + 1, value: '' }]);
    };

    const handleRemoveIngredient = (index) => {
        const values = [...ingredientFields];
        values.splice(index, 1);
        setIngredientFields(values);
    };

    const handleStepChange = (index, event) => {
        const values = [...stepFields];
        values[index].value = event.target.value;
        setStepFields(values);
    };

    const handleAddStep = () => {
        setStepFields([...stepFields, { id: stepFields.length + 1, value: '' }]);
    };

    const handleRemoveStep = (index) => {
        const values = [...stepFields];
        values.splice(index, 1);
        setStepFields(values);
    };

    const handleTagsChange = (event) => {
        const value = event.target.value;
        setTags(value);
        setCharacterCount(value.length);
    };

    return (
        <div className="max-w-md mx-auto">
            {/* Ingredient Row */}
            <div className="grid grid-cols-2 justify-center gap-3 mb-4">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full border border-gray-300 rounded-md py-2 px-4 bg-transparent text-gray-800"
                    />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {ingredientFields.map((field, index) => (
                        <div key={field.id} className="flex mb-2">
                            <input
                                type="text"
                                placeholder="ingredients"
                                className="w-full border border-gray-300 rounded-md py-2 px-4 mb-2 bg-transparent text-white"
                                value={field.value}
                                onChange={(e) => handleIngredientChange(index, e)}
                            />
                            {index !== 0 && (
                                <button onClick={() => handleRemoveIngredient(index)}>
                                    <FaMinusCircle className="text-white ml-2" />
                                </button>
                            )}
                        </div>
                    ))}
                    <button onClick={handleAddIngredient}>
                        <IoMdAddCircle className="text-white" />
                    </button>
                </div>
            </div>

            {/* Step Row */}
            {stepFields.map((field, index) => (
                <div key={field.id} className="flex items-center mb-4">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder={<FaUser />}
                            className="w-full border border-gray-300 rounded-md py-2 px-4 bg-transparent text-gray-800"
                        />
                    </div>
                    <div className="flex-1 ml-4">
                        <div className="flex mb-2">
                            <input
                                type="text"
                                placeholder={<FaUser />}
                                className="w-full border border-gray-300 rounded-md py-2 px-4 mb-2 bg-transparent text-white"
                                value={field.value}
                                onChange={(e) => handleStepChange(index, e)}
                            />
                            {index !== 0 && (
                                <button onClick={() => handleRemoveStep(index)}>
                                    <FaMinusCircle className="text-white" />
                                </button>
                            )}
                        </div>
                        <button onClick={handleAddStep}>
                            <IoMdAddCircle className="text-white" />
                        </button>
                    </div>
                </div>
            ))}

            {/* Tags Row */}
            <div className="flex items-center mb-4">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder={<FaUser />}
                        className="w-full border border-gray-300 rounded-md py-2 px-4 bg-transparent text-gray-800"
                        value={tags}
                        onChange={handleTagsChange}
                    />
                </div>
                <div className="flex-1 ml-4 flex items-center">
                    <FaInfoCircle className="text-gray-400 mr-2" />
                    <span>{characterCount}</span>
                </div>
            </div>

            {/* Submit Button */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
        </div>
    );
};

export default AddRecipe;
