export class User {

  // ---------------------------------------------------------------------------------------
  // PROPERTIES

  _id: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  chats: Array<string>;
  created_at: Date;
  updated_at: Date;
  preferredLanguage: string;
  facebookAccessToken: string | null;
  marketplace_id: string;
  pending_orders: number;
  token: string;


  // ---------------------------------------------------------------------------------------
  // CONSTRUCTOR

  constructor(data?: any) {
    if (typeof data !== 'undefined') {
      this.fromData(data);
    }
  }


  // ---------------------------------------------------------------------------------------
  // METHODS

  fromData(data: any): void {

    for (const key in data) {

      if (data.hasOwnProperty(key)) {

        switch (key) {
          case 'password':
            break;
          case 'chats':
            break;
          case 'created_at':
            this.created_at = new Date(data[key]);
            break;
          case 'updated_at':
            this.updated_at = new Date(data[key]);
            break;
          default:
            const indexKey = key as keyof typeof this;
            this[indexKey] = data[key];
            break;
        }

      }

    }

  }

}
