export default function Business(props) {
    const { business } = props;
    return (
        <div className="card mb-3">
            <img src={business.imageSrc} className="card-img-top" alt="Business Image" title="Business Image" />
            <div className="card-body">
                <h3 className="card-title">{business.name}</h3>
                <div class="row">
                    <div class="col">
                        <p className="card-text">{business.address}</p>
                        <p className="card-text">{business.city}</p>
                        <p className="card-text">{business.state}</p>
                        <p className="card-text">{business.zipCode}</p>
                    </div>
                    <div class="col">
                        <p className="card-text">{business.category}</p>
                        <p className="card-text">{business.rating}</p>
                        <p className="card-text">{business.reviewCount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}