import { ActivatedRoute, Router } from '@angular/router';
import { Parametrage } from '../parametrage';
import { Client } from '../client';
import { AfterContentChecked, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { dataService } from '../data.service';
import { DataService } from '../service/data.service';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-parametre-edit',
  templateUrl: './parametre-edit.component.html',
  styleUrls: ['./parametre-edit.component.scss']
})
export class ParametreEditComponent implements OnInit,AfterContentChecked {
  parametrage:any;
  databd:any;

id:any;
  alert: boolean =false;
  layout = 'box';
  position_x_gui='right';
  position_y_gui='bottom';
  transition_gui='zoom';
  layout_settings='bar';
  position_settings='left';
  transition_settings='zoom';
  theme='';
  isDisplay:boolean=false;
  selectedDay:string='';
  clients:any;
 
  client=new Client;
  param=new Parametrage;
  bouton_bg:string='#fff';
  bouton_text:string=' #2d4156';
  bouton_color:string='#2d4156';
  bouton_hover:string='#fff';
  temp='var';

  tabWay = "vert";
  constructor(public dataservice:DataService , public data:dataService,private cdRef: ChangeDetectorRef,private router:Router,private route:ActivatedRoute) {

   }
   theme_light=`:root{
    --cc-bg: #fff;
    --cc-text: #2d4156;
    --cc-btn-primary-bg: #2d4156;
    --cc-btn-primary-text: var(--cc-bg);
    --cc-btn-primary-hover-bg: #1d2e38;
    --cc-btn-secondary-bg: #eaeff2;
    --cc-btn-secondary-text: var(--cc-text);
    --cc-btn-secondary-hover-bg: #d8e0e6;
    --cc-toggle-bg-off: #919ea6;
    --cc-toggle-bg-on: var(--cc-btn-primary-bg);
    --cc-toggle-bg-readonly: #d5dee2;
    --cc-toggle-knob-bg: #fff;
    --cc-toggle-knob-icon-color: #ecf2fa;
    --cc-block-text: var(--cc-text);
    --cc-cookie-category-block-bg: #f0f4f7;
    --cc-cookie-category-block-bg-hover: #e9eff4;
    --cc-section-border: #f1f3f5;
    --cc-cookie-table-border: #e9edf2;
    --cc-overlay-bg: rgba(4, 6, 8, .85);
    --cc-webkit-scrollbar-bg: #cfd5db;
    --cc-webkit-scrollbar-bg-hover: #9199a0;
}`;
theme_dark=`
:root{--cc-bg: #181b1d;
    --cc-text: #d8e5ea;
    --cc-btn-primary-bg: #a6c4dd;
    --cc-btn-primary-text: #000;
    --cc-btn-primary-hover-bg: #c2dff7;
    --cc-btn-secondary-bg: #33383c;
    --cc-btn-secondary-text: var(--cc-text);
    --cc-btn-secondary-hover-bg: #3e454a;
    --cc-toggle-bg-off: #667481;
    --cc-toggle-bg-on: var(--cc-btn-primary-bg);
    --cc-toggle-bg-readonly: #454c54;
    --cc-toggle-knob-bg: var(--cc-cookie-category-block-bg);
    --cc-toggle-knob-icon-color: var(--cc-bg);
    --cc-block-text: #b3bfc5;
    --cc-cookie-category-block-bg: #23272a;
    --cc-cookie-category-block-bg-hover: #2b3035;
    --cc-section-border: #292d31;
    --cc-cookie-table-border: #2b3035;
    --cc-webkit-scrollbar-bg: #667481;
    --cc-webkit-scrollbar-bg-hover: #9199a0;
    }
`
theme_turquoise=`
:root{
        --cc-bg: #161a1c;
        --cc-text: #d8e5ea;
        --cc-btn-primary-bg: #60fed2;
        --cc-btn-primary-text: #000;
        --cc-btn-primary-hover-bg: #4dd4ae;
        --cc-btn-secondary-bg: #242c31;
        --cc-btn-secondary-text: var(--cc-text);
        --cc-btn-secondary-hover-bg: #2b353c;
        --cc-toggle-bg-off: #667481;
        --cc-toggle-bg-on: var(--cc-btn-primary-bg);
        --cc-toggle-bg-readonly: #343e45;
        --cc-toggle-knob-bg: var(--cc-cookie-category-block-bg);
        --cc-toggle-knob-icon-color: var(--cc-bg);
        --cc-cookie-category-block-bg: #1e2428;
        --cc-cookie-category-block-bg-hover: #242c31;
        --cc-section-border: #222a30;
        --cc-block-text: #bac9cf;
        --cc-cookie-table-border: #2b3035;
        --cc-overlay-bg: rgba(4, 6, 8, .85);
        --cc-webkit-scrollbar-bg: #2c343a;
        --cc-webkit-scrollbar-bg-hover: #384148;
    }
    
    `
    theme_light_blue=`:root{
        --cc-bg: #f9faff;
        --cc-text: #112954;
        --cc-btn-primary-bg: #3859d0;
        --cc-btn-primary-text: var(--cc-bg);
        --cc-btn-primary-hover-bg: #1d2e38;
        --cc-btn-secondary-bg: #dfe7f9;
        --cc-btn-secondary-text: var(--cc-text);
        --cc-btn-secondary-hover-bg: #c6d1ea;
        --cc-toggle-bg-off: #8fa8d6;
        --cc-toggle-bg-on: #3859d0;
        --cc-toggle-bg-readonly: #cbd8f1;
        --cc-toggle-knob-bg: #fff;
        --cc-toggle-knob-icon-color: #ecf2fa;
        --cc-block-text: var(--cc-text);
        --cc-cookie-category-block-bg: #ebeff9;
        --cc-cookie-category-block-bg-hover: #dbe5f9;
        --cc-section-border: #f1f3f5;
        --cc-cookie-table-border: #e1e7f3;
        --cc-overlay-bg: rgba(230, 235, 255, .85);
        --cc-webkit-scrollbar-bg: #ebeff9;
        --cc-webkit-scrollbar-bg-hover: #3859d0;
    }
    

    
     .cc_div .c-bn{
        border-radius: .7em;
    }`;
    personnalise=`:root{
        --cc-bg: #fff;
        --cc-text: black;
        --cc-btn-primary-bg: red;
        --cc-btn-primary-text: var(--cc-bg);
        --cc-btn-primary-hover-bg: #1d2e38;
        --cc-btn-secondary-bg: #eaeff2;
        --cc-btn-secondary-text: var(--cc-text);
        --cc-btn-secondary-hover-bg: #d8e0e6;
        --cc-toggle-bg-off: #919ea6;
        --cc-toggle-bg-on: var(--cc-btn-primary-bg);
        --cc-toggle-bg-readonly: #d5dee2;
        --cc-toggle-knob-bg: #fff;
        --cc-toggle-knob-icon-color: #ecf2fa;
        --cc-block-text: var(--cc-text);
        --cc-cookie-category-block-bg: #f0f4f7;
        --cc-cookie-category-block-bg-hover: #e9eff4;
        --cc-section-border: #f1f3f5;
        --cc-cookie-table-border: #e9edf2;
        --cc-overlay-bg: rgba(4, 6, 8, .85);
        --cc-webkit-scrollbar-bg: #cfd5db;
        --cc-webkit-scrollbar-bg-hover: #9199a0;
    }`;
    personnalise1=`:root{
        --cc-bg: #fff;
        --cc-text: black;
        --cc-btn-primary-bg: red;
        --cc-btn-primary-text: var(--cc-bg);
        --cc-btn-primary-hover-bg: #1d2e38;
        --cc-btn-secondary-bg: #eaeff2;
        --cc-btn-secondary-text: var(--cc-text);
        --cc-btn-secondary-hover-bg: #d8e0e6;
        --cc-toggle-bg-off: #919ea6;
        --cc-toggle-bg-on: var(--cc-btn-primary-bg);
        --cc-toggle-bg-readonly: #d5dee2;
        --cc-toggle-knob-bg: #fff;
        --cc-toggle-knob-icon-color: #ecf2fa;
        --cc-block-text: var(--cc-text);
        --cc-cookie-category-block-bg: #f0f4f7;
        --cc-cookie-category-block-bg-hover: #e9eff4;
        --cc-section-border: #f1f3f5;
        --cc-cookie-table-border: #e9edf2;
        --cc-overlay-bg: rgba(4, 6, 8, .85);
        --cc-webkit-scrollbar-bg: #cfd5db;
        --cc-webkit-scrollbar-bg-hover: #9199a0;
    }`;
    
ngAfterContentChecked(): void {
    if(this.param.theme==this.personnalise||this.param.theme==this.personnalise1){
    if(this.bouton_text!=this.temp){
    this.param.theme=`:root{/*personnalise */
        --cc-bg:  ${this.bouton_bg};
        --cc-text: ${this.bouton_text};
        --cc-btn-primary-bg: ${this.bouton_color};
        --cc-btn-primary-text: var(--cc-bg);
        --cc-btn-primary-hover-bg:  ${this.bouton_hover};
        --cc-btn-secondary-bg: #eaeff2;
        --cc-btn-secondary-text: var(--cc-text);
        --cc-btn-secondary-hover-bg: #d8e0e6;
        --cc-toggle-bg-off: #919ea6;
        --cc-toggle-bg-on: var(--cc-btn-primary-bg);
        --cc-toggle-bg-readonly: #d5dee2;
        --cc-toggle-knob-bg: #fff;
        --cc-toggle-knob-icon-color: #ecf2fa;
        --cc-block-text: var(--cc-text);
        --cc-cookie-category-block-bg: #f0f4f7;
        --cc-cookie-category-block-bg-hover: #e9eff4;
        --cc-section-border: #f1f3f5;
        --cc-cookie-table-border: #e9edf2;
        --cc-overlay-bg: rgba(4, 6, 8, .85);
        --cc-webkit-scrollbar-bg: #cfd5db;
        --cc-webkit-scrollbar-bg-hover: #9199a0;
        
    }`;
    this.temp=this.bouton_text;
    this.personnalise=this.param.theme;
    
}
else{
    this.temp='q';
    this.personnalise=this.personnalise;
}



}

    this.data.gui_changed$.next({
        layout_gui:this.layout,
        position_y_gui:this.position_y_gui,
        position_x_gui:this.position_x_gui,
        transition_gui:this.transition_gui,
        layout_settings:this.layout_settings,
        position_settings:this.position_settings,
        transition_settings:this.transition_settings,
        theme:this.param.theme,
        Titre_principale:this.param.Titre_principale,
        Description:this.param.Description,
        Nom_du_lien :this.param.Nom_du_lien,
        Lien :this.param,
        Titre_description :this.param.Titre_description,
        Titre_principal2 :this.param.Titre_principal2,
        Description2:this.param.Description2,
        Traceur_1:this.param.Traceur_1,
        Description_traceur1:this.param.Description_traceur1,
        Traceur_2:this.param.Traceur_2,
        Description_traceur2:this.param.Description_traceur2,
        Traceur_3:this.param.Traceur_3,
        Description_traceur3:this.param.Description_traceur3,
        Titre_information:this.param.Titre_information,
        Description_information:this.param.Description_information,
        Nom_lien:this.param.Nom_lien,
        lien2:this.param.lien2,


       });

    this.param.layout=this.layout;
    this.param.layout_settings=this.layout_settings;
    this.param.position_x_gui=this.position_x_gui;
    this.param.position_y_gui=this.position_y_gui;
    this.param.transition_settings=this.transition_settings;
    this.param.transition_gui=this.transition_gui;
    this.param.position_settings=this.position_settings;
    this.param.codejs=`
    <script src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.0/dist/cookieconsent.js "></script>

    var cc = initCookieConsent();
    cc.run({
        current_lang: 'en',
        autoclear_cookies: true, // default: false
        theme_css: "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.0/dist/cookieconsent.css",
        cookie_name: 'cookie', // default: 'cc_cookie'
        cookie_expiration: 365, // default: 182
        page_scripts: true, // default: false
        gui_options: {
        consent_modal: {
                layout: ${this.layout},
                position: ${this.position_x_gui} ${this.position_y_gui},
                transition: ${this.transition_gui}},
            settings_modal: {
                layout: ${this.layout_settings},
                 position:${this.position_settings},
                transition: '${this.transition_settings} // zoom,slide
            }
        },
  
        languages: {
            'en': {
                consent_modal:{
                    title: ${this.param.Titre_principale} ,
                    description: ${this.param.Description}',
                    primary_btn: {
                        text: 'Accepter',
                        role: 'accept_all' 
                    },
                    secondary_btn: {
                        text: 'Changer mes préférences',
                        role: 'settings' 
                    }
                },
                settings_modal: {
                    title: ${this.param.Titre_principal2} //'ESPACE DE PRÉFÉRENCES DES COOKIES',
                    save_settings_btn: 'Valider mes choix',
                    accept_all_btn: 'Tout accepter',
                    reject_all_btn: 'Tout refuser',
                    close_btn_label: 'Close',
                    cookie_table_headers: [{
                        col1: 'Name'
                    }, {
                        col2: 'Domain'
                    }, {
                        col3: 'Expiration'
                    }, {
                        col4: 'Description'
                    }],
                    blocks: [{
                        title: ${this.param.Titre_description},
                        description:${this.param.Description2} 
                    }, {
                        title: ${this.param.Traceur_1},
                        description: ${this.param.Description_traceur1},
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true 
                        }
                    }, {
                        title: ${this.param.Traceur_2},
                        description:${this.param.Description_traceur2} ,
                         toggle: {
                            value: 'analytics', // there are no default categories => you specify them
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [{
                            col1: '^_ga',
                            col2: 'google.com',
                            col3: '2 years',
                            col4: 'description ...',
                            is_regex: true
                        }, {
                            col1: '_gid',
                            col2: 'google.com',
                            col3: '1 day',
                            col4: 'description ...',
                        }]
                    }, {
                        title:${this.param.Traceur_3},
                        description:${this.param.Description_traceur3}
                           toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: ${this.param.Titre_information},
                        description:${this.param.Description_information}, }]}}}});
    
                      ${this.param.theme}  `;
  }
  ngOnInit(): void {
    this.getClientData();
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];

