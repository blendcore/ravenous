import Business from './Business';

const BusinessList = ({ businessess }) => {
    return (
        <div class="container">
            <h2 className='mb-5'>Our Businesses</h2>
            <div class="row">
                {businessess.map((business) => (
                    <div class="col-lg-4">
                        <Business
                            key={business.name}
                            business={business}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BusinessList;