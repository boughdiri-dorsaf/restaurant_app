import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-restaurant-category',
  templateUrl: './add-restaurant-category.page.html',
  styleUrls: ['./add-restaurant-category.page.scss'],
})
export class AddRestaurantCategoryPage implements OnInit {
  categoryForm = new FormGroup({
    id : new FormControl('', Validators.required),
    nom : new FormControl('', Validators.required),
    image : new FormControl('', Validators.required)
  });

  constructor(
    private categorieService : CategoryService,
    private router : Router) { }

  addCategory(){
    //console.log("Submitted...");
    const values = this.categoryForm.value;
    //console.log(values);
    const newCategory = new Category(values.id, values.nom, values.image);
    this.categorieService.addCategory(newCategory);
    this.router.navigate(["/restaurant-categories"]);
  }

  ngOnInit() {
  }

}
