import {Inject, Injectable} from '@angular/core';
import {SESSION_STORAGE, StorageService} from 'angular-webstorage-service';


@Injectable({
    providedIn: 'root'
})

export class SharedService {

    private STORAGE_KEY = 'bv_local';

    constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {
    }

    setValue(data) {
        this.storage.set(this.STORAGE_KEY, data);
    }

    getValue() {
        return this.storage.get(this.STORAGE_KEY) || {};
    }

    deleteValue() {
        this.storage.remove(this.STORAGE_KEY);
    }
}
