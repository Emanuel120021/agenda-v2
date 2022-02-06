import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarrinhoComponent } from './carrinho/carrinho.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
