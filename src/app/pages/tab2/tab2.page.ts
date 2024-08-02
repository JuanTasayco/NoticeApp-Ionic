import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll } from '@ionic/angular';
import { Article } from 'src/app/interfaces/notice.interfaces';
import { NoticesService } from 'src/app/services/notices.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  categories: string[] = ['business', 'entertainment', 'general', 'health', 'sports', 'technology'];
  selectedCategory: string = this.categories[0];

  articles: Article[] = [];
  constructor(private noticeService: NoticesService) { }
  ngOnInit(): void {

    /*  this.segmentChanged('')  */ /* esto es cuando tenga api de nuevo */

    this.articles = this.prov;
  }

  segmentChanged(event: any) {
    this.selectedCategory = event.detail?.value || this.selectedCategory;
    this.noticeService.getNoticesByCategory(this.selectedCategory, this.currentPage).subscribe({
      next: (artclResponse) => {
        console.log('response')
        this.articles = [...this.articles, ...artclResponse]
      }
    })
  }


  /* logica scrolling */

  @ViewChild('refScroll') infiniteScroll !: IonInfiniteScroll;
  currentPage: number = 1;
  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.noticeService.getNoticesByCategory(this.selectedCategory, this.currentPage).subscribe({
      next: (artclResponse) => {
        this.articles.push(...artclResponse);
        if (artclResponse.length === 0) {
          this.infiniteScroll.complete();
          this.infiniteScroll.disabled = true;
        }

        setTimeout(() => {
          event.target.complete();
        }, 500)
      }
    })
  }

  /* esto se borra al final */
  prov: Article[] = [
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "CNBC",
      "title": "S&P 500 futures rise after Meta posts quarterly beat: Live updates - CNBC",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5IVkFaa3Z0QVdkdmdCRHNFa0NHcHhOeVRlczRpbjhuSV9YOUF0U29rc0MxOFJBTGVQMW5ocFdkeUFHa3d1eURLaU53N1RNSkttM0NKUDZGMWYtUFZBcXRwZUpnUGZaZFFtTXc2UlNRbzJFWmloLWgw0gF8QVVfeXFMTlo1UzZHdUhfSXhaTGZHVjQxOGJlS0tFRmRyVWQ1TjlqRFBTZHRWZWdiN1dueGhQUDRDNG9vd1EyYmdYSHVCSVZPT3BuOEx4ZXVJYk9WRm9MYUJMal9GaElwbFA4YzRuR091SGs0bGpBMW5sWGZqTUJYaGxzag?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T08:26:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Motor1 ",
      "title": "Honda-Nissan-Mitsubishi Alliance Goes Official - Motor1 ",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQS2liUGQ2cmtHa2NOZ3IxUE16M1hVU0R6cWNMYVVLQzBRV1ZsdEZzaTZENXVFRGRlQk9OelV4dWRzdFRnZWVlUVlDTjJBa1I3VlJSeVRnYzgtWmJhNDFQalFfSWt0SVUyMU1JSFdDdGJWOGotTmtVSmRoYkN0TGZkcm1NSdIBiAFBVV95cUxPWnQ3M3hZb2xYOUZCd3E2Vi1Ic240LVRJbnUydW1QNlMxb1RHbndlcFBWMU5selFhRmxHR1pBem1EQjIyTVJCRXpyV194cVkyNVdRQWF4c0F3UGx3Si1CYnY2WldfM0YyVzROMlN6TVdZcW9OUWt4RnZ1TjRNMFVyOVVIY0Y0TTJv?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T07:56:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "CNBC",
      "title": "Barclays profit dips in the second quarter, beats estimates - CNBC",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1zME12LS03U3VOaWlPSjZwV2NZbHloMUk2QWZXRFVxQkNtaTdtaU9GbFZveURseXVHQmxXd2pyblZING5ZUW9zWml6amFDU0N5ZHhiWGJ3VlFwTUp1WXlzS3BaRHJuTUd1YldqX3l5Qml1NUhNYk4yVtIBfkFVX3lxTFBIVS1OODlrY2Z2dkdBcm5wdk1LUGZnUEdTdW55a2E4SEphMXlIWVpZLWIyb3Jlb1Byd050dFRZS0ZEWmRxcm1feC1BSjh0VURMWFZWcGZTV0trejlHMHR4Si1mNE11NThuV1JwYi1JYWVWQnMxYjlhVS1BRUlwUQ?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T06:11:21Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "BBC.com",
      "title": "CrowdStrike: Tech firm sued by shareholders over IT global outage - BBC.com",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1tdmV0Z0M5ZndhUHMxcVcxSHdYQ0JDY0Y5RVFZdFZ1eDRsZDVudGNYMnFDQ1d6akFidnJLX2F5VEJpZ0tZSVBuWXhVaWRGZ0tpV29jdnFtNHN3Zw?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T05:28:29Z",
      "content": null
    },
    {
      "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
      },
      "author": "Annie Massa, Katherine Burton",
      "title": "Ackman’s IPO Dream Implodes From $25 Billion to Zero in Weeks - Bloomberg",
      "description": "A plan to tap into social media and guide a new fund onto the New York Stock Exchange ends in a humbling setback.",
      "url": "https://www.bloomberg.com/news/articles/2024-08-01/ackman-s-ipo-dream-collapses-from-25-billion-to-0-in-weeks",
      "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iLlNDGutt4gE/v0/1200x800.jpg",
      "publishedAt": "2024-08-01T04:55:00Z",
      "content": "Bill Ackman had taken to X again, this time to hail a fan whod posted an image of him as a Roman general out of Gladiator.\r\nWelcome to the posse, the hedge-fund billionaire replied. Lets roll."
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "BBC.com",
      "title": "Uber strikes EV deal with Chinese Tesla rival BYD - BBC.com",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBpc0I3TDByZ0dnV2hJQ0xiRzNiVFFrWFViY1ZHTXdDemd1R0o0QUd6TlgzdVUzR2VENkoxZnJwdERNQUpkdm10cnFFLWszU01CdDE4TE80SHNzZw?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T04:31:41Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Fox Business",
      "title": "Former president of PayPal announces party switch, endorses Trump: 'crossing the Rubicon' - Fox Business",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNVXl0dktiZ0RDcGh5dTdEeU1hY01ib2ZoOGdubjlQaENjdjRjOWJYYXJCYnZfUHFoN2M0NmlWY1FCMXZWNjVfVW5fei1ZN2xfZ3E2WDR4SGdjeF9JdmdibnV6U3RVUkZ1Rl9yOXJPTVo3QUxKT2l1VEZ1RHlfVmxzZV82dFl2MUVoMG0ySG5jMTdFSWRzMFpfSkJwc0ZXUGtPZnZTazNMcm84c1N5eGN6Q0FBdEtwQdIBuwFBVV95cUxNb1dDS01adGtPd0VQMDBOc2pOeDVvSlQwOXVyNGxibU5qaTJsU2VLblcxZlRmMVI0cTRFdnhkcnQ0VDZRYUVhcmI1MXBTSWN2RjlTWTJYVl9EOUh1bWZqOWNQbWpMZnYtejBVNzNlY3JsVnZIVEM5a3c0a0ZxaVB0QjFpdTFGWkFzTDVRUVZVS1otUWhKcGZ2R2hxV0QwQUpsMmNmM0l6MXd0ZUQ3Y1owZC0wVk5OQTBDQnJJ?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T01:46:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "CNBC",
      "title": "S&P 500 futures rise after Meta posts quarterly beat: Live updates - CNBC",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5IVkFaa3Z0QVdkdmdCRHNFa0NHcHhOeVRlczRpbjhuSV9YOUF0U29rc0MxOFJBTGVQMW5ocFdkeUFHa3d1eURLaU53N1RNSkttM0NKUDZGMWYtUFZBcXRwZUpnUGZaZFFtTXc2UlNRbzJFWmloLWgw0gF8QVVfeXFMTlo1UzZHdUhfSXhaTGZHVjQxOGJlS0tFRmRyVWQ1TjlqRFBTZHRWZWdiN1dueGhQUDRDNG9vd1EyYmdYSHVCSVZPT3BuOEx4ZXVJYk9WRm9MYUJMal9GaElwbFA4YzRuR091SGs0bGpBMW5sWGZqTUJYaGxzag?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T08:26:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Motor1 ",
      "title": "Honda-Nissan-Mitsubishi Alliance Goes Official - Motor1 ",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQS2liUGQ2cmtHa2NOZ3IxUE16M1hVU0R6cWNMYVVLQzBRV1ZsdEZzaTZENXVFRGRlQk9OelV4dWRzdFRnZWVlUVlDTjJBa1I3VlJSeVRnYzgtWmJhNDFQalFfSWt0SVUyMU1JSFdDdGJWOGotTmtVSmRoYkN0TGZkcm1NSdIBiAFBVV95cUxPWnQ3M3hZb2xYOUZCd3E2Vi1Ic240LVRJbnUydW1QNlMxb1RHbndlcFBWMU5selFhRmxHR1pBem1EQjIyTVJCRXpyV194cVkyNVdRQWF4c0F3UGx3Si1CYnY2WldfM0YyVzROMlN6TVdZcW9OUWt4RnZ1TjRNMFVyOVVIY0Y0TTJv?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T07:56:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "CNBC",
      "title": "Barclays profit dips in the second quarter, beats estimates - CNBC",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1zME12LS03U3VOaWlPSjZwV2NZbHloMUk2QWZXRFVxQkNtaTdtaU9GbFZveURseXVHQmxXd2pyblZING5ZUW9zWml6amFDU0N5ZHhiWGJ3VlFwTUp1WXlzS3BaRHJuTUd1YldqX3l5Qml1NUhNYk4yVtIBfkFVX3lxTFBIVS1OODlrY2Z2dkdBcm5wdk1LUGZnUEdTdW55a2E4SEphMXlIWVpZLWIyb3Jlb1Byd050dFRZS0ZEWmRxcm1feC1BSjh0VURMWFZWcGZTV0trejlHMHR4Si1mNE11NThuV1JwYi1JYWVWQnMxYjlhVS1BRUlwUQ?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T06:11:21Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "BBC.com",
      "title": "CrowdStrike: Tech firm sued by shareholders over IT global outage - BBC.com",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1tdmV0Z0M5ZndhUHMxcVcxSHdYQ0JDY0Y5RVFZdFZ1eDRsZDVudGNYMnFDQ1d6akFidnJLX2F5VEJpZ0tZSVBuWXhVaWRGZ0tpV29jdnFtNHN3Zw?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T05:28:29Z",
      "content": null
    },
    {
      "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
      },
      "author": "Annie Massa, Katherine Burton",
      "title": "Ackman’s IPO Dream Implodes From $25 Billion to Zero in Weeks - Bloomberg",
      "description": "A plan to tap into social media and guide a new fund onto the New York Stock Exchange ends in a humbling setback.",
      "url": "https://www.bloomberg.com/news/articles/2024-08-01/ackman-s-ipo-dream-collapses-from-25-billion-to-0-in-weeks",
      "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iLlNDGutt4gE/v0/1200x800.jpg",
      "publishedAt": "2024-08-01T04:55:00Z",
      "content": "Bill Ackman had taken to X again, this time to hail a fan whod posted an image of him as a Roman general out of Gladiator.\r\nWelcome to the posse, the hedge-fund billionaire replied. Lets roll."
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "BBC.com",
      "title": "Uber strikes EV deal with Chinese Tesla rival BYD - BBC.com",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBpc0I3TDByZ0dnV2hJQ0xiRzNiVFFrWFViY1ZHTXdDemd1R0o0QUd6TlgzdVUzR2VENkoxZnJwdERNQUpkdm10cnFFLWszU01CdDE4TE80SHNzZw?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T04:31:41Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Fox Business",
      "title": "Former president of PayPal announces party switch, endorses Trump: 'crossing the Rubicon' - Fox Business",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNVXl0dktiZ0RDcGh5dTdEeU1hY01ib2ZoOGdubjlQaENjdjRjOWJYYXJCYnZfUHFoN2M0NmlWY1FCMXZWNjVfVW5fei1ZN2xfZ3E2WDR4SGdjeF9JdmdibnV6U3RVUkZ1Rl9yOXJPTVo3QUxKT2l1VEZ1RHlfVmxzZV82dFl2MUVoMG0ySG5jMTdFSWRzMFpfSkJwc0ZXUGtPZnZTazNMcm84c1N5eGN6Q0FBdEtwQdIBuwFBVV95cUxNb1dDS01adGtPd0VQMDBOc2pOeDVvSlQwOXVyNGxibU5qaTJsU2VLblcxZlRmMVI0cTRFdnhkcnQ0VDZRYUVhcmI1MXBTSWN2RjlTWTJYVl9EOUh1bWZqOWNQbWpMZnYtejBVNzNlY3JsVnZIVEM5a3c0a0ZxaVB0QjFpdTFGWkFzTDVRUVZVS1otUWhKcGZ2R2hxV0QwQUpsMmNmM0l6MXd0ZUQ3Y1owZC0wVk5OQTBDQnJJ?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T01:46:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "CNBC",
      "title": "S&P 500 futures rise after Meta posts quarterly beat: Live updates - CNBC",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5IVkFaa3Z0QVdkdmdCRHNFa0NHcHhOeVRlczRpbjhuSV9YOUF0U29rc0MxOFJBTGVQMW5ocFdkeUFHa3d1eURLaU53N1RNSkttM0NKUDZGMWYtUFZBcXRwZUpnUGZaZFFtTXc2UlNRbzJFWmloLWgw0gF8QVVfeXFMTlo1UzZHdUhfSXhaTGZHVjQxOGJlS0tFRmRyVWQ1TjlqRFBTZHRWZWdiN1dueGhQUDRDNG9vd1EyYmdYSHVCSVZPT3BuOEx4ZXVJYk9WRm9MYUJMal9GaElwbFA4YzRuR091SGs0bGpBMW5sWGZqTUJYaGxzag?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T08:26:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Motor1 ",
      "title": "Honda-Nissan-Mitsubishi Alliance Goes Official - Motor1 ",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQS2liUGQ2cmtHa2NOZ3IxUE16M1hVU0R6cWNMYVVLQzBRV1ZsdEZzaTZENXVFRGRlQk9OelV4dWRzdFRnZWVlUVlDTjJBa1I3VlJSeVRnYzgtWmJhNDFQalFfSWt0SVUyMU1JSFdDdGJWOGotTmtVSmRoYkN0TGZkcm1NSdIBiAFBVV95cUxPWnQ3M3hZb2xYOUZCd3E2Vi1Ic240LVRJbnUydW1QNlMxb1RHbndlcFBWMU5selFhRmxHR1pBem1EQjIyTVJCRXpyV194cVkyNVdRQWF4c0F3UGx3Si1CYnY2WldfM0YyVzROMlN6TVdZcW9OUWt4RnZ1TjRNMFVyOVVIY0Y0TTJv?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T07:56:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "CNBC",
      "title": "Barclays profit dips in the second quarter, beats estimates - CNBC",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1zME12LS03U3VOaWlPSjZwV2NZbHloMUk2QWZXRFVxQkNtaTdtaU9GbFZveURseXVHQmxXd2pyblZING5ZUW9zWml6amFDU0N5ZHhiWGJ3VlFwTUp1WXlzS3BaRHJuTUd1YldqX3l5Qml1NUhNYk4yVtIBfkFVX3lxTFBIVS1OODlrY2Z2dkdBcm5wdk1LUGZnUEdTdW55a2E4SEphMXlIWVpZLWIyb3Jlb1Byd050dFRZS0ZEWmRxcm1feC1BSjh0VURMWFZWcGZTV0trejlHMHR4Si1mNE11NThuV1JwYi1JYWVWQnMxYjlhVS1BRUlwUQ?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T06:11:21Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "BBC.com",
      "title": "CrowdStrike: Tech firm sued by shareholders over IT global outage - BBC.com",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1tdmV0Z0M5ZndhUHMxcVcxSHdYQ0JDY0Y5RVFZdFZ1eDRsZDVudGNYMnFDQ1d6akFidnJLX2F5VEJpZ0tZSVBuWXhVaWRGZ0tpV29jdnFtNHN3Zw?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T05:28:29Z",
      "content": null
    },
    {
      "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
      },
      "author": "Annie Massa, Katherine Burton",
      "title": "Ackman’s IPO Dream Implodes From $25 Billion to Zero in Weeks - Bloomberg",
      "description": "A plan to tap into social media and guide a new fund onto the New York Stock Exchange ends in a humbling setback.",
      "url": "https://www.bloomberg.com/news/articles/2024-08-01/ackman-s-ipo-dream-collapses-from-25-billion-to-0-in-weeks",
      "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iLlNDGutt4gE/v0/1200x800.jpg",
      "publishedAt": "2024-08-01T04:55:00Z",
      "content": "Bill Ackman had taken to X again, this time to hail a fan whod posted an image of him as a Roman general out of Gladiator.\r\nWelcome to the posse, the hedge-fund billionaire replied. Lets roll."
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "BBC.com",
      "title": "Uber strikes EV deal with Chinese Tesla rival BYD - BBC.com",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBpc0I3TDByZ0dnV2hJQ0xiRzNiVFFrWFViY1ZHTXdDemd1R0o0QUd6TlgzdVUzR2VENkoxZnJwdERNQUpkdm10cnFFLWszU01CdDE4TE80SHNzZw?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T04:31:41Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Fox Business",
      "title": "Former president of PayPal announces party switch, endorses Trump: 'crossing the Rubicon' - Fox Business",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNVXl0dktiZ0RDcGh5dTdEeU1hY01ib2ZoOGdubjlQaENjdjRjOWJYYXJCYnZfUHFoN2M0NmlWY1FCMXZWNjVfVW5fei1ZN2xfZ3E2WDR4SGdjeF9JdmdibnV6U3RVUkZ1Rl9yOXJPTVo3QUxKT2l1VEZ1RHlfVmxzZV82dFl2MUVoMG0ySG5jMTdFSWRzMFpfSkJwc0ZXUGtPZnZTazNMcm84c1N5eGN6Q0FBdEtwQdIBuwFBVV95cUxNb1dDS01adGtPd0VQMDBOc2pOeDVvSlQwOXVyNGxibU5qaTJsU2VLblcxZlRmMVI0cTRFdnhkcnQ0VDZRYUVhcmI1MXBTSWN2RjlTWTJYVl9EOUh1bWZqOWNQbWpMZnYtejBVNzNlY3JsVnZIVEM5a3c0a0ZxaVB0QjFpdTFGWkFzTDVRUVZVS1otUWhKcGZ2R2hxV0QwQUpsMmNmM0l6MXd0ZUQ3Y1owZC0wVk5OQTBDQnJJ?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T01:46:00Z",
      "content": null
    }, {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "CNBC",
      "title": "S&P 500 futures rise after Meta posts quarterly beat: Live updates - CNBC",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5IVkFaa3Z0QVdkdmdCRHNFa0NHcHhOeVRlczRpbjhuSV9YOUF0U29rc0MxOFJBTGVQMW5ocFdkeUFHa3d1eURLaU53N1RNSkttM0NKUDZGMWYtUFZBcXRwZUpnUGZaZFFtTXc2UlNRbzJFWmloLWgw0gF8QVVfeXFMTlo1UzZHdUhfSXhaTGZHVjQxOGJlS0tFRmRyVWQ1TjlqRFBTZHRWZWdiN1dueGhQUDRDNG9vd1EyYmdYSHVCSVZPT3BuOEx4ZXVJYk9WRm9MYUJMal9GaElwbFA4YzRuR091SGs0bGpBMW5sWGZqTUJYaGxzag?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T08:26:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Motor1 ",
      "title": "Honda-Nissan-Mitsubishi Alliance Goes Official - Motor1 ",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQS2liUGQ2cmtHa2NOZ3IxUE16M1hVU0R6cWNMYVVLQzBRV1ZsdEZzaTZENXVFRGRlQk9OelV4dWRzdFRnZWVlUVlDTjJBa1I3VlJSeVRnYzgtWmJhNDFQalFfSWt0SVUyMU1JSFdDdGJWOGotTmtVSmRoYkN0TGZkcm1NSdIBiAFBVV95cUxPWnQ3M3hZb2xYOUZCd3E2Vi1Ic240LVRJbnUydW1QNlMxb1RHbndlcFBWMU5selFhRmxHR1pBem1EQjIyTVJCRXpyV194cVkyNVdRQWF4c0F3UGx3Si1CYnY2WldfM0YyVzROMlN6TVdZcW9OUWt4RnZ1TjRNMFVyOVVIY0Y0TTJv?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T07:56:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "CNBC",
      "title": "Barclays profit dips in the second quarter, beats estimates - CNBC",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1zME12LS03U3VOaWlPSjZwV2NZbHloMUk2QWZXRFVxQkNtaTdtaU9GbFZveURseXVHQmxXd2pyblZING5ZUW9zWml6amFDU0N5ZHhiWGJ3VlFwTUp1WXlzS3BaRHJuTUd1YldqX3l5Qml1NUhNYk4yVtIBfkFVX3lxTFBIVS1OODlrY2Z2dkdBcm5wdk1LUGZnUEdTdW55a2E4SEphMXlIWVpZLWIyb3Jlb1Byd050dFRZS0ZEWmRxcm1feC1BSjh0VURMWFZWcGZTV0trejlHMHR4Si1mNE11NThuV1JwYi1JYWVWQnMxYjlhVS1BRUlwUQ?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T06:11:21Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "BBC.com",
      "title": "CrowdStrike: Tech firm sued by shareholders over IT global outage - BBC.com",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1tdmV0Z0M5ZndhUHMxcVcxSHdYQ0JDY0Y5RVFZdFZ1eDRsZDVudGNYMnFDQ1d6akFidnJLX2F5VEJpZ0tZSVBuWXhVaWRGZ0tpV29jdnFtNHN3Zw?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T05:28:29Z",
      "content": null
    },
    {
      "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
      },
      "author": "Annie Massa, Katherine Burton",
      "title": "Ackman’s IPO Dream Implodes From $25 Billion to Zero in Weeks - Bloomberg",
      "description": "A plan to tap into social media and guide a new fund onto the New York Stock Exchange ends in a humbling setback.",
      "url": "https://www.bloomberg.com/news/articles/2024-08-01/ackman-s-ipo-dream-collapses-from-25-billion-to-0-in-weeks",
      "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iLlNDGutt4gE/v0/1200x800.jpg",
      "publishedAt": "2024-08-01T04:55:00Z",
      "content": "Bill Ackman had taken to X again, this time to hail a fan whod posted an image of him as a Roman general out of Gladiator.\r\nWelcome to the posse, the hedge-fund billionaire replied. Lets roll."
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "BBC.com",
      "title": "Uber strikes EV deal with Chinese Tesla rival BYD - BBC.com",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBpc0I3TDByZ0dnV2hJQ0xiRzNiVFFrWFViY1ZHTXdDemd1R0o0QUd6TlgzdVUzR2VENkoxZnJwdERNQUpkdm10cnFFLWszU01CdDE4TE80SHNzZw?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T04:31:41Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Fox Business",
      "title": "Former president of PayPal announces party switch, endorses Trump: 'crossing the Rubicon' - Fox Business",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNVXl0dktiZ0RDcGh5dTdEeU1hY01ib2ZoOGdubjlQaENjdjRjOWJYYXJCYnZfUHFoN2M0NmlWY1FCMXZWNjVfVW5fei1ZN2xfZ3E2WDR4SGdjeF9JdmdibnV6U3RVUkZ1Rl9yOXJPTVo3QUxKT2l1VEZ1RHlfVmxzZV82dFl2MUVoMG0ySG5jMTdFSWRzMFpfSkJwc0ZXUGtPZnZTazNMcm84c1N5eGN6Q0FBdEtwQdIBuwFBVV95cUxNb1dDS01adGtPd0VQMDBOc2pOeDVvSlQwOXVyNGxibU5qaTJsU2VLblcxZlRmMVI0cTRFdnhkcnQ0VDZRYUVhcmI1MXBTSWN2RjlTWTJYVl9EOUh1bWZqOWNQbWpMZnYtejBVNzNlY3JsVnZIVEM5a3c0a0ZxaVB0QjFpdTFGWkFzTDVRUVZVS1otUWhKcGZ2R2hxV0QwQUpsMmNmM0l6MXd0ZUQ3Y1owZC0wVk5OQTBDQnJJ?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-01T01:46:00Z",
      "content": null
    }];
}
