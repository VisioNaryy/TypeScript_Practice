import {} from '@types/googlemaps';
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';
import $ from 'jquery';

//import red from './User'; // we can call this variable how we want

let user = new User();
let company = new Company();
let customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
