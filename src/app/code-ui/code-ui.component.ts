import { Component, OnInit,Inject,Renderer2,Input,OnChanges, SimpleChanges} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer, SafeHtml, SafeScript } from '@angular/platform-browser';
import { dataService } from '../data.service';
import { distinctUntilChanged } from 'rxjs/operators'


function getWindow() {
    return window;
}

@Component({
  selector: 'app-code-ui',
  templateUrl: './code-ui.component.html',
  styleUrls: ['./code-ui.component.scss']
})
export class CodeUiComponent {
  @Input() item:string | undefined;
  select="dark";
  layout1="cloud";
  layout2="box";
  v1:SafeScript = this.sanitizer.bypassSecurityTrustScript("");
  //boxconsent!: SafeScript;
  _win: any;
  constructor(
    private renderer2: Renderer2,
    private sanitizer:DomSanitizer,
    @Inject(DOCUMENT) private _document: Document,
    public data:dataService
) {
    this._win = getWindow();
    console.log(this._win.initCookieConsent);
    this.data.gui_changed$.pipe(distinctUntilChanged((prev:any,curr:any)=>{
        return prev.layout_gui == curr.layout_gui
        && prev.position_y_gui == curr.position_y_gui
        && prev.position_x_gui == curr.position_x_gui
        && prev.transition_gui == curr.transition_gui
        && prev.layout_settings == curr.layout_settings
        && prev.position_settings == curr.position_settings
        && prev.transition_settings == curr.transition_settings
        && prev.theme == curr.theme
        &&  prev.Titre_principal2== curr.Titre_principal2
        && prev.Titre_principale == curr.Titre_principale
        && prev.layout_gui==curr.layout_gui
        && prev.position_x_gui==curr.position_x_gui
        && prev.transition_gui==curr.transition_gui
        && prev.layout_settings==curr.layout_settings
        && prev.position_settings==curr.position_settings
        && prev.transition_settings==curr.transition_settings
        && prev.Titre_description==curr.Titre_description
        && prev.theme==curr.theme
        && prev.Titre_principale==curr.Titre_principale
        && prev.Description==curr.Description
        && prev.Nom_du_lien ==curr.Nom_du_lien
        && prev.Lien ==curr.Lien
        && prev.Description2==curr.Description2
        && prev.Traceur_1==curr.Traceur_1
        && prev.Description_traceur1==curr.Description_traceur1
        && prev.Traceur_2==curr.Traceur_2
        && prev.Description_traceur2==curr.Description_traceur2
        && prev.Traceur_3==curr.Traceur_3
        && prev.Description_traceur3==curr.Description_traceur3
        && prev.Titre_information==curr.Titre_information
        && prev.Description_information==curr.Description_information
        && prev.Nom_lien==curr.Nom_lien
    && prev.lien2==curr.lien2

    })).subscribe(gui=>{
        //save gui of client id
        this.render_censent(gui)
    })
}

render_censent(gui:any){
    document.querySelector("#cc_div")?.remove();


    let cc = this._win.initCookieConsent();
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
                layout: gui.layout_gui, // box,cloud,bar
                position: gui.position_y_gui+ ' ' + gui.position_x_gui??'right', // bottom,middle,top + left,right,center
                transition: gui.transition_gui // zoom,slide
            },
            settings_modal: {
                layout: gui.layout_settings, // box,bar
                 position: gui.position_settings,                // right,left (available only if bar layout selected)
                transition: gui.transition_settings // zoom,slide
            }
        },

        languages: {
            'en': {
                consent_modal: {
                    title: gui.Titre_principale??'NOUS UTILISONS DES COOKIES',
                    description: gui.Description??'Notre site utilise des cookies pour garantir son bon fonctionnement et optimiser ses performances techniques, personnaliser laffichage de nos pages ou diffuser et mesurer des publicit??s pertinentes. Pour obtenir davantage dinformations et/ou pour modifier vos pr??f??rences, cliquez sur ?? <button type="button" data-cc="c-settings" class="cc-link">Changer mes pr??f??rences</button>??.',
                    primary_btn: {
                        text: 'Accepter',
                        role: 'accept_all' // 'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text: 'Changer mes pr??f??rences',
                        role: 'settings' // 'settings' or 'accept_necessary'
                    }
                },
                settings_modal: {
                    title:gui.Titre_principal2 ??'ESPACE DE PR??F??RENCES DES COOKIES',
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
                        title:gui.Titre_description??'Votre confidentialit?? est importante pour nous',
                        description:gui.Description2??'Les cookies sont de tr??s petits fichiers texte qui sont stock??s sur votre ordinateur lorsque vous visitez un site Web. Nous utilisons des cookies ?? diverses fins et pour am??liorer votre exp??rience en ligne sur notre site Web (par exemple, pour m??moriser les informations de connexion de votre compte).Vous pouvez modifier vos pr??f??rences et refuser lenregistrement de certains types de cookies sur votre ordinateur lors de la navigation sur notre site. Vous pouvez ??galement supprimer les cookies d??j?? stock??s sur votre ordinateur, mais gardez ?? lesprit que leur suppression peut vous emp??cher d utiliser des ??l??ments de notre site Web.'
                    }, {
                        title: gui.Traceur_1??'Strictement n??cessaires cookies',
                        description: gui.Description_traceur1??'Ces cookies ne concernent que le fonctionnement de notre site. Ils sont essentiels et n??cessaires pour assurer le fonctionnement optimal de notre site, et pour vous permettre d???utiliser ses services et fonctionnalit??s. Sans ces cookies qui sont absolument n??cessaires, notre site ne fonctionnera pas aussi bien que nous le souhaitons. Nous serions alors dans l???incapacit?? de fournir le site ou certains services ou fonctionnalit??s demand??s.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: gui.Traceur_2??'Performance et Statistiques ',
                        description: gui.Description_traceur2??'Ces cookies nous permettent de suivre l???activit?? du site, d?????tablir des statistiques de fr??quentation et d???utilisation des divers ??l??ments composant notre site (rubriques et contenus visit??, parcours, ???), afin d???en am??liorer l???int??r??t, l???ergonomie et la performance en fonction de l???utilisation r??elle. Ces donn??es sont recueillies de mani??re anonyme.',
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
                        title: gui.Traceur_3??'Ciblage et publicit??',
                        description: gui.Description_traceur3??'Ces cookies sont utilis??s pour afficher des publicit??s susceptibles de vous int??resser en fonction de vos habitudes de navigation.Ces cookies, tels que servis par nos fournisseurs de contenu et / ou de publicit??, peuvent associer des informations qu ils ont collect??es sur notre site Web ?? dautres informations quils ont collect??es de mani??re ind??pendante et concernant les activit??s du votre navigateur Web sur son r??seau de sites Web.',
                        toggle: {
                            value: 'targeting',
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
                        title:gui.Titre_information??'Plus dinformation',
                        description:gui.Description_information??'Pour toute question relative ?? notre politique en mati??re de cookies et ?? vos choix, veuillez nous contacter.Pour en savoir plus, merci de consulter notre  <a class="cc-link" href="https://orestbida.com/contact">Politique sur les cookies.</a>.',
                    }]
                }
            }
        }
    });

    /*
    var s = document.createElement("script");
    s.text=`  // obtain cookieconsent plugin
    var cc = initCookieConsent();

    // microsoft logo
    var cookie = '????';

    // run plugin with config object


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
                layout: 'cloud', // box,cloud,bar
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
                    description: 'Notre site utilise des cookies pour garantir son bon fonctionnement et optimiser ses performances techniques, personnaliser laffichage de nos pages ou diffuser et mesurer des publicit??s pertinentes. Pour obtenir davantage dinformations et/ou pour modifier vos pr??f??rences, cliquez sur ?? <button type="button" data-cc="c-settings" class="cc-link">Changer mes pr??f??rences</button>??.',
                    primary_btn: {
                        text: 'Accepter',
                        role: 'accept_all' // 'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text: 'Changer mes pr??f??rences',
                        role: 'settings' // 'settings' or 'accept_necessary'
                    }
                },
                settings_modal: {
                    title: 'ESPACE DE PR??F??RENCES DES COOKIES',
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
                        title: 'Votre confidentialit?? est importante pour nous',
                        description: 'Les cookies sont de tr??s petits fichiers texte qui sont stock??s sur votre ordinateur lorsque vous visitez un site Web. Nous utilisons des cookies ?? diverses fins et pour am??liorer votre exp??rience en ligne sur notre site Web (par exemple, pour m??moriser les informations de connexion de votre compte).Vous pouvez modifier vos pr??f??rences et refuser lenregistrement de certains types de cookies sur votre ordinateur lors de la navigation sur notre site. Vous pouvez ??galement supprimer les cookies d??j?? stock??s sur votre ordinateur, mais gardez ?? lesprit que leur suppression peut vous emp??cher d utiliser des ??l??ments de notre site Web.'
                    }, {
                        title: 'Strictement n??cessaires cookies',
                        description: 'Ces cookies ne concernent que le fonctionnement de notre site. Ils sont essentiels et n??cessaires pour assurer le fonctionnement optimal de notre site, et pour vous permettre d???utiliser ses services et fonctionnalit??s. Sans ces cookies qui sont absolument n??cessaires, notre site ne fonctionnera pas aussi bien que nous le souhaitons. Nous serions alors dans l???incapacit?? de fournir le site ou certains services ou fonctionnalit??s demand??s.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Performance et Statistiques ',
                        description: 'Ces cookies nous permettent de suivre l???activit?? du site, d?????tablir des statistiques de fr??quentation et d???utilisation des divers ??l??ments composant notre site (rubriques et contenus visit??, parcours, ???), afin d???en am??liorer l???int??r??t, l???ergonomie et la performance en fonction de l???utilisation r??elle. Ces donn??es sont recueillies de mani??re anonyme.',
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
                        title: 'Ciblage et publicit??',
                        description: 'Ces cookies sont utilis??s pour afficher des publicit??s susceptibles de vous int??resser en fonction de vos habitudes de navigation.Ces cookies, tels que servis par nos fournisseurs de contenu et / ou de publicit??, peuvent associer des informations qu ils ont collect??es sur notre site Web ?? dautres informations quils ont collect??es de mani??re ind??pendante et concernant les activit??s du votre navigateur Web sur son r??seau de sites Web.',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'Plus dinformation',
                        description: 'Pour toute question relative ?? notre politique en mati??re de cookies et ?? vos choix, veuillez nous contacter.Pour en savoir plus, merci de consulter notre  <a class="cc-link" href="https://orestbida.com/contact">Politique sur les cookies.</a>.',
                    }]
                }
            }
        }
    });
    `;
    */
    var y = document.createElement("style");
    y.textContent=gui.theme;

    //this.renderer2.appendChild(this._document.body, s); 
    this.renderer2.appendChild(this._document.body, y);
}





}
