import { Component, OnInit, inject } from '@angular/core';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { AuthService } from '../../core/auth/auth-service';
import { CourseService } from '../../services/course-service';
import {FormsModule} from '@angular/forms';
import {ProjectService} from '../../services/project-service';
import {CertificateService} from '../../services/certificate.service';
import {ArticleService} from '../../services/article-service';

@Component({
  selector: 'app-apprenant',
  standalone: true,
  imports: [NgClass, NgForOf, NgIf, FormsModule],
  templateUrl: './apprenant.html',
  styleUrls: ['./apprenant.css']
})
export class Apprenant implements OnInit {
  private authservice = inject(AuthService);
  private courseservice = inject(CourseService);
  private projectservice = inject(ProjectService);
  private certificateservice = inject(CertificateService);
  private articlelservice = inject(ArticleService);

  courses: any[] = [];
  searchText: string = '';
  selectedCategory: string = '';
  categories: string[] = [];

  accessFilter: 'all' | 'paid' | 'free' = 'all';

  currentPage: number = 1;
  pageSize: number = 6;

  ngOnInit(): void {
    this.courseservice.getCourses().subscribe({
      next: (data: any[]) => {
        this.courses = data;
        this.categories = [...new Set(this.courses.map(c => c.categorie))];
      },
      error: (err: any) => {
        console.error("Error fetching courses", err);
      }
    });

    //project
    //this.projectservice.getMy().subscribe(el=>console.log(el));
    //certificate
    // this.certificateservice.getMy().subscribe(el=>console.log(el));

    //certificate
    this.articlelservice.getAllArticles().subscribe(el => console.log(el));


  }

  logout(): void {
    this.authservice.logout();
  }

  get filteredCourses(): any[] {
    return this.courses.filter(course => {
      const matchesTitle = course.titre.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesCategory = this.selectedCategory == '' || course.categorie === this.selectedCategory;
      const matchesAccess =
        this.accessFilter === 'all' ||
        (this.accessFilter === 'paid' && course.estPayant) ||
        (this.accessFilter === 'free' && !course.estPayant);
      return matchesTitle && matchesCategory && matchesAccess;
    });
  }

  paginatedCourses(): any[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredCourses.slice(start, start + this.pageSize);
  }

  totalPages(): number {
    return Math.ceil(this.filteredCourses.length / this.pageSize);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  setAccessFilter(type: 'all' | 'paid' | 'free') {
    this.accessFilter = type;
    this.currentPage = 1;
  }
}
