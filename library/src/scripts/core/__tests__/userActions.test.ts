/**
 * Copyright (c) Openizr. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import userActions from 'scripts/core/userActions';

describe('core/userActions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('ADD', () => {
    const data = { test: true };
    expect(userActions.mutations.ADD({ state: null, mutate: jest.fn(), hash: 'steps' }, data)).toEqual(data);
  });
});
