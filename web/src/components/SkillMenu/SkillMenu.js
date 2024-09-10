import React, { useState, useEffect } from 'react';
import './SkillMenu.scss';

/**
 * 
 * [
    {
        "sector_id": "1",
        "color": "#4287f5",
        "name": "IT",
        "last_modified": null
    },
    {
        "sector_id": "2",
        "color": "#f54242",
        "name": "General",
        "last_modified": null
    }
]
 */

// Simulated API call functions
const fetchSectors = () => {
    return new Promise(resolve => setTimeout(() => resolve([
        { id: 1, sector: "Technology", color: "#4287f5" },  // Assigning colors
        { id: 2, sector: "Finance", color: "#f54242" }
    ]), 100));
};

const fetchCategories = (sectorId) => {
    const data = {
        1: [
            { id: 1, name: "Software Development", color: "#f5a142" },
            { id: 2, name: "IT Support", color: "#42f554" }
        ],
        2: [
            { id: 3, name: "Accounting", color: "#f542f5" },
            { id: 4, name: "Banking", color: "#42f5e9" }
        ]
    };
    return new Promise(resolve => setTimeout(() => resolve(data[sectorId]), 100));
};

const fetchSkills = (categoryId) => {
    const data = {
        1: ["JavaScript", "Python", "Java"],
        2: ["Networks", "Hardware Maintenance", "Helpdesk"],
        3: ["Taxation", "Bookkeeping", "Financial Planning"],
        4: ["Loans", "Savings Accounts", "Investment"]
    };
    return new Promise(resolve => setTimeout(() => resolve(data[categoryId]), 100));
};

function SkillMenu() {
    const [sectors, setSectors] = useState([]);
    const [categories, setCategories] = useState([]);
    const [skills, setSkills] = useState([]);

    const [selectedSector, setSelectedSector] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Fetch sectors initially
    useEffect(() => {
        fetchSectors().then(setSectors);
    }, []);

    // Fetch categories when a sector is selected
    useEffect(() => {
        if (selectedSector) {
            fetchCategories(selectedSector.id).then(setCategories);
            setSkills([]);  // Clear skills when changing sector
        }
    }, [selectedSector]);

    // Fetch skills when a category is selected
    useEffect(() => {
        if (selectedCategory) {
            fetchSkills(selectedCategory.id).then(setSkills);
        }
    }, [selectedCategory]);

    return (
        <div className="card my-3">
            <div className='card-header custom-card-header d-flex align-items-center justify-content-between'>
                <h5 className='mb-0'>Explore</h5>
            </div>

            <div className="card-body">
                <div className='row'>
                    {/* Sectors */}
                    <div className="col-md-4">
                        <div className="px-2 sector-menu">
                            <h5 className="fw-bold pt-1 text-primary">Sector</h5>
                            <div>
                                {sectors.map(sector => (
                                    <button type="button"
                                            className={`item ${selectedSector?.id === sector.id ? 'active' : ''}`}
                                            key={sector.id}
                                            onClick={() => setSelectedSector(sector)}
                                            style={{
                                                backgroundColor: selectedSector?.id === sector.id ? sector.color : '#FFF',
                                                borderColor: sector.color,
                                                color: selectedSector?.id === sector.id ? '#fff' : sector.color
                                            }}
                                    >
                                        {sector.sector}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
          
                    {/* Categories */}
                    <div className="col-md-4">
                        <div className="px-2 sector-menu">
                            <h5 className="fw-bold pt-1 text-primary">Category</h5>
                            <div>
                                {categories.map(category => (
                                    <button type="button"
                                            className={`item ${selectedCategory?.id === category.id ? 'active' : ''}`}
                                            key={category.id}
                                            onClick={() => setSelectedCategory(category)}
                                            style={{
                                                backgroundColor: selectedCategory?.id === category.id ? category.color : '#FFF',
                                                borderColor: category.color,
                                                color: selectedCategory?.id === category.id ? '#fff' : category.color
                                            }}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
          
                    {/* Skills */}
                    <div className="col-md-4">
                        <div className="px-2 sector-menu">
                            <h5 className="fw-bold pt-1 text-primary">Skill</h5>
                            <div>
                                {skills.map((skill, index) => (
                                    <button type="button"
                                            className="item"
                                            key={index}
                                            style={{
                                                //backgroundColor: selectedCategory ? selectedCategory.color : '#FFF',
                                                //borderColor: selectedCategory ? selectedCategory.color : '#ccc',
                                                //color: '#fff'
                                            }}
                                    >
                                        {skill}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillMenu;



    // Fetch sectors initially
    //const { data: sectors, loading: loadingSectors, error: errorSectors } = useApiData('/sectors'); // API endpoint for sectors

    // Fetch categories when a sector is selected
    //const { data: categories, loading: loadingCategories, error: errorCategories } = useApiData(
    //    selectedSector ? `/sectors/${selectedSector.id}/categories` : null
    //);
 
    // Fetch skills when a category is selected
    //const { data: skills, loading: loadingSkills, error: errorSkills } = useApiData(
    //     selectedCategory ? `/categories/${selectedCategory.id}/skills` : null
    // );