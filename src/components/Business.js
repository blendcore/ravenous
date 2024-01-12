import './Business.css';

const Business = ({ business }) => {
    return (
        <div className="card mb-3">
            <div class="ratio ratio-16x9">
                <img src={business.imageSrc} className="object-fit-cover" alt={business.name} title="Business Image" />
            </div>
            <div className="card-body">
                <h3 className="card-title">{business.name}</h3>
                <div className="row">
                    <div className="col">
                        <p className="">{business.address}</p>
                        <p className="">{business.city}</p>
                        <p className="">{business.state}</p>
                        <p className="">{business.zipCode}</p>
                    </div>
                    <div className="col">
                        <p className="">{business.category}</p>
                        <p className="">{business.rating}</p>
                        <p className="">{business.reviewCount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business;