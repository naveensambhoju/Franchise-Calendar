import { provideRoutes } from '@angular/router';
import { AdminContentComponent } from './admincontent/admin-content.component';
export const APP_ROUTES = [
    
    { path: '', component: AdminContentComponent },
    { path: '**', component: AdminContentComponent }
];

/*

'' is index route ==> the first component to be loaded
** is fallback route ==> If nothing matches then fallback route component will be loaded
@children route ==> are the sub routes of a component
@Auxillary route ==> separate routing configuration in the same page, like a separate route for subview and it will have separate <router-outlet name="subview"></router-outlet>. The url will be \product-details(subview:productview).
@Lazy loading ==>
The order is very important, fallback route should be entered as last route, since fallback route is first match so no other component will be loaded if placed first
*/