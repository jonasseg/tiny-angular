import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tinymce-angular-demo';
  public selectedFile!: string | ArrayBuffer | null;

  public uploadFile(event: Event): void {
    const file = (event.target as any).files[0];
    this.selectedFile = file;
    const reader = new FileReader();
    reader.onload = () => {
      const fileContent = reader.result;
      // aquí puede hacer algo con el contenido del archivo
      console.log(fileContent);
      this.selectedFile = fileContent;
    };
    reader.readAsText(file);
  }

  public editTinyMce(editor: any): void {
    editor.on('init', () => editor.setContent('<p>Hello world!</p>'));
  }
}
