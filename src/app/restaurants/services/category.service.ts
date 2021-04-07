import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories = [
      new Category(1, "Italien", "https://i.pinimg.com/originals/e5/1c/dd/e51cdd345330a303702fe6999f53ea7c.jpg"),
      new Category(1, "Français", "https://i.pinimg.com/600x315/e0/bf/96/e0bf963a1400673fc43a8c4c2e51c716.jpg"),
      new Category(1, "Local", "http://www.flags-and-anthems.com/media/flags/flagge-tunesien.gif")
  ]

  constructor() { }

  getCategories(){
    return [...this.categories];
  }

  addCategory(c : Category){
    this.categories.push(c);
  }
}
