import './PoweredBy.scss'

const PoweredBy = () => {
    return (
        <div className="row py-4">
            <h2 className='fraunces-font fw-bold mb-3'>Powered By</h2>
            
            <div>
                <i className="devicon-react-original colored powered-by-icon"></i>
                <i className="devicon-bootstrap-plain colored powered-by-icon"></i>
                <i className="devicon-sass-original colored powered-by-icon"></i>
            </div>
        </div>
    );
}

export default PoweredBy;