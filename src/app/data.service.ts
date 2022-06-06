import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class dataService {
layout_gui='';
position_x_gui='';
position_y_gui='';
transition_gui='';
layout_settings='';
position_settings='';
transition_settings='';

gui_changed$= new BehaviorSubject<any>({});
constructor() { }

}
