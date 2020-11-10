const view = {};
view.signIn =
`<div class="form-wrapper">
<a id="backHome" href="#"><i class="fas fa-arrow-left"></i></a>
<header>
<img src="./images/logo.svg" alt="">
</header>
<form id="signInForm">
<h3>Đăng Nhập</h3>
<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>

<button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>`;

view.signUpForCompany =
`<div class="form-wrapper">
<a id="backHome" href="#"><i class="fas fa-arrow-left"></i></a>
<header>
<img src="./images/logo.svg" alt="">
</header>
<form class="sign-up" id="signUpForCompanyForm">
<h3>Đăng nhập cho công ty</h3>
<div class="form-group">
  <label for="exampleInputEmail1">Tên công ty</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
  <label for="exampleInputEmail1">Email address</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
  <label for="exampleInputEmail1">Số điện thoại</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
  <label for="exampleInputPassword1">Password</label>
  <input type="password" class="form-control" id="exampleInputPassword1">
  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
  <label for="exampleInputPassword1">Nhập lại password</label>
  <input type="password" class="form-control" id="exampleInputPassword1">
  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<button type="submit" class="btn btn-primary">Đăng kí</button>
</form>
</div>`;

view.signUpForEmployee = 
`<div class="form-wrapper">
<a id="backHome" href="#"><i class="fas fa-arrow-left"></i></a>
<header>
<img src="./images/logo.svg" alt="">
</header>
<form class="sign-up" id="signUpForEmployeeForm">
<h3>Đăng nhập</h3>
<div class="form-group">
    <label for="exampleInputEmail1">Họ tên</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
    <label for="exampleInputEmail1">Số điện thoại</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
    <label for="exampleInputPassword1">Nhập lại password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>

<button type="submit" class="btn btn-primary">Đăng kí</button>
</form>
</div>`;

