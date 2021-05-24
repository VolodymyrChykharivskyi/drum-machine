import { TestBed } from '@angular/core/testing';

import { DrumMachineService } from './drum-machine.service';

import { Stave } from '../../interfaces/stave.interface';

describe('DrumMachineService', () => {
	let service: DrumMachineService;
	let activeStaves: Stave[];
	let inactiveStaves: Stave[];

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{ provide: DrumMachineService, useValue: DrumMachineService },
			],
		});
		service = new DrumMachineService();
		activeStaves = [
			{
				id: 1,
				name: 'Ride',
				sample: 'ride',
				notes: [
					{ pos: 0, active: true },
					{ pos: 1, active: false },
				],
			},
			{
				id: 2,
				name: 'Hi hat',
				sample: 'hi_hat',
				notes: [
					{ pos: 0, active: true },
					{ pos: 1, active: true },
				],
			},
		];

		inactiveStaves = [
			{
				id: 1,
				name: 'Ride',
				sample: 'ride',
				notes: [
					{ pos: 0, active: false },
					{ pos: 1, active: false },
				],
			},
			{
				id: 2,
				name: 'Hi hat',
				sample: 'hi_hat',
				notes: [
					{ pos: 0, active: false },
					{ pos: 1, active: false },
				],
			},
		];
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('togglePlayValue method', () => {
		it('should set true', () => {
			service.playing = false;

			service.togglePlayValue();

			expect(service.playing).toBeTruthy();
		});

		it('should set false', () => {
			service.playing = true;

			service.togglePlayValue();

			expect(service.playing).toBeFalsy();
		});
	});

	describe('incrementActivePosition method', () => {
		it('should increment active position to one', () => {
			service.activePosition = 2;

			service.incrementActivePosition();

			expect(service.activePosition).toBe(3);
		});

		it('should increment active position to five', () => {
			service.activePosition = 2;

			service.incrementActivePosition(3);

			expect(service.activePosition).toBe(5);
		});
	});

	describe('updateBpm method', () => {
		it('should update bpm', () => {
			service.bpm = 230;
			service.playing = false;

			service.updateBpm(250);

			expect(service.bpm).toBe(250);
			expect(service.playing).toBeFalsy();
		});

		it('should update bpm and call setTimer', () => {
			const spySetTimer = spyOn(service, 'setTimer');
			service.bpm = 230;
			service.playing = true;

			service.updateBpm(250);

			expect(service.bpm).toBe(250);
			expect(spySetTimer).toHaveBeenCalled();
		});
	});

	describe('clearPattern method', () => {
		it('should set false to all active params', () => {
			service.staves = activeStaves;

			service.clearPattern();

			expect(service.staves).toEqual(inactiveStaves);
		});
	});

	describe('togglePlay method', () => {
		it('should call togglePlayValue and clear interval', () => {
			const spyTogglePlayValue = spyOn(service, 'togglePlayValue');

			service.playing = false;
			service.togglePlay();

			expect(spyTogglePlayValue).toHaveBeenCalled();
		});

		it('should call togglePlayValue and setTimer', () => {
			const spyTogglePlayValue = spyOn(service, 'togglePlayValue');
			const spySetTimer = spyOn(service, 'setTimer');

			service.playing = true;

			service.togglePlay();

			expect(spyTogglePlayValue).toHaveBeenCalled();
			expect(spySetTimer).toHaveBeenCalled();
		});
	});

	it('should call togglePlayValue and setTimer', () => {
		expect(service.calculateTempo(300)).toBe(200);
	});
});
