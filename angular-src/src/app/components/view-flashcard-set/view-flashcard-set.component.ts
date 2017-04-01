import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { FlashcardService } from '../../services/flashcard.service';


@Component({
  selector: 'app-view-flashcard-set',
  templateUrl: './view-flashcard-set.component.html',
  styleUrls: ['./view-flashcard-set.component.css']
})
export class ViewFlashcardSetComponent implements OnInit {
  flashcardSet = [];

  constructor(
    private flashcardService: FlashcardService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
          let id = params['id'];
          console.log('idd = ', id);
          this.flashcardService.getFlashcardSet(id).subscribe(data => {
            if (data.success) {
              console.log(data);
              this.flashcardSet = data.flashcardSet; 
            } else {
              let link = ['/dashboard'];
              this.router.navigate(link);
            }
          });
    });
  }

}