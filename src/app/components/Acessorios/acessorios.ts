import {Component, inject, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {HttpClient, HttpClientModule} from '@angular/common/http';

export interface Acessorio {
  id: number;
  tipoAcessorio: string;
  marcaAcessorios: string;
  material: string;
}

// ...removido: dados de exemplo...

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-Acessorio',
  styleUrls: ['acessorios.css'],
  templateUrl: 'acessorios.html',
  standalone: true,
  imports: [MatTableModule, HttpClientModule],
})
export class Acessorio implements OnInit {
  displayedColumns: string[] = ['id', 'tipoAcessorio', 'marcaAcessorios', 'material'];
  dataSource: Acessorio[] = [];
  private http = inject(HttpClient);

  ngOnInit() {
    this.http.get<Acessorio[]>('http://localhost:8080/Acessorio').subscribe(
      data => {
        console.log('Dados recebidos:', data);
        this.dataSource = data;
      },
      error => {
        console.error('Erro ao buscar dados:', error);
      }
    );
  }
}
