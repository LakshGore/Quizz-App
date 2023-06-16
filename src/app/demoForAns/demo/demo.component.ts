import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {


  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  correctAnswer: string = 'Option 3';
  quizForm: FormGroup;
  validArr : boolean [] = [false]

  constructor(private formBuilder: FormBuilder) {
    this.quizForm = this.formBuilder.group({
      selectedOption: ''
    });
  }

  onOptionSelected(index: any) {
    // Do something when an option is selected
    for(let j=0;j<this.options.length;j++){
      this.validArr[j] = false
    }
    const selectedText = this.options[index]
    if (selectedText !== 'Option 4') {
      this.validArr[index] = true
    }
  }

}
