import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'virification',
    loadChildren: () => import('./virification/virification.module').then( m => m.VirificationPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'new-project',
    loadChildren: () => import('./new-project/new-project.module').then( m => m.NewProjectPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'booking-details',
    loadChildren: () => import('./booking-details/booking-details.module').then( m => m.BookingDetailsPageModule)
  },
  {
    path: 'new-password',
    loadChildren: () => import('./new-password/new-password.module').then( m => m.NewPasswordPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'best-price',
    loadChildren: () => import('./best-price/best-price.module').then( m => m.BestPricePageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'proposal',
    loadChildren: () => import('./proposal/proposal.module').then( m => m.ProposalPageModule)
  },
  {
    path: 'proposal-details',
    loadChildren: () => import('./proposal-details/proposal-details.module').then( m => m.ProposalDetailsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'review-modal',
    loadChildren: () => import('./review-modal/review-modal.module').then( m => m.ReviewModalPageModule)
  },
  {
    path: 'experts',
    loadChildren: () => import('./experts/experts.module').then( m => m.ExpertsPageModule)
  },
  {
    path: 'form1',
    loadChildren: () => import('./form1/form1.module').then( m => m.Form1PageModule)
  },
  {
    path: 'form2',
    loadChildren: () => import('./form2/form2.module').then( m => m.Form2PageModule)
  },
  {
    path: 'form3',
    loadChildren: () => import('./form3/form3.module').then( m => m.Form3PageModule)
  },
  {
    path: 'form4',
    loadChildren: () => import('./form4/form4.module').then( m => m.Form4PageModule)
  },
  {
    path: 'form5',
    loadChildren: () => import('./form5/form5.module').then( m => m.Form5PageModule)
  },
  {
    path: 'new-projct-form1',
    loadChildren: () => import('./new-projct-form1/new-projct-form1.module').then( m => m.NewProjctForm1PageModule)
  },
  {
    path: 'new-projct-form2',
    loadChildren: () => import('./new-projct-form2/new-projct-form2.module').then( m => m.NewProjctForm2PageModule)
  },
  {
    path: 'new-projct-form3',
    loadChildren: () => import('./new-projct-form3/new-projct-form3.module').then( m => m.NewProjctForm3PageModule)
  },
  {
    path: 'notificatios',
    loadChildren: () => import('./notificatios/notificatios.module').then( m => m.NotificatiosPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
