import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-flashcard-set',
  templateUrl: './view-flashcard-set.component.html',
  styleUrls: ['./view-flashcard-set.component.css']
})
export class ViewFlashcardSetComponent implements OnInit {





showdef = false;

flashcardSetName =[
    {user: 'Katrina', subject: 'Calculus Ch1'},
    {user: 'Katrina', subject: 'Calculus Ch2'},
    {user: 'Katrina', subject: 'Principles of Management Ch1'},
    {user: 'Katrina', subject: 'Algebra Fundamentals Ch6'}
    ];

flashset =[
    {subject:'Calculus', term: 'cos x', definition: 'd/dx sin x'},
    {subject: 'Principles of Management Ch1', term: 'Katrina', definition: 'Calculus Ch2'},
    {subject: 'Calculus', term: 'function', definition: 'every x paired with 1 y'},
    {subject: 'Algebra Fundamentals Ch6', term: 'Variable', definition: 'a symbol (like x or y) that is used in mathematical or logical expressions to represent a variable quantity'}
    ];

  constructor() { }

  ngOnInit() {
  }

}