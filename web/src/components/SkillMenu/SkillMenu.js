import React, { useState } from 'react';
import './SkillMenu.scss';

function SkillMenu() {
  const data = [
    {
      id: 1,
      sector: "Technology",
      categories: [
        {
          id: 1,
          name: "Software Development",
          skills: ["JavaScript", "Python", "Java"]
        },
        {
          id: 2,
          name: "IT Support",
          skills: ["Networks", "Hardware Maintenance", "Helpdesk"]
        }
      ]
    },
    {
      id: 2,
      sector: "Finance",
      categories: [
        {
          id: 1,
          name: "Accounting",
          skills: ["Taxation", "Bookkeeping", "Financial Planning"]
        },
        {
          id: 2,
          name: "Banking",
          skills: ["Loans", "Savings Accounts", "Investment"]
        }
      ]
    }
  ];

  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeSector, setActiveSector] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleSectorSelect = (sector) => {
    if (activeSector?.id === sector.id) {
      setActiveSector(null);
      setSelectedSector(null);
    } else {
      setActiveSector(sector);
      setSelectedSector(sector);
      setSelectedCategory(null);
      setActiveCategory(null);  // Reset active category when sector changes
    }
  };

  const handleCategorySelect = (category) => {
    if (activeCategory?.id === category.id) {
      setActiveCategory(null);
      setSelectedCategory(null);
    } else {
      setActiveCategory(category);
      setSelectedCategory(category);
    }
  };

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
                        <h5 className="fw-bold pt-1 text-primary fraunces-font">Sector</h5>
                        <div>
                            {data.map(sector => (
                                <button type="button"
                                    className={`item ${activeSector?.id === sector.id ? 'active' : ''}`}
                                    key={sector.id}
                                    onClick={() => handleSectorSelect(sector)}
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
                        <h5 className="fw-bold pt-1 text-primary fraunces-font">Category</h5>
                        <div>
                            {selectedSector?.categories.map(category => (
                                <button type="button"
                                    className={`item ${activeCategory?.id === category.id ? 'active' : ''}`}
                                    key={category.id}
                                    onClick={() => handleCategorySelect(category)}
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
                        <h5 className="fw-bold pt-1 text-primary fraunces-font">Skill</h5>
                        <div>
                            {selectedCategory?.skills.map(skill => (
                                <button type="button"
                                    className="item"
                                    key={skill}
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
