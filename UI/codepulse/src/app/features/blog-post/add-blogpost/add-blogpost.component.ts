import { Component } from '@angular/core';
import { AddBlogSpot } from '../models/add-blog-post.model';
import { BlogPostService } from '../Services/blog-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent {
  model: AddBlogSpot;
  constructor(private blogPostService: BlogPostService,
    private router: Router){
    this.model= {
      title: '',
      shortDescription:'',
      urlHandle:'',
      content:'',
      featuredImageUrl:'',
      author:'',
      isVisible:true,
      publishedDate:new Date()
    }
  }

  onFormSubmit() : void{
     this.blogPostService.createBlogPost(this.model)
     .subscribe({
      next:(response) => {
        this.router.navigateByUrl('/admin/blogposts');
      }
     });
  }
}