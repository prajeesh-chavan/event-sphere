import Lottie from 'lottie-react';
import React from 'react';
import animationData from '../assets/unauthorized.json';

const UnauthorizedPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <Lottie animationData={animationData} className="w-64 h-64 mx-auto" />
                <p className="mt-4 text-lg text-gray-700">Unauthorized Access</p>
                <p className="mt-2 text-gray-500">You do not have permission to view this page.</p>
                <a href="/" className="mt-6 inline-block px-6 py-2 text-white bg-sky-500 rounded hover:bg-sky-600">Go to Homepage</a>
            </div>
        </div>
    );
};

export default UnauthorizedPage;
