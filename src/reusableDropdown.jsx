import { React, useState } from 'react';

const ReusableDropdown = ({ options, handleSelected }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [optionsOpen, setoptionsOpen] = useState(false);

    const filterOption = options.filter((opt) => opt.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Search here'
                onClick={() => setoptionsOpen(true)}
            />
            {optionsOpen &&
                (
                    <ul>
                        {
                            filterOption.length > 0 ? (
                                filterOption.map((option) => (
                                    <li key={option} onClick={() => { setoptionsOpen(false); handleSelected(option); }}>{option}</li>
                                )))
                                :
                                (
                                    <li>no options matched</li>
                                )
                        }
                    </ul>
                )
            }
        </div>
    );

};

export default ReusableDropdown;