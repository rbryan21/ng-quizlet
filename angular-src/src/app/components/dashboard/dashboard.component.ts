import { Component, OnInit} from '@angular/core';
import { FlashcardService } from '../../services/flashcard.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  moduleId: module.id
  

})
export class DashboardComponent implements OnInit {
  title = "Dashboard";
  setNames: String[];
  firstName: String;
  lastName: String;
 
  
  constructor(
        private flashcardService: FlashcardService,
        private flashMessage: FlashMessagesService
  ) { }

  createFlashcardSets() {
    var userJSON = JSON.parse(localStorage.getItem('user'));
    this.flashcardService.getFlashcardSets(userJSON.email).subscribe(data => {
        if (data.success) {
          // User has flashcards
        } else {
          // User does not
          console.log(data.msg); 
        }
    });  
  }

  ngOnInit() {
    this.firstName = JSON.parse(localStorage.getItem('user')).firstName;
    this.lastName = JSON.parse(localStorage.getItem("user")).lastName;
  }

}
