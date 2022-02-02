## Design Page Updates

### NavBar Pulldowns by Year

- Update NavBar so that Design and Progress selections provide option for year: 2021 and 2022.
- This will require a new file-folder structure:
```
  /index.html
  /calendar.html
  /design
    /2020-21/design.html
    /2021-22/design.html
  /progress
    /2021/progress.html
    /2022/progress.html
```
- Design and Progress NavBar pulldowns should offer the user a choice for 2021 and 2022
- html files in the 2021 and 2022 folders should only show cards for that specific year.

#### Dropdown links

- Bootstrap 4 html code from W3C at <https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp>
```
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <!-- Brand -->
  <a class="navbar-brand" href="#">Logo</a>

  <!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Link 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 2</a>
    </li>

    <!-- Dropdown -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Dropdown link
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Link 1</a>
        <a class="dropdown-item" href="#">Link 2</a>
        <a class="dropdown-item" href="#">Link 3</a>
      </div>
    </li>
  </ul>
  </nav>
```
