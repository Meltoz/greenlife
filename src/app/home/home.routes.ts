export default [{
  path:'',
  children: [{
    path:'',
    loadComponent: () => import('./home.component').then(x => x.HomeComponent)
  },{
    path:'product/:id',
    loadComponent: () => import('./product-detail/product-detail.component').then(x => x.ProductDetailComponent)
  }
  ]
}]