view.home =
`<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">
    <img src="./images/logo.svg" width="100" height="100" alt="">
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item active">
            <a class="nav-link text-dark" href="#">Tìm việc <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-dark" href="#">Đánh giá công ty</a>
        </li>
        <li class="nav-item text-dark">
            <a class="nav-link text-dark" href="#">Tạo CV của bạn</a>
        </li>
    </ul>
    <span style="width: 30%;"></span>
    <ul class="navbar-nav">
        <!-- <li>
            <a class="nav-link text-dark" href="#"><i class="far fa-user" st></i>Trang Trịnh</a>
        </li> -->
        <li class="nav-item">
            <a id="signIn" class="nav-link text-dark" href="#">Đăng nhập</a>
        </li>
        <li class="nav-item">
            <a id="signUpForEmployee" class="nav-link text-dark" href="#">Đăng kí</a>
        </li>
        <li class="nav-item">
            <a id="signUpForCompany" class="nav-link text-dark" href="#">Nhà tuyển dụng/Đăng việc làm</a>
        </li>
        <li></li>
    </ul>
</div>
</nav>

<div class="container-body">
<section class="search">
<form id="search-form" class="search-form" onsubmit="search(event)">
    <div class="form-group row">
        <label for="inputJob" class="col-form-label">Tìm kiếm</label>
        <div class="col-sm-4">
            <input type="text" class="form-control" id="inputJob" placeholder="Loại công việc">
        </div>
        <label for="inputPlace" class="col-form-label">Địa điểm</label>
        <div class="col-sm-3">
            <input type="text" class="form-control" id="inputPlace" placeholder="Thành phố">
        </div>
        <button type="submit" class="btn btn-primary">Tìm kiếm</button>
    </div>
    <div class="form-group row">
        <select class="form-control form-control-sm" id="datePost" style="width: 140px">
            <option selected>Ngày đăng</option>
            <option value="1">24 giờ qua</option>
            <option value="3">3 ngày qua</option>
            <option value="7">7 ngày qua</option>
            <option value="14">14 ngày qua</option>
        </select>

        <select class="form-control form-control-sm" id="employeeType" style="width: 150px">
            <option selected>Loại nhân viên</option>
            <option value="Permanent employees">Permanent employees</option>
            <option value="Casual employees">Casual employees</option>
            <option value="Apprentices employees">Apprentices employees</option>
            <option value="Employment agency staff">Employment agency staff</option>
        </select>
        <div>
            <input type="text" class="form-control form-control-sm" id="company" placeholder="Công ty"
                style="width: 120px">
        </div>
        <div>
            <input type="text" class="form-control form-control-sm" id="skill" placeholder="Kỹ năng/ngôn ngữ"
                style="width: 320px">
        </div>
    </div>
</form>

<div class="search-popular">
    <h2>Tìm kiếm phổ biến</h2>
    <span><i class="fas fa-search"></i>Hà Nội</span>
    <span><i class="fas fa-search"></i>Thành phố Hồ Chí Minh</span>
</div>

<div id="outputSearch" class="result-search d-flex flex-wrap">
    <div id="text"></div>
    <div class="job-search">
        <h5>Packaging assistant manager nhà máy Nhật mới thành lập</h5>
        <p class="lead" style="font-size: 20px;">Công ty: ABC Company<br>Lương: 10 - 15 triệu<br>Vị trí tuyển dụng: developer java, developer javascript</p>
        <hr class="my-4">
        <p>Thời gian đăng: 10 ngày trước</p>
        <a class="btn btn-primary btn-sm" href="#" role="button">Chi tiết</a>
    </div>

    <div class="job-search">
        <h5>Packaging assistant manager nhà máy Nhật mới thành lập</h5>
        <p class="lead" style="font-size: 20px;">Công ty: ABC Company<br>Lương: 10 - 15 triệu<br>Vị trí tuyển dụng: developer java, developer javascript</p>
        <hr class="my-4">
        <p>Thời gian đăng: 10 ngày trước</p>
        <a class="btn btn-primary btn-sm" href="#" role="button">Chi tiết</a>
    </div>

    <div class="job-search">
        <h5>Packaging assistant manager nhà máy Nhật mới thành lập</h5>
        <p class="lead" style="font-size: 20px;">Công ty: ABC Company<br>Lương: 10 - 15 triệu<br>Vị trí tuyển dụng: developer java, developer javascript</p>
        <hr class="my-4">
        <p>Thời gian đăng: 10 ngày trước</p>
        <a class="btn btn-primary btn-sm" href="#" role="button">Chi tiết</a>
    </div>
</div>
<nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</section>

<section class="advertisement">
<p>Tạo CV của bạn – Chỉ mất vài giây thôi</p>
<p>Nhà tuyển dụng: Đăng việc làm – Tuyển dụng nhanh chóng, dễ dàng</p>
</section>

<section class="createCV">
<h2>Dễ dàng ứng tuyển việc làm</h2>
<button type="button" class="btn btn-primary">Tạo CV của bạn</button>
</section>


</div>`
view.infoPersonalLayout =
`<div class="d-flex justify-content-around bg-light">
<div class="side-left bg-light">
    <ul class="side-left-nav">
        <li id="showInfo" class="active">Thông tin<i class="fas fa-info"></i></li>
        <li id="editInfo">Chỉnh sửa<i class="fas fa-pencil-alt"></i></li>
    </ul>
</div>
<div id="containerInfo" class="container bg-light">
    
</div>
</div>`
view.showPersonal = 
`<div class="row">
<div class="col">
    <div class=" info-box" style="text-align: center; padding: 30px 0px;">
        <div class="avatar"></div> <br>
        <h4>Nguyễn Văn Anh</h4>
    </div>

</div>
</div>
<div class="row">
<div class="col-6">
    <div class="row py-3 px-lg-5 info-box">
        <h4>Thông tin cá nhân</h4>
        <table class="table table-sm">
            <tbody>
                <tr>
                    <td>Họ Tên:</td>
                    <td>Nguyễn Văn A</td>
                </tr>
                <tr>
                    <td>Ngày sinh:</td>
                    <td>1/2/1998</td>
                </tr>
                <tr>
                    <td>Số điện thoại:</td>
                    <td>09898754678</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="row py-3 px-lg-5 info-box">
        <h4>Học tập</h4>
        <table class="table table-sm">
            <tbody>
                <tr>
                    <td>25/7/2010 - 30/8/2013</td>
                    <td>Đại học Công nghệ - ĐHQG Hà Nội</td>
                </tr>
                <tr>
                    <td>25/7/2010 - 30/8/2013</td>
                    <td>Đại học Công nghệ - ĐHQG Hà Nội</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div class="col-5 py-3 px-lg-5 info-box">
    <h4>Kinh nghiệm</h4>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">
            <p>FPT Sortware - Web Developer</p>
            <p class="note">7/2019 - 12/2020</p>
        </li>
        <li class="list-group-item">
            <p>Garena - Tester</p>
            <p class="note">12/2018 - 6/2029</p>
        </li>
        <li class="list-group-item">
            <p>Morbi leo risus</p>
            <p class="note">12/2018 - 6/2029</p>
        </li>
        <li class="list-group-item">
            <p>Porta ac consectetur ac</p>
            <p class="note">7/2019 - 12/2020</p>
        </li>
    </ul>
</div>
</div>
<div class="row">
<div class="col-6">
</div>
<div class="col-5 py-3 px-lg-5 info-box">
    <h4>Kĩ năng</h4>
    <div class="container">
        <div class="row">
            <div class="col py-3"><i class="fas fa-check"></i><span>Python</span></div>
            <div class="col py-3"><i class="fas fa-check"></i><span>Design</span></div>
        </div>
        <div class="row">
            <div class="col py-3"><i class="fas fa-check"></i><span>HTML</span></div>
            <div class="col py-3"><i class="fas fa-check"></i><span>CSS</span></div>
        </div>
        <div class="row">
            <div class="col py-3"><i class="fas fa-check"></i><span>JavaStcipt</span></div>
        </div>
    </div>
</div>
</div>`
view.infoPersonalEdit =
`<div class="row">
<div class="col">
    <div class=" info-box" style="text-align: center; padding: 30px 0px;">
        <div class="avatar"></div> <br>
        <h4>Nguyễn Văn Anh</h4>
    </div>

</div>
</div>
<div class="row">
<div class="col-6">
    <div class="row py-3 px-lg-5 info-box">
        <h4>Thông tin cá nhân</h4>
        <table class="table table-sm">
            <tbody>
                <tr>
                    <td>Họ Tên:</td>
                    <td>Nguyễn Văn A</td>
                </tr>
                <tr>
                    <td>Ngày sinh:</td>
                    <td>1/2/1998</td>
                </tr>
                <tr>
                    <td>Số điện thoại:</td>
                    <td>09898754678</td>
                </tr>
            </tbody>
        </table>
        <form action="">
            <div class="input-group">
                <input type="text" aria-label="First name" class="form-control">
                <input type="text" aria-label="Last name" class="form-control">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Thêm</button>
                  </div>
            </div>
        </form>
    </div>
    <div class="row py-3 px-lg-5 info-box">
        <h4>Học tập</h4>
        <table class="table table-sm">
            <tbody>
                <tr>
                    <td>25/7/2010 - 30/8/2013</td>
                    <td>Đại học Công nghệ - ĐHQG Hà Nội</td>
                </tr>
                <tr>
                    <td>25/7/2010 - 30/8/2013</td>
                    <td>Đại học Công nghệ - ĐHQG Hà Nội</td>
                </tr>
            </tbody>
        </table>
        <form action="">
            <div class="input-group">
                <input type="text" aria-label="First name" class="form-control">
                <input type="text" aria-label="Last name" class="form-control">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Thêm</button>
                  </div>
            </div>
        </form>
    </div>
</div>
<div class="col-5 py-3 px-lg-5 info-box">
    <h4>Kinh nghiệm</h4>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">
            <p>FPT Sortware - Web Developer</p>
            <p class="note">7/2019 - 12/2020</p>
        </li>
        <li class="list-group-item">
            <p>Garena - Tester</p>
            <p class="note">12/2018 - 6/2029</p>
        </li>
        <li class="list-group-item">
            <p>Morbi leo risus</p>
            <p class="note">12/2018 - 6/2029</p>
        </li>
        <li class="list-group-item">
            <p>Porta ac consectetur ac</p>
            <p class="note">7/2019 - 12/2020</p>
        </li>
    </ul>
    <form action="">
        <div class="input-group">
            <input type="text" aria-label="First name" class="form-control">
            <input type="text" aria-label="Last name" class="form-control">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Thêm</button>
              </div>
        </div>
    </form>
</div>
</div>
<div class="row">
<div class="col-6">
</div>
<div class="col-5 py-3 px-lg-5 info-box">
    <h4>Kĩ năng</h4>
    <div class="container">
        <div class="row">
            <div class="col py-3"><i class="fas fa-check"></i><span>Python</span></div>
            <div class="col py-3"><i class="fas fa-check"></i><span>Design</span></div>
        </div>
        <div class="row">
            <div class="col py-3"><i class="fas fa-check"></i><span>HTML</span></div>
            <div class="col py-3"><i class="fas fa-check"></i><span>CSS</span></div>
        </div>
        <div class="row">
            <div class="col py-3"><i class="fas fa-check"></i><span>JavaStcipt</span></div>
        </div>
    </div>
    <form action="">
        <div class="input-group">
            <input type="text" aria-label="Last name" class="form-control">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Thêm</button>
              </div>
        </div>
    </form>
</div>
</div>`

