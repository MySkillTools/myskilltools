import React, { useState, useEffect } from 'react';
import './SkillMenu.scss';

import Card from '../styled/Card/Card';

import { useApiData } from '../../hooks/apiHooks';

/*
const fetchSectors = async () => {
    try {
      const response = await fetch('/sectors');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
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
*/
//const fetchSkills = (categoryId) => {
//    const data = {
//        1: ["JavaScript", "Python", "Java"],
//        2: ["Networks", "Hardware Maintenance", "Helpdesk"],
//        3: ["Taxation", "Bookkeeping", "Financial Planning"],
//        4: ["Loans", "Savings Accounts", "Investment"]
//    };
//    return new Promise(resolve => setTimeout(() => resolve(data[categoryId]), 100));
//};

function SkillMenu() {
    //const [sectors, setSectors] = useState([]);
    const { data: sectors, loading: loadingSectors, error: errorSectors } = useApiData('/sectors'); 
    const [selectedSector, setSelectedSector] = useState(null);

    //console.log(selectedSector);
    const { data: categories, loading: loadingCategories, error: errorCategories } = useApiData(
        selectedSector ? `/categories?sector_id=${selectedSector.sector_id}` : null
    );    
    const [selectedCategory, setSelectedCategory] = useState(null);

    const { data: skills, loading: loadingSkills, error: errorSkills } = useApiData(
        selectedCategory ? `/skills?category_id=${selectedCategory.category_id}` : null
    );

    //console.log(skills)
    

    //const [categories, setCategories] = useState([]);
    //const [skills, setSkills] = useState([]);


    // Fetch sectors initially
    //useEffect(() => {
    //    fetchSectors().then(setSectors);
    //}, []);

    // Fetch categories when a sector is selected
    //useEffect(() => {
    //    if (selectedSector) {
    //        fetchCategories(selectedSector.sector_id).then(setCategories);
    //        setSkills([]);  // Clear skills when changing sector
    //    }
    //}, [selectedSector]);

    // Fetch skills when a category is selected
    //useEffect(() => {
    //    if (selectedCategory) {
    //        fetchSkills(selectedCategory.category_id).then(setSkills);
    //    }
    //}, [selectedCategory]);

    const body = (
        <div>
        
        {/* Sectors */}    
        <div className="fw-bold fs-5">
            <span className=''>Choose a </span>
            <span className='fraunces-font text-primary'>Sector</span>
        </div>
        
        <div className="px-2 sector-menu mb-2">

                    
                            <div>
                                {sectors && sectors.map(sector => (
                                    <button type="button"
                                            className={`item ${selectedSector?.sector_id === sector.sector_id ? 'active' : ''}`}
                                            key={sector.sector_id}
                                            onClick={() => setSelectedSector(sector)}
                                            style={{
                                                backgroundColor: selectedSector?.sector_id === sector.sector_id ? sector.color : '#FFF',
                                                borderColor: sector.color,
                                                color: selectedSector?.sector_id === sector.sector_id ? '#fff' : sector.color
                                            }}
                                    >
                                        {sector.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    
          
                    {/* Categories */}
                    <div className="fw-bold fs-5">
            <span className=''>Choose a </span>
            <span className='fraunces-font text-primary'>Category</span>
        </div>
                        <div className="px-2 sector-menu mb-2">
                            <h5 className="fw-bold pt-1 text-primary">Category</h5>
                            <div>
                                {categories && categories.map(category => (
                                    <button type="button"
                                            className={`item ${selectedCategory?.category_id === category.category_id ? 'active' : ''}`}
                                            key={category.category_id}
                                            onClick={() => setSelectedCategory(category)}
                                            style={{
                                                backgroundColor: selectedCategory?.category_id === category.category_id ? category.color : '#FFF',
                                                borderColor: category.color,
                                                color: selectedCategory?.category_id === category.category_id ? '#fff' : category.color
                                            }}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    
          
                    {/* Skills */}
                    <div className="fw-bold fs-5">
            <span className=''>Choose a </span>
            <span className='fraunces-font text-primary'>Skill</span>
        </div>
                        <div className="px-2 sector-menu">
                            <h5 className="fw-bold pt-1 text-primary">Skill</h5>
                            <div>
                                {skills && skills.map((skill, index) => (
                                    <button type="button"
                                            className="item"
                                            key={index}
                                            style={{
                                                //backgroundColor: selectedCategory ? selectedCategory.color : '#FFF',
                                                //borderColor: selectedCategory ? selectedCategory.color : '#ccc',
                                                //color: '#fff'
                                            }}
                                    >
                                        {skill.name.toString()}
                                    </button>
                                ))}
                            </div>
                        </div>
                    
                
    </div>);

    /*
    return (
        <div className="card">
            <div className='card-header custom-card-header d-flex align-items-center justify-content-between'>
                <h5 className='mb-0'>List</h5>
            </div>

            <div className="card-body">
                
               
            </div>
        </div>
    );
    */

    return (
        <Card titleText='List' body={body} />
    )
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