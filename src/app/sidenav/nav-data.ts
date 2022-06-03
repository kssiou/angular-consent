
export const navbarData = [
    {
        routeLink: 'Cookiesbar',
        icon: 'fal fa-lock',
        label: 'Barre de cookies',
        
    },
    {
        routeLink: 'products',
        icon: 'fal fa-box-open',
        label: 'Politiques juridiques'
    },
    {
        routeLink: 'settings/privacy',
        icon: 'fal fa-chart-bar',
        label: 'Politique de confidentialité'
    },
    {
        routeLink: 'settings/cdt',
        icon: 'fal fa-tags',
        label: 'Conditions d\'utilisation'
    },
    {
        routeLink: 'pages',
        icon: 'fal fa-file',
        label: 'Ne vendez pas mes informations personnelles'
    },
    {
        routeLink: 'media',
        icon: 'fal fa-camera',
        label: 'Media'
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings'
    },
    {
        routeLink: '',
        icon: 'fal fa-cog',
        label: 'Menu with Children',
        submenuLevel1: [
            {
                routeLink: '',
                icon: '', // icon if needed
                label: '',
            },
            {
                routeLink: '',
                icon: 'fal fa-cog', // icon if needed
                label: 'Sub menu level 1',
                submenuLevel2: [
                    {
                        routeLink: '',
                        icon: 'fal fa-cog', // icon if needed
                        label: 'Sub menu level 2',
                    }
                ]
            }
        ]
    },

];