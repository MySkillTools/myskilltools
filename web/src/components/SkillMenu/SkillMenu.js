import React, { useState, useEffect } from 'react';
import './SkillMenu.scss';

import Card from '../styled/Card/Card';

import { useApiData } from '../../hooks/apiHooks';

function Prompt({ name }) {
    return (
        <div className="fw-bold fs-5">
            <span className=''>Choose a </span>
            <span className='fraunces-font text-primary'>{name}</span>
        </div>
    );
}

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

    const arrow = (
        <div className='d-flex justify-content-center'>
            <div className='py-2'>
                <i className="fa-solid fa-angles-down fa-2xl text-primary"></i>
            </div>
        </div>
    )

    const body = (
        <div>

            {/* Sectors */}
            <Prompt name='Sector' />
            <div className="px-2 sector-menu mb-2">

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
            {arrow}

            {/* Categories */}
            <Prompt name='Category' />
            <div className="px-2 sector-menu mb-2">


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
            {arrow}


            {/* Skills */}
            <Prompt name='Skill' />
            <div className="px-2 sector-menu">


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



        </div>);

    return (
        <Card titleText='List' body={body} />
    )
}

export default SkillMenu;