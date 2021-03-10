import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts;
  constructor( private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/posts")
    .subscribe((data)=>this.displayPost(data));
  }

  displayPost(data){
    this.posts = data;
  }

}
