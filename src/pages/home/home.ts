import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/subject';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  @ViewChild(Content) container: Content;

  events: any;
  groupedEvents = [];
  showLoader: boolean;
  eventFilter: any = { title: '' };
  updateSearchResult$: Subject<any> = new Subject();
  scrollAndSearch$: Observable<any>;
  selectedEvent: any;


  constructor(public navCtrl: NavController, public apiProvider: ApiProvider, public toastCtrl: ToastController) {


    //this.events = this.apiProvider.getEvents();
    this.showLoader = true;

    this.apiProvider.getEvents().subscribe(
      data => {
        console.log('events: ', data);
        this.events = data;
        console.log(this.events);
        this.groupEvents(this.events);
      },
      error => {
        this.showLoader = false;
        let toast = this.toastCtrl.create({
          message: 'Error occurred ' + JSON.stringify(error),
          duration: 5000
        });
        toast.present();
      });


  }


  ionViewDidLoad() {
    this.scrollAndSearch$ = Observable.merge(
      this.container.ionScroll,
      this.updateSearchResult$
    );
  }

  triggerLazyLoad() {
    this.updateSearchResult$.next()
  }



  groupEvents(events) {


    let todayArr = {
      groupName: 'today',
      events: []
    };
    let thisWeekArr = {
      groupName: 'This Week',
      events: []
    };
    let othersArr = {
      groupName: 'Others',
      events: []
    };



    let today = new Date();

    let d = new Date();
    let first = d.getDate() - d.getDay();
    let last = first + 6;
    let weekStart = new Date(d.setDate(first));
    let weekEnd = new Date(d.setDate(last));



    let testVar = {
      "dateTime": "27-03-2018 21:22:48",
      "description": "TSH A'dam City invited you to this party ",
      "id": "909",
      "image": "http://www.youth.gov.hk/html/www/tc/cover-photo/music/music-specific/concert05.jpg",
      "members": [
        {
          "id": 1,
          "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
        },
        {
          "id": 2,
          "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
        },
        {
          "id": 3,
          "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
        },
        {
          "id": 4,
          "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
        },
        {
          "id": 5,
          "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
        },
        {
          "id": 6,
          "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
        }
      ],
      "status": "ignore",
      "title": "Amsterdam bike tour"
    }
    let testVar2 = {
      "dateTime": "29-03-2018 21:22:48",
      "description": "TSH A'dam City invited you to this party ",
      "id": "909",
      "image": "http://www.youth.gov.hk/html/www/tc/cover-photo/music/music-specific/concert05.jpg",
      "members": [
        {
          "id": 1,
          "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
        },
        {
          "id": 2,
          "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
        },
        {
          "id": 3,
          "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
        },
        {
          "id": 4,
          "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
        },
        {
          "id": 5,
          "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
        },
        {
          "id": 6,
          "photo": "https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png"
        }
      ],
      "status": "ignore",
      "title": "Amsterdam bike tour"
    }
    events.push(testVar);
    events.push(testVar2);


    events.forEach((value, index) => {

      let tempDate = value.dateTime.split(" ")[0].split("-");
      tempDate = new Date(tempDate[2], tempDate[1] - 1, tempDate[0]);

      // the date that will be displayed in the thumbnail image as a string
      let tempDisplayDate = tempDate.toString().split(" ");
      value.dateDisplay = tempDisplayDate[2] + '\n' + tempDisplayDate[1];


      if (tempDate.getFullYear() == today.getFullYear() && tempDate.getMonth() == today.getMonth() && tempDate.getDate() == today.getDate()) {
        todayArr.events.push(value);
      } else if (tempDate >= weekStart && tempDate <= weekEnd) {
        thisWeekArr.events.push(value);
      } else {
        othersArr.events.push(value);
      }

    });

    this.groupedEvents.push(todayArr, thisWeekArr, othersArr);
    this.showLoader = false;

  }


  setDecision(status, eventID) {
    this.groupedEvents.map((group) => {
      group.events.map((event) => {
        if (event.id == eventID) {
          event.status = status;
        }
      })
    })

    // TODO: update the database with the updated values
  }

  openDetails(event) {
    this.selectedEvent = event.id;
    this.navCtrl.push('EventDetailsPage', { event: event });
  }
}
