import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { tokenIsPresent } from 'ng2-bearer';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  authtoken: any;
  authuser: any;
  authname: any;
  authlevel: any;
  //authsemester:any;
  authsem: any;
  cs1: any;
  cs2: any;
  examPublished: any;

  constructor(
    private http: Http,
    private router: Router

  ) { }

  registerUser(user) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/user/register', user, { headers: headers }).pipe(map(res => res.json()));

  }

  loginUser(user) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/user/login', user, { headers: headers }).pipe(map(res => res.json()));

  }


  getProfile() {

    this.fetchToken();
    let headers = new Headers({ "Authorization": this.authtoken })
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:3000/user/profile', options).pipe(map(res => res.json()));

  }

  cs1Data(cs1) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/repeatForm/repeatFormCs', cs1, { headers: headers }).pipe(map(res => res.json()));
  }

  cs2Data(cs2) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/repeatForm/repeatFormCs2', cs2, { headers: headers }).pipe(map(res => res.json()));
  }

  is1Data(is1) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/repeatForm/repeatFormIs1', is1, { headers: headers }).pipe(map(res => res.json()));
  }

  is2Data(is2) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/repeatForm/repeatFormIs2', is2, { headers: headers }).pipe(map(res => res.json()));
  }

  getCsData1(uIndex_no) {
    return this.http.get('http://localhost:3000/repeatForm/getRepeatCs1/' + uIndex_no).pipe(map(res => res.json()));
  }

  savePublishedData(examPublished) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/repeatForm/formPublished', examPublished, { headers: headers }).pipe(map(res => res.json()));
  }


  getPublishedData() {
    let headers = new Headers({ "Authorization": this.authtoken })
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:3000/repeatForm/publishedExam',options).pipe(map(res => res.json()));
  }

  adminViewCs1() {
    return this.http.get('http://localhost:3000/repeatForm/adminViewCs1').pipe(map(res => res.json()));
  }

  adminViewCs2() {
    return this.http.get('http://localhost:3000/repeatForm/adminViewCs2').pipe(map(res => res.json()));
  }

  adminViewIs1() {
    return this.http.get('http://localhost:3000/repeatForm/adminViewIs1').pipe(map(res => res.json()));
  }

  adminViewIs2() {
    return this.http.get('http://localhost:3000/repeatForm/adminViewIs2').pipe(map(res => res.json()));
  }

  fetchToken() {
    const token = localStorage.getItem("tokenid");
    this.authtoken = token;
  }
  

  fetchLevel() {
    const level = localStorage.getItem("level");
    this.authlevel = level;
  }

  // fetchsem() {
  //   const sem = localStorage.getItem("semester");
  //   this.authsemester = sem;
  // }

  getName() {

    const person = localStorage.getItem("user");
    if (person != null) {
      this.authuser = JSON.parse(person);
      this.authname = this.authuser.user_name;
      return this.authname;
    }
 

  }

  storeData(token, userdata, level) {

    localStorage.setItem("tokenid", token);
    localStorage.setItem("user", JSON.stringify(userdata));
    localStorage.setItem("level", level);
    //localStorage.setItem("semmester", semester);
    // localStorage.setItem("sem", publishedSem);
    this.authtoken = token;
    this.user = userdata;

  }

  logout() {

    this.authtoken = null;
    this.user = null;
    localStorage.clear();

  }



  loggedIn() {
    this.fetchToken();
    if (this.authtoken != null) {
      return true;
    }
  }

  isAdmin() {
    this.fetchLevel();
    if (this.authlevel == 'admin') {
      return true;
    }
  }

  isCs() {
    this.fetchLevel();
    if (this.authlevel == 'cs') {
      return true;
    }
  }

  isIs() {
    this.fetchLevel();
    if (this.authlevel == 'is') {
      return true;
    }
  }

  // isSemesterI(){
  //   this.fetchsem();
  //   if(this.authsemester == 'Semester I'){
  //     return true;
  //   }
  // }

  // isSemesterII(){
  //   this.fetchsem();
  //   if(this.authsemmester == 'Semester II'){
  //     return true;
  //   }
  // }

}
