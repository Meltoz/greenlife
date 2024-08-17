export default [{
  path: '',
  children: [{
    path: '',
    loadComponent: () => import('./home.component').then(x => x.HomeComponent)
  }  ]
}]
