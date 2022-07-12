import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterMenuComponent } from '../shared/router-menu/router-menu.component';
import { SharedModule } from '../shared/shared.module';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
