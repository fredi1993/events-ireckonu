import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventDetailsPage } from './event-details';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    EventDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventDetailsPage),
    LazyLoadImageModule,
  ],
})
export class EventDetailsPageModule {}
