import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dilly Dally';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat', done : true },
  ];

  get items(){
    if(this.filter === 'all'){
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }
  addItem(description: any){
    this.allItems.unshift({
      description,
      done: false
    });
  }
}

