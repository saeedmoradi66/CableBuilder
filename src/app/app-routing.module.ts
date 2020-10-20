import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './layout/error-page/error-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExpireComponent } from './expire/expire.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'error', component: ErrorPageComponent },
  { path: 'expire', component: ExpireComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