view.search = 
`<section class="search">
<form id="search-form" class="search-form" onsubmit="search(event)">
    <div class="form-group row">
        <label for="inputJob" class="col-form-label">Tìm kiếm</label>
        <div class="col-sm-4">
            <input type="text" class="form-control" id="inputJob" placeholder="Loại công việc">
        </div>
        <label for="inputPlace" class="col-form-label">Địa điểm</label>
        <div class="col-sm-3">
            <input type="text" class="form-control" id="inputPlace" placeholder="Thành phố">
        </div>
        <button type="submit" class="btn btn-primary">Tìm kiếm</button>
    </div>
    <div class="form-group row">
        <select class="form-control form-control-sm" id="datePost" style="width: 140px">
            <option selected>Ngày đăng</option>
            <option value="1">24 giờ qua</option>
            <option value="3">3 ngày qua</option>
            <option value="7">7 ngày qua</option>
            <option value="14">14 ngày qua</option>
        </select>

        <select class="form-control form-control-sm" id="employeeType" style="width: 150px">
            <option selected>Loại nhân viên</option>
            <option value="Permanent employees">Permanent employees</option>
            <option value="Casual employees">Casual employees</option>
            <option value="Apprentices employees">Apprentices employees</option>
            <option value="Employment agency staff">Employment agency staff</option>
        </select>
        <div>
            <input type="text" class="form-control form-control-sm" id="company" placeholder="Công ty"
                style="width: 120px">
        </div>
        <div>
            <input type="text" class="form-control form-control-sm" id="skill" placeholder="Kỹ năng/ngôn ngữ"
                style="width: 120px">
        </div>
    </div>
</form>

<div class="search-popular">
    <h2>Tìm kiếm phổ biến</h2>
    <span><i class="fas fa-search"></i>Hà Nội</span>
    <span><i class="fas fa-search"></i>Thành phố Hồ Chí Minh</span>
</div>

<div id="outputSearch" class="result-search d-flex flex-wrap">
    <div id="text"></div>
    <div class="job-search">
        <h5>Packaging assistant manager nhà máy Nhật mới thành lập</h5>
        <p class="lead" style="font-size: 20px;">Công ty: ABC Company<br>Lương: 10 - 15 triệu<br>Vị trí tuyển dụng: developer java, developer javascript</p>
        <hr class="my-4">
        <p>Thời gian đăng: 10 ngày trước</p>
        <a class="btn btn-primary btn-sm" href="#" role="button">Chi tiết</a>
    </div>

    <div class="job-search">
        <h5>Packaging assistant manager nhà máy Nhật mới thành lập</h5>
        <p class="lead" style="font-size: 20px;">Công ty: ABC Company<br>Lương: 10 - 15 triệu<br>Vị trí tuyển dụng: developer java, developer javascript</p>
        <hr class="my-4">
        <p>Thời gian đăng: 10 ngày trước</p>
        <a class="btn btn-primary btn-sm" href="#" role="button">Chi tiết</a>
    </div>

    <div class="job-search">
        <h5>Packaging assistant manager nhà máy Nhật mới thành lập</h5>
        <p class="lead" style="font-size: 20px;">Công ty: ABC Company<br>Lương: 10 - 15 triệu<br>Vị trí tuyển dụng: developer java, developer javascript</p>
        <hr class="my-4">
        <p>Thời gian đăng: 10 ngày trước</p>
        <a class="btn btn-primary btn-sm" href="#" role="button">Chi tiết</a>
    </div>
</div>
<nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</section>

<section class="advertisement">
<p>Tạo CV của bạn – Chỉ mất vài giây thôi</p>
<p>Nhà tuyển dụng: Đăng việc làm – Tuyển dụng nhanh chóng, dễ dàng</p>
</section>

<section class="createCV">
<h2>Dễ dàng ứng tuyển việc làm</h2>
<button type="button" class="btn btn-primary">Tạo CV của bạn</button>
</section>`

