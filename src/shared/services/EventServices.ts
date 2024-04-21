import { Injectable } from "@angular/core";
import { Observable, Subject, Subscription } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class EventService {
    private subject = new Subject();
    private dummy : Subscription | undefined;
    
    emit(eventName:string, payload:any) {
        this.subject.next({eventName,payload}); 
    }

    listen(eventName:string, callback: (event:any)=>void) {

        const observable = new Observable<number>((observer) => {
            try {
              observer.next(1);
              observer.next(2);
              observer.complete();
            } catch (error) {
              observer.error(error); 
            }
          });
          
          observable.subscribe({
            next: (value) => console.log('Next:', value),
            error: (error) => console.error('Error:', error),
            complete: () => console.log('Complete'),
          });
        
        this.subject.asObservable().subscribe((nextObj:any) =>{
            if(eventName === nextObj.eventName) {
                callback(nextObj.payload)            
            }
        })
    }
}
