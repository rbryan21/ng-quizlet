import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-flashset',
  templateUrl: './flashset.component.html',
  styleUrls: ['./flashset.component.css']
})
export class FlashsetComponent {

@Input('group')
    public flashsetForm: FormGroup;

}


