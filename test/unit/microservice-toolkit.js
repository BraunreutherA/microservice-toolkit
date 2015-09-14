import microserviceToolkit from '../../src/index';

describe('microserviceToolkit', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(microserviceToolkit, 'greet');
      microserviceToolkit.greet();
    });

    it('should have been run once', () => {
      expect(microserviceToolkit.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(microserviceToolkit.greet).to.have.always.returned('hello');
    });
  });
});
