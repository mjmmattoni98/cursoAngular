import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = ["Ryan Reynolds", "Marcos"];
  name: string = "marcos";
  age: number = 23;
  posts: Post[] | undefined;

  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }

  addUser(user: any){
    this.users.push(user.value);
    user.value = ""
    user.focus();
    return false;
  }

  deleteUser(user: string){
    for(let i = 0; i < this.users.length; i++){
      if(user == this.users[i]){
        this.users.splice(i, 1);
      }
    }
  }
}
