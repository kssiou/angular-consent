import { AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { dataService } from '../data.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements AfterContentChecked {
  value = 'Clear me';

  tabWay = "vert";
  layout = '';
  position_x='';
  position_y='';
  Transition='my name';
  v2!: string;
  mi!: string;

  constructor(public dato:dataService) {

   }


   ngAfterContentChecked(): void {
    this.dato.layout=this.layout;
    this.dato.position_x=this.position_x;
    this.dato.position_y=this.position_y;
    this.dato.transition=this.Transition;
    this.Transition;
    this.v2=`var cc = initCookieConsent();
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
                layout: ${this.dato.layout}, // box,cloud,bar
                position: 'bottom right', // bottom,middle,top + left,right,center
                transition: 'slide' // zoom,slide
            },
            settings_modal: {
                layout: 'cloud', // box,bar
                // position: 'left',                // right,left (available only if bar layout selected)
                transition: 'slide' // zoom,slide
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
                        description: 'Pour toute question relative à notre politique en matière de cookies et à vos choix, veuillez nous contacter.Pour en savoir plus, merci de consulter notre  <a class="cc-link" href="https://orestbida.com/contact">Politique sur les cookies.</a>.',
                    }]
                }
            }
        }
    });
    `;
  }
  

}
