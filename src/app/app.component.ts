import { Component, OnInit } from '@angular/core';
import { CorService } from './cor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cores: any[];
  cols: any[];

  constructor(private corService: CorService) {}

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Código' },
      { field: 'name', header: 'Nome_da_Cor' },
      { field: 'year', header: 'Ano' },
      { field: 'color', header: 'Tonalidade' },
      { field: 'pantone_value', header: 'Valor' }
    ];

    this.getCores1();
  }

  getCores1() {
    this.corService.getCores1().subscribe(
      (dados: any) => {
        console.log(dados);
        this.cores = dados.data;
      }
    );
  }
}
