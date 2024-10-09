import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICircle } from '../interfaces/area.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateCircleApiService {
  constructor(private http: HttpClient) {}

  public create(circle: ICircle): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    // TODO: userId
    let params = { ...circle, user_id: 1 };

    this.http.post('http://0.0.0.0/api/v1/circle', JSON.stringify(params), httpOptions).subscribe({
      next: (response) => {
        // в данном случае проверка на успешность удаления
        if (response) {
          console.log(response);
        }
      },
      error: (error: Error) => {
        console.log(error);
      },
    });
  }
}
