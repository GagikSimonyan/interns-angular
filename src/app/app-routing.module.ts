import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddInternComponent } from './add-intern/add-intern.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-intern', component: AddInternComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
