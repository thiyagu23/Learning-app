import React from 'react';

const Loder = (WrappedComponent) => {
    return (props) => {
        if (props.isLoading) {
            return <div>Loading...</div>;
        }
        return <WrappedComponent {...props} />;
    };
};

export default Loder;