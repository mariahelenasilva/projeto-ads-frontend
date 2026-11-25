import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { CategoriaLista } from './features/categorias/categoria-lista/categoria-lista';
import { PaginaEmBreve } from './shared/pagina-em-breve/pagina-em-breve';
import { LancamentoLista } from './features/lancamentos/lancamento-lista/lancamento-lista';
import { Login } from './features/auth/login/login';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes =  [
  { path: 'login', component: Login },
  { path: '', component: MainLayout,
    canActivate: [authGuard], canActivateChild: [authGuard],
    children: [
    { path: '', pathMatch: 'full', redirectTo: 'categorias' },
    { path: 'categorias', component: CategoriaLista },
    { path: 'dashboard', component: PaginaEmBreve, data: { titulo: 'Dashboard — Aula 3' } },
    { path: 'lancamentos', component: LancamentoLista },
    { path: 'usuarios', component: PaginaEmBreve, data: { titulo: 'Usuários — Aula 3' } }
  ]},
  { path: '**', redirectTo: 'lancamentos' }
]
