import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsModel } from '../shared/products.model';
import { HttpHandlerService } from '../shared/httpHandler.service';

@Component({
  selector: 'app-popupform',
  templateUrl: './popupform.component.html',
  styleUrls: ['./popupform.component.scss']
})

export class PopupformComponent implements OnInit {

      rForm1 : any;


      constructor( private httpHndlr : HttpHandlerService ){

      }


      ngOnInit(): void {
        
          this.rForm1 = new FormGroup({
            pname : new FormControl('',Validators.required),
            pprice : new FormControl('',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
            pimg : new FormControl('',Validators.required)
          })

      }

      
      onSubmit(){

         console.log(this.rForm1);

          // let newObj = {
          //     pnm : this.rForm1.value.pname,
          //     ppr : +this.rForm1.value.pprice,
          //     pim : this.rForm1.value.pimg
          // }

          let newObj = new ProductsModel(this.rForm1.value.pname,this.rForm1.value.pprice,this.rForm1.value.pimg);

          // console.log(newObj);

          this.httpHndlr.postData(newObj).subscribe( ( pdno : any ) => {
              // console.log('Any http Client request has to be subscribed if you want to activate');
              this.httpHndlr.getData().subscribe( ( hhgd : any ) => {
                  console.log('After addition of new product, it will help to reflect the product showcase immedi');
              } )
          } )          

      }

}
