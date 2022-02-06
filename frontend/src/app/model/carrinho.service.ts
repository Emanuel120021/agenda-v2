import { Injectable } from '@angular/core';

import { Produto } from './produto';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private produtosADC: Produto[];
  constructor() {
    this.produtosADC = [];
  }
  adicionar(prod: Produto) {
    this.produtosADC.push(prod);
  }

  obterProdutos(): Produto[] {
    return this.produtosADC;
  }
}
