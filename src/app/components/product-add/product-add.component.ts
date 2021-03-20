import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,FormControl,Validators} from "@angular/forms"

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup

  //FormBuilder bir servis
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createProductAddForm()//bu fonksiyona göre ilgili formun map edilmesi gerekiyor
  }

  //html'deki hangi alanlar map edilecek ve onun kuralını burada belirtiyoruz
  createProductAddForm(){
      this.productAddForm=this.formBuilder.group({
        productName:["",Validators.required],
        unitPrice:["",Validators.required],
        unitsInStock:["",Validators.required],
        categoryId:["",Validators.required]
      })
  }

}
