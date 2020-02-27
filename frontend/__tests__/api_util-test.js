/* globals jest */

import {requestStar,} from '../util/failing_stars';
import axios from 'axios';

describe('requestStar ', () => {
 
  it('fetches star data', async () => {
  const payload = { data: { id: 2, name: "alpha centauri" }}

  const promise = new Promise((resolve, reject) =>
    setTimeout( () => resolve(payload) , 100)
  );

  axios.get = jest.fn((url) => promise);

    const promiseStar = requestStar();

    await promise;
    expect(promise).toEqual(promiseStar)
    axios.get.mockClear();
  });
});