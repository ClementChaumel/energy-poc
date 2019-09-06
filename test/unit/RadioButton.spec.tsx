import * as React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import RadioButton from '../../components/RadioButton';

describe('<RadioButton />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<RadioButton id="both" label="Both gas and electricity" onClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