view.infoCompany = 
`<div class="wrapper-container ">
<header>
    <h5>FPT Software</h5>
    <div class="info-group">
        Website:
        <a href="https://www.fpt-software.com/" target="_blank">https://www.fpt-software.com/</a>
    </div>
    <div>
        <div class="info-group">
            <i class="far fa-envelope"></i>
            <span>Email: company24@gmail.com</span>
        </div>
        <div class="info-group">
            <i class="fas fa-phone"></i>
            <span>Số điện thoại: 0958589576</span>
        </div>
    </div>
</header>
<div class="description">
    <h5>About us</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fugit odit amet? Voluptatem id, eum
        dicta
        placeat neque incidunt exercitationem? Harum ducimus maxime in possimus nihil, culpa at? Blanditiis,
        alias.
    </p>
</div>
<div class="list-job">
    <div class="">
        <h5 style="padding-left: 5px; margin-bottom: 20px; display: inline-block;">Công việc đã đăng</h5>
        <div type="button" class="add-job" data-toggle="modal"
            data-target="#editJobModal">
            <i class="fas fa-plus-circle"></i>
        </div>

        <div class="row">
            <div class="col" style="margin-bottom: 30px;">
                <div class="card">
                    <div class="card-body">
                        <div class="delete-card">
                            <i class="far fa-trash-alt"></i>
                        </div>
                        <h5>Packaging assistant manager nhà máy Nhật mới thành lập</h5>
                        <p class="lead" style="font-size: 20px;">Công ty: ABC Company<br>Lương: 10 - 15
                            triệu<br>Vị trí tuyển dụng: developer java, developer javascript</p>
                        <button type="button" class="btn btn-sm btn-primary" data-toggle="modal"
                            data-target="#showJobModal">
                            Chi tiết
                        </button>

                        <button type="button" class="btn btn-sm btn-secondary" data-toggle="modal"
                            data-target="#editJobModal">
                            Chỉnh sửa
                        </button>
                    </div>

                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <div class="delete-card">
                            <i class="far fa-trash-alt"></i>
                        </div>
                        <h5>Packaging assistant manager nhà máy Nhật mới thành lập</h5>
                        <p class="lead" style="font-size: 20px;">Công ty: ABC Company<br>Lương: 10 - 15
                            triệu<br>Vị trí tuyển dụng: developer java, developer javascript</p>
                        <a class="btn btn-primary btn-sm" href="#" role="button">Chi tiết</a>
                    </div>

                </div>
            </div>
            <div class="w-100"></div>
            <div class="col" style="margin-bottom: 30px;">
                <div class="card">
                    <div class="card-body">
                        <div class="delete-card">
                            <i class="far fa-trash-alt"></i>
                        </div>
                        <h5>Packaging assistant manager nhà máy Nhật mới thành lập</h5>
                        <p class="lead" style="font-size: 20px;">Công ty: ABC Company<br>Lương: 10 - 15
                            triệu<br>Vị trí tuyển dụng: developer java, developer javascript</p>
                        <a class="btn btn-primary btn-sm" href="#" role="button">Chi tiết</a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <div class="delete-card">
                            <i class="far fa-trash-alt"></i>
                        </div>
                        <h5>Packaging assistant manager nhà máy Nhật mới thành lập</h5>
                        <p class="lead" style="font-size: 20px;">Công ty: ABC Company<br>Lương: 10 - 15
                            triệu<br>Vị trí tuyển dụng: developer java, developer javascript</p>
                        <a class="btn btn-primary btn-sm" href="#" role="button">Chi tiết</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="showJobModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header show-job-header">
                        <h5 class="modal-title" id="exampleModalLabel">Kiến trúc sư hệ thống</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body show-job-body">
                        <h6>Chức vụ</h6>
                        <p>Senior</p>
                        <h6>Thành phố</h6>
                        <p>Hà Nội</p>
                        <h6>Loại công việc</h6>
                        <p>Full time</p>
                        <h6>Mô tả</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, unde quaerat eaque
                            enim voluptas saepe vitae numquam accusamus aperiam laudantium repudiandae
                            explicabo dolorum obcaecati tempore! Harum nihil porro rerum expedita!
                        </p>
                        <h6>Yêu cầu kĩ năng</h6>
                        <p><span>Python</span><span>Networking</span></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="editJobModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header show-job-header">
                        <h5 class="modal-title" id="exampleModalLabel">Kiến trúc sư hệ thống</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body show-job-body">
                        <h6>Chức vụ</h6>
                        <input class="form-control form-control-sm" type="text"
                            placeholder=".form-control-sm">
                        <h6>Thành phố</h6>
                        <input class="form-control form-control-sm" type="text"
                            placeholder=".form-control-sm">
                        <h6>Loại công việc</h6>
                        <input class="form-control form-control-sm" type="text"
                            placeholder=".form-control-sm">
                        <h6>Mô tả</h6>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <h6>Yêu cầu kĩ năng</h6>
                        <input class="form-control form-control-sm" type="text"
                            placeholder=".form-control-sm">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`