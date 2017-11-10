export interface AddressInterface {
  addr1: string;
  addr2: string;
  postal: string;
  city: string;
  province: string;
}

export interface DigitalInterface {
  email: string;
  github: string;
  website: string;
}

export interface PhoneInterface {
  main: string;
  alternate: string;
}

export interface ContactInterface {
  name: String;
  address: AddressInterface;
  digital: DigitalInterface;
  phone: PhoneInterface;
}
