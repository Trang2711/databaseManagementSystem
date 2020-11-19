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
    <label for="usernameInput">Username</label>
    <input type="text" class="form-control" id="usernameInput" aria-describedby="usernameHelp">
    <small id="usernameHelp" class="form-text"></small>
</div>
<div class="form-group">
    <label for="passwordInput">Password</label>
    <input type="password" class="form-control" id="passwordInput" aria-describedby="passwordHelp">
    <small id="passwordHelp" class="form-text"></small>
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
  <label for="usernameInput">Username</label>
  <input type="text" class="form-control" id="usernameInput" aria-describedby="usernameHelp">
  <small id="usernameHelp" class="form-text"></small>
</div>
<div class="form-group">
  <label for="emailInput">Email address</label>
  <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp">
  <small id="emailHelp" class="form-text"></small>
</div>
<div class="form-group">
  <label for="phoneNumberInput">Số điện thoại</label>
  <input type="text" class="form-control" id="phoneNumberInput" aria-describedby="phoneNumberHelp">
  <small id="phoneNumberHelp" class="form-text"></small>
</div>
<div class="form-group">
  <label for="passwordInput">Password</label>
  <input type="password" class="form-control" id="passwordInput">
  <small id="passwordHelp" class="form-text"></small>
</div>
<div class="form-group">
  <label for="re-passwordInput">Nhập lại password</label>
  <input type="password" class="form-control" id="re-passwordInput">
  <small id="re-passwordHelp" class="form-text"></small>
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
    <label for="usernameInput">Username</label>
    <input type="text" class="form-control" id="usernameInput" aria-describedby="usernameHelp">
    <small id="usernameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
    <label for="emailInput">Email address</label>
    <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
    <label for="phoneNumberInput">Số điện thoại</label>
    <input type="text" class="form-control" id="phoneNumberInput" aria-describedby="phoneNumberHelp">
    <small id="phoneNumberHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
    <label for="passwordInput">Password</label>
    <input type="password" class="form-control" id="passwordInput">
    <small id="passwordHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
    <label for="re-passwordInput">Nhập lại password</label>
    <input type="password" class="form-control" id="re-passwordInput">
    <small id="re-passwordHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
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
    </ul>
    <span style="width: 40%;"></span>
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
    <form class="search-form">
        <div class="form-group row">
            <label for="inputJob" class="col-form-label">Tìm kiếm</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" id="inputJob" placeholder="Kĩ năng, vị trí, công ty">
            </div>
            <label for="inputPlace" class="col-form-label">Địa điểm</label>
            <div class="col-sm-3">
                <input type="text" class="form-control" id="inputPlace" placeholder="Hà nội">
            </div>
            <button type="submit" class="btn btn-primary">Tìm kiếm</button>
        </div>
        <div class="form-group row">
            <select class="form-control form-control-sm" id="datePost" style="width: 140px">
                <option selected>Ngày đăng</option>
                <option value="1">24 giờ qua</option>
                <option value="2">3 ngày qua</option>
                <option value="3">7 ngày qua</option>
                <option value="3">14 ngày qua</option>
            </select>

            <select class="form-control form-control-sm" id="jobType" style="width: 150px">
                <option selected>Loại việc làm</option>
                <option value="2">Hợp đồng</option>
                <option value="3">Thực tập</option>
                <option value="3">Bán thời gian</option>
            </select>

            <select class="form-control form-control-sm" id="company" style="width: 140px">
                <option selected>Công ty</option>
            </select>

            <div>
                <input type="text" class="form-control form-control-sm" id="inputPlace" placeholder="Ngôn ngữ"
                    style="width: 120px">
            </div>

            <div class="input-group input-group-sm mb-3" style="width: 260px;">
                <label class="col-form-label col-form-label-sm" for="salaryMin" style="margin-right: 10px;">Mức
                    lương từ</label>
                <input id="salaryMin" type="number" class="form-control" placeholder="10"
                    style="margin: 0px; border-radius: 4px 0px 0px 4px">
                <div class="input-group-append">
                    <span class="input-group-text">triệu</span>
                </div>
            </div>

            <div class="input-group input-group-sm mb-3" style="width: 190px;">
                <label class="col-form-label col-form-label-sm" for="salaryMin"
                    style="margin-right: 10px;">Đến</label>
                <input id="salaryMax" type="number" class="form-control" placeholder="20"
                    style="margin: 0px; border-radius: 4px 0px 0px 4px">
                <div class="input-group-append">
                    <span class="input-group-text">triệu</span>
                </div>
            </div>
        </div>
    </form>

    <div class="search-popular">
        <h2>Tìm kiếm phổ biến</h2>
        <span><i class="fas fa-search"></i>Hà Nội</span>
        <span><i class="fas fa-search"></i>Thành phố Hồ Chí Minh</span>
    </div>

    <div class="result-search d-flex flex-wrap">
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
        <h4 class="fullname">Nguyễn Văn Anh</h4>
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
                    <td class="fullname">Nguyễn Văn A</td>
                </tr>
                <tr>
                    <td>Ngày sinh:</td>
                    <td id="dayOfBirth">1/2/1998</td>
                </tr>
                <tr>
                    <td>Số điện thoại:</td>
                    <td id="phoneNumber">09898754678</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="row py-3 px-lg-5 info-box">
        <h4>Học tập</h4>
        <table id="educationTable" class="table table-sm">
            <tbody>
            </tbody>
        </table>
    </div>
