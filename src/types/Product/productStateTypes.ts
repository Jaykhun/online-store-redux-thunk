export interface ProductState {
    products: IProduct[],
    currentProduct: IProduct | any
    loading: boolean,
    error: string | null
}

export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string
    image: string,
    count: number
}

export interface ProductItemProps {
    product: IProduct
}

export interface CurrentProductProps {
    product: IProduct
}