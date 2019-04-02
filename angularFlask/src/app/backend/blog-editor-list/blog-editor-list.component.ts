import {Component, OnInit} from "@angular/core";
import { FormControl, Validators } from '@angular/forms';
import {BackendService} from "../backend.service";
import {AppService} from "../../app.service";
import blogConsts from '../../common/blog-constants'

@Component({
  selector: 'app-login',
  templateUrl: './blog-editor-list.component.html',
  styleUrls: ['./blog-editor-list.component.less']
})
export class BlogeditorlistComponent implements OnInit {
  posts;
  post_id;
  selectedLabel;
  labels = blogConsts.labels;
  option:Object;
  froalaText:string;
  title:string = '';
  display: boolean = false;

  sortOptions = [];
  sortKey: string;
  sortField: string;
  sortOrder: number;
  constructor(private backend: BackendService, private appService: AppService) {
  }

  showDialog(post) {
    this.display = true;
    this.title = post.title;
    this.selectedLabel = post.label;
    this.froalaText = post.content;
    this.post_id = post.id
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  ngOnInit() {
    this.sortOptions = [
      {label: 'Newest First', value: '!create_time'},
      {label: 'Oldest First', value: 'create_time'},
      {label: 'label', value: 'label'}
    ];

    this.option = {
      language: "zh_cn",
      placeholderText: "请输入内容",
      charCounterCount: true,
      codeMirror: false,
      codeMirrorOptions: {
        tabSize: 4
      },
      imageUploadURL:"http://202.182.124.185:5000/api/uploadImg",
      imageUploadMethod:"POST",
      requestWithCredentials: true,
      requestWithCORS: true,
      requestHeaders: {
        Authorization: localStorage.getItem('token')
      },
      imageManagerLoadURL: "http://202.182.124.185:5000/api/uploadImg",
      imageManagerLoadMethod: "POST",
      imageManagerLoadParams: {Authorization: localStorage.getItem('token')},
      events: {
        'froalaEditor.keyup': function (e, editor) {
        },
        'froalaEditor.image.uploaded': function (e, editor, response) {
        },
        'froalaEditor.image.inserted': function (e, editor, $img, response) {
        },
        'froalaEditor.image.error': function (e, editor, error, response) {
        },
        'froalaEditor.imageManager.imageLoaded': function (e, editor, $img) {
        },
        'froalaEditor.imageManager.error': function (e, editor, error, response) {
        }
      }
    };

    const obj = {
      user_id: localStorage.getItem('user_id'),
      token: localStorage.getItem('token')
    };

    this.appService.findAllPosts()
      .then(mes => this.posts = mes[0]);
  }

  deletePost(post) {
    const obj = {
      user_id: localStorage.getItem('user_id'),
      token: localStorage.getItem('token'),
      post_id: post.id
    };
    return this.backend.deletePost(obj)
      .then(mes => {console.log(mes)})

  }

  editPost() {
    const obj = {
      user_id: localStorage.getItem('user_id'),
      token: localStorage.getItem('token'),
      post_id: this.post_id,
      title: this.title,
      label: this.selectedLabel.value,
      content: this.froalaText
    };
    this.backend.updatePost(obj)
      .then(() => {
        this.display = false;
      })
  }

  titleFormControl = new FormControl('', [
    Validators.required,
  ]);

  showLessWords(paragraph) {
    return paragraph.substring(0, 100) + '...';
  }

}
