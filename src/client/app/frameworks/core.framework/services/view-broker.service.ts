import {CoreConfigService} from './core-config.service';

export class ViewBrokerService {
  
  public static TEMPLATE_URL(path: string): string {  
    // CAUTION: this currently breaks on runtime because nativescript does not find the xml files (although they are there)
    return path.replace(".html", ".xml"); 
  }
}
