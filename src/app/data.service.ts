import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class dataService {
layout_gui='box';
position_x_gui='right';
position_y_gui='bottom';
title_consent_modal='je suis';
transition_gui='';
layout_settings='';
position_settings='';
transition_settings='';
Titre_principale:any;
    Description:any;
    Nom_du_lien : any;
    Lien :any;
    Titre_principal2 :any;
    Titre_description :any;
    Description2:any;
    Traceur_1:any;
    Description_traceur1:any;
    Traceur_2:any;
    Description_traceur2:any;
    Traceur_3:any;
    Description_traceur3:any;
    Titre_information:any;
    Description_information:any;
    Nom_lien:any;
    lien2:any;
    layout:any;
    theme:any;
    codejs:any;

gui_changed$= new BehaviorSubject<any>({});
constructor() { }

}
