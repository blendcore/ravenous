import Business from './Business';

export default function BusinessList(props) {
    const { businessess } = props;
    return (
        <div class="row">
            {businessess.map((business) => (
                <div class="col-lg-4">
                    <Business
                        business={business}
                    />
                </div>
            ))}
        </div>
    )
}