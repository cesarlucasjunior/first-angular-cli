import { CommentService } from './../comment.service';
import { Component, OnInit } from '@angular/core';
import { Comment } from '../Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    //nesse método vamos acionar o getComment para buscar os dados do endpoint
    this.commentService.getComments().subscribe(comments => this.comments = comments);
  }
  
}