import {FC, Fragment, useState} from "react";
import {Button, Table} from "react-bootstrap";
import ProductModel from '../../model/Product';

const Products: FC<any> = () => {

    const [products, setProducts] = useState<Array<ProductModel>>([]);

    return (
        <Fragment>
            <h1>Product</h1>
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
                                <td>product?.id</td>
                                <td>product?.name</td>
                                <td>product?.description</td>
                                <td>product?.picture</td>
                                <td>product?.price</td>
                                <td>product?.stock</td>
                                <td>product?.available</td>
                                <td>
                                    <div className="btn-group">
                                        <Button variant="primary">
                                            See
                                        </Button>
                                        <Button variant="danger">
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