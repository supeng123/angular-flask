import {Component, Output, EventEmitter, OnInit} from "@angular/core";
import { FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {BackendService} from "../backend.service";
import blogConsts from '../../common/blog-constants'

@Component({
  selector: 'app-login',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.less']
})
export class BlogeditorComponent implements OnInit {
  token = localStorage.getItem('token');
  labels = blogConsts.labels;

  constructor(private router: Router, private backend: BackendService) {
    this.froalaText = "";
  }

  title:string = '';
  selectedLabel;
  loginErrorString:string = '';
  @Output() froala = new EventEmitter();
  option:Object;
  froalaText:string;
  article;

  getArticleDetail(item) {
    return this.article[item];
  }

  onSubmit() {
    if (this.title && this.selectedLabel.value && this.froalaText) {
      const options = {
        Authorization: localStorage.getItem('token'),
        title: this.title,
        label: this.selectedLabel.value,
        content: this.froalaText,
        user_id: localStorage.getItem('user_id')
      };
      return this.backend.addNewPost(options);
    }
  }

  titleFormControl = new FormControl('', [
    Validators.required,
  ]);

  ngOnInit() {
    // 在事件中要使用外部的this,因为函数内部也有this所以讲this的值赋给that
    var that = this;
    // 参数配置
     this.option = {
      language: "zh_cn", //配置语言
      placeholderText: "请输入内容", // 文本框提示内容
      charCounterCount: true, // 是否开启统计字数
      // charCounterMax: 200, // 最大输入字数,目前只支持英文字母
      // 注意导航条的配置, 按照官方的文档,无法配置,只能使用toolbarButtons来配置了。
      // toolbarButtons: ['fullscreen', '|', 'bold', 'italic', 'underline', 'strikeThrough', 'align', 'insertLink', 'insertImage', 'insertHR', 'subscript', 'superscript'],
      codeMirror: false, // 高亮显示html代码
      codeMirrorOptions: { // 配置html代码参数
        tabSize: 4
      },
      // 上传图片，视频等稳健配置
      imageUploadURL:"http://202.182.124.185:5000/api/uploadImg",//GLOBAL.INCONFIG.getIP()+接口名称,
      // imageUploadParams:{uid:this.questionListService.userInfo.id},//接口其他传参,默认为空对象{},
      imageUploadMethod:"POST",//POST/GET,
      requestWithCredentials: true,
      requestWithCORS: true,
      requestHeaders: {
        Authorization: this.token
      },
      imageManagerLoadURL: "http://202.182.124.185:5000/api/uploadImg",
      imageManagerLoadMethod: "POST", // Additional load params.
      imageManagerLoadParams: {Authorization: this.token},
      // 事件, 每次输入,就将值传递给父组件, 或者使用失去焦点的时候传递。
      events: {
        'froalaEditor.keyup': function (e, editor) {
        },
        'froalaEditor.image.uploaded': function (e, editor, response) {
          console.log('uploaded'+ response)
        },
        'froalaEditor.image.inserted': function (e, editor, $img, response) {
          console.log('inserted'+ response)
        },
        'froalaEditor.image.error': function (e, editor, error, response) {
        },
        'froalaEditor.imageManager.imageLoaded': function (e, editor, $img) {
        },
        'froalaEditor.imageManager.error': function (e, editor, error, response) {
        }
      }
    }
  }
}
