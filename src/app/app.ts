import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Acessorio } from './components/Acessorios/acessorios';
import {MatTableModule} from '@angular/material/table';
import { AcessorioToolBar } from './components/acessorio-tool-bar/acessorio-tool-bar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Acessorio, MatTableModule, AcessorioToolBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-angular-baixo-Custom');
}
