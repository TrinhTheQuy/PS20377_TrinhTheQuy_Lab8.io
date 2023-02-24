import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChitietsanphamComponent } from './chitietsanpham/chitietsanpham.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';

const routes: Routes = [{ path:'', component:HomeComponent},
{ path:'home', component:HomeComponent},
{ path:'sanpham', component:ChitietsanphamComponent},
{ path:'dangnhap', component:DangnhapComponent},
  { path:'dangky', component:DangkyComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
