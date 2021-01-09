import React from 'react';
import EditEvent from './components/forms/edit_event_form/index';

import renderer from 'react-test-renderer';

test("EditEvent component snapshot test", () => { 
    const component = renderer.create(<EditEvent />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
