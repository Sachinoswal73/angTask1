import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductsModel } from "./products.model";
import { BehaviorSubject, map } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class HttpHandlerService {

    main_api_url = 'https://angtask1-80256-default-rtdb.asia-southeast1.firebasedatabase.app/products.json';

    constructor( private httpCl : HttpClient ){

    }

    
    postData(newObj : ProductsModel){
        
        // console.log('postData', newObj);
        return this.httpCl.post(this.main_api_url,newObj);
        
    }    


    productBehSub : BehaviorSubject<any> = new BehaviorSubject('loading..');

    getData(){

        return this.httpCl.get(this.main_api_url)
            .pipe( map( ( rwData : any ) => {
                let convArray = [];
                // console.log(rwData);
                for(let rwd in rwData){
                    convArray.push({...rwData[rwd], id : rwd })
                }
                this.productBehSub.next(convArray);
                return convArray;
            } ) )

    }

}