    this.getChoixData();
    

  }
  getChoixData() {

    
    this.dataservice.getChoixById(this.id).subscribe(res =>{
      console.log(res);
      this.parametrage=res;
      this.param=this.parametrage;
      console.log("le param est ");
      console.log(this.param);
      
    }
      )
  }
  updateChoix(){
    this.dataservice.updateChoix(this.id,this.param).subscribe(
      res => {
        
      }
    )
  }


ToggleOn(){
    this.isDisplay=true; 
}
ToggleOff(){
    this.isDisplay=false; 
}
   alertfun(){
    this.alert=true;
        }
   
  getClientData() {

    console.log('liste des clients');
    console.log(this.position_x_gui)
    this.dataservice.getData().subscribe(res =>{
      console.log(res);
      this.clients=res;
    }
      )
  }
  insertData(){
    //console.log('bonjour-insertion-test');
    //console.log(this.product);
    this.dataservice.insertData(this.client).subscribe(res =>{
      //console.log(res);
      this.getClientData();
    })
  }
  insertData2(){
    //console.log('bonjour-insertion-test');
    //console.log(this.product);
    this.dataservice.insertData2(this.param).subscribe(res =>{
      console.log(res);
    //  this.getClientData();
    })
  }
  deleteData(id:any){
    //console.log(id);
    this.dataservice.deletetData(id).subscribe(res =>{
      //console.log(res);
      this.getClientData();
    })

  }


}


