import { ApiService } from './../../api.service';
import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from 'src/app/route/route.service';

interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  path!: string
  userId!: number
  postId!: number | null
  posts!: post[]

  
  constructor(
    private routes: ActivatedRoute,
    private api: ApiService,
    private pathes: RouteService ) {

    routes.params.subscribe(
      (params) => {
        this.userId = params['id']
      });
  }

  ngOnInit() {
    this.api.getUserPosts(this.userId).then((json: post[]) => {
      this.posts = json
    })
  }




  requestPostComents(postId: number) {
    this.path = this.pathes.getPostComentsPath(postId)
    if (this.postId == postId) {
      this.postId = null
    } else {
      this.postId = postId
    }
  }
}
