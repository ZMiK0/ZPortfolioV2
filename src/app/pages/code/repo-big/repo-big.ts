import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-big',
  imports: [],
  templateUrl: './repo-big.html',
  styleUrl: './repo-big.css'
})
export class RepoBig {
  @Input() title!:string;
  @Input() text!:string;
  @Input() img!:string;
  @Input() url!:string;
}
