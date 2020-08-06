import { UserService } from 'shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myStyle: object = {};
	myParams: object = {};
	width: number = 100;
	height: number = 100;

  constructor(authService: AuthService, userService: UserService, route: ActivatedRoute, router: Router) {
    authService.user$.subscribe((user) => {
      if (user) {
        userService.add(user);
        let returnUrl = route.snapshot.queryParamMap.get('returnUrl');
        if (returnUrl || router.url === '/login')  {
          router.navigate([returnUrl || '/']);
        }
      }
    });
  }
  ngOnInit() {
    this.myStyle = {
        'position': 'fixed',
        'width': '100%',
        'height': '100%',
        'z-index': -1,
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
    };

this.myParams = {
        particles: {
            number: {
                value: 85,
            },
            color: {
                value: '#9600e8'
            },
            shape: {
                type: 'star',
            },
  }
};
}

}
