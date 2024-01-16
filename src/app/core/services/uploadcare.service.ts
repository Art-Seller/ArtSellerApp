// uploadcare.service.ts

import { Injectable } from '@angular/core';
import {
  listOfFiles,
  UploadcareSimpleAuthSchema,
} from '@uploadcare/rest-client';

@Injectable({
  providedIn: 'root',
})
export class UploadcareService {
  private uploadcareSimpleAuthSchema: UploadcareSimpleAuthSchema;

  constructor() {
    this.uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
      publicKey: '5e967ecdb0579b9e7d69',
      secretKey: 'f5f88aa4393438594c7d',
    });
  }

  async getListOfFiles(): Promise<any> {
    try {
      const result = await listOfFiles({}, { authSchema: this.uploadcareSimpleAuthSchema });
      return result;
    } catch (error) {
      console.error('Error fetching list of files:', error);
      throw error;
    }
  }
}
