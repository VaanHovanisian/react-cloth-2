import useSWR from "swr"
import { fetcher } from "../helpers/fetcher.js"
import { ApiRoutes } from "../services/constants.js";
import { axiosInstance } from "../services/instance.js";


export const useBasket = () => {
    const { data: products, mutate, error, isLoading } = useSWR(ApiRoutes.BASKET, fetcher)
    const data = products?.length > 0 ? products : [];
    const isToBasket = (id) => data.some(item => item.productId === id)
    const isFindToBasket = (id) => data.find(item => item.productId === id)


    const addProduct = async (product) => {

        if (isToBasket(product.id)) return;
        const { id, title, price, type, img } = product;

        await axiosInstance.post(ApiRoutes.BASKET, {
            title,
            price,
            type,
            img,
            productId: id,
            count: 1
        })



        mutate([...data, product])
    }

    const removeProduct = async (id) => {
        await axiosInstance.delete(`${ApiRoutes.BASKET}/${id}`)
        mutate(data.filter(item => item.productId !== id))
    }
    const updateProduct = async (product) => {
        await axiosInstance.put(`${ApiRoutes.BASKET}/${product.id}`, product)

        mutate(data.filter(item => item.id === product.id ? product : item))

    }

    const clearProducts = async () => {
        data.forEach(async ({ id }) => await removeProduct(id));
    }
    const totalPrice = data.reduce((acc, el) => acc + el.price * el.count, 0);
    const totalCount = data.reduce((acc, el) => acc + el.count, 0);

    return {
        totalPrice,
        totalCount,
        isFindToBasket,
        clearProducts,
        removeProduct,
        updateProduct,
        addProduct,
        isToBasket,
        data,
        error,
        isLoading
    }
}