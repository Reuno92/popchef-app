/**
 * Product Model
 * @Class
 */
export default class ProductModel {
    /**
     *
     * @param { number } id - Identifier of product
     * @param { string } name - Name of product
     * @param { description } description - Description of product
     * @param { string } picture - Picture of product
     * @param { number } price - Price of product in Euro
     * @param { number } stock - Number of product in Stock
     * @param { boolean } isAvailable - Define is available
     */
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public picture: string,
        public price: number,
        public stock: number,
        public isAvailable: boolean
    ) {}
}