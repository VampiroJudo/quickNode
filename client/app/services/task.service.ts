import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {
	constructor(private http:Http){
		console.log('Task Service Initialized...');
	}

	getTasks(){
		return this.http.get('http://localhost3000/api/tasks')
			.map(res => res.json());
	}

	addTask(newTask) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('http://localhost:3000/api/task', JSON.stringify(newTask), { headers: headers})
			.map(res => res.json());
	}
}


