import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { CommonModule } from '@angular/common';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { TotalComponent } from '../total/total.component';
import { Item } from '../../models/item';


@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule, InvoiceViewComponent,ClientViewComponent, CompanyViewComponent, ListItemsComponent, FormItemComponent,TotalComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})


export class InvoiceComponent implements OnInit {
  invoice!: Invoice;
  constructor(private service: InvoiceService){}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
    console.log(this.invoice); 
  }

  removeItem(id: number) {
    this.invoice = this.service.remove(id);
  }   

  addItem(item: Item) {
    this.invoice = this.service.save(item);
  }

}
