import { rem, em } from './converters'

it('returns the right rem number', () => {
    expect(rem(24)).toEqual('1.5rem');
});

it('returns the right em number', () => {
    expect(em(24)).toEqual('1.5em');
});