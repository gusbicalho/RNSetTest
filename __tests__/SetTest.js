import { coreJsSet, nativeSet } from '../SetTest';
describe('problem does not occur in jest', () => {
  test('nativeSet has size = 0', () => {
      expect(nativeSet.size).toBe(0);
  })
  test('coreJsSet also has size = 0', () => {
      expect(coreJsSet.size).toBe(0);
  })
})
