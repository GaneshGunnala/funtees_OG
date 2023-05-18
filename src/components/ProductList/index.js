import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductListMen, ProductListWomen } from '../dataFiles/ProductList';
import "./ProductList.scss";
const ProductList = (props)=>{
    const [searchParams] = useSearchParams();
    const ProductListData = searchParams.get("g") == "mens" ? ProductListMen : ProductListWomen;
    return(
        <div className='productlist'>
            {ProductListData && ProductListData.map(item => (
                <div className="col-12 p-1 product">
                    <img style={{width: "100%"}} src={item.Image}></img>
                    <div className='productdetails'>
                        <span>{item.Name}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;