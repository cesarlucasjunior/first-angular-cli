import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Comment } from './Comment';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentService {

  //estabelecendo conexão http para realizar conexão com o endpoint.
  constructor(private http: Http) { }

  //método responsável por realizar a conexão com o endpoint, buscar e mapear os dados:
  getComments() : Observable<Comment[]>{
    return this.http.get('http://jsonplaceholder.typicode.com/comments')
            .map(response => response.json());
  }

}
