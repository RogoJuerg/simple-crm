import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSectionComponent } from './about-section/about-section.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { HelpSectionComponent } from './help-section/help-section.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '' ,component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'user', component: UserComponent},
  { path: 'user/:id', component: UserDetailComponent},
  { path: 'about', component: AboutSectionComponent},
  { path: 'help', component: HelpSectionComponent},
  { path: 'events', component: EventsPageComponent},
  { path: 'admin', component: AdminPageComponent},
  { path: 'events/:id', component: EventDetailComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
