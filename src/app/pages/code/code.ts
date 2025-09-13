import { Component } from '@angular/core';
import { Repo } from "./repo/repo";
import { RepoBig } from "./repo-big/repo-big";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code',
  imports: [Repo, RepoBig, CommonModule],
  templateUrl: './code.html',
  styleUrl: './code.css'
})
export class Code {
  repo_info = [
    ["JavaLator","Simple Java calculator made with swing","calc.png","https://github.com/ZMiK0/JaLator"],
    ["PairSearchGame","Python game, created for a class project, involves finding pairs of matching symbols", "pair.png", "https://github.com/ZMiK0/PairSearchGame"],
    ["QueueTask","An easy-to-use TUI program for managing tasks in a queue","quetask.png","https://github.com/ZMiK0/QueueTask"],
    ["theMacHine","Virtual machine simulation with custom shell made in Java","machine.png","https://github.com/ZMiK0/theMacHine"],
    ["SimonDice","Simple Simon Says game made in Java","simondice.png","https://github.com/ZMiK0/SimonDice"],
    ["Old Portfolio","The antecessor of this one, made with Astro.js and TailwindCSS","port.png","https://github.com/ZMiK0/ZPortfolio"]
  ]
}
