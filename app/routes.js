import {generateRoute} from 'utils/localized-routes';

export default {
    path: '',
    component: require('./components/app'),
    childRoutes: [
        ...generateRoute({
            paths: ['/', '/users', '/utilisateurs'],
            component: require('./components/users')
        }),
        ...generateRoute({
            paths: ['/protected', '/protege'],
            component: require('./components/protected')
        }),
        ...generateRoute({
            paths: ['/guides'],
            component: require('./components/guides')
        }),
        ...generateRoute({
            paths: ['/login-info', '/info-client'],
            component: require('./pages/login-info')
        }),
        ...generateRoute({
            paths: ['/profile'],
            component: require('./components/profile')
        })
    ]
};
