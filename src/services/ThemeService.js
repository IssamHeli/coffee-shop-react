import { BehaviorSubject } from 'rxjs';

const themeSubject = new BehaviorSubject('light');

const ThemeService = {
  getTheme: () => themeSubject.asObservable(),
  toggleTheme: () => {
    themeSubject.next(
      themeSubject.value === 'light' ? 'dark' : 'light'
    );
  },
};

export default ThemeService;