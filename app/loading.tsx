
import React from 'react';

const loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Loading...</h1>
                <p className="mt-2">Please wait while we fetch the user data.</p>
            </div>
        </div>
    );
};

export default loading;