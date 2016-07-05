/* tslint:disable:no-unused-variable */

// import {
//   beforeEach, beforeEachProviders,
//   describe, xdescribe,
//   expect, it, xit,
//   async, inject
// } from '@angular/core/testing';
// import { HTTP_PROVIDERS, XHRBackend, Http, BaseRequestOptions, Response, BaseResponseOptions, ResponseOptions } from '@angular/http';
// import { provide } from '@angular/core';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { GoalService } from './shared/index';

// describe('MockBackend: GoalService', () => {
//   beforeEachProviders(() => [
//     GoalService,
//     BaseRequestOptions,
//     MockBackend,
//     provide(Http, {
//       useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
//         return new Http(backend, defaultOptions);
//       },
//       deps: [MockBackend, BaseRequestOptions]
//     })
//   ]);

//   beforeEach(inject([MockBackend], (backend: MockBackend) => {
//     const baseResponse = new Response(new ResponseOptions({body: 'got response'}));
//     backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
//   }));

//   it('should return response when subscribed to getGoals',
//   inject([GoalService], (goalService: GoalService) => {
//     goalService.getGoals().subscribe((res: Response) => {
//       expect(res.text()).toBe('got response');
//     });
//   })
// );
// });
