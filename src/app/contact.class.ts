export interface AddressInterface {
  addr1: string;
  addr2: string;
  postal: string;
  city: string;
  province: string;
}

export class Address {
  addr1: AddressInterface["addr1"];
  addr2: AddressInterface["addr2"];
  postal: AddressInterface["postal"];
  city: AddressInterface["city"];
  province: AddressInterface["province"];

  constructor(
    addr1: AddressInterface["addr1"],
    addr2: AddressInterface["addr2"],
    postal: AddressInterface["postal"],
    city: AddressInterface["city"],
    province: AddressInterface["province"]) {

    this.addr1 = addr1;
    this.addr2 = addr2;
    this.postal = postal;
    this.city = city;
    this.province = province;
  }
}

export interface DigitalInterface {
  email: string;
  github: string;
  website: string;
}

export class Digital {
  email: DigitalInterface["email"];
  github: DigitalInterface["github"];
  website: DigitalInterface["website"];

  constructor(
    email: DigitalInterface["email"],
    github: DigitalInterface["github"],
    website: DigitalInterface["website"]) {

    this.email = email;
    this.github = github;
    this.website = website;
  }
}

export interface PhoneInterface {
  main: string;
  alternate: string;
}

export class Phone {
  main: PhoneInterface["main"];
  alternate: PhoneInterface["alternate"];

  constructor(
    main: PhoneInterface["main"],
    alternate: PhoneInterface["alternate"]) {

    this.main = main;
    this.alternate = alternate;
  }
}

export interface ContactInterface {
  address: AddressInterface;
  digital: DigitalInterface;
  phone: PhoneInterface;
}

export class Contact {
  address: Address;
  digital: Digital;
  phone: Phone;

  constructor(
    address: ContactInterface["address"],
    digital: ContactInterface["digital"],
    phone: ContactInterface["phone"]) {

    this.address = address;
    this.digital = digital;
    this.phone = phone;
  }
}
