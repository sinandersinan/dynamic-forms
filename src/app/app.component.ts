import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {QuestionBase} from "./question-base";
import {QuestionService} from "./question.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-forms-with-validation';

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
