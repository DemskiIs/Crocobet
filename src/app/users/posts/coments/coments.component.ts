import { ApiService } from './../../../api.service';
import { Component, Input, OnInit } from '@angular/core';

interface coment {
  postId: number
id: number
name: string,
email: string,
body: string
}

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit {
  @Input () postId: number = 1
  coments!: coment[]
  constructor( private api: ApiService) { }

  ngOnInit() {
    this.api.getPostComents(this.postId).then((json: coment[]) => {
      debugger;
      this.coments = json
    })
  }

}
