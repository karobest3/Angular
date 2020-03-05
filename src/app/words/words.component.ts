import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  newEn = '';
  newVn = '';
  filterStatus='all';
  flagForm = true;

  constructor() { }

  ngOnInit() {
  }
  addNewWord() {
    this.arrWords.push({
      id: this.arrWords.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false
    });
    this.newEn = '';
    this.newVn = '';
  }
  delete(id){
    const index = this.arrWords.findIndex(word => word.id === id);
    this.arrWords.splice(index,1);  
    //window.location.reload();
  }
  getShowStatus(memorized:boolean){
    const dkAll = this.filterStatus === 'all';
    const dkMemorized = this.filterStatus === 'memorized' && memorized;
    const dkUnmemorized = this.filterStatus === 'unmemorized' && !memorized;
    return dkAll || dkMemorized || dkUnmemorized;
  }
}
