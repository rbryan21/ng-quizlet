import { Component, OnInit} from '@angular/core';
import { FlashcardService } from '../../services/flashcard.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  moduleId: module.id
  

})
export class DashboardComponent implements OnInit {
  title = "Dashboard";
  firstName: String;
  lastName: String;
  flashcardSets = [];
 
  
  constructor(
        private flashcardService: FlashcardService,
        private flashMessage: FlashMessagesService,
        private router: Router
  ) { }

  // When they click the Create set buttons -> /flashcard
  goToCreate() {
    this.router.navigate(['flashcard']);
  }

  goToView(flashcardSet) {
    let link = ['/view-flashcard-set', flashcardSet._id];
    this.router.navigate(link);
  } 

  getFlashcardSets() {
    var userJSON = JSON.parse(localStorage.getItem('user'));
    this.flashcardService.getFlashcardSets(userJSON.email).subscribe(data => {
        if (data.success) {
          this.flashcardSets = data.flashcardSets; 
        } else {
          this.flashcardSets = []; 
        }
    });  
  }

  ngOnInit() {
    this.getFlashcardSets();
    console.log(this.flashcardSets);
    this.firstName = JSON.parse(localStorage.getItem('user')).firstName;
    this.lastName = JSON.parse(localStorage.getItem("user")).lastName;
  }

}
