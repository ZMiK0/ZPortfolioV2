import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuButton } from "./items/menu-button/menu-button";

@Component({
  selector: 'app-root',
  imports: [MenuButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ZPortfolioV2';
}
