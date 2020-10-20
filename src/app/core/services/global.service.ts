import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
  public FullName: string = '';
  public loadScript() {

    if (document.getElementById('custom_js') != null) {
      document.getElementById('custom_js').remove();
    }
    let node = document.createElement("script");
    node.src = 'assets/Content/Scripts/noet.js';
    node.type = "text/javascript";
    node.async = true;
    node.id = 'custom_js';
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
}
