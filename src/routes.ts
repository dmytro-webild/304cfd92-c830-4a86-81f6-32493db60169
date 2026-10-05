export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Home', pageFile: 'HomePage' },
  { path: '/containers', label: 'Containers for Sale', pageFile: 'ContainersPage' },
  { path: '/custom', label: 'Custom Builds', pageFile: 'CustomPage' },
  { path: '/delivery', label: 'Delivery', pageFile: 'DeliveryPage' },
  { path: '/site-prep', label: 'Site Prep', pageFile: 'SitePrepPage' },
  { path: '/about', label: 'About', pageFile: 'AboutPage' },
  { path: '/contact', label: 'Get a Quote', pageFile: 'ContactPage' },
];
