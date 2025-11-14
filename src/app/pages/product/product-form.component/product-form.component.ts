import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormArray, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CompositionInterface } from '../../../interfaces/composition.interface';
import { ProductInterface } from '../product.interface';
import { MaterialsInterface } from '../../materials/materials.interface';
import { ProductTypeEnum,  PRODUCT_TYPE_LABELS } from '../../../enums/product-type.enum';

@Component({
  selector: 'sm-product-form.component',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatButtonToggleModule,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {

  formProduct = new FormGroup({
    sku: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
    onDemand: new FormControl('', Validators.required),
    productType: new FormControl<ProductTypeEnum | null>(null, Validators.required),
    formFiscal: new FormGroup({
      ncm: new FormControl(''),
      cest: new FormControl(''),
      origem: new FormControl(''),
      cfop: new FormControl(''),
      origentype: new FormControl(''),
      cst: new FormControl(''),
    }),
    composition: new FormArray([]),
  });

  productTypes = Object.values(ProductTypeEnum).filter(
    (v) => typeof v === 'number'
  ) as ProductTypeEnum[];
  productTypesLabels = PRODUCT_TYPE_LABELS;

  listCompositionForProduct = signal<CompositionInterface[]>([]);
  compositionSelected = new FormGroup({
    qtd: new FormControl<number>(0, { nonNullable: true }),
    material: new FormControl<MaterialsInterface | null>(null),
  });

  listMaterial: MaterialsInterface[] = [
      {id: "1", name: "CALABRESA"},
      {id: "2", name: "BACON"},
    ];
  

  constructor(private router: Router, private productService: ProductService) {}

  save() {
    const product = {
      ...this.formProduct.value,
      composition: this.listCompositionForProduct()
    }
    
    this.productService.save(product as ProductInterface);
  }

  addComposition(event?: Event) {
    event?.preventDefault();

    const item = this.compositionSelected.value;

    if (!item || !item.material) return;

    if (item && !this.listCompositionForProduct().some((p) => p.material?.id === item.material?.id)) {

      this.listCompositionForProduct.update(
        (old: CompositionInterface[]): CompositionInterface[] => {
          if (!item) return old;
          return [...old, item as CompositionInterface];
        }
      );

      this.compositionSelected.reset();
    }
  }

  excludeMaterial(event?: Event, composition?: CompositionInterface) {

    event?.preventDefault();

    if (!composition?.material) return;

    if (composition) {
      this.listCompositionForProduct.update((old) =>
        old.filter((comp) => comp.material?.id !== composition.material.id)
      );
    }
  }

  goBack() {
    this.router.navigate(['/home/product']);
  }
}
