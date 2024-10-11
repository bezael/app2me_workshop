import { TestBed } from '@angular/core/testing';
import { DominicodeUIService, Product } from './dominicode-ui.service';

describe('DominicodeUiService', () => {
  let service: DominicodeUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DominicodeUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable of products', (done) => {
    const expectedProducts: Product[] = [
      { id: '1', name: 'Product 1', price: 100 },
      { id: '2', name: 'Product 2', price: 200 },
      { id: '3', name: 'Product 3', price: 300 },
    ];

    service.getAllProducts().subscribe((products) => {
      expect(products).toEqual(expectedProducts);
      done();
    });
  });
});
