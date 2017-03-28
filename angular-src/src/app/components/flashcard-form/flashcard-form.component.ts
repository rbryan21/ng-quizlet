import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Flashcard } from '../flashcard-form/flashset/flashcard.interface';
import { FlashcardService } from '../../services/flashcard.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  moduleId: module.id,
  selector: 'app-flashcard-form',
  templateUrl: './flashcard-form.component.html',
  styleUrls: ['./flashcard-form.component.css']
})
export class FlashcardFormComponent implements OnInit {

  public myForm: FormGroup;

  name: string;
  flashcards: Flashcard[];

    constructor(
        private _fb: FormBuilder,
        private flashcardService: FlashcardService,
        private flashMessage: FlashMessagesService
        ) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            author: JSON.parse(localStorage.getItem('user')),
            subject: ['', [Validators.required, Validators.minLength(3)]],
            flashset: this._fb.array([])
        });
        
        // add address
        this.addFlashset();
        
        /* subscribe to addresses value changes */
        // this.myForm.controls['addresses'].valueChanges.subscribe(x => {
        //   console.log(x);
        // })
    }

    initFlashset() {
        return this._fb.group({
            term: ['', Validators.required],
            definition: ['']
        });
    }

    addFlashset() {
        const control = <FormArray>this.myForm.controls['flashset'];
        const flashsetCtrl = this.initFlashset();
        control.push(flashsetCtrl);
        /* subscribe to individual flashset value changes */
        // flashsetCtrl.valueChanges.subscribe(x => {
        //   console.log(x);
        // })
    }

    removeFlashset(i: number) {
        const control = <FormArray>this.myForm.controls['flashset'];
        control.removeAt(i);
    }

    saveFlashcardSet() {
    this.flashcardService.addFlashcardSet(JSON.stringify(this.myForm.value)).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Successfully added!', {cssClass: 'alert-success', timeout: 3000});
      } else {
        this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 3000});
      }
    });

    }
}