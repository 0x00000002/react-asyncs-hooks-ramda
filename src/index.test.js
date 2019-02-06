import Index from './index.js';

describe('components/App', function () {
  it('renders without crashing', () => {
    expect(
      JSON.stringify(
        Object.assign({}, Index, { _reactInternalInstance: 'censored' }),
      ),
    ).toMatchSnapshot()
  })
})
