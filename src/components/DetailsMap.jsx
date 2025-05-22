
import { useLoaderData, useNavigation } from 'react-router-dom';
import SingleProductDetails from './SingleProductDetails';
import Loader from './Loader';

const DetailsMap = () => {

    const navigation = useNavigation();
    if(navigation.state==='loading') return <Loader></Loader>
    const detailsData = useLoaderData();




    return (
        <div>
            {detailsData.map((product) => (
                <SingleProductDetails
                    product={product}
                    key={product.product_id}
                />
            ))}
        </div>
    );
};

export default DetailsMap;