import { Component } from '@angular/core';
import { Repo } from "./repo/repo";

@Component({
  selector: 'app-code',
  imports: [Repo],
  templateUrl: './code.html',
  styleUrl: './code.css'
})
export class Code {

}
