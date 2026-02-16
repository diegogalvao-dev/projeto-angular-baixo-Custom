import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Acessorio } from '../../../models/acessorio.models';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { AcessorioService } from '../../../services/acessorio.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'table-acessorio-list',
  styleUrl: 'acessorio-list.css',
  templateUrl: 'acessorio-list.html',
  standalone: true,
  imports: [MatTableModule, MatToolbarModule, MatButtonModule, MatIconModule, MatPaginatorModule],
})
export class AcessorioListComponent implements OnInit {
  displayedColumns: string[] = ['number', 'tipoAcessorio', 'marcaAcessorios', 'material'];
  acessorios: Acessorio[] = [];
  dataSource = new MatTableDataSource(this.acessorios);

  constructor(private acessorioService: AcessorioService) {
  }
  
  ngOnInit(): void {
    this.acessorioService.getAcessorios().subscribe(data => {
      this.acessorios = data;
      this.dataSource.data = data;
      console.log(this.acessorios);
    });
  }
}
