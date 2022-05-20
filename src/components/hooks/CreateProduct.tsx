import {FC, FormEvent, MouseEvent, useState} from 'react';
import {useForm} from "react-hook-form";
import ProductModel from "../../model/Product";
import {Button, Col, Row} from "react-bootstrap";

const CreateProduct: FC<any> = () => {

    const [available, setAvailable ] = useState<boolean>(true);
    const { register, handleSubmit, formState: { errors } } = useForm<Omit<ProductModel, "id">>();
    const onSubmit: (data:FormEvent<HTMLFormElement>) => void = (data: FormEvent<HTMLFormElement>) => console.log(data);

    const toggleAvailable = (e: MouseEvent<HTMLInputElement>) => {
        setAvailable( prev => !prev);
    }

    return (
        <section>
            <h1>Create new product</h1>
            <form onSubmit={ (data) => onSubmit(data)}>
                <div className="form-group my-3">
                    <label htmlFor="name">Name</label>
                    <input defaultValue="test"
                           className="form-control"
                           id="name" {...register("name", { required: true}) } />
                    <span className="invalid-feedback">{errors.name && <span>This field is required</span>}</span>
                </div>

                <div className="form-group my-3">
                    <label htmlFor="description">Description</label>
                    <textarea defaultValue="Lorem ipsum"
                              className="form-control"
                              id="description" {...register("description") } />
                </div>

                <Row>
                    <Col lg={3}>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input defaultValue={6}
                                   className="form-control"
                                   type="number"
                                   id="price" {...register("price") } />
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="form-group">
                            <label htmlFor="stock">Stock</label>
                            <input defaultValue={0}
                                   className="form-control"
                                   type="number"
                                   id="stock" {...register("stock") } />
                        </div>
                    </Col>

                    <Col lg={3}>
                        <div className="form-group mt-4">
                            <input checked={available}
                                   onClick={ (e) => toggleAvailable(e)}
                                   className="form-check-input"
                                   type="checkbox"
                                   id="available" { ...register("isAvailable")} />
                            <label htmlFor="available">Available ?</label>
                        </div>
                    </Col>

                    <Col lg={3}>
                        <div className="btn-group mt-4">
                            <Button disabled>
                                Submit
                            </Button>
                            <Button variant="success" disabled>
                                Submit and add one
                            </Button>
                        </div>
                    </Col>

                </Row>


            </form>
        </section>
    )
};

export default CreateProduct;