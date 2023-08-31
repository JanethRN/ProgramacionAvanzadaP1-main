import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { UserLogged, UserLogin } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { API_URL } from '../API_URL';
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  
  private loggedIn = new BehaviorSubject<boolean>(false);
  public username = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
    this.username =  new BehaviorSubject<string>('');
    this.checkToken();
    

   }

  get isLogged() : Observable<boolean>{
    return this.loggedIn.asObservable();
  }
  

  get getUsername() : Observable<string>{
    return this.username.asObservable();
  }


  public async login(userLogin: UserLogin) {

    return new Promise(resolve => {
      this.http.post(`${API_URL}/auth`,userLogin).subscribe({
        next : (data : any) => {
          this.saveToken(data.token);
          this.loggedIn.next(true);
          resolve(data);
          
        },
        error: (err) => {
        console.log(err);
      }
    });
    })
  }

 

  private saveToken(token : string) : void {
    localStorage.setItem('token', token);
    const username = helper.decodeToken(token)??'';
    this.username.next(username);
    console.log()
  }




  public logout() :void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);

  }
  public checkToken() :void{
    const userToken :string= localStorage.getItem('token')??'';
    const isExpired = helper.isTokenExpired(userToken);
    console.log('isExpired -> ', isExpired);
    const username =  (helper.decodeToken(userToken)?.username)??'';
    this.username.next(username)
    isExpired? this.logout() : this.loggedIn.next(true);
 
    //set userLogged = isExpired
  }

}
