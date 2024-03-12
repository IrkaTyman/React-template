import MockAdapter from 'axios-mock-adapter';

import {http} from '../../config/axios/http';

export const httpMock = new MockAdapter(http);
