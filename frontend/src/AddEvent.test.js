import React from 'react';
import AddEvent from './components/forms/add_even_from/index';

import renderer from 'react-test-renderer';

test("AddEvent component snapshot test", () => { 
    const component = renderer.create(<AddEvent />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
