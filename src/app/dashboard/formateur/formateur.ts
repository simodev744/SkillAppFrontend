import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth/auth-service';
import {ArticleService} from '../../services/article-service';

@Component({
  selector: 'app-formateur',
  imports: [],
  templateUrl: './formateur.html',
  styleUrl: './formateur.css'
})
export class Formateur implements OnInit{

  articleservice=inject(ArticleService);


  ngOnInit(): void {

    //certificate
    this.articleservice.getAllArticles().subscribe(el => console.log(el));
    this.articleservice.getAllCategories().subscribe(el => console.log(el));
    this.articleservice.getArticleById(11).subscribe(e=>console.log(e));
  }


  changearticle(id:any){
    this.articleservice.getArticleById(id).subscribe(e=>console.log(e));
    //this.articleservice.addComment(id,{contenu:"test",articleId:id}).subscribe(e=>console.log(e))
  }

  authservice=inject(AuthService);

  logout(){
    this.authservice.logout();
  }

}
