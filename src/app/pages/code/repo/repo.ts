import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo',
  imports: [],
  templateUrl: './repo.html',
  styleUrl: './repo.css'
})
export class Repo {

  @Input() title!:string;
  @Input() text!:string;
  @Input() img!:string;
  @Input() url!:string;

}
