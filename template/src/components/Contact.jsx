import React from 'react';

const Contact = ({phone, address}) => {
    return (
        <div className="p-6 bg-gray-100 text-center">
            <p className="text-lg">Phone: {phone}</p>
            <p className="text-lg">Address: {address} </p>
        </div>
    );
};

export default Contact;