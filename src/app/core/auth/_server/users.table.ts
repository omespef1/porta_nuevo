export class UsersTable {
	public static users: any = [
		{
			id: 1,
			username: 'humbertoe',
			password: '9505',
			email: 'mhebeto@gmail.com',
			accessToken: 'access-token-8f3ae836da744329a6f93bf20594b5cc',
			refreshToken: 'access-token-f8c137a2c98743f48b643e71161d90aa',
			roles: [1], // Administrator
			pic: './assets/media/users/300_25.png',
			fullname: 'Humberto Espinosa',
			occupation: 'Desarrollador',
			companyName: 'aplicación',
			phone: '3192972505',
			address: {
				addressLine: 'Calle 72 # 12-65',
				city: 'Bogotá',
				state: 'Cundinamarca',
				postCode: '111511'
			},
			socialNetworks: {
				linkedIn: 'https://linkedin.com/admin',
				facebook: 'https://facebook.com/admin',
				twitter: 'https://twitter.com/admin',
				instagram: 'https://instagram.com/admin'
			}
		},
		{
			id: 2,
			username: 'humbertoe',
			password: '9505',
			email: 'humbertoe@aplicación.com.co',
			accessToken: 'access-token-6829bba69dd3421d8762-991e9e806dbf',
			refreshToken: 'access-token-f8e4c61a318e4d618b6c199ef96b9e55',
			roles: [2], // Manager
			pic: './assets/media/users/100_2.jpg',
			fullname: 'Humberto Espinosa',
			occupation: 'CPO',
			companyName: 'aplicación',
			phone: '31929834534',
			address: {
				addressLine: 'Calle 72 # 12-65',
				city: 'Bogotá',
				state: 'Cundinamarca',
				postCode: '110231'
			},
			socialNetworks: {
				linkedIn: 'https://linkedin.com/user',
				facebook: 'https://facebook.com/user',
				twitter: 'https://twitter.com/user',
				instagram: 'https://instagram.com/user'
			}
        }
	];

	public static tokens: any = [
		{
			id: 1,
			accessToken: 'access-token-' + Math.random(),
			refreshToken: 'access-token-' + Math.random()
		}
	];
}
