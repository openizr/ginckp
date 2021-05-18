/**
 * Copyright (c) Matthieu Jabbour. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { mount } from '@vue/test-utils';
import Step from 'scripts/vue/components/Step.vue';

jest.mock('scripts/vue/components/Field', () => ({
  render(createElement: Json): Json {
    return createElement('div', {
      attrs: {
        id: 'Field',
      },
    });
  },
  mounted(): void {
    (this as Json).$emit('userAction');
  },
}));
jest.mock('sonar-ui/vue', () => ({
  markdown: (value: string): string => value,
  buildClass: (...values: string[]): string => values.join(' '),
}));

describe('vue/components/Step', () => {
  const onUserAction = jest.fn();
  const customComponents = {};

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('active step', () => {
    const wrapper = mount(Step, {
      propsData: {
        id: 'step',
        status: 'success',
        isActive: true,
        index: 0,
        fields: [{
          id: 'Message',
          type: 'Unknown',
          status: 'initial',
          options: {},
        }],
        customComponents,
      },
      listeners: {
        userAction: onUserAction,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('inactive step', () => {
    const wrapper = mount(Step, {
      propsData: {
        id: 'step',
        status: 'success',
        isActive: false,
        index: 0,
        fields: [{
          id: 'Message',
          type: 'Unknown',
          status: 'initial',
          options: {},
        }],
      },
      listeners: {
        userAction: onUserAction,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
