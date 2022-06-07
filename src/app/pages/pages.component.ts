import { AfterContentChecked, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { dataService } from '../data.service';
import { DataService } from '../service/data.service';
import { Client } from 'src/app/client';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit ,AfterContentChecked {
  layout = '';
  position_x_gui='';
  position_y_gui='';
  transition_gui='';
  layout_settings='';
  position_settings='';
  transition_settings='';
  codejs!: string;

  selectedDay:string='';
  clients:any;
  client=new Client;

  tabWay = "vert";
  constructor(public dataservice:DataService , public data:dataService,private cdRef: ChangeDetectorRef) {

   }
   public theme=[{value:'turqoise',code:`.theme_turquoise{--cc-bg: #161a1c;--cc-text: #d8e5ea;--cc-btn-primary-bg: #60fed2;--cc-btn-primary-text: #000;--cc-btn-primary-hover-bg: #4dd4ae;--cc-btn-secondary-bg: #242c31;--cc-btn-secondary-text: var(--cc-text);--cc-btn-secondary-hover-bg: #2b353c;--cc-toggle-bg-off: #667481;--cc-toggle-bg-on: var(--cc-btn-primary-bg);--cc-toggle-bg-readonly: #343e45;--cc-toggle-knob-bg: var(--cc-cookie-category-block-bg);--cc-toggle-knob-icon-color: var(--cc-bg);--cc-cookie-category-block-bg: #1e2428;--cc-cookie-category-block-bg-hover: #242c31;--cc-section-border: #222a30;--cc-block-text: #bac9cf;--cc-cookie-table-border: #2b3035;--cc-overlay-bg: rgba(4, 6, 8, .85);--cc-webkit-scrollbar-bg: #2c343a;--cc-webkit-scrollbar-bg-hover: #384148;}.theme_turquoise .cc_div a{color: var(--cc-btn-primary-bg);}.theme_turquoise #cc_div #s-hdr{border-bottom: none;}.theme_turquoise .cc_div #c-txt{color: #b0b8c6!important;}`
},{value:'funky',code:`.theme_funky{
--cc-bg: #f9faff;
--cc-text: #112954;--cc-btn-primary-bg: #3859d0;
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
--cc-webkit-scrollbar-bg-hover: #3859d0;}
.theme_funky #c-ttl{
color: var(--cc-btn-primary-bg);}

/* Custom border radius */
.theme_funky #cm, 
.theme_funky #s-bl .act .b-acc, 
.theme_funky #s-inr, 
.theme_funky .cc_div .b-tl, 
.theme_funky .cc_div .c-bl{
border-radius: 1.2em;
}.theme_funky .cc_div .c-bn{
border-radius: .7em;
}`}];


ngAfterContentChecked(): void {
    this.data.gui_changed$.next({
        layout_gui:this.layout,
        position_y_gui:this.position_y_gui,
        position_x_gui:this.position_x_gui,
        transition_gui:this.transition_gui,
        layout_settings:this.layout_settings,
        position_settings:this.position_settings,
        transition_settings:this.transition_settings,
       });

    this.codejs=`var cc = initCookieConsent();
    cc.run({
        current_lang: 'en',
        autoclear_cookies: true, // default: false
        theme_css: "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.0/dist/cookieconsent.css",
        cookie_name: 'cookie', // default: 'cc_cookie'
        cookie_expiration: 365, // default: 182
        page_scripts: true, // default: false

        // auto_language: null,                     // default: null; could also be 'browser' or 'document'
        // autorun: true,                           // default: true
        // delay: 0,                                // default: 0
        // force_consent: false,
        // hide_from_bots: false,                   // default: false
        //remove_cookie_tables: false ,             // default: false
        // cookie_domain: location.hostname,        // default: current domain
        // cookie_path: "/",                        // default: root
        // cookie_same_site: "Lax",
        // use_rfc_cookie: false,                   // default: false
        // revision: 0,                             // default: 0
  
        gui_options: {
            consent_modal: {
                layout: ${this.layout}, // box,cloud,bar
                position: ${this.position_x_gui} ${this.position_y_gui}, // bottom,middle,top + left,right,center
                transition: ${this.transition_gui} // zoom,slide
            },
            settings_modal: {
                layout: ${this.layout_settings}, // box,bar
                 position:${this.position_settings},                // right,left (available only if bar layout selected)
                transition: '${this.transition_settings} // zoom,slide
            }
        },
  
        languages: {
            'en': {
                consent_modal: {
                    title: 'NOUS UTILISONS DES COOKIES',
                    description: 'Notre site utilise des cookies pour garantir son bon fonctionnement et optimiser ses performances techniques, personnaliser laffichage de nos pages ou diffuser et mesurer des publicités pertinentes. Pour obtenir davantage dinformations et/ou pour modifier vos préférences, cliquez sur « <button type="button" data-cc="c-settings" class="cc-link">Changer mes préférences</button>».',
                    primary_btn: {
                        text: 'Accepter',
                        role: 'accept_all' // 'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text: 'Changer mes préférences',
                        role: 'settings' // 'settings' or 'accept_necessary'
                    }
                },
                settings_modal: {
                    title: 'ESPACE DE PRÉFÉRENCES DES COOKIES',
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
                        title: 'Votre confidentialité est importante pour nous',
                        description: 'Les cookies sont de très petits fichiers texte qui sont stockés sur votre ordinateur lorsque vous visitez un site Web. Nous utilisons des cookies à diverses fins et pour améliorer votre expérience en ligne sur notre site Web (par exemple, pour mémoriser les informations de connexion de votre compte).Vous pouvez modifier vos préférences et refuser lenregistrement de certains types de cookies sur votre ordinateur lors de la navigation sur notre site. Vous pouvez également supprimer les cookies déjà stockés sur votre ordinateur, mais gardez à lesprit que leur suppression peut vous empêcher d utiliser des éléments de notre site Web.'
                    }, {
                        title: 'Strictement nécessaires cookies',
                        description: 'Ces cookies ne concernent que le fonctionnement de notre site. Ils sont essentiels et nécessaires pour assurer le fonctionnement optimal de notre site, et pour vous permettre d’utiliser ses services et fonctionnalités. Sans ces cookies qui sont absolument nécessaires, notre site ne fonctionnera pas aussi bien que nous le souhaitons. Nous serions alors dans l’incapacité de fournir le site ou certains services ou fonctionnalités demandés.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Performance et Statistiques ',
                        description: 'Ces cookies nous permettent de suivre l’activité du site, d’établir des statistiques de fréquentation et d’utilisation des divers éléments composant notre site (rubriques et contenus visité, parcours, …), afin d’en améliorer l’intérêt, l’ergonomie et la performance en fonction de l’utilisation réelle. Ces données sont recueillies de manière anonyme.',
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
                        title: 'Ciblage et publicité',
                        description: 'Ces cookies sont utilisés pour afficher des publicités susceptibles de vous intéresser en fonction de vos habitudes de navigation.Ces cookies, tels que servis par nos fournisseurs de contenu et / ou de publicité, peuvent associer des informations qu ils ont collectées sur notre site Web à dautres informations quils ont collectées de manière indépendante et concernant les activités du votre navigateur Web sur son réseau de sites Web.',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'Plus dinformation',
                        description: 'Pour toute question relative à notre politique en matière de cookies et à vos choix, veuillez nous contacter.Pour en savoir plus, merci de consulter notre  Politique sur les cookies.</a>.', }]}}}});
    `;
  }
  ngOnInit(): void {
    this.getClientData();
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
      console.log(res);
      //this.getClientData();
    })
  }

}
