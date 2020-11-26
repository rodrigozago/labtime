import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getPage(pageNumber = 1): Observable<any> {
    const url = "http://dev.labtime.ufg.br/selecao_2020/user?page="+pageNumber;
    
    let usersObservable = this.http.get(url);
    return usersObservable.pipe(map(page => {
      const numPages = page['paginas'];
      if(page && pageNumber <= numPages && pageNumber > 0) {
        return page;
      }
      return null;
    }));
  }
}
