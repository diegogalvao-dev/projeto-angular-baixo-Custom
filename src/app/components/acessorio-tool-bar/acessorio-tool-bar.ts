import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'AcessorioToolBar',
  templateUrl: 'acessorio-tool-bar.html',
  styleUrl: 'acessorio-tool-bar.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class AcessorioToolBar {}
