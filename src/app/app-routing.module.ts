import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', 
    redirectTo: 'menu', 
    pathMatch: 'full' 
  },
 
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'radio',
    loadChildren: () => import('./radio/radio.module').then( m => m.RadioPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },  {
    path: 'brinks',
    loadChildren: () => import('./brinks/brinks.module').then( m => m.BrinksPageModule)
  },
  {
    path: 'images',
    loadChildren: () => import('./images/images.module').then( m => m.ImagesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
