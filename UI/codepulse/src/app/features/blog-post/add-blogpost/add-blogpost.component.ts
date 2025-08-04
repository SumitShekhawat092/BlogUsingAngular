import { Component } from '@angular/core';
import { AddBlogSpot } from '../models/add-blog-post.model';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent {
  model: AddBlogSpot;
  constructor(){
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
    console.log(this.model);
  }
}
