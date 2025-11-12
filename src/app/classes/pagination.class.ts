import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginationClass extends MatPaginatorIntl {

  override changes = new Subject<void>();

  override firstPageLabel = $localize`Primeira página`;
  override itemsPerPageLabel = $localize`Itens por página:`;
  override lastPageLabel = $localize`Última página`;

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  override nextPageLabel = 'Próxima página';
  override previousPageLabel = 'Página anterior';

    constructor() {
    super();
  }


  override getRangeLabel = (page: number, pageSize: number, length: number): string => {
    if (length === 0) {
      return $localize`Página 1 de 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return $localize`Página ${page + 1} de ${amountPages}`;
  }

}
