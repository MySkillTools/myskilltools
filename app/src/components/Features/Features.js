import Item from "../FeatureItem/FeatureItem";

const Features = () => {
    return (
        <div className="row">

        {/* 
        <div className="card">
            <div className='card-header custom-card-header d-flex align-items-center justify-content-between'>
                <h5 className='mb-0'>Results</h5>
            </div>

            <div className="card-body">
                
            </div>
        </div>
        */}

        <h2 className='fraunces-font fw-bold'>Features</h2>

            <Item linkColor="#FF0000" />
            <Item linkColor="#00FF00" />
        </div>
    )
}

export default Features;