import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from '../shared/httpHandler.service';
import { ProductsModel } from '../shared/products.model';

@Component({
  selector: 'app-showcards',
  templateUrl: './showcards.component.html',
  styleUrls: ['./showcards.component.scss']
})

export class ShowcardsComponent implements OnInit {

  productsArray : any ;

  qtyArr : any ;

  // qty[0] : any;

  productsAdded : any = [];

  fttl = 0;

  constructor( private httpHndlr : HttpHandlerService ){

    // this.qty[0]=1;

  }

  ngOnInit(): void {

    this.httpHndlr.getData().subscribe( ( hhgd : any ) => {

          // console.log('fetched raw Data', hhgd);

          this.productsArray = hhgd;
          this.qtyArr = Array(this.productsArray.length).fill(1);

    } )

    this.httpHndlr.productBehSub.subscribe( ( hhpbs : any ) => {
        this.productsArray = hhpbs;
        this.qtyArr = Array(this.productsArray.length).fill(1);

    } )
      
  }

  addToTable(pa : any, qty : number, ttl : number){
   
    //console.log(pa);
    // this.fttl = 0;
    this.fttl = this.fttl + ttl; 
    // this.productsAdded.push({...pa,qty,ttl : pa.ppr * qty}); 
    this.productsAdded.push({...pa,qty,ttl : ttl}); 
    // console.log(this.productsAdded);
    
  }


  increment(i : any){

      this.qtyArr[i]++;

      // this.data++;
      // this.qty[]++;
      // console.log(onlyIndex);
      // this.qty[onlyIndex] = 0;
      // console.log(this.qty[onlyIndex]);
      // this.qty[onlyIndex] += 3;
      // console.log(this.qty[onlyIndex]);
      // console.log(this.qty[0]);
      // arrInd = 0;
      //console.log(arrInd);
      // this.qty[0]++;
      // console.log(this.qty[0]);

      // this.qtyArr[0] += 2;
      // console.log(this.qtyArr[0]);

      // this.qtyArr[2]++;
      // console.log(this.qtyArr[2]);
  } 
  
  decrement(i : any){
      if( this.qtyArr[i] > 1 ){
          this.qtyArr[i]--;
      }
  }

}
