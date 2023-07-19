import axios from "axios";
import { IProduct } from "../interfaces/IProduct";

export const getProducts = async (): Promise<Array<IProduct>> => {
    const products: Array<IProduct> = await axios.get('products')
    return products;
}