</div>
<div class="col-5 py-3 px-lg-5 info-box">
    <h4>Kinh nghiệm</h4>
    <ul id="experienceList" class="list-group list-group-flush">
    </ul>
</div>
</div>
<div class="row">
<div class="col-6">
</div>
<div class="col-5 py-3 px-lg-5 info-box">
    <h4>Kĩ năng</h4>
    <div id="skillList" class="d-flex flex-wrap">
    </div>
</div>
</div>`

view.infoPersonalEdit =
    `<div class="row">
<div class="col">
    <div class=" info-box" style="text-align: center; padding: 30px 0px;">
        <div class="avatar"></div> <br>
        <h4 class="fullname">Nguyễn Văn Anh</h4>
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
                    <td class="fullname"></td>
                </tr>
                <tr>
                    <td id="dayOfBirth">Ngày sinh:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Số điện thoại:</td>
                    <td id="phoneNumber"></td>
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
        <table id="educationTable" class="table table-sm">
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
    <ul id="experienceList" class="list-group list-group-flush">
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
    <div id="skillList" class="d-flex flex-wrap">
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
<form class="search-form">
    <div class="form-group row">
        <label for="inputJob" class="col-form-label">Tìm kiếm</label>
        <div class="col-sm-4">
            <input type="text" class="form-control" id="inputJob" placeholder="Kĩ năng, vị trí, công ty">
        </div>
        <label for="inputPlace" class="col-form-label">Địa điểm</label>
        <div class="col-sm-3">
            <input type="text" class="form-control" id="inputPlace" placeholder="Hà nội">
        </div>
        <button type="submit" class="btn btn-primary">Tìm kiếm</button>
    </div>
    <div class="form-group row">
        <select class="form-control form-control-sm" id="datePost" style="width: 140px">
            <option selected>Ngày đăng</option>
            <option value="1">24 giờ qua</option>
            <option value="2">3 ngày qua</option>
            <option value="3">7 ngày qua</option>
            <option value="3">14 ngày qua</option>
        </select>

        <select class="form-control form-control-sm" id="jobType" style="width: 150px">
            <option selected>Loại việc làm</option>
            <option value="2">Hợp đồng</option>
            <option value="3">Thực tập</option>
            <option value="3">Bán thời gian</option>
        </select>

        <select class="form-control form-control-sm" id="company" style="width: 140px">
            <option selected>Công ty</option>
        </select>

        <div>
            <input type="text" class="form-control form-control-sm" id="inputPlace" placeholder="Ngôn ngữ"
                style="width: 120px">
        </div>

        <div class="input-group input-group-sm mb-3" style="width: 260px;">
            <label class="col-form-label col-form-label-sm" for="salaryMin" style="margin-right: 10px;">Mức
                lương từ</label>
            <input id="salaryMin" type="number" class="form-control" placeholder="10"
                style="margin: 0px; border-radius: 4px 0px 0px 4px">
            <div class="input-group-append">
                <span class="input-group-text">triệu</span>
            </div>
        </div>

        <div class="input-group input-group-sm mb-3" style="width: 190px;">
            <label class="col-form-label col-form-label-sm" for="salaryMin"
                style="margin-right: 10px;">Đến</label>
            <input id="salaryMax" type="number" class="form-control" placeholder="20"
                style="margin: 0px; border-radius: 4px 0px 0px 4px">
            <div class="input-group-append">
                <span class="input-group-text">triệu</span>
            </div>
        </div>
    </div>
