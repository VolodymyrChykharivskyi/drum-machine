import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
	public setItem(key: string, value: string): void {
		localStorage.setItem(key, value);
	}

	public getItem(key: string): string {
		return localStorage.getItem(key);
	}

	public clearItem(key: string): void {
		localStorage.removeItem(key);
	}

	public clearStorage(): void {
		localStorage.clear();
	}
}
