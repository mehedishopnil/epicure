import React, { useState, useEffect } from 'react';

const Statistics = () => {
    // Dummy data for demonstration
    const [likes, setLikes] = useState(1000);
    const [totalViews, setTotalViews] = useState(50000);
    const [newViewsToday, setNewViewsToday] = useState(2000);
    const [newLikesToday, setNewLikesToday] = useState(50);

    // Fetching data from the database (dummy useEffect)
    useEffect(() => {
        // Dummy fetch data from the database
        // For demonstration purposes, we'll just set some random values after a timeout
        const fetchData = () => {
            setTimeout(() => {
                setLikes(1500);
                setTotalViews(55000);
                setNewViewsToday(2500);
                setNewLikesToday(100);
            }, 2000); // Simulating network delay
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-[#D9D9D9] text-3xl mb-5">Statistics</h1>
            <div className="mb-4">
                <h2 className="text-[#D9D9D9] text-xl mb-2">Number of Likes:</h2>
                <p className="text-[#D9D9D9]">{likes}</p>
            </div>
            <div className="mb-4">
                <h2 className="text-[#D9D9D9] text-xl mb-2">Total Number of Views:</h2>
                <p className="text-[#D9D9D9]">{totalViews}</p>
            </div>
            <div className="mb-4">
                <h2 className="text-[#D9D9D9] text-xl mb-2">Number of New Views Today:</h2>
                <p className="text-[#D9D9D9]">{newViewsToday}</p>
            </div>
            <div className="mb-4">
                <h2 className="text-[#D9D9D9] text-xl mb-2">Number of New Likes Today:</h2>
                <p className="text-[#D9D9D9]">{newLikesToday}</p>
            </div>
        </div>
    );
};

export default Statistics;
