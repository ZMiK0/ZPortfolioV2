import { Component } from '@angular/core';
import { Repo } from "./repo/repo";
import { RepoBig } from "./repo-big/repo-big";

@Component({
  selector: 'app-code',
  imports: [Repo, RepoBig],
  templateUrl: './code.html',
  styleUrl: './code.css'
})
export class Code {

}
