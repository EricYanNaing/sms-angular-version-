import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { id } from '@swimlane/ngx-charts';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-email-attachment-modal',
  templateUrl: './email-attachment-modal.component.html',
  styleUrls: ['./email-attachment-modal.component.scss']
})

export class EmailAttachmentModalComponent implements OnInit {
  @ViewChild('clearBtn') clearName:any;

 

  showmyFile: string[] = [];
  constructor(public dialogRef: MatDialogRef<EmailAttachmentModalComponent>, ) { }

  ngOnInit(): void {
   
  }
  onDismiss(){
    this.dialogRef.close();
  }

  onSelectFile(e: any){
    
    
    const file:File[] = e.target.files;

    var resultVal='';

    if (file.length==0){  
      console.log('no');
    }else{
      for (var i = 0; i < file.length; i++) {
        var file2 = file[i];
        if ('name' in file2) {
           var fID ="i" + i;   
            var showResult = '<div class="userRolePermissionFormField2 uploadFile my-2" id="' + fID + '" >' + file2.name +
            ' <i class="material-icons float-right clearIcon" onclick="deleteUpload(\''+fID+'\')">clear</i>'+
                '</div>';
            this.showmyFile.push(showResult);
          console.log(this.showmyFile);
          
        }
       
      }
      
      for (var j=0; j<this.showmyFile.length;j++){
        resultVal += this.showmyFile[j];
       
      }
      
      $("#demo").html(resultVal);
      
    }
    

  }
  deleteUpload(){
    console.log("hello");
    
    var myobj = name;
    }
}



