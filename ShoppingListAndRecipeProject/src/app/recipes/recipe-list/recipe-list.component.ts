import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Pizza', 'This is a recipe for Italian Pizza.', 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Croissant', 'A croissant is a buttery, flaky, viennoiserie pastry named for its crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Croissants_au_beurre_%2818953292873%29.jpg/250px-Croissants_au_beurre_%2818953292873%29.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
