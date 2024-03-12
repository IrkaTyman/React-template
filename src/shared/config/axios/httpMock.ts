import MockAdapter from 'axios-mock-adapter';

import {http} from './http';

export const httpMock = new MockAdapter(http);
