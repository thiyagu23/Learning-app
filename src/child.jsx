import React, { memo } from "react";

const Child = memo(({ handleClick }) => {
    console.log('Child rendered');
    return <button onClick={handleClick}>Click Me</button>;
});

export default Child; 