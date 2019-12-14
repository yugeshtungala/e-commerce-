import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProservService {
img1="assets/black.jpeg";
img2="assets/green.jpeg";
img3="assets/red.jpeg";
img4="assets/white.jpeg";
  constructor() { }
  products=[
    {names:'Mamas black shirt',price:1000,image:this.img1},
    {names:'Mamas green shirt',price:9000,image:this.img2},
    {names:'Mamas red shirt',price:8000,image:this.img3},
    {names:'Mamas white shirt',price:7000,image:this.img4},
  ];
}
