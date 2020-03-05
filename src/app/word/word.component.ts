import { Component } from '@angular/core';

@Component({
    selector: 'app-word',
    templateUrl: './word.component.html',
    styleUrls: ['./word.component.scss']
})
export class WordComponent {
    en = 'hello';
    vn = 'xin chao';
    imgUrl = 'https://static-znews.zadn.vn/images/logo-zing-v6.svg';
    forgot = false;

    toggleForgot(){
        this.forgot = !this.forgot;
    }
}