import { Component, OnInit, trigger, state, style, transition, animate, HostListener } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { FlashcardService } from '../../services/flashcard.service';


@Component({
  selector: 'app-view-flashcard-set',
  templateUrl: './view-flashcard-set.component.html',
  styleUrls: ['./view-flashcard-set.component.css'],
  animations: [
      trigger('flipState', [
        state('active', style({
          transform: 'rotateX(179.9deg)'
        })),
        state('inactive', style({
          transform: 'rotateY(0)'
        })),
        transition('active => inactive', animate('500ms ease-out')),
        transition('inactive => active', animate('500ms ease-in'))
      ])  
    ]
})
export class ViewFlashcardSetComponent implements OnInit {
  flashcards = [];
  name;
  currentCardIndex = 0;

  @HostListener('document:keydown') onkeyup() {
    this.onKey(event);
  }

  flip: string = 'inactive';

  onKey(event: any) { 
    console.log('flashcard length = ', this.flashcards.length);
    console.log(event);
    switch (event.key) {
      case 'ArrowRight':
        if (this.currentCardIndex < this.flashcards.length-1) {
          this.currentCardIndex++;
          console.log('currentCardIndex = ', this.currentCardIndex);
        }
        break;
      case 'ArrowLeft':    
        if (this.currentCardIndex > 0) {
          this.currentCardIndex--;
          console.log('currentCardIndex = ', this.currentCardIndex);
        }
        break;
      case 'ArrowUp':
      case 'ArrowDown':
            this.toggleFlip();
            break;
      default:
        break;
    }
  }
  
  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  returnToDash() {
    let link = ['/dashboard'];
    this.router.navigate(link);
  }

  constructor(
    private flashcardService: FlashcardService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('currentCardIndex = ', this.currentCardIndex);
    this.route.params.forEach((params: Params) => {
          let id = params['id'];
          console.log('idd = ', id);
          this.flashcardService.getFlashcardSet(id).subscribe(data => {
            if (data.success) {
              // console.log(data.flashcardSet.flashcards[0].term);
              this.name = data.flashcardSet.name;
              this.flashcards = data.flashcardSet.flashcards; 
              console.log('flashcards = ', this.flashcards);
            } else {
              let link = ['/dashboard'];
              this.router.navigate(link);
            }
          });
    });
  }

}