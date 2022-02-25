import {Component, Input, OnInit} from '@angular/core';
import {QuestionBase} from "../question-base";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-questions.component.html',
  styleUrls: ['./dynamic-form-questions.component.css']
})
export class DynamicFormQuestionsComponent implements OnInit {

  @Input() question!: QuestionBase<string>
  @Input() form!: FormGroup

  get isValid() { return this.form.controls[this.question.key].valid}

  constructor() { }

  ngOnInit(): void {
  }

}
