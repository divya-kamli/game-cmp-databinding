import { OnInit, Component ,Input} from "@angular/core";

@Component({
    templateUrl : 'even.component.html',
    selector : 'app-even',
    styleUrls : [ './even.component.css']
})
export class EvenComponent implements OnInit{
    
    @Input() num:number;
    ngOnInit()
    {

    }
}