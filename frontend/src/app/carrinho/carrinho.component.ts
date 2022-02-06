import { Component, OnInit } from '@angular/core';

import { Produto } from '../model/produto';
import { CarrinhoService } from './../model/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {
  adicionados: Produto[];

  constructor(private carrinhoService: CarrinhoService) {
    this.adicionados = [];
  }
  ngOnInit(): void {
    this.adicionados = this.carrinhoService.obterProdutos();
  }

  apagar() {
    this.adicionados.pop();
  }
  adicionar(prod: Produto) {
    this.carrinhoService.adicionar(prod);
  }
}
