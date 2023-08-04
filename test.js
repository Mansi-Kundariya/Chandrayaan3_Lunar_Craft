import Spacecraft from './main';

describe('Spacecraft', () => {
  it('should move forward correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    spacecraft.CommandsForMoveAndForword(['f']);
    expect(spacecraft.getPosition()).toEqual({ x: 0, y: 1, z: 0 });
  });

  it('should move backward correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    spacecraft.CommandsForMoveAndForword(['b']);
    expect(spacecraft.getPosition()).toEqual({ x: 0, y: -1, z: 0 });
  });

  it('should turn left correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    spacecraft.CommandsForMoveAndForword(['l']);
    expect(spacecraft.getDirection()).toBe('W');
  });

  it('should turn right correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    spacecraft.CommandsForMoveAndForword(['r']);
    expect(spacecraft.getDirection()).toBe('E');
  });

  it('should turn up correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    spacecraft.CommandsForMoveAndForword(['u']);
    expect(spacecraft.getDirection()).toBe('Up');
  });

  it('should turn down correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    spacecraft.CommandsForMoveAndForword(['d']);
    expect(spacecraft.getDirection()).toBe('Down');
  });

  it('should handle multiple commands correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    spacecraft.CommandsForMoveAndForword(['f', 'r', 'u', 'b', 'l']);
    expect(spacecraft.getPosition()).toEqual({ x: 0, y: 1, z: -1 });
    expect(spacecraft.getDirection()).toBe('W');
  });
});
