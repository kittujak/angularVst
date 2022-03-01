import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  open(){
   const menu = document.getElementById("item");
   if(menu.style.display=="none")
   {
     menu.style.display="block";
   }
   else
   {
    menu.style.display="none";

   }

 }

 close(){
  document.getElementById("item").style.display="none";
 }
}