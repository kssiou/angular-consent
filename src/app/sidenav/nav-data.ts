
export const navbarData = [
    {
        routeLink: 'Cookiesbar',
        icon: 'fas fa-cookie-bite',
        label: 'Barre de cookies',
        
    },
    {
        routeLink: 'products',
        icon: 'fas fa-box-open',
        label: 'Politiques juridiques'
    },
    {
        routeLink: 'settings/privacy',
        icon: 'fas fa-chart-bar',
        label: 'Politique de confidentialité'
    },
    {
        routeLink: 'settings/cdt',
        icon: 'fas fa-tags',
        label: 'Conditions d\'utilisation'
    },
    {
        routeLink: 'pages',
        icon: 'fas fa-cookie-bite',
        label: 'Ne vendez pas mes informations personnelles'
    },
    {
        routeLink: 'media',
        icon: 'fas fa-camera',
        label: 'Media'
    },
    {
        routeLink: 'settings',
        icon: 'fas fa-cog',
        label: 'Settings'
    },
    {
        routeLink: '',
        icon: 'fas fa-cog',
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