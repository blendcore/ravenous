import Business from './Business';

export default function BusinessList(props) {
    const { businessess } = props;
    return (
        <div class="container">
            <h2 className='mb-5'>Our Businesses</h2>
            <div class="row">
                {businessess.map((business) => (
                    <div class="col-lg-4">
                        <Business
                            business={business}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}