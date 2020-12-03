export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			'items': [
				{
				}
			]
		},
		aside: {
			self: {},
			items: [

				{section: 'Contabilidad'},
				{
					title: 'Movimiento contable',
					icon: 'flaticon2-browser-2',
					root: true,
					page: 'accounting-movement',
					translate: 'CONTABILITY.ACCOUNTING_MOVEMENT',
				},
				{
					title: 'Consulta Movimiento contable',
					icon: 'flaticon2-browser-2',
					root: true,
					page: 'accounting-movement-query',
					translate: 'CONTABILITY.ACCOUNTING_MOVEMENT_QUERY',
				},
				{
					section: 'General'
				},
				{
					title: 'Sucursales',
					icon: 'flaticon2-browser-2',
					root: true,
					page: 'branch-office',
					translate: 'GENERAL.BRANCH_OFFICE',
				},
				{
					title: 'Terceros',
					icon: 'flaticon2-browser-2',
					root: true,
					page: 'third-parties',
					translate: 'GENERAL.THIRD_PARTIES',
				},
				{section:'Inventario'},
				{
					title:'Movimiento de inventario',
					icon:'flaticon2-browser-2',
					root:true,
					page: 'inventary-movement',
					translate: 'INVENTARY.INVENTARY_MOVEMENT'
				},
				{
					title:'Consulta Movimiento de inventario',
					icon:'flaticon2-browser-2',
					root:true,
					page: 'inventary-movement-query',
					translate: 'INVENTARY.INVENTARY_MOVEMENT_QUERY'
				},
				{
					title:'Bodegas',
					icon:'flaticon2-browser-2',
					root:true,
					page: 'inventary-cellar',
					translate: 'INVENTARY.CELLAR'
				},
				{
					title:'Productos',
					icon:'flaticon2-browser-2',
					root:true,
					page: 'inventary-products',
					translate: 'INVENTARY.PRODUCTS'
				},
				{
					title:'Tipos de producto',
					icon:'flaticon2-browser-2',
					root:true,
					page: 'inventary-type-products',
					translate: 'INVENTARY.TYPE_PRODUCTS'
				},
				{
					title:'Unidades de medida',
					icon:'flaticon2-browser-2',
					root:true,
					page: 'inventary-measurent-unity',
					translate: 'INVENTARY.MEASURENT_UNITY'
				},
				{section: 'Sistema'},
				{
					title: 'Administración de usuarios',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-user-outline-symbol',
					submenu: [
						{
							title: 'Usuarios',
							page: 'user-management/users'
						},
						{
							title: 'Roles',
							page: 'user-management/roles'
						}
					]
				},
				{section: 'Facturación'},
				{
					title:'Lista de precios',
					icon:'flaticon2-browser-2',
					root:true,
					page: 'billing-price-list',
					translate: 'BILLLING.PRICE_LIST'
				},
				{section: 'Personalizado'},
				{
					title: 'Páginas de error',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-attention',
					submenu: [
						{
							title: 'Error Page - 1',
							page: 'error/error-v1'
						},
						{
							title: 'Error Page - 2',
							page: 'error/error-v2'
						},
						{
							title: 'Error Page - 3',
							page: 'error/error-v3'
						},
						{
							title: 'Error Page - 4',
							page: 'error/error-v4'
						},
						{
							title: 'Error Page - 5',
							page: 'error/error-v5'
						},
						{
							title: 'Error Page - 6',
							page: 'error/error-v6'
						},
					]
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
