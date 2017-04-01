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
  username = "Katrina"
  
  flashcardSetName =[
    {user: 'Katrina', subject: 'Calculus Ch1'},
    {user: 'Katrina', subject: 'Calculus Ch2'},
    {user: 'Katrina', subject: 'Principles of Management Ch1'},
    {user: 'Katrina', subject: 'Algebra Fundamentals Ch6'}
    ];

    
 
  constructor(
        private flashcardService: FlashcardService,
        private flashMessage: FlashMessagesService
  ) { }

  getFlashcards() {
    var userJSON = JSON.parse(localStorage.getItem('user'));
    this.flashcardService.getFlashcardSets(userJSON.email).subscribe(data => {
        if (data.success) {
          // User has flashcards
          console.log(data.flashcardSets); // array of flashcard sets
        } else {
          // User does not
          console.log(data.msg); 
        }
    });  
  }

  ngOnInit() {
  

    
  }

}
