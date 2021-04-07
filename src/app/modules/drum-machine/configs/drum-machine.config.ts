export abstract class DrumMachineConfig {
  public static readonly soundsName: string[] = [
    'crash',
    'hat',
    'hi_hat_closed',
    'kick',
    'ride',
    'snare',
    'snare_light',
  ];

  public static readonly countPosition = 8;
  public static readonly audioPath = 'assets/audio/';
  public static readonly bpmValue = {
    min: 1,
    max: 420,
    initial: 220,
  };
}
