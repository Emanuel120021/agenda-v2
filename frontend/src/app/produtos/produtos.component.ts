import { Component, OnInit } from '@angular/core';

import { Produto } from '../model/produto';
import { ProdutoService } from '../model/produto.service';
import { CarrinhoService } from './../model/carrinho.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  produtos?: Produto[];

  constructor(
    private carrinhoService: CarrinhoService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): any {
    this.produtoService.listar().subscribe((res) => {
      this.produtos = res;
    });
  }

  adicionar(prod: Produto) {
    this.carrinhoService.adicionar(prod);
  }
}
