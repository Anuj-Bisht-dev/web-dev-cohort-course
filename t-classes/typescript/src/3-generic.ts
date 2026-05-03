// why .. ?

function getResponse<T>(data: T[]){
    return{
        sucess: true,
        status: 200,
        data,
    }
}

const result1 = getResponse([1, 2, 3]).data;
console.log(result1);

const result2 = getResponse<string>(['heroshi', 'lona', 'zoro']);
console.log(result2);


// Generic Type

type ApiResponse<T> = {
    data: T,
    isError: boolean,
}

type HomeApiResponse = ApiResponse<{heading: string, sections: number}>;
// or
type Blog = {
    title: string, views: number,
}
type BlogApiResponse = ApiResponse<Blog>;


// Generic Interface
interface User {
    username: string,
}

interface Product {
    title: string,
}


interface Result<T> {
    data: T,
    isError: string | null,
}

function fetch<T>(url: string): Result<T>{
    return {data: {username: 'adfga', title: 'rewt'} as T, isError: null}
}

const userResult = fetch<User>('../api/users');
let user = userResult.data;
console.log(user.username);

const productResult = fetch<Product>('../api/product');
let product = productResult.data;
console.log(product.title);
