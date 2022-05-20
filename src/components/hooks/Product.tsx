import {FC, Fragment, useEffect, useState} from "react";
import {Button, Table} from "react-bootstrap";
import ProductModel from '../../model/Product';

const Products: FC<any> = () => {

    const [products, setProducts] = useState<Array<ProductModel>>([]);
    const [error, setError] = useState<string|null>(null);

    useEffect( () => {
        fetch('http://localhost:3000/product', {
            method: "get"
        }).then( response => response.json())
            .then( data => setProducts(data))
            .catch( err => setError(err) );
    }, []);

    return (
        <Fragment>
            <section className="heading">
                <h1>Product</h1>
                <div className="btn-group ">
                    <Button variant="primary" size="sm" disabled>
                        Create new one
                    </Button>
                    <Button variant="secondary"  size="sm" disabled>
                        Create Many
                    </Button>
                </div>

            </section>

            <Table>
                <thead>
                <tr>
                    <th>Id #</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Picture</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Available</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    products?.map( product =>
                        (
                            <tr key={product?.id}>
                                <td className="align-middle">{product?.id}</td>
                                <td className="align-middle">{product?.name}</td>
                                <td className="text-truncate align-middle">{product?.description.slice(0, 95)}</td>
                                <td className="align-middle"><img src={product?.picture} alt={"picture of " + product?.name} width="100" height="50" /></td>
                                <td className="align-middle">{product?.price}</td>
                                <td className="align-middle">{product?.stock}</td>
                                <td className="align-middle">{ (product?.isAvailable) ? "Yes" : "No" }</td>
                                <td className="align-middle">
                                    <div className="btn-group">
                                        <Button variant="primary" disabled>
                                            See
                                        </Button>
                                        <Button variant="danger" disabled>
                                            Delete
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </Table>
        </Fragment>
    )
};

export default Products;