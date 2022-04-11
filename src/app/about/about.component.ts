import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../post';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  posts: Post[] | undefined;

  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    });
  }

  ngOnInit(): void {
  }

}
