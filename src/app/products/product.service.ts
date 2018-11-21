/* This is a service.
 To create a service: 
    1) Service class 
        - clear name 
        - @Injectable() decorator 
        - define imports 
 To register a service: 
    1) Select apporiate level in the hierarchy Root injector vs. component injector
        - Use root application injector to use service throughout our application.
        - Use component injector if service is only used my one component. 
    2) Use the providedIn property to 'root' 
    
*/

import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})

export class ProductService{

    getProducts(): IProduct[] {
        return [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2016",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
              },
              {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
              }
        ]
    }

}