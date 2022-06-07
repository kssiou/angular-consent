import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class dataService {
layout_gui='box';
position_x_gui='right';
position_y_gui='bottom';
transition_gui='';
layout_settings='';
position_settings='';
transition_settings='';

gui_changed$= new BehaviorSubject<any>({});
constructor() { }

}