</form>

<div class="search-popular">
    <h2>Tìm kiếm phổ biến</h2>
    <span><i class="fas fa-search"></i>Hà Nội</span>
    <span><i class="fas fa-search"></i>Thành phố Hồ Chí Minh</span>
</div>

<div class="result-search d-flex flex-wrap">
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
    <h5 id="companyName"></h5>
    <div class="info-group">
        Website:
        <a id="companyWebsite" href="https://www.fpt-software.com/" target="_blank"></a>
    </div>
    <div>
        <div class="info-group">
            <i class="far fa-envelope"></i>
            <span id="companyEmail"></span>
        </div>
        <div class="info-group">
            <i class="fas fa-phone"></i>
            <span id="companyPhone"></span>
        </div>
    </div>
</header>
<div class="description">
    <h5>About us</h5>
    <p id="companyDescription">
    </p>
</div>
<div class="list-job">
    <div class="">
        <h5 style="padding-left: 5px; margin-bottom: 20px; display: inline-block;">Công việc đã đăng</h5>
        <div type="button" class="add-job" data-toggle="modal"
            data-target="#addJobModal">
            <i class="fas fa-plus-circle"></i>
        </div>

        <div id="listJob" class="row">
        </div>

        <!-- Modal -->
        <div class="modal fade" id="showJobModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header show-job-header">
                        <h5 class="modal-title" id="modalTitle"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body show-job-body">
                        <h6>Chức vụ</h6>
                        <p id="senioriryLevel"></p>
                        <h6>Thành phố</h6>
                        <p id="city"></p>
                        <h6>Loại công việc</h6>
                        <p id="jobType"></p>
                        <h6>Mô tả</h6>
                        <p id="desciptionJob">
                        </p>
                        <h6>Yêu cầu kĩ năng</h6>
                        <p id="skillList"></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="addJobModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header show-job-header">
                        <h5 class="modal-title" id="exampleModalLabel">Thêm mới công việc</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form id="createJob">
                    <div class="modal-body show-job-body">
                        <h6>Tiêu đề</h6>
                        <input name="title" class="form-control form-control-sm" type="text"
                            placeholder="Nhập tiêu đề bài viết">
                        <h6>Chức vụ</h6>
                        <input name="senioriryLevel" class="form-control form-control-sm" type="text"
                            placeholder="Developer, fresher">
                        <h6>Thành phố</h6>
                        <input class="form-control form-control-sm" type="text" name="city"
                            placeholder="Hà Nội">
                        <h6>Loại công việc</h6>
                        <input name="jobType" class="form-control form-control-sm" type="text"
                            placeholder="Fulltime">
                        <h6>Mô tả</h6>
                        <textarea class="form-control" name="decription" rows="3"></textarea>
                        <h6>Yêu cầu kĩ năng</h6>
                        <input name="skill" class="form-control form-control-sm" type="text"
                            placeholder=".form-control-sm">
                        <p id="notify"> </p>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-sm btn-primary">Save changes</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`