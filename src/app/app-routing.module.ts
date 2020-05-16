import { UpdateUserComponent } from './users/update-user/update-user.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatosListagemComponent } from './contatos-listagem/contatos-listagem.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'listagem', component: ContatosListagemComponent },
  { path: 'users/create', component: CreateUserComponent },
  { path: 'users/update/:id', component: UpdateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
